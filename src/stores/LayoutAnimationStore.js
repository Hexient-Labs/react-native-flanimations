import { action, observable } from 'mobx'
import remotedev from 'mobx-remotedev'

@remotedev
class LayoutAnimationStore {
  @observable animationPreset
  @observable logoSize

  constructor() {
    this.animationPreset = 'spring'
    this.logoSize = 'Small'
  }

  get animationPreset() {
    return this.animationPreset
  }

  @action setAnimationPreset(newPreset) {
    this.animationPreset = newPreset || this.animationPreset
  }

  get logoSize() {
    return this.logoSize
  }

  @action setLogoSize(nextSize) {
    this.logoSize = nextSize
  }
}

export default new LayoutAnimationStore()
