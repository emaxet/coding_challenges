var array = [10, 2, 5, 1, 9];
array.sort(function(a, b) {
  return (a - b);
});

console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort((a, b) => {
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();
  if (nameA < nameB) { // If the first comparison operand is less than the subsequent = return -1 so that the lower precedes the higher.
    return -1;
  }
  if (nameA > nameB) { // If the first operand is greater than the next - return 1 so that it comes after
    return 1;
  }
  return b.age - a.age; // If the name starts with the same letter, return >0 so the higher age gets priority.
});

console.log(students);