// 내 서버와 다른 url을 통합하고 싶을 때
// 이미 REST API로 구축되어 있을 경우 Wrapping하는 법
import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};