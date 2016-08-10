<template>
  <li v-bind:class="{'editing': editing, 'completed': todo.completed}">
    <todo-text-input
      v-if="editing"
      :text="todo.text"
      :editing="editing"
      :on-save="handleSave"
      ></todo-text-input>
    <div class="view" v-if="!editing">
      <input
        class="toggle"
        type="checkbox"
        v-model="todo.completed"
        v-on:click="handleChange(todo.id)"
        />
      <label v-on:dblclick="handleDoubleClick()">{{todo.text}}</label>
      <button class="destroy" v-on:click="handleDestroy(todo.id)"></button>
    </div>
  </li>
</template>

<script>
import {mapActions} from 'vuex';
import TodoTextInput from './TodoTextInput.vue';

export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    return {
      editing: false
    };
  },
  methods: {
    ...mapActions(['completeTodo', 'deleteTodo', 'editTodo']),
    handleDoubleClick() {
      this.editing = true;
    },
    handleChange(id) {
      this.completeTodo(id);
    },
    handleSave(text) {
      if (text.length === 0) {
        this.deleteTodo(this.todo.id);
      } else {
        this.editTodo(this.todo.id, text);
      }
      this.editing = false;
    },
    handleDestroy(id) {
      this.deleteTodo(id);
    }
  },
  components: {
    'todo-text-input': TodoTextInput
  }
};
</script>
