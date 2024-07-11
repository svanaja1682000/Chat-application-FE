import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = ({socket}) =>{
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem('userName', userName);
        //sends the username and socket ID to the Node.js server
        socket.emit('newUser', { userName, socketID: socket.id });
        navigate('/chat');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Sign in to the chat application</h1>
            <label htmlFor="userName"> UserName</label>
            <input type ="text" name ='userName' placeholder="enter userName" value = {userName} onChange={(e)=>{
                setUserName(e.target.value)
            }}/> 
            <button> SIGN IN</button>
        </form>
    )
}

export default Home