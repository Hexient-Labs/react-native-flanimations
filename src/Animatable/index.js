import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react/native'
import * as Animatable from 'react-native-animatable'
import { Modal, Picker } from 'react-native'
import constants from '../constants'
import CloseButton from '../components/CloseButton'
import ConfigurableSlider from './components/ConfigurableSlider'


@inject('animatableStore')
@observer
export default class FLAnimatable extends Component {
  constructor(props) {
    super(props)

    this.updateAnimation = name =>
      this.props.animatableStore.setAnimationName(name)

    this.updateAnimationDuration = dur =>
      this.props.animatableStore.setAnimationDuration(dur)
  }

  componentDidUpdate() {
    this.aref && this.aref.startAnimation()
  }

  render() {
    const {
      animatableStore,
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
        <Picker
          selectedValue={animatableStore.animationName}
          onValueChange={this.updateAnimation}>
          <Picker.Item label="Jello" value="jello" />
          <Picker.Item label="Pulse" value="pulse" />
          <Picker.Item label="Shake" value="shake" />
          <Picker.Item label="Swing" value="swing" />
          <Picker.Item label="Tada" value="tada" />
          <Picker.Item label="BounceInLeft" value="bounceInLeft" />
          <Picker.Item label="FlipInX" value="flipInX" />
          <Picker.Item label="LightSpeedIn" value="lightSpeedIn" />
          <Picker.Item label="SlideInRight" value="slideInRight" />
          <Picker.Item label="ZoomInUp" value="zoomInUp" />
        </Picker>
        <ConfigurableSlider
          onChange={this.updateAnimationDuration}
          title="Duration"
          value={animatableStore.animationDuration}
        />
        <Animatable.Image
          ref={ci => { this.aref = ci }}
          animation={animatableStore.animationName}
          duration={animatableStore.animationDuration}
          iterationCount="infinite"
          source={{ uri: constants.LOGO_URL }}
          style={{
            alignSelf: 'center',
            flex: 4,
            height: 122,
            resizeMode: 'contain',
            width: 144,
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
