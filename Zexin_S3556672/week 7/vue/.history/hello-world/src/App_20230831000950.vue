<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: 'Users:',
      users: [],
      isLoading: true
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
        this.isLoading = false;
      })
      .catch(error => {
        console.error(error);
        this.isLoading = false;
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
