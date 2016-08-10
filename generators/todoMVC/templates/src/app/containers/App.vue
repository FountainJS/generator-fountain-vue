<template>
  <div class="todoapp" id="root">
    <header-component></header-component>
    <main-section :filter="filter"></main-section>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MainSection from '../components/MainSection.vue';
import {SHOW_ALL} from '../constants/TodoFilters';

export default {
  name: 'App',
  data() {
    return {
      filter: SHOW_ALL
    };
  },
  components: {
    'header-component': Header,
    'main-section': MainSection
  }
};
</script>
