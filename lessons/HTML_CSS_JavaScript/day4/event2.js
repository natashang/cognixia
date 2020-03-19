
var topics = ['React', 'HTML', 'JS'];

/*
    Asynchronous, so uses a callback function
    Another way of iterating through an array:
        for every item t of topics,
            alert()? I'll get back to you and do that later
*/
/*
 topics.forEach(function(t) {
     alert(t);
 });
 */

// .map() returns an array object
var utopics = topics.map(function (t) {
    return t.toUpperCase();
});

alert(topics)
alert(utopics);

