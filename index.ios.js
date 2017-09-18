import React, { Component } from 'react'
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import AnimatableModal from './src/Animatable'

const OPTIONS = [
  { title: 'ANIMATABLE', color: '#DC2E48' },
  { title: 'LAYOUT ANIMATION', color: '#DC7640' },
  { title: 'ANIMATED', color: '#DCC337' },
  { title: 'INTERACTABLE', color: '#44DC38' },
  { title: 'SHOUTEM ANIMATION', color: '#325FDC' },
]

export default class Flanimations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeModal: null,
    }

    this.changeModalState = (nextModalState = null) => {
      this.setState({
        activeModal: nextModalState,
      })
    }

  }

  componentWillMount() {
    StatusBar.setHidden(true)
  }

  render() {
    return (
      <View style={styles.container}>
        {OPTIONS
          .map(item => (
            <TouchableOpacity
              key={item.title}
              onPress={
                () => this.changeModalState(item.title)
              }
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
          toggleModal={this.changeModalState}
          visible={
            this.state.activeModal === 'ANIMATABLE'
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

AppRegistry.registerComponent('Flanimations', () => Flanimations)
