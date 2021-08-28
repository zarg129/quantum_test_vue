<template>
  <ul class="list" v-for="(post, index) in listOfPostsFiltered" :key="index">
    <li
      @click="setSelectedPostId(post.id)"
      v-bind:class="
        selectedPostId === post.id ? 'listItemDefault' : 'listItemActive'
      "
    >
      {{ post.id }}. {{ post.username }}: {{ post.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "PostList",
  props: ["items", "setSelectedPostId", "filterValue", "selectedPostId"],
  computed: {
    listOfPostsFiltered: function () {
      let filtredList = this.items.filter((post) =>
        post.username.toLowerCase().includes(this.filterValue.toLowerCase())
      );

      return this.filterValue.length > 0 ? filtredList : this.items;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  height: 100%;
  max-width: 400px;
  margin: 30px;
}

.listItemDefault {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5rem;
  padding-bottom: 15px;
  color: green;
  cursor: pointer;
}

.listItemActive {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.5rem;
  padding-bottom: 15px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
