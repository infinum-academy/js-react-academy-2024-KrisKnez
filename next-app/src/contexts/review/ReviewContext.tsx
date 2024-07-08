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

// Create context
export const ReviewContext = createContext<{
  state: IState;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Reducer
const reviewReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case "ADD_REVIEW_ARRAY":
      return {
        ...state,
        reviews: [...state.reviews, ...action.payload],
      };
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
interface IReviewProviderProps {
  children: ReactNode;
}

export const ReviewProvider: React.FC<IReviewProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reviewReducer, initialState);

  // Load reviews array from local storage
  useEffect(() => {
    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    dispatch({ type: "ADD_REVIEW_ARRAY", payload: reviews });
  }, []);

  // Sync state with local storage
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(state.reviews));
  }, [state.reviews]);

  return (
    <ReviewContext.Provider value={{ state, dispatch }}>
      {children}
    </ReviewContext.Provider>
  );
};

// Custom hook to use the ReviewContext
export const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error("useReviewContext must be used within a ReviewProvider");
  }
  return context;
};

// Utility Functions to Generate Payloads
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
export const getAverageRating = (state: IState) => {
  const totalReviews = state.reviews.length;
  if (totalReviews === 0) return 0;
  const sumOfRatings = state.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  return sumOfRatings / totalReviews;
};
