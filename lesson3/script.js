<!-- task one -->
function welcome(name, surname) {
	if ((typeof name !== "string") || (typeof surname !== "string")) {
		console.log("Arguments are not string!");
		return;
	}
	console.log ("Приветствую, " + name + " " + surname)
}

<!-- task two -->
function arraySearch(arr, match) {
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			if (arr[i].indexOf(match) >= 0 ) {
				console.log(true);
				return;
			}
		}
	}
	console.log(arr.indexOf(match) >= 0);
	return;
}

welcome("Mikhail", "Spirin");
welcome("Mikhail", 3);
welcome(1, 3);

arraySearch(['alien', 'zombie', 'vampire'], 'zombie'); // true
arraySearch(['alien', 'zombie', 'vampire'], 'alien'); // true
arraySearch(['alien', 'zombie', 'vampire'], 'human'); // false

arraySearch([23, 'vampire', true, 'alien'], 'vam'); // true
arraySearch([23, 'vampire', 123123123, 'alien'], 'alp'); // false