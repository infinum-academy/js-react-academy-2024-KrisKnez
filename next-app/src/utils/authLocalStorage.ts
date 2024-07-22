"use client";

interface IAuthData {
  client: string;
  accessToken: string;
  uid: string;
}

const authLocalStorageKey = "auth";
export const authLocalStorage = {
  // Get auth data from local storage
  // Return null if there is no data
  // Return undefined if there is no local storage
  getAuthData: (): IAuthData | null | undefined => {
    if (typeof window === "undefined" || !window.localStorage) {
      return undefined; // Running on server or localStorage is not available
    }

    const data = localStorage.getItem(authLocalStorageKey);
    return data ? JSON.parse(data) : null;
  },

  // Set auth data to local storage
  setAuthData: (data: IAuthData | null) => {
    localStorage.setItem(authLocalStorageKey, data ? JSON.stringify(data) : "");
  },
};

// Helpers
export const getAuthHeaders = (): Record<string, string> | null => {
  const authData = authLocalStorage.getAuthData();
  if (!authData) return null;

  return {
    "Access-Token": authData.accessToken,
    Client: authData.client,
    Uid: authData.uid,
  };
};
