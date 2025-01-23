import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action'
import { useMovie } from '@/presentation/hooks/useMovie'
import { ScrollView } from 'react-native'
import MovieHeader from '@/presentation/components/movies/MovieHeader'
import MovieDescripcion from '@/presentation/components/movies/MovieDescripcion'
import { getMovieCastAction } from '@/core/actions/movie/get-movie-casting.action'
import MovieCast from '@/presentation/components/movies/MovieCast'

const MovieScreen = () => {
  const { id } = useLocalSearchParams()

  const { movieQuery, movieCastQuery} = useMovie(+id)


  if(movieQuery.isLoading || !movieQuery.data || !movieCastQuery?.data){
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
      <MovieDescripcion movie={movieQuery.data}/>
      <MovieCast cast={movieCastQuery.data} title="Casting"/>
    </ScrollView>
  )
}

export default MovieScreen