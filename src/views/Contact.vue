<template>
  <div>
    <h1>数量: {{ count }}</h1>
    <button @click="add">add</button>
    <div>{{ object.foo }}</div>
  </div>
</template>
<script>
import { ref,reactive } from "vue";
export default {
  props: {
    name: String,
  },
  setup(props, context) {
    console.log("props", props);
    console.log("ref", ref);
    const count = ref(0);
    const object = reactive({ foo: '顾家家居' })
    console.log('reactive',reactive)
    console.log("context", context);
    const add = () => {
      count.value++;
    };

    return {
      count,
      object,
      add,
    };
  },
};
</script>

<style scoped>
</style>
