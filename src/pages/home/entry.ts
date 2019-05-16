import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter, State } from 'vuex-class'

@Component
export default class Home extends Vue {

  @Action('home/set_id') public _store_set_id: any
  @Getter('home/get_id') public _store_get_id !: string

  public created (): void {
    this._store_set_id().then((res: any) => {
      console.log(this._store_get_id)
    }, (err: any) => {
      console.log(err)
    })
  }
}
