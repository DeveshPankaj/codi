<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <h2 class="title">{{data.title}} </h2>
        <h5 class="description"></h5>
      </div>
    </div>

    <div class="row">
      <div class="input-group col-2">
        Editor: {{themes.style.editor.fontSize}}
      </div>
      <div class="input-group col-6">
        <input
          type="number"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
          v-model="size"
        />
      </div>
    </div>
  </div>
</template>
<script>
// import { codemirror } from "vue-codemirror";

// require styles

export default {
  name: "cccc",
  props: ["data", "themes"],
  components: {},
  data() {
    return {
    };
  },
  computed: {
    size: {
      get() {
        if (this.themes.style.editor.fontSize !== null) {
          return this.themes.style.editor.fontSize.slice(0, -2);
        } else {
          return null;
        }
      },
      set(val) {
        if (!val) this.themes.style.editor.fontSize = null;
        else this.themes.style.editor.fontSize = val + "px";
      }
    }
  }
};
</script>
<style></style>
