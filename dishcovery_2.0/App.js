import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen, ExploreScreen, ScanScreen, ScanIntroScreen, LikedScreen , AdditionalContextScreen,ProfileScreen, RecipeScreen, AccountCreationScreen, ContextTutorialScreen, CookingTutorialScreen, ScanTutorialScreen, WelcomeScreen, LoginScreen} from "./screens";
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS } from "./constants";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import textStyles from './assets/styles/TextStyles.style';
import commonStyles from './assets/styles/CommonStyles.styles';

import { LogBox, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {PopupProvider} from 'react-native-popup-view';
import AccountPicAndNameScreen from './screens/onboarding/AccountPicAndNameScreen';
import DietaryPreferencesScreen from './screens/onboarding/DietaryPreferencesScreen';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
        <Tab.Navigator>
           <Tab.Screen name='Explore' component={ExploreStack}/>
           <Tab.Screen name='Scan' component={ScanStack}/>
           <Tab.Screen name='Liked' component={LikedScreen}/>
           {/* <Tab.Screen name='Profile' component={ProfileScreen}/> */}
        </Tab.Navigator>
   )
}

const Stack = createStackNavigator()
const ScanStack = () => {
    return (
      <Stack.Navigator 
        screenOptions={{
          headerTitleStyle: {
            color: 'black'
          },
          headerBackTitleStyle: {
            color: '#DD6135'
          },
          headerTintColor: '#DD6135'
        }}
        initialRoutName="ScanIntroScreen">
         <Stack.Screen name="Scan Intro Screen" component={ScanIntroScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="Scan Screen" component={ScanScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="Additional Context" component={AdditionalContextScreen} />
      </Stack.Navigator>
    )
}

const ExploreStack = ({route}) => {
    return (
      // have to change initialRoutname so back button on Recipe works from liked and scan screen
      <Stack.Navigator initialRoutName="Explore" screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        headerTitleStyle: {
          color: COLORS.dishcoveryOrange,
          fontFamily:'Inter-SemiBold',
          textTransform:'uppercase',
          fontSize:13
        },
        headerBackTitle: null,
        headerBackTitleStyle: {
          color: COLORS.dishcoveryOrange,
          fontFamily:'Inter-Regular',
          fontSize:15
        },
        headerTintColor:  COLORS.dishcoveryOrange,
      }}>
      {/* <Stack.Navigator initialRoutName="Explore">   */}

         {/* <Stack.Screen name="Login or Sign Up" component={LoginScreen} options={{ headerShown: false}}/> */}
         <Stack.Screen name="Explore Screen" component={ExploreScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="Recipe Screen" component={RecipeScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="Search Results" component={SearchScreen} />
      </Stack.Navigator>
    )
}

const ExploreTabs = () =>{
  return(
    <Tab.Navigator
    backBehavior='history'
    screenOptions={({ route, navigation }) => ({
      backgroundColor: '#fff' ,
      tabBarActiveTintColor: COLORS.dishcoveryOrange,
      tabBarInactiveTintColor: "grey",
      tabBarLabelStyle: { 
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        position: 'absolute',
        bottom:-15,
        left:20,
        right:20,
      },
      tabBarStyle : {
        position: 'absolute',
        bottom:25,
        left:16,
        right:16,
        elevation:0,
        backgroundColor: 'white',
        borderRadius:15,
        height:80,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      headerTitle: () => (
        <View styles={commonStyles.headerView}>
          <Text style={textStyles.dishcoveryHeaderTitle}>Dishcovery</Text>
          <Text style={textStyles.pageHeaderTitle}>{route.name}</Text>
        </View>
      ),
      
      headerRight: () => (
        <TouchableOpacity
          style={
          {backgroundColor: COLORS.dishcoveryOrange, 
            width:32,
            height:32, 
            borderRadius: 16, 
            marginBottom: 5, 
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center'}}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Profile')}>
              <Ionicons name={'person'} size={21} color= {'white'} />
          </TouchableOpacity>
      ),

      tabBarIcon: ({ focused, color }) => {
        let iconName;
        color = focused ? COLORS.dishcoveryOrange : "grey";
        if (route.name === 'Explore') {
          //iconName = focused ? 'location' : 'location-outline';
          iconName = 'location';
        } else if (route.name === 'Scan') {
          iconName = 'scan-circle';
        } else if (route.name === 'Liked') {
          iconName = 'heart';
        } 
        return <Ionicons name={iconName} size={28} color= {color} />;
      } 
    })}>
    {/* <Tab.Screen name="Onboard Screen" component={OnboardStack}
      options={{
        tabBarButton: () => null,
        tabBarVisible:false //hide tab bar on this screen
      }} /> */}
    <Tab.Screen name="Explore" component={ExploreStack}    />
    <Tab.Screen name="Scan" component={ScanStack} />
    <Tab.Screen name="Liked" component={LikedScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} 
    options={{
    tabBarButton: () => null,
    tabBarVisible:false //hide tab bar on this screen
    }}
    />
    <Tab.Screen name="Search Results" component={SearchScreen} 
      options={{
        tabBarButton: () => null,
        tabBarVisible:false //hide tab bar on this screen
      }} />
    
  </Tab.Navigator>
 

  )
}

const OnboardStack = () => {
    return (
      <Stack.Navigator initialRoutName="Welcome"
        screenOptions={{
          headerTitleStyle: {
            color: 'black'
          },
          headerBackTitleStyle: {
            color: '#DD6135'
          },
          headerTintColor: '#DD6135',
          tabBarVisible: false,
          tabBarStyle: {
            tabBarVisible: false,
            display: 'none',
          }
          
        }}
        >
         <Stack.Screen name="Welcome Screen" component={WelcomeScreen} options={{tabBarStyle:{display: 'none'},  headerShown: false} }/>
         <Stack.Screen name="Scan Tutorial Screen" component={ScanTutorialScreen} options={{ headerShown: false, tabBarVisible:false }}/>
         <Stack.Screen name="Context Tutorial Screen" component={ContextTutorialScreen} options={{ headerShown: false, tabBarVisible:false }}/>
         <Stack.Screen name="Cooking Tutorial Screen" component={CookingTutorialScreen} options={{ headerShown: false, tabBarVisible:false }}/>
         <Stack.Screen name="Login or Sign Up" component={LoginScreen} options={{ headerShown: false, tabBarVisible:false}}/>
         <Stack.Screen name="Account Picture and Name" component={AccountPicAndNameScreen} options={{ headerShown: false, tabBarVisible:false}}/>
         <Stack.Screen name="Dietary Preferences" component={DietaryPreferencesScreen} options={{ headerShown: false, tabBarVisible:false}}/>
         <Stack.Screen name= "Explore" component={ExploreTabs} options={{ headerShown: false}}/>
      </Stack.Navigator>
    )
}


export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf')
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <PopupProvider>
    <NavigationContainer>
      
      <OnboardStack/>
      </NavigationContainer>
</PopupProvider>
  );
}
