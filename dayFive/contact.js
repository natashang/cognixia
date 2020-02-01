/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<script>
*/

    // ES6 syntax
    class Contact {
        constructor(name, email, cellno) {
            this.name = name;
            this.email = email;
            this.cellno = cellno;
        }

        show() {

            /*
                console.log(this.name, this.email, this.cellno);
                console log: undefined undefined undefined
                because the this keyword points to the function() in setTimeout(), not in the class Contact
                so these variables this.name, etc. are undefined 

                using the arrow function, the this keyword will work correctly
                now 'this' points to the class, not the function
            */
            setTimeout(() => {
                console.log(this.name, this.email, this.cellno);
            }, 2000);

            
        }
    }

    var c = new Contact ("Jane", "j@hello.com", "123456789");
    c.show();


/*
</script>

<body>
    
</body>
</html>
*/