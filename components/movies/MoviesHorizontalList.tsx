import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, FlatList } from "react-native";
import MoviePoster from "./MoviePoster";

interface MoviesHorizontalListProps {
  movies: Movie[];
  title?: string;
  className?: string;
}

const MoviesHorizontalList = ({
  movies,
  title,
  className,
}: MoviesHorizontalListProps) => {
  return (
    <View className={`${className}`}>
      {title && (
        <Text className="text-2xl font-bold px-4 mb-1">{title}</Text>
      )}

      <FlatList
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesHorizontalList;
