document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
    const chatBox = document.getElementById("chatBox");

    if (!userInput || !sendButton || !chatBox) {
        console.error("Error: Missing elements in index.html.");
        return;
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    async function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        // Append user message
        chatBox.innerHTML += `<div class="message user-message"><strong>You:</strong> ${message}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
        userInput.value = "";

        try {
            const response = await fetch("http://127.0.0.1:5000/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: message }),
            });

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            
            // Append bot message with chatbot icon
            chatBox.innerHTML += `
                <div class="message bot-message">
                    <img src="images/chatbot-icon.jpg" class="bot-icon" alt="Bot Icon">
                    <span><strong>Bot:</strong> ${data.answer}</span>
                </div>
            `;
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
        } catch (error) {
            console.error("Error:", error);
            chatBox.innerHTML += `
                <div class="message bot-message">
                    <img src="images/chatbot-icon.jpg" class="bot-icon" alt="Bot Icon">
                    <span><strong>Bot:</strong> Sorry, an error occurred.</span>
                </div>
            `;
        }
    }
});
