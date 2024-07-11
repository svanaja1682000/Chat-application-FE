import React, { useEffect, useState } from "react"
import ChatBar from "./ChatBar"
import ChatBody from "./ChatBody"
import ChatFooter from "./ChatFooter"

const Chat = ({socket}) =>{
    const [response, setResponse] = useState([])
    useEffect(()=>{
        socket.on('sendResponse', (data)=>{
            console.log(data, 'data')
            setResponse([...response, data])
        })
    }, [socket, response])
  
    return (
        <>
        <div className="chatPage">
        <div className="chatBar">
            <ChatBar socket={socket}/>
        </div>
        <div className="chatWindow">
            <ChatBody response ={response}/>
            <ChatFooter socket={socket}/>
        </div>
        </div>
        </>
    )
}
export default Chat