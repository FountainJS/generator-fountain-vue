<template>
  <div class="techs-container">
    <h2 class="techs-h2">
      Cooked with all these awesome technologies:
    </h2>
    <div class="techs">
      <tech v-for="tech in techs" :tech="tech"></tech>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
import tech from './Tech.vue';

export default {
  name: 'Techs',
  data() {
    return {
      techs: []
    };
  },
  created() {
    return this.$http
      .get('app/techs/techs.json')
      .then(response => response.json())
      .then(response => {
        this.techs = response;
      });
  },
  components: {
    tech
  }
};
</script>
