import { action, observable } from 'mobx'
import remotedev from 'mobx-remotedev'

@remotedev
class AnimatableStore {
  @observable animationDuration
  @observable animationName

  constructor() {
    this.animationDuration = 1000
    this.animationName = 'jello'
  }

  get animationDuration() {
    return this.animationDuration
  }

  @action setAnimationDuration(newDuration) {
    this.animationDuration = newDuration || this.animationDuration
  }

  get animationName() {
    return this.animationName
  }

  @action setAnimationName(newName) {
    this.animationName = newName || this.animationName
  }
}

export default new AnimatableStore()
