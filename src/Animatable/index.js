import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'
import { Modal, Text, TouchableOpacity } from 'react-native'

export default class FLAnimatable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animation: 'jello',
      duration: 1000,
      delay: 1000,
    }
  }

  render() {
    const { visible } = this.props

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
        <TouchableOpacity
          onPress={this.props.toggleModal}
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              marginLeft: 16,
            }}
          >
            Close
          </Text>
        </TouchableOpacity>
        <Animatable.Image
          animation={this.state.animation}
          duration={this.state.duration}
          delay={this.state.delay}
          source={{ uri: 'https://res.cloudinary.com/talkrise/image/upload/v1505704198/Flanimations_Icon_jm9imu.png' }}
          style={{
            flex: 1,
            width: 144,
            height: 122,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </Modal>
    )
  }
}

FLAnimatable.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}
