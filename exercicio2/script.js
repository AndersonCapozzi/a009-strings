const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
stringResultante = minhaString.trim();

console.log("Quantidade de caracteres com espaço", minhaString.length, 
"Quantidade de caracteres sem espaço", stringResultante.length);


console.log(stringResultante.replace("________", "Sticioso"));



