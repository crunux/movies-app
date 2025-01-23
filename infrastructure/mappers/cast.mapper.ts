import { Cast } from "../interfaces/movie-cast.interface";
import { MovieDBCast } from "../interfaces/the-moviedb-credits.response";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export class CastMapper {
  static fromTheMovieDBToCastMovie = (actor: MovieDBCast): Cast => {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No character',
      avatar: actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}`: 'https://i.stack.imgur.com/l60Hf.png'
    }
  }
}