var singular = ["hat", "controller", "computer", "pizza"];

function map(collection, criteria) {
  var output = [];
  collection.forEach((elm) => {
    output.push(criteria(elm));
  });
  return output;
}

var plural = map(singular, function(word){
  return word + "s";
});

console.log(plural);

