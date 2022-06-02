<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" :error="error"/>
        <h3>Login</h3>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>

        <button class="btn btn-primary btn-block">Login</button>
        <p class="forgot-password text-right">
            <router-link to="forgot">Forgot password?</router-link>
        </p>
    </form>
</template>

<script>
    import axios from 'axios'
    import Error from './Error.vue'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Login',
        components:{
            Error
        },
        data(){
            return{
                email:'',
                password:'',
                error: ''
            }
        },
        methods:{
            async handleSubmit(){
                try {
                    const response = await axios.post('clients', {
                        email: this.email,
                        password: this.password
                    })

                    localStorage.setItem('token', response.data.token)
                    this.$store.dispatch('user', response.data.user)
                    await this.$router.push('/')
                }catch (e) {
                    this.error = 'Invalid username or password'
                }
            }
        }
    }
</script>