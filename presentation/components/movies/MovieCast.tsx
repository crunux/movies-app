import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Cast } from '@/infrastructure/interfaces/movie-cast.interface';
import ActorCard from './ActorCard';

interface MovieCastProps {
  title?: string;
  cast: Cast[];
}

const MovieCast = ({title, cast}: MovieCastProps) => {

  return (
    <View className="pb-10 my-3">
      {title && (
        <Text className="text-xl font-bold px-5 mb-2">{title}</Text>
      )}

      <FlatList
        data={cast}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <ActorCard actor={item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MovieCast