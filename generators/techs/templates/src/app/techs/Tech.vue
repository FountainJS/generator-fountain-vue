<template>
  <div class="tech">
    <img class="tech-logo" v-bind:src="tech.logo"/>
    <h3 class="tech-h3">
      {{ tech.title }}
    </h3>
    <p>{{ tech.text1 }}</p>
    <p>{{ tech.text2 }}</p>
  </div>
</template>

<script>
export default {
  name: 'Tech',
  props: ['tech']
};
</script>
