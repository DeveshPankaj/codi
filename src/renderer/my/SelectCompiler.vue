<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <h2 class="title">{{data.title}}</h2>
        <h5 class="description">
          
<div class="input-group mb-3" v-for="(c,i) in compilers" :key="i">
  <div class="input-group-prepend">
    <span class="input-group-text">{{c.title}}</span>
  </div>
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" v-model="c.compiler">
</div>





        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cccc",
  props: ["data"],
  data() {
    return {
      compilers:[
        {
          title: 'C++',
          compiler: 'g++'
        },
        {
          title: 'Python',
          compiler: 'python3'
        },
        {
          title: 'Java',
          compiler: 'javac'
        }
      ]
    }
  }
};
</script>
<style></style>
