const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar" style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />
            )}

            {
                message?.attachments?.length > 0 ?
                    <img src={message.attachments[0].file}
                        alt="message attachment" className="message-img" style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }} />
                    :
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                        <pre>{message.text}</pre></div>

            }
        </div>
    )
}

export default TheirMessage;