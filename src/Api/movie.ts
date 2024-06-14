import axios from "axios";
import { IData} from "../interface/imovie";
import { appConfig } from "../config/app.config";
import { IDetails } from "../interface/iMovieDetails";

export const getAllMovies = async () => {
  try {
    const res = await axios.get<IData>(`${appConfig.API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
          
    headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${appConfig.API_TOKEN}`
      },
    });
    console.log(res);
    return res.data
  } catch (error: any) {
    console.log(error);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const res = await axios.get<IData>("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
          
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

export const getViewDetails = async (movie_id:number) => {
  try {
    const res = await axios.get<IDetails>(`${appConfig.API_URL}/movie/${movie_id}?language=en-US`, {
          
    headers: {
        accept: "application/json",
        Authorization:
        `Bearer ${appConfig.API_TOKEN}`
      },
    });
    console.log(res);
    return res.data
  } catch (error: any) {
    console.log(error);
  }
};
