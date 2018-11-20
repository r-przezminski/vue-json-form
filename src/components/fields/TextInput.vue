<template>
  <div class="form__text">
    <label :for="name">{{ label }}</label>
    <input :id="name" type="text" :name="name" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: ['name', 'label', 'placeholder']
}
</script>

<style>
  .form__text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

.form__text input {
    width: 300px;
    height: 30px;
    padding: 10px;
    border: solid 1px #55a3bd;
    outline: none;
    transition: box-shadow .2s ease-in-out;
  }

.form__text input:focus {
    box-shadow: -1px -1px 15px -4px #55a3bd;
}

@media screen and (max-width: 640px) {
  .form__text {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

