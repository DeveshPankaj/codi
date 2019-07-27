<template>
    <tabs slot="raw-content" tab-content-classes="tab-content-padding">
        <tab-pane>
            <template slot="label">
                <i class="now-ui-icons objects_umbrella-13"></i> Home
            </template>

            <!-- Home start -->
            <!-- set card background according to the theme -->
            <card :style="themes.style.homeEditorCard">
                <div>{{running.path}}</div>
                <!-- codeblock/input start -->
                <div class="row">
                    <!-- editor start -->
                    <div
                            v-bind:class="['col-8', 'editor']"
                            :style="{'font-size':themes.style.editor.fontSize}"
                    >
                        <codemirror
                                ref="myCm"
                                :value="code"
                                :options="cmOptions"
                                @ready="onCmReady"
                                @focus="onCmFocus"
                                @input="onCmCodeChange"
                        ></codemirror>
                    </div>
                    <!-- editor end -->

                    <!-- input start -->
                    <div id="panel" v-bind:class="['col-4', 'editor']">
                        <!-- <p>testcases</p> -->
                        <codemirror
                                ref="myCm2"
                                :value="testcase"
                                :options="cmOptionsForInput"
                                @ready="onCmReady"
                                @focus="onCmFocus"
                                @input="outOnChange"
                        ></codemirror>
                    </div>
                    <!-- input end -->
                </div>

                <!-- codeblock/input end -->
            </card>

            <!-- console start -->
            <div id="console">
                <!-- console-btn -->
                <div
                        class="btn-toolbar"
                        role="toolbar"
                        aria-label="Toolbar with button groups"
                        :style="themes.style.homeConsoleBtnGroup"
                >
                    <div class="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-primary">run</button>
                        <button type="button" class="btn btn-secondary">stop</button>
                    </div>
                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-success">submit</button>
                    </div>
                </div>
                <!-- console-btn end -->
                <pre :style="themes.style.homeConsoleOutput">{{output}}</pre>
            </div>
            <!-- console end -->

            <!-- Home end -->
        </tab-pane>
        <tab-pane style="height: 500px">
            <template slot="label">
                <i class="now-ui-icons design_app"></i> Project
            </template>
            <!-- <div class="row"> -->
            <!-- <card v-bind:class="['col', 'col-3', 'editor']">
                <h3>Project</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </card>-->

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" v-for="(e, i) in getCurrentPath()" :key="e"
                        @click="openDir(gotoFolderFromCurrent(i))">
                        <a :href="'#'+gotoFolderFromCurrent(i)">{{e}}</a>
                    </li>
                </ol>
            </nav>
            <div v-bind:class="['col', 'col-12', 'editor']">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">File</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(file, i) in project" :key="'projectFile_'+file.name"
                        v-if="(file.name[0]==='.' && showHiddenFiles) || file.name[0]!=='.'" @click="open(file)">
                        <th scope="row">{{i+1}}</th>
                        <td>{{file.name}}</td>
                        <td>{{getFileType(file)}}</td>
                        <td>
                            <span class="badge badge-pill badge-success" v-if="file===running">Running</span>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <!--<pre v-for="(file,i) in project" v-bind:key="'file_'+file.name">{{file.folder}}</pre>-->


            </div>

            <!-- </div> -->
        </tab-pane>
        <tab-pane>
            <template slot="label">
                <i class="now-ui-icons tech_watch-time"></i> Contests
            </template>
            <div class="row">
                <card v-bind:class="['col-3', 'editor']">
                    <!-- contests list -->
                    <div class="list-group list-group-flush">
                        <a
                                v-bind:href="'#contests_'+i"
                                class="list-group-item list-group-item-action"
                                v-for="(contest, i) in contests.menu"
                                v-bind:key="i"
                                @click="selected_contest=contest;loadContest()"
                        >{{contest.title}}</a>
                    </div>
                    <!-- contests list end -->
                </card>
                <!-- contests body -->
                <div v-bind:class="['col-9', 'editor']" v-if="selected_contest==null">
                    <div class="section section-nucleo-icons">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="icons-container">
                                        <i class="now-ui-icons ui-1_send"></i>
                                        <i class="now-ui-icons ui-2_like"></i>
                                        <i class="now-ui-icons transportation_air-baloon"></i>
                                        <i class="now-ui-icons text_bold"></i>
                                        <i class="now-ui-icons tech_headphones"></i>
                                        <i class="now-ui-icons emoticons_satisfied"></i>
                                        <i class="now-ui-icons shopping_cart-simple"></i>
                                        <i class="now-ui-icons objects_spaceship"></i>
                                        <i class="now-ui-icons media-2_note-03"></i>
                                        <i class="now-ui-icons ui-2_favourite-28"></i>
                                        <i class="now-ui-icons design_palette"></i>
                                        <i class="now-ui-icons clothes_tie-bow"></i>
                                        <i class="now-ui-icons location_pin"></i>
                                        <i class="now-ui-icons objects_key-25"></i>
                                        <i class="now-ui-icons travel_istanbul"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <component
                        v-else-if="selected_contest._component"
                        :is="selected_contest._component"
                        :data="selected_contest"
                />
                <!-- contests body end -->
            </div>
        </tab-pane>

        <!-- settings tab start -->
        <tab-pane>
            <template slot="label">
                <i class="now-ui-icons ui-2_settings-90"></i> Settings
            </template>

            <div class="row">
                <!-- settings list start -->
                <card v-bind:class="['col-3', 'editor']">
                    <div class="list-group list-group-flush">
                        <a
                                v-bind:href="'#settings_'+i"
                                class="list-group-item list-group-item-action"
                                v-for="(task, i) in settings.menu"
                                v-bind:key="i"
                                @click="selected_settings=task;loader()"
                        >{{task.title}}</a>
                    </div>
                </card>
                <!-- settings list end -->
                <div v-bind:class="['col-9', 'editor']">
                    <div class="section section-nucleo-icons" v-if="selected_settings==null">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <div class="icons-container">
                                        <i class="now-ui-icons ui-1_send"></i>
                                        <i class="now-ui-icons ui-2_like"></i>
                                        <i class="now-ui-icons transportation_air-baloon"></i>
                                        <i class="now-ui-icons text_bold"></i>
                                        <i class="now-ui-icons tech_headphones"></i>
                                        <i class="now-ui-icons emoticons_satisfied"></i>
                                        <i class="now-ui-icons shopping_cart-simple"></i>
                                        <i class="now-ui-icons objects_spaceship"></i>
                                        <i class="now-ui-icons media-2_note-03"></i>
                                        <i class="now-ui-icons ui-2_favourite-28"></i>
                                        <i class="now-ui-icons design_palette"></i>
                                        <i class="now-ui-icons clothes_tie-bow"></i>
                                        <i class="now-ui-icons location_pin"></i>
                                        <i class="now-ui-icons objects_key-25"></i>
                                        <i class="now-ui-icons travel_istanbul"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <component
                            v-else-if="selected_settings._component"
                            :is="selected_settings._component"
                            :data="selected_settings"
                            :themes="themes"
                            @updateTheme="updateTheme"
                    />
                </div>
            </div>
        </tab-pane>
        <!-- settings tab end -->
    </tabs>
</template>
<script>
  import {Card, Tabs, TabPane} from '@/components'
  import {type} from 'os'
  import path from 'path'

  import 'codemirror/lib/codemirror.css'
  import 'codemirror/mode/javascript/javascript.js'
  // import "codemirror/theme/base16-dark.css";
  // import "codemirror/theme/material.css";
  import 'codemirror/theme/neo.css'
  import 'codemirror/theme/monokai.css'

  export default {
    props: ['themes'],
    data () {
      return {
        ipc: null,
        path,
        showHiddenFiles: false,

        running: {
          type: 'folder',
          name: '/',
          ext: '',
          path: '/home/devesh/Desktop/'
        },
        selected_settings: null,
        selected_contest: null,
        code: 'const a = 10',
        testcase: 'testcases\n\n\n',
        output: '',
        cmOptions: {
          // codemirror options
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'neo',
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
        },
        cmOptionsForInput: {
          // codemirror options
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'neo',
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
        },
        settings: {
          menu: [
            {title: 'Change theme', type: 'ChangeTheme'},
            {title: 'Customize theme', type: 'CustomizeTheme'},
            {title: 'Change font size', type: 'ChangeFontSize'},
            {title: 'Select compiler', type: 'SelectCompiler'},
            {title: 'Other Config', type: 'ComponentA'},
            {title: 'Website', type: 'ComponentA'},
            {title: 'ABCDEFG', type: 'ComponentA'}
          ]
        },
        contests: {
          menu: [
            // {
            //   title: "Codeforces",
            //   website: "https://codeforces.com",
            //   component: "ShowContest"
            // },
            // {
            //   title: "CodeChef",
            //   website: "https://www.codechef.com/",
            //   component: "ShowContest"
            // },
            {
              title: 'Hackerrank',
              website: 'https://www.hackerrank.com/',
              component: 'ShowContest'
            }
            // {
            //   title: "Hackerearth",
            //   website: "https://www.hackerearth.com/",
            //   component: "ShowContest"
            // }
          ]
        },
        project: []
      }
    },
    components: {
      Card,
      Tabs,
      TabPane
    },

    computed: {

      loader () {
        if (!this.selected_settings._component) {
          this.selected_settings._component = () =>
            import(`../../my/${this.selected_settings.type}`)
        }
        return () => {
        }
      },

      loadContest () {
        if (!this.selected_contest._component) {
          this.selected_contest._component = () =>
            import(`../../my/${this.selected_contest.component}`)
        }
        return () => {
        }
      },
      codemirror () {
        return this.$refs.myCm.codemirror
      }
    },
    mounted () {
      this.ipc = this.$electron.ipcRenderer

      this.ipc.send('ls', this.running)
      this.ipc.once('ls', (event, data) => {
        this.project = data.data
        console.log(data)

      })

      // this.selected_settings._component = () => this.loader();

      // this.settings.menu.forEach(e => {
      //     console.log(e);
      //     e.component = import(`../../my/${e.type}`);
      // });

      console.log('this is current codemirror object', this.codemirror)
    },

    methods: {
      getFileType (file) {
        if (file.folder) {
          return 'dir'
        } else {
          return path.parse(file.name).ext
        }
      },
      open (e) {
        if (e.folder === false) {
          this.running = e
        } else {
          this.ipc.send('ls', e)
          this.ipc.once('ls', (event, data) => {
            this.project = data.data
            this.running = e
            console.log(data)
          })

        }
      },
      openDir (dir) {
        this.ipc.send('ls', {path: dir})
        this.ipc.once('ls', (event, data) => {
          this.project = data.data
          this.running = {path: dir}
        })
      },
      gotoFolderFromCurrent (count) {
        let ans = ''
        let temp = this.running.path.split('/')
        for (let i = 0; i <= count; i++) {
          ans += temp[i] + '/'
        }
        return ans
      },
      getCurrentPath () {
        return this.running.path.split('/')
      },
      updateTheme (data) {
        this.$emit('updateTheme', data)
      },
      onCmReady (cm) {
        console.log('the editor is readied!', cm)
      },
      onCmFocus (cm) {
        console.log('the editor is focus!', cm)
      },
      onCmCodeChange (newCode) {
        // console.log("this is new code", newCode);
        this.code = newCode
      },
      outOnChange (newData) {
        this.testcase = newData
        this.output = newData
      }
    }
  }
</script>
<style>
    .no-drag {
        -webkit-app-region: no-drag;
    }

    .draggable {
        -webkit-user-select: none;
        -webkit-app-region: drag;
    }

    .nav.nav-tabs-default.nav-tabs {
        -webkit-user-select: none;
        -webkit-app-region: drag;
    }

    .nav-link {
        -webkit-app-region: no-drag;
    }

    .tab-content.tab-content-padding {
        padding: 20px;
    }

    .editor {
        font-size: 20px;
    }

    #panel {
        /* background-color: aqua; */
        border-left: 1px solid gray;
    }

    .CodeMirror {
        height: 600px;
    }

    #run-btn {
        background-color: rgba(255, 166, 0, 0.116);
    }

    #run-btn:hover {
        background-color: rgba(255, 145, 0, 0.849);
    }
</style>
