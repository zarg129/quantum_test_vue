<template>
  <div class="postDetailsContainer">
    <div v-if="selectedPostId !== null" class="selectedPostDetails">
      <div class="postTitle">{{ selectedItemDetails.title }}</div>
      <div class="postBody">{{ selectedItemDetails.body }}</div>
      <div class="postId">{{ selectedItemDetails.id }}</div>
    </div>

    <div class="defaultContainer" v-else>
      <h1 class="title">Welcome to task</h1>
      <img
        class="logoImg"
        alt="Vue logo"
        src="../assets/logo.png"
        srcset="../assets/logo.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItemDetails",
  props: ["items", "selectedPostId"],

  computed: {
    selectedItemDetails: function () {
      return this.items.find((post) => post.id === this.selectedPostId || "");
    },
  },
};
</script>

<style lang="scss" scoped>
.postDetailsContainer {
  position: absolute;
  max-width: 500px;
  top: 15%;
  left: 50%;
  transform: translate(-25%, 0%);
}

.title {
  font-size: 24px;
  font-family: sans-serif;
  color: gray;
  text-align: center;
  margin-bottom: 20px;
}

.logoImg {
  display: block;
  margin: 0 auto;
  width: 50%;
  height: 50%;
}

.selectedPostDetails {
  transform: translate(-50%, 0%);
  width: 100%;
}

.postTitle {
  font-size: 35px;
  line-height: 2rem;
  font-family: sans-serif;
  color: gray;
  margin-bottom: 30px;
}

.postBody {
  font-family: sans-serif;
  color: gray;
  font-size: 12px;
  line-height: 1.2rem;
  overflow: visible;
}

.postId {
  position: absolute;
  left: 90%;
  top: 50%;
  font-size: 120px;
  color: gray;
  opacity: 0.3;
}
</style>
