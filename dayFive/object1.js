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
        
        // ES5 notation
        // "this" keywords represents this individual function
        function Customer(id, name, email) {
            this.id = id;
            this.name = name;
            this.email = email;
      
            /* In JavaScript, no concept of public or private */
            
            // function declaration for this object
            this.display = function() {
                console.log(this.id + " : " + this.name + " : " + this.email);
            }
        }

        var c = new Customer('1', 'Jo', 'jo@hello.com');
        c.display();

/*
    </script>
</body>
</html>
*/