import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';

Vue.config.productionTip = false;


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios

import VueCodemirror from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import axios from 'axios'

// require more codemirror resource...

// you can set default global options and events when use
Vue.use(VueCodemirror, /* {
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */)



Vue.use(NowUiKit);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
