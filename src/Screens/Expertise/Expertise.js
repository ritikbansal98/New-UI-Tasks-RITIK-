import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import HeaderComp from '../../Components/HeaderComp'
import Label from '../../Components/Label/Label'
import imgPath from '../../constants/imgPath'
import CstmDropdwn from '../../Components/CstmDropdwn'
import strings from '../../constants/lang/strings'
import navigationStrings from '../../constants/navigationStrings'


const Expertise = ({ navigation }) => {
  const [hide, setHide] = React.useState(false);

  return (
    <View style={styles.container}>
      <HeaderComp text="Expertise" text1="ADD"
        onPress={() => navigation.navigate(navigationStrings.EDITPROFILE)}
        goBack={() => navigation.goBack()} showNotify={false} />

      <View style={styles.container2}>
        <View style={styles.boxStyle}>

          <View>
            <Text style={styles.txtStyle}>{strings.HAR_CLR}</Text>
            <Label text={strings.PRCE_DLR_120} />
          </View>

          <View style={styles.imgStyle}>

            <TouchableOpacity style={{ marginRight: 20 }}>
              <Image style={styles.imgEdtstyle}
                source={imgPath.ic_Edit} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.imgDelstyle}
                source={imgPath.ic_Delete} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.boxStyle}>
          <View>
            <Text style={styles.txtStyle}>{strings.NL_ART}</Text>
            <Label text={strings.PRCE_DLR_80} />
          </View>

          <View style={styles.imgStyle}>
            <TouchableOpacity style={{ marginRight: 20 }}>

              <Image style={styles.imgEdtstyle}
                source={imgPath.ic_Edit} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.imgDelstyle}
                source={imgPath.ic_Delete} />
            </TouchableOpacity>
          </View>
        </View>



        <View style={styles.boxStyle}>
          <View>
            <Text style={styles.txtStyle}>
              {strings.DETN_MNCR}</Text>
            <Label text={strings.PRCE_DLR_50} />
          </View>

          <View style={styles.imgStyle}>
            <TouchableOpacity style={{ marginRight: 20 }}
              onPress={() => setHide(!hide)}>
              <Image style={styles.imgEdtstyle}
                source={imgPath.ic_Edit} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.imgDelstyle}
                source={imgPath.ic_Delete} />
            </TouchableOpacity>
          </View>
        </View>
        {
          hide ?
            <CstmDropdwn />
            : null
        }

        <View style={styles.boxStyle}>
          <View>
            <Text style={styles.txtStyle}>{strings.FACIL}</Text>
            <Label text={strings.PRCE_DLR_80} />
          </View>

          <View style={styles.imgStyle}>
            <TouchableOpacity style={{ marginRight: 20 }}  >
              <Image style={styles.imgEdtstyle}
                source={imgPath.ic_Edit} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.imgDelstyle}
                source={imgPath.ic_Delete} />
            </TouchableOpacity>
          </View>
        </View>
      </View>



    </View>
  )
}

export default Expertise

