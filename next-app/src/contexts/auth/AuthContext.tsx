"use client";

import { loginFetcher } from "@/fetchers/loginFetcher";
import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
  useEffect,
} from "react";
import useSWRMutation from "swr/mutation";

interface IAuthData {
  client: string;
  accessToken: string;
  uid: string;
}

interface IState {
  // Waiting to load from local storage
  isLoading: boolean;
  authData?: IAuthData | null;
}

interface ILoadAction {
  type: "LOAD";
  payload: IAuthData | null;
}
interface ILoginAction {
  type: "LOGIN";
  payload: {
    email: string;
    password: string;
  };
}
interface ILogoutAction {
  type: "LOGOUT";
}
type Action = ILoadAction | ILoginAction | ILogoutAction;

// Initial state
const initialState: IState = {
  isLoading: true,
};

// Create contexts
export const StateContext = createContext<IState>(initialState);
export const DispatchContext = createContext<Dispatch<Action>>(() => undefined);

// Reducer
const authReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "LOAD":
      return { ...state, isLoading: false, authData: action.payload };
    case "LOGOUT":
      return { ...state, authData: null };
    default:
      return state;
  }
};

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load authData from local storage
  useEffect(() => {
    const authData = localStorage.getItem("authData");
    dispatch({
      type: "LOAD",
      payload: (authData && JSON.parse(authData)) || null,
    });
  }, []);

  // Sync state with local storage
  useEffect(() => {
    if (state.authData !== undefined)
      localStorage.setItem(
        "authData",
        (state.authData && JSON.stringify(state.authData)) || ""
      );
  }, [state.authData]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

// Custom hooks to use the contexts
export const useAuthState = (): IState => {
  const state = useContext(StateContext);
  if (state === undefined) {
    throw new Error("useReviewState must be used within a AuthProvider");
  }
  return state;
};
export const useAuthDispatch = (): Dispatch<Action> => {
  const dispatch = useContext(DispatchContext);
  if (dispatch === undefined) {
    throw new Error("useReviewDispatch must be used within a AuthProvider");
  }
  return dispatch;
};
export const useAuthLogin = () => {
  const { trigger, ...restMutation } = useSWRMutation(
    swrKeys.usersSignIn,
    loginFetcher
  );

  const dispatch = useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("useAuthLogin must be used within a AuthProvider");
  }

  const authLogin = async (email: string, password: string) => {
    const result = await trigger({
      email,
      password,
    });

    dispatch({
      type: "LOAD",
      payload: result.authData,
    });
  };

  return {
    authLogin,
    ...restMutation,
  };
};

// Action creators
export const authLogout = (): ILogoutAction => ({
  type: "LOGOUT",
});

// Helpers
export const isLoggedIn = (state: IState): boolean | null => {
  if (state.isLoading) return null;

  if (state.authData === null) return false;

  return true;
};
