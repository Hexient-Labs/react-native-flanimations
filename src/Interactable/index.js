import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Dimensions, Modal, Text, View } from 'react-native'
import Interactable from 'react-native-interactable'
import CloseButton from '../components/CloseButton'

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
}

export default class FLInteractable extends Component {
  constructor(props) {
    super(props)

    this._deltaY = new Animated.Value(Screen.height - 100)
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
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <CloseButton onPress={toggleModal} />
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            }}
            pointerEvents="box-none"
          >
            <Animated.View
              pointerEvents="box-none"
              style={{
                backgroundColor: 'black',
                bottom: 0,
                left: 0,
                opacity: this._deltaY.interpolate({
                  inputRange: [0, Screen.height - 100],
                  outputRange: [0.5, 0],
                }),
                position: 'absolute',
                right: 0,
                top: 0,
              }}
              />
            <Interactable.View
              verticalOnly={true}
              snapPoints={[
                { y: 40 },
                { y: Screen.height - 300 },
                { y: Screen.height - 100 }
              ]}
              boundaries={{ top: - 300 }}
              initialPosition={{ y: Screen.height - 100 }}
              animatedValueY={this._deltaY}
            >
              <View
                style={{
                  backgroundColor: '#f7f5eee8',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  height: Screen.height + 300,
                  padding: 20,
                  shadowColor: '#000000',
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.4,
                  shadowRadius: 5,
                }}
              >
                <View style={{ alignItems: 'center' }}>
                  <View
                    style={{
                      backgroundColor: '#00000040',
                      borderRadius: 4,
                      height: 8,
                      marginBottom: 10,
                      width: 40,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 27,
                    height: 35,
                  }}
                >
                  San Francisco Airport
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 14,
                    height: 30,
                    marginBottom: 10,
                  }}
                >
                  International Airport - 40 miles away
                </Text>
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#318bfb',
                    borderRadius: 10,
                    marginVertical: 10,
                    padding: 20,
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 17,
                      fontWeight: 'bold',
                    }}
                  >
                    Directions
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#318bfb',
                    borderRadius: 10,
                    marginVertical: 10,
                    padding: 20,
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 17,
                      fontWeight: 'bold',
                    }}
                  >
                    Search Nearby
                  </Text>
                </View>
              </View>
            </Interactable.View>
          </View>
        </View>
      </Modal>
    )
  }
}

FLInteractable.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}


const styles = {
  card : {
    backgroundColor: 'red',
    borderRadius: 8,
    height: 180,
    marginVertical: 6,
    width: 300,
  }
}
