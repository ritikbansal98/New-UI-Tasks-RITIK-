import { Image, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import HeaderComp from '../../Components/HeaderComp'
import CustomInputs from '../../Components/CustomInputs'
import Label from '../../Components/Label/Label'
import imgPath from '../../constants/imgPath'
import strings from '../../constants/lang/strings'
import colors from '../../../styles/colors'

const EditProfile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.White }}>
      <HeaderComp
        goBack={() => navigation.goBack()}
        text="Edit Profile"
        showNotify={false}
      />
      <View style={styles.container}>
        
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <Image style={styles.ImgStyle} source={imgPath.ic_Group} />
          <Text style={{
            alignSelf: 'center',
            marginLeft: 20,
            fontSize: 16
          }}>{strings.CHANGE_PRFIL_PIC}</Text>
        </View>

        <View style={styles.inptStyle}>
          <View>
            <Label style={styles.labelStl}
              text={strings.FST_NM} size={16} />
            <CustomInputs
              placeholder={"Kamille"} />
          </View>
          <View>
            <Label style={styles.labelStl}
              text={strings.LST_NM} size={16} />
            <CustomInputs
              placeholder={"Schowalter"} />
          </View>
        </View>

        <View>
          <Label style={styles.labelStl}
            text={strings.DOB} size={16} />
          <View >
            <CustomInputs placeholder={"02/10/1985"} showDropDwn />
          </View>

          <Label style={styles.labelStl}
            text={strings.PHONE_NUM} size={16} />
          <CustomInputs
            placeholder={"(+1) 214-252-9719"} />
          <Label style={styles.labelStl}
            text={strings.EMIL} size={16} />
          <CustomInputs
            placeholder={"schowalter.kamille@yahoo.com"} />
        </View>

        <View style={styles.inptStyle}>

          <View>
            <Label style={styles.labelStl}
              text={strings.CNTRY} size={16} />
            <CustomInputs
              placeholder={"United States"} showDropDwn />
          </View>

          <View >
            <Label style={styles.labelStl}
              text={strings.P_ZP_CODE} size={16} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CustomInputs placeholder={"76201"} showDropDwn />
            </View>
          </View>


        </View>

      </View>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.txtStyle}>Save</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default EditProfile

