/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        */
        function Product(id, name, model) {
            this.id = id;
            this.name = name;
            this.model = model;

            this.display = function () {
                console.log(this.id + ", " + this.name + ", " + this.model);
            };

        }

        var products = [
            new Product(1, 'Pen', 'P1'),
            new Product(2, 'Marker', 'P2'),
            new Product(3, 'Note book', 'P3'),
            new Product(3, 'Pencil', 'P4')

        ];

        /*
        products.forEach(function(p) {
            console.log(p);
        });
        */



        // .find() returns the first element that matches the boolean condition
        //var pf = products.find(function (p) {

        // .filter() returns all elements that match the boolean condition
        var pf = products.filter(function (p) {

            return (p.id==3);
        });
        console.log(pf);

/*
    </script>
</body>
</html>
*/