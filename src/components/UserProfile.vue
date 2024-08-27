<template>
    <a-button v-if="!user.isLogin" @click="login">
        登录
    </a-button>

    <div v-else>

        <a-dropdown-button class="user-profile-component" >

            <router-link> {{user.userName}}</router-link>

            <template #overlay>

                <a-menu>
                    <a-menu-item key="0" @click="logout">退出</a-menu-item>
                </a-menu>
            </template>

        </a-dropdown-button>


    </div>

</template>


<script lang='ts'>
import { defineComponent ,PropType} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import {message} from 'ant-design-vue'

import {UserProps} from '../sotre/index'

export default defineComponent({
    name:'user-profile',
    props:{
        user: {
            type: Object as PropType<UserProps>,
            required:true
        }
    },
    setup() {

        const store=useStore()

        const router=useRouter()


        const login=()=>{
            store.commit('login')
            message.success("登录成功",2)
            
            
        }
        const logout=()=>{
            store.commit('logout')
            message.success("退出登录成功",2)

            setTimeout(() => {
                router.push('/')
                
            }, 1000);
        }


        return{

            login,
            logout
        }
        
        
        
    }
})
</script>
