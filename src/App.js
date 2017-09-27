import React, { Component } from 'react'
import { observer } from 'mobx-react/native'

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import AnimatableModal from './Animatable'
import AnimatedModal from './Animated'
import InteractableModal from './Interactable'
import LayoutAnimationModal from './LayoutAnimation'

const OPTIONS = [
  { title: 'ANIMATABLE', color: '#6b40d8' },
  { title: 'LAYOUT ANIMATION', color: '#7d4ae3' },
  { title: 'ANIMATED', color: '#964af9' },
  { title: 'INTERACTABLE', color: '#da4dff' },
]

@observer(['animationModalStore'])
export default class Flanimations extends Component {
  constructor(props) {
    super(props)

    this.toggleModal = newModal => {
      this.props.animationModalStore.setAnimationLibrary(newModal)
    }
  }

  componentWillMount() {
    StatusBar.setHidden(true)
  }

  render() {
    const { animationModalStore } = this.props

    return (
      <View style={styles.container}>
        {OPTIONS
          .map(item => (
            <TouchableOpacity
              onPress={
                () => this.toggleModal(item.title)
              }
              key={item.title}
              style={{
                flex: 1,
                width: '100%',
                backgroundColor: item.color,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        <AnimatableModal
          visible={
            animationModalStore.animationLibrary === OPTIONS[0].title
          }
          toggleModal={this.toggleModal}
        />
        <LayoutAnimationModal
          visible={
            animationModalStore.animationLibrary === OPTIONS[1].title
          }
          toggleModal={this.toggleModal}
        />
        <AnimatedModal
          visible={
            animationModalStore.animationLibrary === OPTIONS[2].title
          }
          toggleModal={this.toggleModal}
        />
        <InteractableModal
          toggleModal={this.toggleModal}
          visible={
            animationModalStore.animationLibrary === OPTIONS[3].title

          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
