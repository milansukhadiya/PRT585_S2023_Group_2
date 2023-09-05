<template>
    <div>
      <h1>{{ title }}</h1>
      <button @click="handleClick">Click me</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'My Component'
      };
    },
    methods: {
      handleClick() {
        alert('Button clicked!');
      }
    }
  };
  </script>
  
  <style>
  h1 {
    color: blue;
  }
  </style>
  