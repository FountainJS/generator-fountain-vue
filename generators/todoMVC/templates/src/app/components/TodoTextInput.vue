<template>
  <input
    class="textInput"
    v-bind:class="{'edit': editing, 'new-todo': newTodo}"
    v-model="input"
    v-on:keypress="handleSubmit($event)"
    v-on:blur="handleBlur"
    v-bind:placeholder="placeholder"
    type="text"
  />
</template>

<script>
export default {
  name: 'TodoTextInput',
  props: ['text', 'editing', 'newTodo', 'placeholder', 'onSave'],
  ready() {
    this.$el.focus();
  },
  data() {
    return {
      input: this.text
    };
  },
  methods: {
    handleBlur() {
      if (!this.newTodo) {
        this.onSave(this.input);
      }
    },
    handleSubmit(e) {
      if (e.keyCode === 13) {
        this.onSave(this.input);
        if (this.newTodo) {
          this.input = '';
        }
      }
    }
  }
};
</script>
