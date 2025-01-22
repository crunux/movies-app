import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb-response";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export class MovieMapper {
  static mapMovie(movie: Result): Movie {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: new Date(movie.release_date),
      backdrop: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
      description: movie.overview,
      rating: movie.vote_average,
      poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
    };
  }

  static fromTheMovieDBToCompleteMovie = (movie: MovieDBMovieResponse): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: new Date(movie.release_date),
      backdrop: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
      description: movie.overview,
      rating: movie.vote_average,
      poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
      genres: movie.genres.map(g => g.name),
      budget: movie.budget,
      originalTitle: movie.original_title,
      duration: movie.runtime,
      productionComplete: movie.production_companies.map(c => c.name)
    }
  }
}