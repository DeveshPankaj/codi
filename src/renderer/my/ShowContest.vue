<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <h2 class="title">{{data.title}}</h2>
        <h5 class="description"></h5>
        <a :href="data.website">{{data.title}}</a>
      </div>
      <div style="width:100%;height:600px">
        <iframe :src="data.website" frameBorder="0"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
// import { codemirror } from "vue-codemirror";

// require styles

export default {
  name: "cccc",
  props: ["data"],
  components: {}
  
};
</script>
<style>
iframe{
  width: 100%;
  height: 100%;
}
</style>
