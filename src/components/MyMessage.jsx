const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img src={message.attachments[0].file}
                alt="message attachment" className="message-img" style={{ float: "right" }} />
        )
    }
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            <pre>{message.text}</pre></div>
    )
}

export default MyMessage;