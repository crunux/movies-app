import { View, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import { useMovies } from "@/presentation/hooks/useMovies";
import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const {
    nowPlayingQuery,
    popularMoviesgQuery,
    upcomingMoviesgQuery,
    topRatedMoviesgQuery,
  } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View
        className="pb-10"
        style={{ paddingTop: safeArea.top }}
      >
        <Text className="text-4xl text-center font-bold px-4 mb-1">Movie Reviewer</Text>

        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        <MoviesHorizontalList
          movies={popularMoviesgQuery.data?.pages.flat() ?? []}
          title="Populate"
          className="mb-5"
          loadNextPage={popularMoviesgQuery.fetchNextPage}
        />

        <MoviesHorizontalList
          movies={topRatedMoviesgQuery.data?.pages.flat() ?? []}
          title="Top Rated"
          className="mb-5"
          loadNextPage={topRatedMoviesgQuery.fetchNextPage}
        />

        <MoviesHorizontalList
          movies={upcomingMoviesgQuery.data?.pages.flat() ?? []}
          title="Up Coming"
          className="mb-5 "
          loadNextPage={upcomingMoviesgQuery.fetchNextPage}

        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
