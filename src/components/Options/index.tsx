import { View , Text } from 'react-native'
import { CopyRight } from '../CopyRight'
import { Option } from '../Option'
import {feedbackTypes} from '../../utils/feedbackTypes'
import {
  styles
}from './styles'

import {FeedbackType} from '../Widget'

interface Props{
  onFeedbackTypeChange:(feedbackType:FeedbackType) => void
}

export function Options({onFeedbackTypeChange}:Props){



  return(
    <View style={styles.container}>

      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>

        {
          Object.entries(feedbackTypes).map(([key , value])=> (
            <Option
              onPress={() => onFeedbackTypeChange(key as FeedbackType )}
              key={key}
              title={value.title}
              image={value.image}
            />
          ))
        }
      
      </View>

      <CopyRight/>

    </View>
  )
}