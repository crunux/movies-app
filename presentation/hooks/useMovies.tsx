import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/up-coming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  const popularMoviesgQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "popular"],
    queryFn: ({pageParam}) => {
      return popularMoviesAction({ page: pageParam})
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const upcomingMoviesgQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "upcoming"],
    queryFn: ({pageParam}) => {
      return upcomingMoviesAction({ page: pageParam})
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const topRatedMoviesgQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "top-rated"],
    queryFn: ({pageParam}) => {
      return topRatedMoviesAction({ page: pageParam})
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularMoviesgQuery,
    upcomingMoviesgQuery,
    topRatedMoviesgQuery,
  };
};
