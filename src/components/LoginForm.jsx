import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "e44a6094-8323-4324-b30f-fb58a98e8b08", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username)
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            seterror('Oops, Incorrect credentials.')
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" value={username} onChange={(e) => setusername(e.target.value)} placeholder="Username" required />
                    <input type="password" className="input" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">

                            <span>Start Chatting</span>

                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;