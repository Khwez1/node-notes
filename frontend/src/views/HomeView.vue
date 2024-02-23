<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <button class="editB" @click="getData">Get Friends</button>

    <table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>AGE</th>
      </tr>
      <tbody v-for="item in $store.state.friends" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <button class="delB" @click="deleteFriend(item.name)">Delete</button>
        <button class="editB" @click="editFriend(item.id)">Edit</button>
      </tbody>
    </table>

    <div class="view">
        <h1>Add A user</h1>

        <input 
        type="name" placeholder="name" name="name" required v-model="name">

        <br>

        <input type="age" placeholder="age" name="age" required v-model="age">

        <br>

        <button @click="submitData()">Submit</button>


    </div>


    <div class="card">
      

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return{
        name: null,
        age: null
    }
},
  computed: {
    getData() {
     this.$store.dispatch('getFriends')
    }
  },
  mounted() {
  },
  methods: {
    submitData(){
        console.log(this.$data)
        this.$store.dispatch('postFriends',this.$data)
    },
    deleteFriend(name){
            this.$store.dispatch('deleteFriend', name)
        },
        editFriend(id){
            let edit = {
                id:id,
                name: this.name,
                age: this.age
            }
            this.$store.dispatch('editFriend', edit)
        }
} 
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-height: 100vh; */
  padding-top: 40px;
}

table {
  /* margin-top: 20px; */
  border-collapse: collapse;
  width: 80%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.view {
  margin-top: 20px;
  text-align: center;
}

.view input {
  margin-bottom: 10px;
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.view button, .editB, .delB {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.view button {
  background-color: #4caf50;
  color: white;
}

.editB {
  background-color: #2196F3;
  color: white;
}

.delB {
  background-color: #f44336 !important;
  color: white;
}

.view button:hover, .view button.edit:hover, .view button.delete:hover {
  opacity: 0.8;
}

</style>