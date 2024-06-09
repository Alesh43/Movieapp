import axios from "axios";
import { IData } from "../interface/imovie";

export const getAllMovies = async () => {
  try {
    const res = await axios.get<IData>("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2QwY2MwNWRlNjFmOWMzZDM4YmY5NzgxNzMyZjc4OSIsInN1YiI6IjY2NjA5YTlmMDUwMjI0YzgyNGEyMjgyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kvrg7LnqwONv-KJ3xEEGz6AiC7SjxAbWjrnodfDpaMc",
      },
    });
    console.log(res);
    return res.data
  } catch (error: any) {
    console.log(error);
  }
};
