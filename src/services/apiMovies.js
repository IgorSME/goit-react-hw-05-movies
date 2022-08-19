import axios from 'axios';

const KEY = '17946609e7955dc7eecc361e64330c4b';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function apiMovieTrennding() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&page=${1}`;
  const response = await axios.get(url);
  //   console.log('trand', response);
  return response;
}

export async function apiMovieSearch(movie) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${movie}&page=${1}&include_adult=false`;
  const response = await axios.get(url);
  //   console.log(response);
  return response;
}
export async function apiMovieSearchById(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US&id=${id}&page=${1}&include_adult=false`;
  const response = await axios.get(url);
  //   console.log(response);
  return response;
}
export async function apiMovieCast(id) {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`;
  const response = await axios.get(url);
  //   console.log(response);
  return response;
}
export async function apiMovieReviews(id) {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  const response = await axios.get(url);
  // console.log(response);
  return response;
}
