import React from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BUTTON_SIZE = 40
const BORDER_WIDTH = 0

function CloseButton(props){
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button,{backgroundColor:'white',borderColor:props.color}]}>
            <Icon name={'close'} color={props.color} size={BUTTON_SIZE/2} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:BUTTON_SIZE+BORDER_WIDTH,
        height:BUTTON_SIZE+BORDER_WIDTH,
        borderWidth:BORDER_WIDTH,
        borderRadius:BUTTON_SIZE/2,
        alignSelf: 'flex-end',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    }
})
export default CloseButton;