import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Animated,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import constants from '../constants'
import CloseButton from '../components/CloseButton'
import MoveButton from './components/MoveButton'

export default class FLAnimated extends Component {
  constructor(props) {
    super(props)

    this.imageControlValue = new Animated.Value(0)

    this.startAnimation = nextValue =>
      Animated.spring(this.imageControlValue, {
        toValue: nextValue,
        useNativeDriver: true,
      }).start()

    this.moveUp = () =>
      this.startAnimation(0)

    this.moveDown = () =>
      this.startAnimation(1)
  }

  render() {
    const {
      toggleModal,
      visible,
    } = this.props

    return (
      <Modal
        visible={visible}
        animationType="slide"
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CloseButton onPress={toggleModal} />
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <MoveButton
            onPress={this.moveUp}
            title="Move Up"
          />
          <MoveButton
            onPress={this.moveDown}
            title="Move Down"
          />
        </View>
        <View style={{ flex: 4 }}>
          <Animated.Image
            source={{ uri: constants.LOGO_URL }}
            style={{
              marginTop: 50,
              height: 100,
              resizeMode: 'contain',
              transform: [
                {
                  scale: this.imageControlValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
                {
                  translateY: this.imageControlValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                }
              ]
            }}
          />
        </View>
      </Modal>
    )
  }
}

FLAnimated.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}
