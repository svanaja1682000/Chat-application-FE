import { useNavigate } from "react-router-dom";

const ChatBody =({response})=>{
    console.log(response, 'response')
    const navigate = useNavigate()

    const handleLeaveChat = ()=>{
        localStorage.removeItem('userName')
        navigate('/')
        window.location.reload();
    }
    return (
        <div>
            <header className="chat-mainHeader">
             <h1>Hang out with colleagues</h1>
             <button onClick={handleLeaveChat} className="leaveChat-btn"> Leave chat</button>
            </header>

        <div className="message__container">
            {response?.map((message)=>
                message.name === localStorage.getItem('userName') ? ( 
                <div className="message__chats" key = {message.id}>
                    <p className="sender__name">You</p>
                    <div className="message__sender">
                        <p>{message.text}</p>
                    </div>
                </div>
                )
                :
                ( <div className="message__chats" key={message.id}>
                    <p>{message.name}</p>
                    <div className="message__recipient">
                        <p>{message.text}</p>
                    </div>
                </div>
                )
            )}

            {/*This is triggered when a user is typing*/}
            <div className="message__status">
            <p>Someone is typing...</p>
            </div>
      </div>
       
        </div>
    )
}
export default ChatBody;