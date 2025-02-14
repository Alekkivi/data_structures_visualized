
// Create terminal
function startTerminal() {
    const terminal = document.getElementById("terminalContent");

    // Add a line break
    terminal.appendChild(document.createElement("br"));

    // Create a div for the prompt and input field
    const promptDiv = document.createElement("div");
    promptDiv.style.display = "flex";
    promptDiv.style.alignItems = "center";

    // Create the prompt text
    const promptText = document.createElement("span");
    promptText.textContent = "\\localhost>";
    
    // Create the input box for typing commands
    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.autofocus = true;
    inputBox.addEventListener("keypress", handleInput);

    // Add the prompt and input to the terminal
    promptDiv.appendChild(promptText);
    promptDiv.appendChild(inputBox);
    terminal.appendChild(promptDiv);

    // Scroll to the bottom to focus the input
    terminal.scrollTop = terminal.scrollHeight;
}

// Function to handle input commands
function handleInput(event) {
    const inputBox = event.target;

    // Handle Enter key press and remove empty spaces
    if (event.key === "Enter" && inputBox.value.trim()) {
        const terminal = document.getElementById("terminalContent");

        // Display the command typed by the user
        const commandText = document.createElement("p");
        commandText.textContent = `> ${inputBox.value.trim()}`;
        // Add command above terminal input
        terminal.insertBefore(commandText, inputBox.parentNode);

        // Handle specific commands
        if (inputBox.value.toLowerCase() === "help") {
            const helpText = document.createElement("p");
            helpText.textContent = "Available commands: 'ls', 'cd', help', 'clear'";
            terminal.insertBefore(helpText, inputBox.parentNode);
        } else if (inputBox.value.toLowerCase() === "clear") {
            terminal.innerHTML = "";  // Clear content
            startTerminal();  // Re-init terminal
        } else {
            const responseText = document.createElement("p");
            responseText.textContent = `Command not recognized: ${inputBox.value.trim()}`;
            terminal.insertBefore(responseText, inputBox.parentNode); // Add response above input
        }

        // Clear the input box for the next command
        inputBox.value = "";

        // Auto-scroll to the bottom of the terminal
        terminal.scrollTop = terminal.scrollHeight;
    }
}


// Initialize terminal when the page loads
window.onload = startTerminal;
