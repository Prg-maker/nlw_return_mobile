import {  TouchableOpacity} from "react-native";
import {ChatTeardropDots} from 'phosphor-react-native'
import { theme } from "../../theme";
import BottomSheet from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler'
import {styles} from './styles'
import { useRef  , useState} from "react";


import { Options } from "../Options";
import { Form } from "../Form";
import { Success } from "../Success";


import {feedbackTypes} from '../../utils/feedbackTypes'

export type FeedbackType= keyof typeof feedbackTypes

function Widget(){

  const [feedbackType , setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSend , setFeedbackSend ] = useState(false)
  const bottomSheetRef = useRef<BottomSheet>(null)



  function handleOpen(){
    bottomSheetRef.current?.expand()
  }

  function handleRestartFeedback(){

    setFeedbackType(null)


  }

  function handleRestartFeedbackSuccess(){
    setFeedbackSend(false)

  }

  function handleFeedbackSend(){
    setFeedbackSend(true)
  }


  return(
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1 , 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >

        {
          feedbackSend ? 
          <Success
            onSendAnotherFeedback={handleRestartFeedbackSuccess}
          />
          : 
          <>
            {
              feedbackType ? 
              <Form 
                feedbackType={feedbackType} 
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSend={handleFeedbackSend}
              /> 
              : 
              <Options onFeedbackTypeChange={setFeedbackType}/>
            }
          </>
        }

      </BottomSheet>
    </>

  )
}

export default  gestureHandlerRootHOC(Widget);