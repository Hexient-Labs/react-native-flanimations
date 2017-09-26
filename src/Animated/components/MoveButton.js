import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'

const MoveButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      alignItems: 'center',
      backgroundColor: 'black',
      borderRadius: 8,
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 20,
      padding: 10,
    }}
  >
    <Text
      style={{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
)

MoveButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default MoveButton
