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
        <Text className="text-3xl font-bold px-4 mb-2">Movie App</Text>

        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        <MoviesHorizontalList
          movies={popularMoviesgQuery.data ?? []}
          title="Populate"
          className="mb-5"
        />

        <MoviesHorizontalList
          movies={topRatedMoviesgQuery.data?.pages.flat() ?? []}
          title="Top Rated"
          className="mb-5"
          loadNextPage={topRatedMoviesgQuery.fetchNextPage}
        />

        <MoviesHorizontalList
          movies={upcomingMoviesgQuery.data ?? []}
          title="Up Coming"
          className="mb-5 "
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
