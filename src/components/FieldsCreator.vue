<template>
  <form action="" class="form">
    <component v-for="(val, i) in schema"
      :is="val.fieldType"
      :key="i"
      v-bind="val"
    ></component>
    <input class="form__submit" type="submit" value="Submit">
  </form>
</template>

<script>
import TextInput from '@/components/fields/TextInput';
import NumberInput from '@/components/fields/NumberInput';
import SelectList from '@/components/fields/SelectList';

export default {
  props: ['schema'],
  components: {
    TextInput,
    NumberInput,
    SelectList
  }
}
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    width: 450px;
    margin: 0 auto;
    margin-top: 50px;
    border: solid 1px #55a3bd;
    padding: 30px 15px;
  }

  label {
    padding: 20px 10px;
  }

  label::after {
    content: ': ';
  }

  .form__submit {
    align-self: flex-end;
    width: 120px;
    height: 40px;
    margin-top: 20px;
    background-color: transparent;
    border: solid 2px #55a3bd;
    transition: .2s ease-in-out;
  }

  .form__submit:hover {
    cursor: pointer;
    background-color: #55a3bd;
    color: #ffffff;
  }

  @media screen and (max-width: 640px) {
  .form {
    border: none;
    width: 300px;
    padding: 0;
  }

  label {
    padding: 10px 0;
  }
}
</style>
