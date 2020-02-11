function getData () {
    let parsed = "pracOne.json"
    //console.log(parsed)

    fetch(parsed).then((res) => {
        return res.json();
    }).then((data) => {
        
        for (let d of data.empdetails) {
            //console.log(d)
            var ol = document.querySelector('ol')
            var li = document.createElement('li')
            //console.log(d.empname)
            li.textContent = d.empname +" " + d.empid + " " + d.emplocation + " " + d.email + " " + d.salary
            ol.append(li)
        }
        
    });
}