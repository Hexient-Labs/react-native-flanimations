import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react/native'

import {
  Image,
  LayoutAnimation,
  Modal,
  Picker,
  SegmentedControlIOS,
  View,
} from 'react-native'

import constants from '../constants'
import CloseButton from '../components/CloseButton'


@inject('layoutAnimationStore')
@observer
export default class FLLayoutAnimation extends Component {
  constructor(props) {
    super(props)

    this.updateAnimationPreset = preset =>
      this.props.layoutAnimationStore.setAnimationPreset(preset)

    this.updateLogoSize = (nextSize) =>
      this.props.layoutAnimationStore.setLogoSize(nextSize)
  }

  componentDidUpdate(nextProps) {
    LayoutAnimation
      .configureNext(
        LayoutAnimation.Presets[nextProps.layoutAnimationStore.animationPreset],
        () => {}
      )
  }

  render() {
    const {
      layoutAnimationStore,
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
          selectedValue={layoutAnimationStore.animationPreset}
          onValueChange={this.updateAnimationPreset}>
          <Picker.Item label="Spring" value="spring" />
          <Picker.Item label="Linear" value="linear" />
          <Picker.Item label="EaseInEaseOut" value="easeInEaseOut" />
        </Picker>
        <SegmentedControlIOS
          onValueChange={this.updateLogoSize}
          selectedIndex={layoutAnimationStore.logoSize === 'Small' ? 0 : 1}
          style={{ margin: 10 }}
          values={['Small', 'Large']}
        />
        <Image
          source={{ uri: constants.LOGO_URL }}
          style={{
            marginTop: 50,
            resizeMode: 'contain',
            height: layoutAnimationStore.logoSize === 'Small' ? 80 : 160,
          }}
        />
      </Modal>
    )
  }
}

FLLayoutAnimation.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}
