export interface ILoginFetcherResponse {
  user: {
    id: string;
    email: string;
    image_url: string | null;
  };
  authData: {
    client: string;
    accessToken: string;
    uid: string;
  };
}

export const loginFetcher = async (
  url: string,
  { arg }: { arg: any }
): Promise<ILoginFetcherResponse> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const response = await res.json();

    // Common Error Response
    if (
      Array.isArray(response.errors) &&
      typeof response.errors[0] === "string"
    )
      throw new Error(response.errors);
    else throw new Error("Unknown error");
  }

  const responseJson = await res.json();

  return {
    user: responseJson.user,
    authData: {
      accessToken: res.headers.get("Access-Token")!,
      client: res.headers.get("Client")!,
      uid: res.headers.get("Uid")!,
    },
  };
};
