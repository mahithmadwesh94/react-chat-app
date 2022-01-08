import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />




    return (
        <ChatEngine height="100vh"
            projectID="e44a6094-8323-4324-b30f-fb58a98e8b08"
            userName={localStorage.getItem('username')} userSecret={localStorage.getItem('password')} renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} />
    )
};

export default App;