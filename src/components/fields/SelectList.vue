<template>
  <div class="form__select">
    <label :for="name">{{ label }}</label>
    <select :name="name" :id="name" :multiple='multi'>
      <option v-for="(option, i) in options" :key="i">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['name', 'label', 'options', 'multi']
}
</script>

<style>
.form__select {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form__select select {
  width: 300px;
  height: 30px;
  background-color: transparent;
  border: solid 1px #55a3bd;
  outline: none;
}

@media screen and (max-width: 640px) {
  .form__select {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>