import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import navigationStrings from "../constants/navigationStrings";
import * as Screens from '../Screens';
import HeaderComp from "../Components/HeaderComp";
import { View } from "react-native";
import colors from "../../styles/colors";


const Tab = createMaterialTopTabNavigator();

const TabNavigations = () => {
    return (
        <View style={{flex:1, backgroundColor:colors.White}}>
            <HeaderComp text="My Bookings" showBack={false} showNotify={true}/>
      
            <Tab.Navigator screenOptions={{headerShown:false}} tabBarOptions={{
    //   style: { backgroundColor: colors.Purple }
    }}  >
                <Tab.Screen name={navigationStrings.UPCOMING} component={Screens.Upcoming} />
                <Tab.Screen name={navigationStrings.ONGOING} component={Screens.Ongoing} />
                <Tab.Screen name={navigationStrings.PAST} component={Screens.Past} />
            </Tab.Navigator>
   
        </View>
    )
}


export default TabNavigations;