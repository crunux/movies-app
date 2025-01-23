import { View, Text } from 'react-native'
import React from 'react'
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface'
import { Formatter } from '@/config/helpers/formatter'

interface MovieDescripcionProps {
  movie: CompleteMovie
}

const MovieDescripcion = ({movie}: MovieDescripcionProps) => {
  return (
    <View className='mx-5'>
      <View className='flex flex-row'>
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(', ')}</Text>
      </View>

      <Text className='font-bold text-xl mt-5'>Signosis</Text>
      <Text className='font-normal mt-2'>{movie.description}</Text>
      <Text className='font-bold text-xl mt-5'>Budget</Text>
      <Text className='font-bold mt-2 text-2xl'>{Formatter.currency(movie.budget)}</Text>
    </View>
  )
}

export default MovieDescripcion