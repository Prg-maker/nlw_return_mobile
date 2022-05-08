import { View , Image , Text , TouchableOpacity } from "react-native";



import successImage from '../../assets/success.png'
import { CopyRight } from "../CopyRight";

import {
  styles
} from './styles'

interface Props{
  onSendAnotherFeedback: ()=> void;
}

export function Success({onSendAnotherFeedback}:Props){
  return(
    <View style={styles.container}>
      <Image
        source={successImage}
        style={styles.image}
      />

      <Text style={styles.title}>Agradecemos o feedback</Text>

        
      <TouchableOpacity 
        onPress={onSendAnotherFeedback}  
        style={styles.button}
      >
        
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>

      </TouchableOpacity>

      <CopyRight/>

    </View>
  )
}