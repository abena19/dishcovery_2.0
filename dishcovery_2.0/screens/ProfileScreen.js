import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image
} from 'react-native';
import styles from '../assets/styles/Profile.style';
import textStyles from '../assets/styles/TextStyles.style';
import commonStyles from '../assets/styles/CommonStyles.styles';
import { icons, COLORS, SIZES } from "../constants"
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
    logout = async () => {
        try {
            await signOut(auth);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect() {
        this.props.navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={commonStyles.backbuttoncircle} onPress={() => this.props.navigation.goBack()}>
                    <Image source={icons.back} style={commonStyles.backbuttonarrow} />
                </TouchableOpacity>
            ),

        })
    }

    render() {
        this.useEffect();
        return (
            <SafeAreaView style={commonStyles.whiteBackground}>
                <View style={commonStyles.outerView}>
                    <View style={styles.mainView}>
                        <Text style={textStyles.subheading}>Allergies and Sensitivities</Text>
                        <View style={{ height: '3%' }}></View>
                        <Text style={textStyles.body}>Unless you remove these preferences, recipes using these ingredients will not be shown to you.</Text>
                        <View style={{ height: '3%' }}></View>
                        <View style={styles.filterGroupContainer}>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Gluten ✓</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Peanuts ✓</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Tree Nuts ✓</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Spinach ✓</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Honey ✓</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Banana ✓</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: '2%' }}></View>
                        <View style={styles.addMoreView}><Text style={textStyles.linkText}>Add More ›</Text></View>
                        <View style={{ height: '7%' }}></View>
                        <Text style={textStyles.subheading}>Dietary Preferences</Text>
                        <View style={styles.filterGroupContainer}>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Kosher ✓</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Halal ✓</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                                <Text style={styles.ButtonTextStyle}>Vegan ✓</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.addMoreView}><Text style={textStyles.linkText}>Add More ›</Text></View>
                    </View>
                </View>
                <TouchableOpacity style={styles.filterContainer} activeOpacity={0.5}>
                    <Text style={styles.ButtonTextStyle}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}