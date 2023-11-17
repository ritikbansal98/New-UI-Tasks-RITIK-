import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../Screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../styles/colors';
import { Image } from 'react-native';
import imgPath from '../constants/imgPath';
import TabNavigations from './TabNavigations';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (    
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.Black,
            tabBarInactiveTintColor: colors.DARK_GREY,
            tabBarStyle: {
                position: 'absolute',
            }
        }}>
            <Tab.Screen name={navigationStrings.HOME} component={Screens.Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? colors.Black : colors.DARK_GREY, height: 25, width: 25 }}
                                source={imgPath.ic_Home} />
                        )
                    }
                }} />
            <Tab.Screen name={navigationStrings.TABS} component={TabNavigations}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? colors.Black : colors.DARK_GREY, height: 23, width: 25 }}
                                source={imgPath.ic_Notes} />
                        )
                    }
                }} />
            <Tab.Screen name={navigationStrings.CHATS} component={Screens.Chats}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? colors.Black : colors.DARK_GREY, height: 20, width: 20 }}
                                source={imgPath.ic_Mesg} />
                        )
                    }
                }} />

            <Tab.Screen name={navigationStrings.ACCOUNTS} component={Screens.Expertise}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? colors.Black : colors.DARK_GREY, height: 25, width: 25 }}
                                source={imgPath.ic_Profile} />
                        )
                    }
                }} />

        </Tab.Navigator>
    )
}
export default BottomTabs