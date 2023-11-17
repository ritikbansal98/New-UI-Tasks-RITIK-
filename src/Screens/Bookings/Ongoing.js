import { Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './Styles'
import Label from '../../Components/Label/Label'
import imgPath from '../../constants/imgPath'
import BtnComp from '../../Components/BtnComp'
import strings from '../../constants/lang/strings'


const Ongoing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topheader}>

        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.ImgStyle} source={imgPath.ic_Hair} />

            <View style={styles.txtStyle}>
              <Text style={{ paddingBottom: 6 }}>{strings.HAR_COLR_SP}</Text>
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
            <Image style={styles.ImgStyle2} source={imgPath.ic_LidGirl} />
            <Text style={{ marginLeft: 18 }}>{strings.ZNG_WN}</Text>
          </View>

          <View>
            <BtnComp text={strings.ON_WAY} />
          </View>
        </View>
      </View>


      <View style={styles.topheader}>
        <View style={styles.header}>

          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.ImgStyle} source={imgPath.ic_BlackNail} />

            <View style={styles.txtStyle}>
              <Text style={{ paddingBottom: 6 }}>{strings.NL_PNT}</Text>
              <Text>{strings.PH_7}</Text>

              <Label text={strings.DATE_26_JAn_10AM}
                style={{ marginTop: 4 }} />
            </View>

          </View>

          <View>
            <Text style={{ fontSize: 18 }}>
              {strings.DOLR_65}</Text>
          </View>
        </View>

        <View >
          <View style={styles.bottomheardr}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.ImgStyle2}
                source={imgPath.ic_Eyes} />
              <Text style={{ marginLeft: 18 }}>
                {strings.OGSWR_KTSM}</Text>
            </View>

            <View>
              <BtnComp text={strings.ON_WAY} />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Ongoing
