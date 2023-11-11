
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const API_KEY="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";
const inputInitHeight = chatInput.scrollHeight;

const createChatli = (message, className) => {
    //Create a chat <li> element with passed message and className
    const chatli = document.createElement("li");
    chatli.classList.add("chat", className);
    let chatContet = className ==="outgoing" ? '<p></p>' : '<span class="material-symbols-outlined">smart_toy</span><p></p>'
    chatli.innerHTML = chatContent;
    chatli.querySelector("p").textContent = message;
    return chatli;
}

const generateResponse = (inconingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = inconingChatLi.querySelector("p");

    //Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ${API_KEY}'
        },
        body: JSON.stringify({
            model: "GPT-3.5-turbo",
            messages: [{role: "user", content: userMessage}]
        })
    }

    //Send POST request to API, get response
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(userMessage) return;
    chatInput.value = "";
    chatInput.style.height = '${inputInitHeight}px';

    //Append the user's message to the chatbox
    chatbox.appendChild(createChatli(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        //Display "Thinking..." messagem while waiting for the response
        const inconingChatLi = createChatli("Thinking...", "inconing")
        chatbox.appendChild(inconingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(inconingChatLi)
    }, 600)
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = '${inputInitHeight}px';
    chatInput.style.height = '${chatInput.scrollHeight}px';
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed Without Shift key and the window
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat)
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggler("show-chatbot"));
