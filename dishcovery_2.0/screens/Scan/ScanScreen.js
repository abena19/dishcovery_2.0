import React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import ProgressBar from 'react-native-animated-progress';
import CloseButton from '../../assets/styles/CloseButton.style';
import styles from '../../assets/styles/ScanFlow.style'
import bittermelonSquare from '../../assets/images/scanpage/bittermelon-square.jpg';
import cardamomSquare from '../../assets/images/scanpage/cardamom-square.png';
import lemongrassSquare from '../../assets/images/scanpage/lemongrass-square.png';
import commonStyles from '../../assets/styles/CommonStyles.styles';
const Clarifai = require('clarifai');
import ingredientContext from '../../assets/ingredientContext';
import { SafeAreaView } from 'react-native-safe-area-context';
const ingredientContexttest = ingredientContext
const clarifai = new Clarifai.App({
  // apiKey: "0b4d4f4f0a604f5da3889f2139e48efc",
  apiKey: "d93652649bfe45c486abb48b88e930d5",
});
process.nextTick = setImmediate;


export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    predictions: [],
    scanPressed: false,
    ingredientRecognized: false,
    ingredientNotRecognized: false,
    scanComplete: false,
    filteredPredictions: [],
    ingredientName: '',
    imageName: bittermelonSquare,
  };

  capitalizeFirstLetters(str){
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
  }
  
  async componentDidMount() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  capturePhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      return photo.uri;
    }
  };
  
  resize = async photo => {
    let manipulatedImage = await ImageManipulator.manipulateAsync(
      photo,
      [{ resize: { height: 300, width: 300 } }],
      { base64: true }
    );
    return manipulatedImage.base64;
  };

  predict = async image => {
    let predictions = await clarifai.models.predict(
      Clarifai.FOOD_MODEL,
      image
    );
    return predictions;
  };


  objectDetection = async () => {
    let photo = await this.capturePhoto();
    let resized = await this.resize(photo);
    let predictionsInitial = await this.predict(resized);
    let wanttokeep = Object.keys(ingredientContexttest);
    let predictions = predictionsInitial.outputs[0].data.concepts;
    let filteredPredictionsMap =  Object.values(Object.fromEntries(Object.entries(predictions).filter(([k, pred]) => wanttokeep.some(culturalIngred => culturalIngred == pred.name))));
    let filteredPredictions = filteredPredictionsMap.map(filteredPredictionsMap => ({
      key: `${filteredPredictionsMap.name} Accuracy: ${filteredPredictionsMap.value}`,
    }));
    predictions ? console.log(filteredPredictions.length.toString()) : console.log("no");
    this.setState({ predictions: predictionsInitial.outputs[0].data.concepts });
    this.setState({ scanComplete: true });
    this.setState({ ingredientRecognized: filteredPredictions.length > 0});
    this.setState({ ingredientNotRecognized: filteredPredictions.length <= 0});
    console.log(this.state.ingredientRecognized, this.state.ingredientNotRecognized)
    this.state.ingredientRecognized ? console.log(filteredPredictions[0]['key'].split(" Accuracy").shift()): null
    this.setState({ingredientName: (this.state.ingredientRecognized ? filteredPredictions[0]['key'].split(" Accuracy").shift() : '')})
    this.setState({ filteredPredictions: filteredPredictions });
    if (this.state.ingredientRecognized) {
      switch(this.state.ingredientName) {
        case 'bittermelon':
          this.setState({imageName: bittermelonSquare})
          break;
        case 'cardamom':
          this.setState({imageName: cardamomSquare})
          break;
        case 'lemongrass':
          this.setState({imageName: lemongrassSquare})
      }
    } 
  };
  renderProgress = async () => {
    return (
      <View>
        {/* <Text>Searching for item</Text> */}
        <ProgressBar progress={100} height={10} backgroundColor="orange" /> 
      </View>
    );
  }


  render() {
    const { hasCameraPermission, predictions, filteredPredictions } = this.state;
    let wanttokeep = Object.keys(ingredientContexttest)
    var imageName = this.state.imageName
    
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <View style={{ flex: 1 }}>
            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{ flex: 1 }}
              type={this.state.type}
            >
              <View style={commonStyles.outerView}>
                {CloseButton({onPress: (() => this.props.navigation.goBack()), color: 'gray'})}
                <View style={styles.messageContainer}>
                  {this.state.scanPressed ? 
                        <View style={styles.progressBarContainer}>
                          {(this.state.ingredientRecognized || this.state.ingredientNotRecognized) ? (this.state.ingredientRecognized ? <Text style = {styles.messageText}>Scan successful.</Text> : <Text style = {styles.messageText}>Scan failed!</Text>) : <Text style = {styles.messageText}>Searching for item</Text>}
                          <ProgressBar progress={this.state.scanComplete ? 100: 40} height={10} 
                          backgroundColor={(this.state.ingredientNotRecognized || this.state.ingredientRecognized) ? (this.state.ingredientRecognized ? "green" : "firebrick") : "white"} />
                        </View> 
                  : <Text style = {styles.messageText}>Place item within the frame and scan </Text>}
                </View>
                {this.state.scanComplete ? 
                null:<Image source={require('../../assets/images/scanpage/scan.gif')} style = { styles.scanningGif}></Image>
                }
                {this.state.ingredientNotRecognized ? 
                <Image source={require('../../assets/images/scanpage/scan_red.png')} style = { styles.scanningImage}></Image>:null
                }
                {this.state.ingredientRecognized ? 
                <Image source={require('../../assets/images/scanpage/scan_green.png')} style = { styles.scanningImage}></Image>:null
                }

                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                >
                  {this.state.scanPressed ? 
                    null :
                    <TouchableOpacity
                      style={styles.buttonContainer} activeOpacity = { .5 }
                      onPress={() => {this.setState({scanPressed: true}); this.objectDetection()}}
                    >
                      <Text style={styles.ButtonTextStyle}>Scan Ingredient</Text>
                    </TouchableOpacity> 
                  }
                  {this.state.ingredientRecognized ?
                    <TouchableOpacity
                    style={styles.recognizedButtonContainer} activeOpacity = { .5 }
                      onPress={() => {this.props.navigation.navigate("Additional Context", {itemKey: filteredPredictions[0].key})}}
                    >
                      <View  style={styles.squareImageViewStyle}><Image source={imageName} style={styles.squareImageStyle}></Image></View>
                      <Text style={styles.recognizedButtonTextStyle}>Ingredient Recognized: {this.capitalizeFirstLetters(this.state.ingredientName.toLowerCase())} ›</Text>
                    </TouchableOpacity> : null
                  }
                  {this.state.ingredientNotRecognized ?
                    <TouchableOpacity
                    style={styles.buttonContainer}
                      onPress={() => {  
                        this.setState({
                        predictions: [],
                        scanPressed: true,
                        ingredientRecognized: false,
                        ingredientNotRecognized: false,
                        scanComplete: false,
                        filteredPredictions: [],
                        
                      }); this.objectDetection()}}//this.props.navigation.navigate("Scan Screen")}}
                    >
                      <Text style={styles.ButtonTextStyle} activeOpacity = { .5 }>Unrecognized Item: Please Re-scan ↺</Text>
                    </TouchableOpacity> : null
                  }
                </View>
              </View>
            </Camera>
          </View>
      );
    }
  }
}