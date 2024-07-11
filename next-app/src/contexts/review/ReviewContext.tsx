"use client";

import React, {
  createContext,
  useReducer,
  ReactNode,
  Dispatch,
  useContext,
  useEffect,
} from "react";

import { IReview } from "@/typings/review";

interface IState {
  reviews: IReview[];
}

interface IAddReviewAction {
  type: "ADD_REVIEW";
  payload: IReview;
}
interface IAddReviewArrayAction {
  type: "ADD_REVIEW_ARRAY";
  payload: IReview[];
}
interface IDeleteReviewAction {
  type: "DELETE_REVIEW";
  payload: IReview;
}
type Action = IAddReviewAction | IDeleteReviewAction | IAddReviewArrayAction;

// Initial state
const initialState: IState = {
  reviews: [],
};

// Create contexts
export const StateContext = createContext<IState>(initialState);
export const DispatchContext = createContext<Dispatch<Action>>(() => undefined);

// Reducer
const reviewReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "ADD_REVIEW":
      return { ...state, reviews: [...state.reviews, action.payload] };
    case "ADD_REVIEW_ARRAY":
      return { ...state, reviews: [...state.reviews, ...action.payload] };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((review) => review !== action.payload),
      };
    default:
      return state;
  }
};

// Provider component
export const ReviewProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reviewReducer, initialState);

  // Load reviews array from local storage
  useEffect(() => {
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews) {
      dispatch({ type: "ADD_REVIEW_ARRAY", payload: JSON.parse(savedReviews) });
    }
  }, []);

  // Sync state with local storage
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(state.reviews));
  }, [state.reviews]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

// Custom hooks to use the contexts
export const useReviewState = (): IState => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useReviewState must be used within a ReviewProvider");
  }
  return context;
};

export const useReviewDispatch = (): Dispatch<Action> => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useReviewDispatch must be used within a ReviewProvider");
  }
  return context;
};

// Action creators
export const addReview = (review: IReview): IAddReviewAction => ({
  type: "ADD_REVIEW",
  payload: review,
});

export const addReviewArray = (reviews: IReview[]): IAddReviewArrayAction => ({
  type: "ADD_REVIEW_ARRAY",
  payload: reviews,
});

export const deleteReview = (review: IReview): IDeleteReviewAction => ({
  type: "DELETE_REVIEW",
  payload: review,
});

// Helper functions
export const getAverageRating = (state: IState): number => {
  const totalReviews = state.reviews.length;
  if (totalReviews === 0) return 0;
  const sumOfRatings = state.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  return sumOfRatings / totalReviews;
};
