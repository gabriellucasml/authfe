<template>
    <div>
        <h3 v-if="user">
            Hi, {{user.first_name}} {{user.last_name}}
        </h3>
        <h3 v-if="!user">
            Hello, you are not logged in!
        </h3>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        computed:{
            ...mapGetters(['user'])
        }
    }
</script>