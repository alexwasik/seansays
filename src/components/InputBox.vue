<template>
  <div class="corner_form">
    <div class="corner_form__container">
      <span class="icon is-medium">
        <button class="button is-medium is-white"
          @click="show = !show">
          <CommentPlusOutline />
        </button>
      </span>
      <transition name='fade'>
        <div v-if="show">
          <div class="field corner_form__form">
            <form @submit.prevent="addPhrase">
            <input class="input"
              type="text"
              v-model="input"
              placeholder="Foo" />
            <div class="level-right">
              <div class="level-item">
                <span class="icon is-right icon-padding">
                  <i @click="addPhrase">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="#000" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CommentPlusOutline from 'vue-material-design-icons/CommentPlusOutline.vue'
import Send from 'vue-material-design-icons/Send.vue'

export default {
  data () {
    return {
      show: false,
      input: null
    }
  },
  methods: {
    addPhrase () {
      this.show = !this.show
    }
  },
  components: {
    CommentPlusOutline,
    Send
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

    &__toggle {
        position: absolute;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
  .icon-padding {
    padding-top: 20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
