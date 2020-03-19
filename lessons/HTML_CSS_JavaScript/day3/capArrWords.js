
var topics = ['rEAcT', 'hTMl', 'cSS', 'jS', 'aNgUlar'];
var newTopics = [];

for (var i = 0; i < topics.length; i++) {
    var firstLetter = topics[i][0].toUpperCase();
    var rest = topics[i].substring(1).toLowerCase();
    newTopics.push(firstLetter + rest);
}
console.log(newTopics );
