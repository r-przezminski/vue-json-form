<template>
  <Form :schema="schema"></Form>
</template>

<script>
import FieldsCreator from '@/components/FieldsCreator';
import schema from './schema';

export default {
  components: {
    "Form": FieldsCreator,
  },
  data() {
    return {
      schema,
    }
  }
}
</script>

<style>
  * {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #837e87;
  }
</style>