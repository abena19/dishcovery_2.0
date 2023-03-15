import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    SafeAreaView
} from 'react-native';
import ingredientContext from '../assets/ingredientContext';
import {ExpandableListView} from 'react-native-expandable-listview';
import styles from '../assets/styles/ContextFlow.style';
import bittermelon from '../assets/images/bittermelon.jpg';
import cardamom from '../assets/images/cardamom.png';
import lemongrass from '../assets/images/lemongrass.png';
import bittermelon_origins from "../assets/images/bittermelon_origins.png";
import lemongrass_origins from "../assets/images/lemongrass_origins.png";
import cardamom_origins from "../assets/images/cardamom_origins.png";
import commonStyles from '../assets/styles/CommonStyles.styles';
import textStyles from '../assets/styles/TextStyles.style';
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants";

const ingredientContexttest = ingredientContext

export default class App extends React.Component {
  useEffect(capItemName) {
    this.props.navigation.setOptions({
        headerLeft: () => (
                <TouchableOpacity style={commonStyles.backbuttoncircle} onPress={() => this.props.navigation.goBack()}>
                <Image source={icons.back} style={commonStyles.backbuttonarrow}/>
                </TouchableOpacity>
            ),
        headerTitle: capItemName,
        headerTitleStyle: textStyles.subheading,
        headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        }
    })
  }
  
  
  handleItemClick({index}) {
    console.log(index);
  };

  handleInnerItemClick({innerIndex, item, itemIndex}) {
    console.log(innerIndex);
  };
  
  capitalizeFirstLetters(str){
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
  }

  render() {
    const { itemKey } = this.props.route.params;
    const itemKeySplit = itemKey.split(" Accuracy");     // ['bitter melon, ' Accuracy 0.99...'] This is not a good way to do it because it requires Accuracy be in that string but i was confused how to send filteredPredictions to params and so i sent item.key instead
    const itemName = itemKeySplit.shift(); 
    const capItemName = this.capitalizeFirstLetters(itemName);
    this.useEffect(capItemName)
    //const itemName = "cardamom"
    switch(ingredientContexttest[itemName]["image"]) {
      case 'bittermelon':
        var imageName = bittermelon
        break;
      case 'cardamom':
        var imageName = cardamom
        break;
      case 'lemongrass':
        var imageName = lemongrass
    }
    switch(ingredientContexttest[itemName]["image"]) {
      case 'bittermelon':
        var origins_pic = bittermelon_origins
        break;
      case 'cardamom':
        var origins_pic = cardamom_origins
        break;
      case 'lemongrass':
        var origins_pic = lemongrass_origins
    }
    const CONTENT = [
      {
        id: '97',
        categoryName: 'Flavor/Texture Profile',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                {/* <View style={styles.expandImageBox}>
                  <Image source={imageName} style={styles.expandImage}></Image>
                </View> */}
                <View style={styles.textContainerStyle}>
                  <Text style={styles.TextStyle}>{ingredientContexttest[itemName]["flavor profile/texture"]}</Text>
                </View>
              </View> 
            ),
          },
        ],
      },
      {
        id: '96',
        categoryName: 'Alternate Names',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                {/* <View style={styles.expandImageBox}>
                  <Image source={innerImageName} style={styles.expandImage}></Image>
                </View> */}
                <View style={styles.textContainerStyle}>
                  {Object.entries(ingredientContexttest[itemName]["new alternate names"]).map(([key, value]) => (
                      <Text style={{fontSize: 15, lineHeight: 25}}>
                      <Text style={{fontWeight: 'bold', color: COLORS.dishcoveryOrange}}>{key}: </Text>
                      <Text style={{fontWeight: 'normal'}}>{value}</Text>
                      </Text>
                  ))}
                </View>
              </View> 
            ),
          },
        ],
      },
      {
        id: '95',
        categoryName: 'Cultural Context',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                <View style={styles.textContainerStyle}>
                  {Object.entries(ingredientContexttest[itemName]["new cultural context"]).map(([key, value]) => (
                      <Text style={{fontSize: 15, lineHeight: 25}}>
                      <Text style={{fontWeight: 'bold', color: COLORS.dishcoveryOrange}}>{key}: </Text>
                      <Text style={{fontWeight: 'normal'}}>{value}</Text>
                      </Text>
                  ))}
                </View>
              </View> 
            ),
          },
        ],
      },
      {
        id: '94',
        categoryName: 'Origins and Geography',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                <View style={styles.expandImageBox}>
                  <Image source={origins_pic} style={styles.expandImage}></Image>
                </View>
                <View style={styles.textContainerStyle}>
                  <Text style={styles.TextStyle}>{ingredientContexttest[itemName]["origins and geography"]}</Text>
                </View>
              </View> 
            ),
          },
        ],
      },
      {
        id: '93',
        categoryName: 'Health Benefits',
        subCategory: [
          {
            id: '1',
            name: '',
            customInnerItem: (
              <View style={styles.innerExpandBox}>
                {/* <View style={styles.expandImageBox}>
                  <Image source={imageName} style={styles.expandImage}></Image>
                </View> */}
                <View style={styles.textContainerStyle}>
                  <Text style={styles.TextStyle}>{ingredientContexttest[itemName]["health benefits"]}</Text>
                </View>
              </View> 
            ),
          },
        ],
      },
    ];
    
    function handleItemClick({index}) {
      console.log(index);
    };
  
    function handleInnerItemClick({innerIndex, item, itemIndex}) {
      console.log(innerIndex);
    };
    
    return (
      <SafeAreaView style={commonStyles.whiteBackground}>
          <View style={commonStyles.outerView}>
            
            <View style={styles.container}>
              {/* <Text style={[textStyles.subheading, {textAlign: 'center'}]}>{capItemName}</Text> */}

              <View style={styles.imageBox}>
                <Image source={imageName} style={styles.image}></Image>
              </View>
              {/* <ExpandableListView
                data={CONTENT}
                ExpandableListViewStyles={styles.container}
                itemContainerStyle={styles.outerExpandBox}
                innerItemContainerStyle={styles.innerExpandBox}
                customChevron={require('../assets/icons/chevron.jpeg')}
              />  */}
              <TouchableOpacity style={[styles.buttonContainer, {marginTop: '10%'}]} activeOpacity = { .5 } onPress={ () => this.props.navigation.navigate("Search Results")}>
                <Text style={styles.ButtonTextStyle}> {this.capitalizeFirstLetters(`Explore ${itemName} Recipes`.toLowerCase())} </Text>
              </TouchableOpacity>
            </View>
          </View>
      </SafeAreaView>
      


    );
  }
}