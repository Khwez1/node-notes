<template>
    <div class="View">





      <h1>Login</h1>
  
      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        v-model="username"
      >
  
      <br>
  
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        v-model="password"
      >
  
      <br>
  
      <button @click="registerUser" class="registerButton">Register</button>

      {{ $store.state.loggedIn }}

      <span class="buttonSpacing"></span>
  
      <button @click="loginUser" class="loginButton">Login</button>
    </div>
  </template>

<script>
export default{
    data() {
    return{
        username: null,
        password: null
    }
    },
    computed: {
        registerUser(){
            this.$store.dispatch('registerUser', this.$data)
        },
        loginUser(){
            console.log('test')
            this.$store.dispatch('loginUser', this.$data)
        },
    },
    methods:{
        //function that is created
        //attached it to the submit button
        submitData(){
           console.log(this.$data.email)
           //this is the only place because that can handle asycronous functions
           //the data is only being saved when it is being used
           this.$store.dispatch('login',this.$data)
        },
        loginData(){
            console.log('testing')
            this.$store.dispatch('submitData', this.$data)
        }
    }
}
</script>

<style scoped>
.View {
  text-align: center;
  margin-top: 50px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.registerButton {
  background-color: #4caf50;
  color: white;
}

.loginButton {
  background-color: #2196F3;
  color: white;
}

button:hover {
  opacity: 0.8;
}

.buttonSpacing {
  margin-left: 10px; /* Adjust the spacing as needed */
  display: inline-block;
}
</style>

