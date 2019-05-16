import Vue from 'vue'
import { HomeService } from '../services/home'

declare module 'vue/types/vue' {
  interface Vue {
    homeService: HomeService,
    process: any
  }
}
