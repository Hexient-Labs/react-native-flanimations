import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'

const CloseButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={() => onPress()}
    style={{
      backgroundColor: 'black',
      height: 50,
      padding: 10,
      width: '100%',
    }}
  >
    <Text
      style={{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      Close
    </Text>
  </TouchableOpacity>
)

CloseButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default CloseButton
