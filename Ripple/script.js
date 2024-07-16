const firebaseConfig = {
    apiKey: "AIzaSyA_nq88wD0IVoI3dixGLS-H6w5cAJV-K_s",
    authDomain: "ripple-r1708.firebaseapp.com",
    projectId: "ripple-r1708",
    storageBucket: "ripple-r1708.appspot.com",
    messagingSenderId: "43247187962",
    appId: "1:43247187962:web:7a26b18be3cbcf03cbd643",
    measurementId: "G-3PYC9D3WPG"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

let username = "";


document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

const SHARED_PASSWORD = "ssss"; // Replace with your shared password
let username = "";

function login() {
    const enteredUsername = document.getElementById('username').value.trim();
    const enteredPassword = document.getElementById('password').value;

    if (enteredUsername && enteredPassword === SHARED_PASSWORD) {
        username = enteredUsername;
        document.getElementById('login-container').style.display = 'none';
        document.querySelector('.chat-container').style.display = 'block';
        loadMessages();
    } else {
        alert("Invalid username or password.");
    }
}

function sendMessage() {
    const inputField = document.getElementById('chat-input');
    const message = inputField.value.trim();

    if (message) {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.innerHTML = `<span>${username}: ${message}</span><span class="timestamp">${timestamp}</span>`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        inputField.value = '';
    }
}

function loadMessages() {
    const chatBox = document.getElementById('chat-box');
    // Dummy initial message for demonstration
    const initialMessage = document.createElement('div');
    initialMessage.classList.add('message', 'other');
    initialMessage.innerHTML = `<span>Chat Bot: Welcome to the chat!</span><span class="timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;
    chatBox.appendChild(initialMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}
