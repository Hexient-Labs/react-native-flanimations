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

const OPTIONS = [
  { title: 'ANIMATABLE', color: '#DC2E48' },
  { title: 'LAYOUT ANIMATION', color: '#DC7640' },
  { title: 'ANIMATED', color: '#DCC337' },
  { title: 'INTERACTABLE', color: '#44DC38' },
  { title: 'SHOUTEM ANIMATION', color: '#325FDC' },
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
