<template>
    <form  class="form-container" @submit.prevent>
        <h1>Login</h1>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" v-model="input.email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw"  v-model="input.password" required>

        <button type="submit" class="btn login" >Login</button>
        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    </form>
</template>

<script>
export default {
    name:'Login',
    props:['display'],
    data(){
        return{
            input:{
                email:null,
                password: null
            }
        }
    },
    metheds:{
        closeForm(){
            //Emit back to the parent.
            this.$emit('closeForm');
        }
    },
    mounted(){
        //Check if we are to display the componet
        this.$el.querySelector('.login').addEventListener('click', () =>  {
            //Update the state with the auth data 
            this.$store.dispatch('Authdata', this.input)
            this.$store.state.authData = this.input
            //Emit back to the parent to handl the logi.
            this.$emit('login')
        })
    }
}
</script>

<style>

</style>