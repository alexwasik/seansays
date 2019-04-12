<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-5">
          <div class="field is-grouped is-expanded center">
            <p class="control">
              <button class="button is-primary"
                @click="getPhrase">Sean Says...
              </button>
            </p>
            <p class="control">
              <a class="button"
              @click="reset">Reset
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="word-padding">
        <h3 class="title is-3">
          <div v-if="phrase">"{{ phrase }}"</div>
        </h3>
      </div>
      <InputBox />
    </div>

  </div>
</template>

<script>
import { setInterval, clearInterval, clearTimeout } from 'timers';
import { dbRef } from '../config'
import InputBox from './InputBox'

export default {
  name: 'Home',
  data () {
    return {
      show: false,
      phrases: [],
      // phrases: [
      //   "Fuck Yeah!",
      //   "You wanna spit in my face too?",
      //   "You doin' anything for lunch?",
      //   "Who wants a beer?",
      //   "That really hurts!",
      //   "I'm really scared right now.",
      //   "I almost pissed myself.",
      //   "I want a puddin' donut.",
      //   "That was really scary. I almost cried.",
      //   "I'm gonna cry",
      //   "I almost quit.",
      //   "Maaaan....",
      //   "Anybody wanna walk down to Joe's?",
      //   "Roll Tide!",
      //   "It doesn't suck.",
      //   "I might cry.",
      //   "I could die on this thing."
      //   ],
      phrase: '',

    }
  },
  methods: {
    getPhrase () {
      this.phrase = this.phrases[Math.floor(Math.random()*this.phrases.length)]
    },
    reset () {
      this.phrase = ''
    }
  },
  mounted () {
    dbRef.on('value', (snapshot) => {
        this.phrases = []
        snapshot.forEach((item) => {
          this.phrases.push(item.val())
        })
    }
  )},
  components: {
    InputBox
  }
}
</script>

<style scoped>
  .word-padding {
    padding-top: 20px;
  }
  .bottom-right {
    position: fixed;
    bottom: 25px;
    right: 25px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


