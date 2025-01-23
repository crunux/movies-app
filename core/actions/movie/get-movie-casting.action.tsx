import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/movie-cast.interface";
import { CreditsResponse } from "@/infrastructure/interfaces/the-moviedb-credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";


export const getMovieCastAction = async (id: number | string): Promise<Cast[]> => {

  try {

    const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`)
    // console.log(JSON.stringify(data, null, 2));
    
    return data.cast.map(CastMapper.fromTheMovieDBToCastMovie)
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
}