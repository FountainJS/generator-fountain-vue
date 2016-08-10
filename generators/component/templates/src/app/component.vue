<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  name: '<%- componentName %>',
  data() {
    return {
      text: 'My new component'
    };
  }
};
</script>
