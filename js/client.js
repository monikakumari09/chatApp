const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageImp');
const messageContainer = document.querySelector('.container');

const append = (message, position) => {
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

}

const userName = prompt("Enter your name to join");
socket.emit('new-user-joined', userName);
 
socket.on('user-joined', userName => {
append(`${userName} joined the chat`, 'right')
})