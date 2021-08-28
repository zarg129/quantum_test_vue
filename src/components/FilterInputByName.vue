<template>
  <div class="container">
    <h1 class="title">Select user:</h1>
    <input
      @input="updateFilterValue"
      placeholder="Search by username"
      class="nameInput"
    />
  </div>
</template>

<script>
export default {
  name: "FilterInputByName",
  props: ["filterValue"],
  methods: {
    updateFilterValue: function (e) {
      this.$emit("update:filterValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 100px 50px;
  text-align: center;
}

.title {
  font-family: sans-serif;
  font-size: 32px;
  color: gray;
  margin-bottom: 20px;
}

.nameInput {
  max-width: 400px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid rgb(233, 124, 22);
  padding: 5px 15px 5px;
  color: gray;
}
</style>
