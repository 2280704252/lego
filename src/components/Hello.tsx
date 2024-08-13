interface HelloMsg{
    msg:string
}

const Hello=(props:HelloMsg)=>{

    return(<h1>{props.msg}</h1>)

}

Hello.props=['msg']

export default Hello