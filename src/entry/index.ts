import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  public a: number = 2
  public created (): void {
    console.log(this.cookies.prototype)
  }
}
