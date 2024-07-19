const baseUrl = "https://tv-shows.infinum.academy/";

export const swrKeys = {
  users: `${baseUrl}users`,
  usersSignIn: `${baseUrl}users/sign_in`,
  shows: `${baseUrl}shows`,
  showById: (id: string) => `${baseUrl}shows/${id}`,
  showsTopRated: `${baseUrl}shows/top_rated`,
  showByIdReviews: (id: string) => `${baseUrl}shows/${id}/reviews`,
  reviews: `${baseUrl}reviews`,
  reviewById: (id: string) => `${baseUrl}reviews/${id}`,
};
