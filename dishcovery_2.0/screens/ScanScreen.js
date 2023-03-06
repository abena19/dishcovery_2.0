import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import ProgressBar from 'react-native-animated-progress';
import CloseButton from '../../assets/styles/CloseButton.style';
import styles from '../../assets/styles/ScanFlow.style';
const Clarifai = require('clarifai');
import ingredientContext from '../../assets/ingredientContext';
import ScanDialog from '../components/ScanDialog';
const ingredientContexttest = ingredientContext
const clarifai = new Clarifai.App({
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
    filteredPredictions: []
  };
  
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
    console.log("agggghhhh");
    this.setState({ ingredientRecognized: filteredPredictions.length > 0});
    this.setState({ ingredientNotRecognized: filteredPredictions.length <= 0});
    console.log(this.state.ingredientRecognized, this.state.ingredientNotRecognized)
    this.setState({ filteredPredictions: filteredPredictions });
  };
  renderProgress = async () => {
    return 
      <View>
        <Text>Searching for item</Text>
        <ProgressBar progress={100} height={7} backgroundColor="orange" />
      </View>
  }


  render() {
    const { hasCameraPermission, predictions, filteredPredictions } = this.state;
    let wanttokeep = Object.keys(ingredientContexttest)
    
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
            <View style = {{flexDirection: 'row-reverse', alignItems: "right", flex: 1}}>
              {CloseButton({onPress: (() => this.props.navigation.navigate("Scan Intro Screen")), color: 'black'})}
            </View>
            <View>
              {this.state.scanPressed ? 
                    <View>
                      {(this.state.ingredientRecognized || this.state.ingredientNotRecognized) ? (this.state.ingredientRecognized ? <Text>Scan successful.</Text> : <Text>Scan failed!</Text>) : <Text>Searching for item</Text>}
                      <ProgressBar progress={this.state.scanComplete ? 100: 50} height={7} backgroundColor="orange" />
                    </View> 
              : null}
            </View>
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
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    height: '10%',
                  }}
                  onPress={() => {this.setState({scanPressed: true}); this.objectDetection()}}
                >
                  <Text style={{ fontSize: 30, color: 'white', padding: 15 }}>Scan</Text>
                  <ScanDialog />
                </TouchableOpacity> 
              }
              {this.state.ingredientRecognized ?
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    height: '10%',
                  }}
                  onPress={() => {this.props.navigation.navigate("Additional Context", {itemKey: filteredPredictions[0].key})}}
                >
                  <Text style={{ fontSize: 30, color: 'white', padding: 15 }}>Ingredient Recognized</Text>
                </TouchableOpacity> : null
              }
              {this.state.ingredientNotRecognized ?
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    height: '10%',
                  }}
                  onPress={() => {  
                    this.setState({
                    predictions: [],
                    scanPressed: false,
                    ingredientRecognized: false,
                    ingredientNotRecognized: false,
                    scanComplete: false,
                    filteredPredictions: []
                  }); this.props.navigation.navigate("Scan Screen")}}
                >
                  <Text style={{ fontSize: 30, color: 'white', padding: 15 }}>Ingredient Not Recognized</Text>
                </TouchableOpacity> : null
              }
            </View>
          </Camera>
        </View>
      );
    }
  }
}