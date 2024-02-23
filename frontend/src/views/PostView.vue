<template>

<div class="view">
        <h1>Add A user</h1>

        <input 
        type="name" placeholder="name" name="name" required v-model="name">

        <br>

        <input type="age" placeholder="age" name="age" required v-model="age">

        <br>

        <button @click="submitData()">Submit</button>


    </div>

</template>

<script>
import { toHandlers } from 'vue';

export default{
    data() {
    return{
        name: "",
        age: null
    }
},

methods: {
    submitData(){
        console.log(this.$data)
        this.$store.dispatch('postFriends',this.$data)
    }
} 
}
</script>


<style>
</style>