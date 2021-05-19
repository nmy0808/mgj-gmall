import 'vant/lib/col/index.css'
import 'vant/lib/row/index.css'
import Col from 'vant/lib/col'
import Row from 'vant/lib/row'
import { Layout, Header, Aside, Content, Footer } from '@/components/layout/index.js'
import 'vant/lib/swipe/index.css'
import 'vant/lib/swipe-item/index.css'
import { Swipe, SwipeItem } from 'vant';
import CBox from './box'
const components = [
  Col, Row, Layout, Header, Aside, Content, Footer, CBox, Swipe, SwipeItem
];
export default {
  install(Vue) {
    components.forEach(comp => {
      if (comp.name.startsWith('van-')) {
        const name = comp.name.replace(/van-/g, 'c-');
        Vue.component(name, comp);
      } else {
        Vue.component(comp.name, comp);
      }
    })
  }
}
