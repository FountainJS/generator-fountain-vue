<template>
  <section class="main">
    <input v-if="todos.length"
      class="toggle-all"
      type="checkbox"
      v-model="checked"
      v-on:click="handleCompleteAll"
      />
    <ul class="todo-list">
      <todo-item
        v-for="todo in todos.filter(selectedFilter.filter)"
        :todo="todo"
      ></todo-item>
    </ul>
    <footer-component v-if="todos.length"
      :completed-count="completedCount"
      :active-count="activeCount"
      :selected-filter="selectedFilter"
      :on-show="handleShow"
    ></footer-component>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import VisibilityFilters from '../constants/VisibilityFilters';
import TodoItem from './TodoItem.vue';
import Footer from './Footer.vue';

export default {
  name: 'MainSection',
  props: ['filter'],
  data() {
    return {
      mainFilter: this.filter
    };
  },
  computed: {
    ...mapGetters(['todos']),
    checked() {
      return this.completedCount === this.todos.length;
    },
    completedCount() {
      return this.todos.reduce((count, todo) =>
        todo.completed ? count + 1 : count,
        0
      );
    },
    activeCount() {
      return this.todos.length - this.completedCount;
    },
    selectedFilter() {
      return VisibilityFilters[this.mainFilter];
    }
  },
  methods: {
    ...mapActions(['completeAll']),
    handleCompleteAll() {
      this.completeAll();
    },
    handleShow(filter) {
      this.mainFilter = filter;
    }
  },
  components: {
    'todo-item': TodoItem,
    'footer-component': Footer
  }
};
</script>
