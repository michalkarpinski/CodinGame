const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

var MIME = [];
for (let i = 0; i < N; i++) {
    const inputs = readline().split(' ');
    const fileExtension = inputs[0].toUpperCase();
    const mimeType = inputs[1];
    
    MIME[fileExtension] = mimeType;
}

for (let i = 0; i < Q; i++) {
    const fileName = readline();
    const fileExtension = fileName.lastIndexOf('.') != -1 ? fileName.substr(fileName.lastIndexOf('.') + 1).toUpperCase() : null;
    let output = MIME[fileExtension] || "UNKNOWN";
    
    print(output);
}
