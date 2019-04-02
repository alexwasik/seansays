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
    </div>
  </div>
</template>

<script>
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
        "I almost pissed myself."
        ],
      phrase: ''
    }
  },
  methods: {
    getPhrase () {
      this.phrase = this.phrases[Math.floor(Math.random()*this.phrases.length)]
    },
    reset () {
      this.phrase = ''
    }
  }
}
</script>

<style scoped>
  .word-padding {
    padding-top: 20px;
  }
</style>


