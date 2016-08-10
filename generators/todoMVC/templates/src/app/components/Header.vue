<template>
  <header class="header">
    <h1>todos</h1>
    <todo-text-input
      :new-todo="true"
      :on-save="handleSave"
      placeholder="What needs to be done?"
    ></todo-text-input>
  </header>
</template>

<script>
import {mapActions} from 'vuex';
import TodoTextInput from './TodoTextInput.vue';

export default {
  name: 'Header',
  methods: {
    ...mapActions(['addTodo']),
    handleSave(text) {
      if (text.length !== 0) {
        this.addTodo(text);
      }
    }
  },
  components: {
    'todo-text-input': TodoTextInput
  }
};
</script>
