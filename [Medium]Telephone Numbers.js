var N = parseInt(readline());
printErr("N: " + N);

var numbers = [];
for (let i = 0; i < N; i++) {
    numbers[i] = readline();
    printErr("number[" + i + "]: " + numbers[i]);
}

printErr("---");

let Node = function() {
	this.keys = new Map();
};

let Trie = function() {
	this.root = new Node();

	this.add = function(input, node = this.root) {
		if (input.length === 0) {
			return;
		} else if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node());
		}
		
		return this.add(input.substr(1), node.keys.get(input[0]));
	};

	this.elementsCount = function() {
		let count = 0;
		
		let search = function(node = this.root) {
		    count += node.keys.size;
		    
			if (node.keys.size !== 0) {
				for (let number of node.keys.keys()) {
					search(node.keys.get(number));
				}

			}
		};

		search(this.root);
		return count;
	};
};

phoneTrie = new Trie();

for (let i = 0; i < numbers.length; i++) {
    phoneTrie.add(numbers[i]);
}

print(phoneTrie.elementsCount());

