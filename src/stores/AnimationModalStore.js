import { computed, observable } from 'mobx'
import remotedev from 'mobx-remotedev'

@remotedev
class AnimationModalStore {
  @observable animationLibrary

  constructor() {
    this.animationLibrary = null
  }

  get animationLibrary() {
    return this.animationLibrary
  }

  setAnimationLibrary(library) {
    this.animationLibrary = library || null
  }
}

export default new AnimationModalStore()
