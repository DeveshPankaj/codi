<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h2 class="title">{{data.title}}</h2>
                <h5 class="description"></h5>
                <h1>Not implimented yet</h1>
                <n-button @click="ping">Ping</n-button>
            </div>
        </div>
    </div>
</template>
<script>
  // import { codemirror } from "vue-codemirror";

  // require styles

  import NButton from '../components/Button'

  export default {
    name: 'cccc',
    props: ['data'],
    components: {NButton},
    data () {
      return {
        ipc: null
      }
    },
    mounted () {
      this.ipc = this.$electron.ipcRenderer
    },
    methods: {
      ping () {
        this.ipc.send('ping', this.data)
        this.ipc.once('pong', (event, data) => {
          console.log(data)
        })
      }
    }
  }
</script>
<style></style>
