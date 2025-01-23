import { View, useWindowDimensions } from "react-native";
import { useRef } from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface MainSlideShowProps {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: MainSlideShowProps) => {
  const ref = useRef<ICarouselInstance>(null);
  const { width } = useWindowDimensions();
  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        width={200}
        height={350}
        style={{
          width,
          height: 375,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};

export default MainSlideShow;
