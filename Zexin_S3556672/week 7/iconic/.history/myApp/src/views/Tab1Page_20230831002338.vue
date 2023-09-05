<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <h1>Users:</h1>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <ul>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
          </ul>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
  data() {
    return {
      users: [],
      isLoading: true
    };
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
});
</script>

<style>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}
</style>
