
// Create terminal
function InitializeTerminal() {
    clearTerminal()
}

// Function to create the input prompt
function createPrompt() {
    const terminal = document.getElementById("terminalContent");

    // Create a div for the prompt and input field
    const promptDiv = document.createElement("div");
    promptDiv.id = "inputContainer";
    promptDiv.classList.add("input-container");

    // Create the prompt text
    const promptText = document.createElement("span");
    promptText.textContent = "\\localhost>";
    promptText.classList.add("prompt-text");

    // Create the input box for typing commands
    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.classList.add("terminal-input");
    inputBox.addEventListener("keypress", handleInput);

    // Add the prompt and input to the terminal
    promptDiv.appendChild(promptText);
    promptDiv.appendChild(inputBox);
    terminal.appendChild(promptDiv);

    // Auto-scroll to the bottom of the terminal
    terminal.scrollTop = terminal.scrollHeight;

    // Ensure focus remains on the input after clear
    inputBox.focus();
}
// Function to handle input commands
function handleInput(event) {
    const inputBox = event.target;

    // Handle Enter key press and remove empty spaces
    if (event.key === "Enter" && inputBox.value.trim()) {
        const command = inputBox.value.trim(); 

        addTerminalRow(`\\localhost> ${command.length > 20 ? command.substring(0, 30) + "..." : command}`);

        // Help command
        if (command.toLowerCase() === "help") {
            addTerminalRow("Available commands: 'ls', 'cd', 'help', 'clear'");

        // Clear command
        } else if (command.toLowerCase() === "clear") {
            clearTerminal();
            return; // Exit function early after clearing

        // Invalid command
        } else {
            addTerminalRow(`Command not recognized`);
        }

        // Clear the input box for the next command
        inputBox.value = "";

        // Auto-scroll to the bottom of the terminal
        const terminal = document.getElementById("terminalContent");
        terminal.scrollTop = terminal.scrollHeight;
    }
}

// Function to add a new row to the terminal
function addTerminalRow(text) {
    const terminal = document.getElementById("terminalContent");
    const row = document.createElement("p");
    row.textContent = text;
    terminal.insertBefore(row, document.getElementById("inputContainer"));
}

// Function to clear the terminal
function clearTerminal() {
    const terminal = document.getElementById("terminalContent");
    terminal.innerHTML = "";
    addTerminalRow("Welcome to Data Structures Visualized!");
    addTerminalRow("Type 'help' for instructions")
    createPrompt();
}

// Initialize terminal when the page loads
window.onload = InitializeTerminal;
