//  오직 api와 네트워크만 다루는 파일
import axios from "axios";

//  반복해서 URL을 사용하지 않기 위해 configue 설정
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1d25c5955966ff38cd4aef02e2e9908f",
    language: "en",
  },
});

// 작업에 필요한 오브젝트 생성
export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  videoKey: (id) => api.get(`movie/${id}/videos`),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  videoKey: (id) => api.get(`tv/${id}/videos`),
};
