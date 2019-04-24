import HelloWorld from './hello_word/index.vue'

interface ComponentBase {
  init (vue: any): void
}

class GlobalComponents {
  public init (vue: any) {
    vue.component('HelloWorld', HelloWorld)
  }
}

export default new GlobalComponents()
