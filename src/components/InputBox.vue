<template>
  <div>
    <div class="corner_form" @keydown.esc="closeForm">
      <div class="corner_form__container">

        <span class="icon is-medium"
          v-if="show">
          <button class="button is-medium is-white"
            @click="toggleShow">

            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#000000" d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" />
            </svg>
          </button>
        </span>
        <span v-else>
          <button class="button is-medium is-white"
            @click="toggleShow">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#000000" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M11,6H13V9H16V11H13V14H11V11H8V9H11V6Z" />
            </svg>
          </button>
        </span>

        <transition name='fade'>
          <div v-if="show">
            <div class="field corner_form__form">
              <form @submit.prevent="addPhrase">
                <input class="input"
                  type="text"
                  v-model="input"
                  v-focus
                  placeholder="Sean Says..." />
                <div class="level-right">
                  <div class="level-item">
                    <span class="icon is-right icon-padding">
                      <i class="pointer"
                        @click="addPhrase">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                          <path fill="#000" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                        </svg>
                      </i>
                    </span>
                  </div>
                </div>
                <p v-if="error">{{ error }}</p>
                <small class="pointer icon-padding"
                  @click="showList">
                  List
                </small>
              </form>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div v-if="showModal">
      <ListModal @close="closeForm">
        <template v-slot:header>
          Sean Says...
        </template>
        <template v-slot:body>
          <ul>
            <li v-for="(item, index) in list" :key="index">
              {{ item }}
            </li>
          </ul>
        </template>
      </ListModal>
    </div>
  </div>
</template>

<script>
import { dbRef } from '../config'
import Send from 'vue-material-design-icons/Send.vue'
import ListModal from './ListModal'

export default {
  props: {
    list: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      error: '',
      input: null,
      show: false,
      showModal: false
    }
  },
  methods: {
    addPhrase () {
      if (this.validPhrase(this.input)) {
        dbRef.push(this.input, (error) => {
          if (error) {
            console.log('error');
          }
        })
        this.error = ""
        this.input = null
        this.toggleShow()
      } else {
        this.error = "Please enter a value"
      }
    },
    showList () {
      this.showModal = true
      this.show = false
    },
    toggleShow () {
      this.input = null
      this.error = ''
      this.show = !this.show
    },
    validPhrase (input) {
      switch (input) {
        case null:
        case "":
        case " ":
        case ".":
          return false
        default:
          return true
      }
    },
    closeForm () {
      this.show = false
      this.showModal = false
    }
  },
  components: {
    ListModal
  },
  directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}
}
</script>

<style lang="scss" scoped>
  .corner_form {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 999;

    &__container {
      position: relative;
    }

    &__form {
      background: #f9f9f9;
      border: black 1px solid;
      border-radius: 8px;
      width: 300px;
      padding: 16px 16px 16px;
    }
  }
  .icon-padding {
    padding-top: 20px;
  }

  .pointer {
    cursor: pointer;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
