import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action'
import { useMovie } from '@/presentation/hooks/useMovie'
import { ScrollView } from 'react-native'
import MovieHeader from '@/presentation/components/movies/MovieHeader'

const MovieScreen = () => {
  const { id } = useLocalSearchParams()

  const { movieQuery } = useMovie(+id)

  if(movieQuery.isLoading || !movieQuery.data){
    return (
      <View className='justify-center items-center flex-1'>
        <Text className='mb-4'>Espere por favor</Text>
        <ActivityIndicator color='purple' size={30} />
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader originalTitle={movieQuery.data.originalTitle} poster={movieQuery.data.poster} title={movieQuery.data.title}/>
    </ScrollView>
  )
}

export default MovieScreen