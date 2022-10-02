import movies from "../data/movies.json";

export const FetchData = (path) => {
  const data = new Promise((resolve, reject) => {
    if (path) {
      setTimeout(() => {
        resolve(movies);
      }, "500");
    }
  });

  return data;
};
