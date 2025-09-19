
window.onload = function () {
    alert("Welcome to Crochet World");
};


function checkStock(productId, inStock) {
    let element = document.getElementById(productId);

    if (inStock) {
        element.innerHTML = "Available";
    } else {
        element.innerHTML = "Out of Stock";
    }
}
function sendMessage() {
    let input = document.getElementById("user-input").value.toLowerCase();
    let chatLog = document.getElementById("chat-log");

    if (input.trim() === "") return; // prevent empty msg

    // Show user message
    let userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input;
    chatLog.appendChild(userMsg);

    // Bot reply
    let botReply = document.createElement("p");
    botReply.textContent = "Bot: " + getBotResponse(input);
    chatLog.appendChild(botReply);

    // Clear input
    document.getElementById("user-input").value = "";

    // Auto-scroll to bottom
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(input) {
    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (input.includes("price")) {
        return "Our products range from Rs. 800 to Rs. 3000.";
    } else if (input.includes("contact")) {
        return "You can reach us at crochetcreations@gmail.com.";
    } else if (input.includes("thanks") || input.includes("thank you")) {
        return "You're welcome! 💖";
    } else {
        return "Sorry, I didn't understand. Please try asking differently.";
    }
}
