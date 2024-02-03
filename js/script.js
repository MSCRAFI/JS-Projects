const messageArray = [];
document.querySelector('.sendBtn')
    .addEventListener('click', () => chatAction());
document.getElementById('message-input')
    .addEventListener('keydown', (key) => {
        if (key.key === 'Enter') {
            chatAction();
        }
    });
function chatAction() {
    const msgInputElement = document.getElementById('message-input');
    const chatDivElement = document.querySelector('.chat-box');
    const getMessage = msgInputElement.value;
    let msgHTML = '';
    if (getMessage !== '') {
        messageArray.push(getMessage);
        messageArray.reverse().forEach((item) => {
            msgHTML += `<p class="message">${item}</p>`;
            chatDivElement.innerHTML = msgHTML;
            msgInputElement.value = '';
        });
    }

}