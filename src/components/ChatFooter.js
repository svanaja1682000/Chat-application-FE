import { useState } from "react";

const ChatFooter =({socket})=>{
    const [message, setMessage] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({userName: localStorage.getItem('userName'),message});
        if(message.trim() && localStorage.getItem('userName')){
            socket.emit('sendMessage', {
                text: message,
                name:localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                SocketId: socket.id
            });
        }
        setMessage('')
    }
    return (
        <div>
        <h1>Chat Footer</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type='text' name='message' value= {message} placeholder="type message" onChange={(e)=>{
                setMessage(e.target.value)
            }}/> 
            <button>SEND</button>
        </form>
        </div>
    )
}
export default ChatFooter;