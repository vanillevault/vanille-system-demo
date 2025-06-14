// Variables y comandos
const consoleEl = document.getElementById("console");
const inputEl = document.getElementById("input");

const commands = {
  help: "Comandos disponibles: help, info, date, clear, whoami, github, vanille",
  info: "Vanille System Demo: consola interactiva web creada para Adrián e Silva Giménez.",
  date: () => new Date().toLocaleString(),
  clear: () => { consoleEl.innerHTML = ""; return ""; },
  whoami: "Adrián e Silva Giménez - Usuario Vanillevault",
  github: "https://github.com/vanillevault/vanille-system-demo",
  vanille: "Vanille es el alter ego de Adrián, un perfil técnico estratégico."
};

function printOutput(text) {
  if(text !== undefined && text !== "") {
    const div = document.createElement("div");
    div.textContent = text;
    consoleEl.appendChild(div);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }
}

inputEl.addEventListener("keydown", function(e) {
  if(e.key === "Enter") {
    let input = inputEl.value.trim().toLowerCase();
    printOutput("> " + input);
    inputEl.value = "";

    if(input in commands) {
      let result = commands[input];
      if(typeof result === "function") {
        result = result();
      }
      if(result !== "") printOutput(result);
    } else if(input === "") {
      // no hacer nada
    } else {
      printOutput("Comando no reconocido. Escribe 'help' para ayuda.");
    }
  }
});

// Mensaje de bienvenida
printOutput("Bienvenido a Vanille System Demo. Escribe 'help' para lista de comandos.");
