import { Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import Label from '../../Components/Label/Label'
import imgPath from '../../constants/imgPath'
import colors from '../../../styles/colors'
import strings from '../../constants/lang/strings'

const Past = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topheader}>

        <View style={styles.header}>

          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.ImgStyle} source={imgPath.ic_Msg} />

            <View style={styles.txtStyle}>
              <Text style={{ paddingBottom: 6 }}>
                {strings.FACE_MASAG}</Text>
              <Text>{strings.LARSN_PRK879}</Text>

              <Label text={strings.DATE_25_Jan_2PM}
                style={{ marginTop: 4 }} />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 18 }}>{strings.DOLR_120}</Text>
          </View>
        </View>

        <View style={styles.bottomheardr}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.ImgStyle2}
              source={imgPath.ic_Eyes} />

            <Text style={{ marginLeft: 18 }}>
              {strings.EDN_SHRMN}</Text>
          </View>

          <View>
            <Text style={{ color: colors.Dark_Green }}>
              {strings.COMPLET}</Text>
          </View>

        </View>
      </View>


      <View style={styles.topheader}>
        <View style={styles.header}>

          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.ImgStyle}
              source={imgPath.ic_Msg} />

            <View style={styles.txtStyle}>

              <Text style={{ paddingBottom: 6 }}>
                {strings.FACE_MASAG}</Text>
              <Text>{strings.LARSN_PRK879}</Text>

              <Label text={strings.DATE_25_Jan_2PM}
                style={{ marginTop: 4 }} />
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 18 }}>{strings.DOLR_120}</Text>
          </View>
        </View>

        <View >
          <View style={styles.bottomheardr}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.ImgStyle2}
                source={imgPath.ic_LidGirl} />
              <Text style={{ marginLeft: 18 }}>
                {strings.GRTRD_MCRMCK}</Text>
            </View>

            <View>
              <Text style={{ color: colors.Red }}>
                {strings.REJECT}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Past
