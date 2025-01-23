import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastructure/interfaces/movie-cast.interface';
import ActorCard from './ActorCard';

interface MovieCastProps {
  title?: string;
  cast: Cast[];
}

const MovieCast = ({title, cast}: MovieCastProps) => {

  const onScroll = () =>{
    console.log(cast);
  }
  return (
    <View className="pb-10 my-2">
      {title && (
        <Text className="text-2xl font-bold px-4 mb-1">{title}</Text>
      )}

      <FlatList
        data={cast}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <ActorCard actor={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  )
}

export default MovieCast