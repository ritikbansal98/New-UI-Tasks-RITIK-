import { Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import Label from '../../Components/Label/Label'
import imgPath from '../../constants/imgPath'
import strings from '../../constants/lang/strings'

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topheader}>

        <View style={styles.header}>

          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.ImgStyle} source={imgPath.ic_Hair} />

            <View style={styles.txtStyle}>
              <Text style={{ paddingBottom: 8 }}>
                {strings.HAIR_COLR_CUT}</Text>
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

          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image style={styles.ImgStyle2}
              source={imgPath.ic_LidGirl} />
            <Text style={{ marginLeft: 18 }}>{strings.LID_VILNSKY}</Text>
          </View>

          <View>
            <Image style={{ height: 20, width: 20 }} source={imgPath.ic_Mesg} />
          </View>
        </View>
      </View>


      <View style={styles.topheader}>

        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>

            <Image style={styles.ImgStyle}
              source={imgPath.ic_Engine} />

            <View style={styles.txtStyle}>

              <Text style={{ paddingBottom: 8 }}>
                {strings.CAR_ENGN_RPR}</Text>
              <Text>{strings.PH_7}</Text>
              <Label text={strings.DATE_26_JAn_10AM}
                style={{ marginTop: 4 }} />

            </View>

          </View>

          <View>
            <Text style={{ fontSize: 18 }}>{strings.DOLR_65}</Text>
          </View>

        </View>

        <View >
          <View style={styles.bottomheardr}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Image style={styles.ImgStyle2}
                source={imgPath.ic_Eyes} />
              <Text style={{ marginLeft: 18 }} >{strings.CORDL_DURD}</Text>
            </View>

            <View>
              <Image style={{ height: 20, width: 20 }}
                source={imgPath.ic_Mesg} />
            </View>
          </View>
        </View>

      </View>
    </View>

  )
}

export default Upcoming
