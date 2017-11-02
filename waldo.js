function findWaldo(arr, found) {
  arr.forEach((person) => {
    if (person === "Waldo") {
      var waldoIndex = arr.indexOf(person);
      found(waldoIndex);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);