<template>
  <div id="app" :class="themes.class.app" :style="themes.style.app">
    <tabs-section :themes="themes" @updateTheme="updateTheme"></tabs-section>

    <n-button
      type="warning"
      :class="themes.class.closeBtn"
      :style="themes.style.closeBtn"
      round
      id="close-btn"
      style="-webkit-app-region: no-drag;"
    >
      <i class="now-ui-icons ui-1_simple-remove"></i>
    </n-button>

    <!-- <router-view name="header" /> -->
    <!-- 
    <div class="wrapper">
      <router-view />
      
    </div>-->

    <!-- <router-view name="footer" /> -->
  </div>
</template>
<script>
import TabsSection from "./pages/components/Tabs";
import { Button } from "@/components";

const themes = {
  "name": "default",
  "style": {
    "app": {
      "backgroundColor": "whitesmoke",
      "height": "100%"
    },
    "closeBtn": {
      "background": ""
    },
    "homeEditorCard": {
      "background": "",
      "color": ""
    },
    "homeConsoleBtnGroup": {
      "background": ""
    },
    "homeConsoleOutput": {
      "backgroundColor": "#272822",
      "color": "#f8f8f2",
      "height": "110px",
      "padding": "10px",
      "fontSize": "20px",
      "borderRadius": "5px"
    },
    editor: {
      fontSize: '30px'
    }
  },
  "class": {
    "app": [],
    "closeBtn": []
  }
}

export default {
  components: {
    TabsSection,
    [Button.name]: Button
  },
  data() {
    return {
      themes
    };
  },
  methods: {
    updateTheme(data) {
      this.themes = data;
    }
  }
};
</script>
<style>
html,
body {
  height: 100%;
  margin: 0px;
  background-color: #333;
}

#close-btn {
  -webkit-app-region: no-drag;
  position: fixed;
  top: 0;
  right: 10px;
  z-index: 1000;
  background-color: rgba(255, 166, 0, 0.116);
}
#close-btn:hover {
  background-color: rgba(255, 145, 0, 0.849);
}
</style>

