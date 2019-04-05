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
      <progress class="progress is-primary"
        :value="time">{{time}}</progress>
        {{ time }}
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval, clearTimeout } from 'timers';
export default {
  name: 'Home',
  data () {
    return {
      phrases: [
        "Fuck Yeah!",
        "You wanna spit in my face too?",
        "You doin' anything for lunch?",
        "Who wants a beer?",
        "That really hurts!",
        "I'm scared right now.",
        "I almost pissed myself.",
        "I want a puddin' donut.",
        "That was really scary. I almost cried.",
        "I'm gonna cry",
        "I almost quit.",
        "Maaaan....",
        "Anybody wanna walk down to Joe's?",
        "Roll Tide!"
        ],
      phrase: '',
      time: 60,
      isRunning: false,
      interval: null
    }
  },
  methods: {
    getPhrase () {
      this.phrase = this.phrases[Math.floor(Math.random()*this.phrases.length)]
    },
    reset () {
      this.phrase = ''
    },
    timer () {
      if (this.time <= 0) {
        clearInterval(this.interval)
        doTheThing()
      } else {
        this.interval = setInterval(this.decrementTime, 1000);
        console.log('time', this.time);
      }
    },
    decrementTime () {
      this.time = parseInt(this.time) - 1
    }
  },
  mounted () {
    this.timer()
  }
}
</script>

<style scoped>
  .word-padding {
    padding-top: 20px;
  }
</style>


