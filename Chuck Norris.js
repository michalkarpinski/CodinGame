var message = readline();

var messageBinary = "";
for (let i = 0; i < message.length; i++) {
    let character_binary = message.charCodeAt(i).toString(2);
    character_binary = '0'.repeat(7 - character_binary.length) + character_binary;
    messageBinary += character_binary;
}

var output = [];
for (let i = 1, count = 1; i <= messageBinary.length; i++, count++) {
    prevChar = messageBinary.charAt(i-1);
    currChar = messageBinary.charAt(i);
    
    if (prevChar != currChar) {
        output.push((prevChar == "1" ? "0" : "00") + " " + "0".repeat(count) + " ");
        count = 0;
    }
}
output = output.join("").trim();

print(output);
