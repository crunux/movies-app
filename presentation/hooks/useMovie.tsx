import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action"
import { getMovieCastAction } from "@/core/actions/movie/get-movie-casting.action"
import { useQuery } from "@tanstack/react-query"


export const useMovie = (id: number | string ) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  })

  const movieCastQuery = useQuery({
    queryKey: ["movie-cast", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60
  })

  return {
    movieQuery,
    movieCastQuery,
  }
}