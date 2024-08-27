import type { Module } from "vuex"

import type { GlobalDataProps } from "./index"



export interface UserProps{

    isLogin:boolean,
    userName?:string
}


interface UsersProps{

    user:UserProps
}


const user:Module<UsersProps,GlobalDataProps>={

    mutations:{



        login(state){

            state.user={...state.user,isLogin:true,userName:"xk"}

        },

        logout(state){

            state.user={...state,isLogin:false}
        }
    },
}

export default user