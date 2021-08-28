<template>
  <div class="app">
    <header class="filterInputBLock">
      <FilterInputByName v-model:filterValue="filterValue" />
    </header>

    <main class="main">
      <div class="listBlock">
        <PostList
          :items="items"
          :setSelectedPostId="setSelectedPostId"
          :filterValue="filterValue"
          :selectedPostId="selectedPostId"
        />
      </div>
      <div class="detailsBlock">
        <PostItemDetails :items="items" :selectedPostId="selectedPostId" />
      </div>
    </main>
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import PostItemDetails from "./components/PostItemDetails.vue";
import FilterInputByName from "./components/FilterInputByName.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    PostList,
    PostItemDetails,
    FilterInputByName,
  },
  data: function () {
    return {
      items: [],
      selectedPostId: null,
      filterValue: "",
    };
  },
  methods: {
    getListOfPosts() {
      axios
        .get("https://6115304aaec65d0017e9dd40.mockapi.io/api/posts")
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => console.log(error));
    },
    setSelectedPostId(id) {
      this.selectedPostId = id;
    },
  },
  created() {
    this.getListOfPosts();
  },
};
</script>

<style>
.app {
  height: 100%;
  max-height: 100vh;
}

.filterInputBLock {
  width: 100%;
  border-bottom: 3px solid rgb(233, 124, 22);
}

.main {
  max-width: 1024px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
}

.listBlock {
  border-right: 3px solid rgb(233, 124, 22);
  max-width: 400px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.detailsBlock {
  width: 100%;
  position: relative;
}
</style>
