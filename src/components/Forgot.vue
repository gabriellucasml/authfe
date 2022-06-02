<template>
    <form @submit.prevent="handleSubmit">
        <div v-if="message" class="alert alert-success" role="alert">
            {{message}}
        </div>

        <error v-if="error" :error="error"/>

        <h3>Forgot Password</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
    </form>
</template>

<script>
    import axios from "axios";
    import Error from './Error.vue'

    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Forgot',
        components:{
          Error
        },
        data(){
            return{
                email: '',
                message: '',
                error: ''
            }
        },
        methods: {
            async handleSubmit(){
                try {
                    await axios.post('forgot', {
                        email: this.email
                    })

                    this.message = 'Email sent successfully'
                    this.error = ''
                }catch (e) {
                    this.error = 'An error occurred'
                    this.message = ''
                }
            }
        }
    }
</script>