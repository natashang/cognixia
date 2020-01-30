
/* Count number of occurrences of each element */
var topics = ['React', 'HTML', 'CSS', 'HTML', 'JS', 'React', 'Angular', 'React'];

var techs = [];
var counts = [];

for (var i = 0; i < topics.length; i++) {
    var notInTechs = techs.lastIndexOf(topics[i]) == -1;

    if (notInTechs) {
        techs.push(topics[i]);
        counts.push(1);
    }

    else {
        var existsIdx = techs.lastIndexOf(topics[i])
        counts[existsIdx]++;
    }
}

for (var i = 0; i < techs.length; i++) {
    console.log(techs[i] + ': ' + counts[i] );
}
