<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <h2 class="title">{{data.title}}</h2>
        <div class="row">
        <h5 class="description col-lg-10 col-md-10">{{themes.name || 'Undefined' }}</h5>
        <h5 class="col-lg-2 col-md-2" :class="{'description':!changed}">Save</h5>
        </div>

        <codemirror
          ref="myCm"
          :value="code"
          :options="cmOptions"
          @ready="onCmReady"
          @focus="onCmFocus"
          @input="onCmCodeChange"
        ></codemirror>
      </div>
    </div>
  </div>
</template>
<script>
// import { codemirror } from "vue-codemirror";

import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript.js";
// import "codemirror/theme/base16-dark.css";
// import "codemirror/theme/material.css";
// import "codemirror/theme/neo.css";
import "codemirror/theme/monokai.css";

// require styles

export default {
  name: "cccc",
  props: ["data", "themes"],
  components: {},
  data() {
    return {
      changed: false,
      theme: {
        name: "My Theme",
        style: {
          app: {
            backgroundColor: "gray"
          }
        },
        classe: {
          header: ["draggable"],
          app: []
        }
      },
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        theme: "monokai",
        lineNumbers: true,
        line: true,
        // value: "<p>hello</p>",
        // origLeft: null,
        // orig: "<p>hello world</p>",
        // connect: "align",
        collapseIdentical: false,
        styleActiveLine: true,
        matchBrackets: true,
        autoCloseTags: true,
        lineWrapping: true,
        highlightDifferences: true
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  computed: {
    code() {
      // console.warn('codemirror requested for code');
      try {
        return JSON.stringify(this.themes, null, 2);
      }catch(e) {
        return JSON.stringify({}, null, 2);
      }
    }
  },
  watch: {
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      // console.log("this is new code", newCode);
      try {
        // this.themes = JSON.parse(newCode);

        this.$emit('updateTheme', JSON.parse(newCode));
        this.changed = true;
        // console.log(this.themes);
      }catch(e) {

      }
    }
    
  }
};
</script>
<style></style>
