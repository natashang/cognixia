
var topics = ["React", "HTML"];

// appends an element to the end of the array
// React,HTML,Angular
topics.push("Angular");
console.log(topics);

// appends an element to the beginning of the array
// Vue,React,HTML,Angular
topics.unshift("Vue")
console.log(topics);

// removes an element from the end of the array
// Vue,React,HTML
topics.pop()
console.log(topics);

// removes an element from the beginning of the array
// React,HTML
topics.shift()
console.log(topics);

// appends another array
// React,HTML,Java,C,Scala,Kotlin
var prg = ['Java', 'C', 'Scala', 'Kotlin'];
var comb = topics.concat(prg, ['Haskel', 'Swift', 'Clojure']);
console.log(comb);
