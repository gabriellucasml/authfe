<template>
    <form @submit.prevent="handleSubmit">
        <h3>Reset Password</h3>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>

        <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password"/>
        </div>

        <button class="bnt bnt-primary bnt-block">Submit</button>
    </form>
</template>

<script>
    import axios from "axios";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Reset',
        data(){
            return{
                password: '',
                password_confirm: ''
            }
        },
        methods:{
            async handleSubmit(){
                const response = await axios.post('recover',{
                    password: this.password,
                    password_confirm: this.password_confirm,
                    token: this.$router.params.token
                })
                console.log(response)
                await this.$router.push('/login')
            }
        }
    }
</script>