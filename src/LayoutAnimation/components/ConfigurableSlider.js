import React from 'react'
import PropTypes from 'prop-types'

import {
  Dimensions,
  Slider,
  Text,
  View,
} from 'react-native'

const ConfigurableSlider = ({ onChange, title, value }) => (
  <View
    style={{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      margin: 10,
    }}
  >
    <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}
    >
      {title}
    </Text>
    <Slider
      value={value}
      maximumValue={10000}
      minimumValue={1000}
      onSlidingComplete={onChange}
      step={500}
      style={{
        width: Dimensions.get('window').width - 20,
      }}
    />
  </View>
)

ConfigurableSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default ConfigurableSlider
