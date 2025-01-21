import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";


export const nowPlayingAction = async (): Promise<Movie[]> => {

  try {

    const { data } = await movieApi.get<MovieDBResponse>("/now_playing")
    
    const movies = data.results.map(MovieMapper.mapMovie)
    // console.log(JSON.stringify(movies, null, 2));

    return movies
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
}