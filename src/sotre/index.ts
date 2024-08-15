import {createStore} from 'vuex'


export interface UserProps{
    isLogin:boolean,
    userName?:string
}


export interface TemplateProps{

    id:number,
    title:string,
    coverImg:string,
    author:string,
    copiedCount:number
}

export interface GlobalDataProps{
    user:UserProps;
    templates:TemplateProps[]


}


const testData:TemplateProps[]=[

    {id:1,coverImg: 'https://sns-webpic-qc.xhscdn.com/202408131534/de3652d4d3e75c9cf54ae9b879a9eb12/1000g0082qd9jne4ji00g5nm03dug8dg8o52ijjo!nd_dft_wlteh_webp_3',title:"夏天",author:'XX',copiedCount:1},
    {id:2,coverImg: 'https://sns-webpic-qc.xhscdn.com/202408151605/ba0717ea09c604581b09db624ea8c6f1/1040g2sg31635rbu01e705n4v9ut5m1aih5g9j30!nd_dft_wlteh_webp_3',title:"给男朋友妈妈发哪张照片呀",author:'XXxx',copiedCount:2},
    {id:3,coverImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title:"美女",author:'XXxx',copiedCount:2},
    {id:4,coverImg: 'https://sns-webpic-qc.xhscdn.com/202408151650/132b4e131f40f825e74af3c2d6069669/1040g008315kbh3dcio005nbj1o309ag64hj5gs0!nd_dft_wgth_webp_3',title:"我们是一家贵阳中古黑胶唱片店",author:'Jump Records跃動唱片',copiedCount:2},

    {id:5,coverImg: 'https://sns-webpic-qc.xhscdn.com/202408151651/08f3b68ed577a17e2b329ff35e5e9244/1040g2sg316000c4j0u805oh0mprk10l4rrtivag!nd_dft_wlteh_webp_3',title:"贵阳图书馆自习",author:'Jump Records跃動唱片',copiedCount:2},

    {id:6,coverImg: 'https://sns-webpic-qc.xhscdn.com/202408151650/132b4e131f40f825e74af3c2d6069669/1040g008315kbh3dcio005nbj1o309ag64hj5gs0!nd_dft_wgth_webp_3',title:"我们是一家贵阳中古黑胶唱片店",author:'Jump Records跃動唱片',copiedCount:2},

    {id:7,coverImg: 'https://sns-webpic-qc.xhscdn.com/202408151650/132b4e131f40f825e74af3c2d6069669/1040g008315kbh3dcio005nbj1o309ag64hj5gs0!nd_dft_wgth_webp_3',title:"我们是一家贵阳中古黑胶唱片店",author:'Jump Records跃動唱片',copiedCount:2}


]

const store=createStore<GlobalDataProps>({

    state:{
        templates:testData,
        user:{isLogin:false}
    },


    getters:{


        getTemplateById:(state)=>(id:number)=>{

            return state.templates.find(t=>t.id===id)


        }
    }
})



export default store