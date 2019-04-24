import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  public created (): void {
    console.log(this._)
    this.$store.dispatch('home/setId').then((res: any) => {
      console.log(res)
    }, (err: any) => {
      console.log(err)
    })
  }
}
