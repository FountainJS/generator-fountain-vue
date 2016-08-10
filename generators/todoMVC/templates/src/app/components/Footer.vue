<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{activeCount || 'No'}}</strong> {{activeCount === 1 ? 'item' : 'items'}} left
    </span>
    <ul class="filters">
      <li v-for="filter in filters">
        <a v-bind:style="{cursor: 'pointer'}" v-bind:class="{'selected': filter === selectedFilter.type}" v-on:click="onShow(filter)">{{filterTitles[filter]}}</a>
      </li>
    </ul>
    <button v-if="completedCount > 0"
      class="clear-completed"
      v-on:click="handleClear()"
      >
      Clear completed
    </button>
  </footer>
</template>

<script>
import {mapActions} from 'vuex';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';

const filterTitles = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];

export default {
  name: 'Footer',
  props: ['activeCount', 'completedCount', 'selectedFilter', 'onShow'],
  data() {
    return {filterTitles, filters};
  },
  methods: {
    ...mapActions(['clearCompleted']),
    handleClear() {
      this.clearCompleted();
    }
  }
};
</script>
