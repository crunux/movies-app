import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options{
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({ page = 1, limit = 10 }: Options): Promise<Movie[]> => {
  try {

    const { data } = await movieApi.get<MovieDBResponse>("/top_rated", {
      params: {
        page
      }
    })
    
    const movies = data.results.map(MovieMapper.mapMovie)
    // console.log(JSON.stringify(movies, null, 2));

    return movies
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
}