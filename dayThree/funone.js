
        function f1() {
            console.log('hiiiiiiiiiiiiiiiiiiiiiii');
        }       

        // f1();

        function sq(n) {
            //f1();
            return n*n;
        }

        function sumTwo (n, m) {
            return n + m;
        }

        var res = sq(10);
        console.log(res);

        var num1 = 3;
        var num2 = 534;
        console.log(sumTwo(num1, num2));

        function x(n) {
            n++;
        }

        function y() {
            var a = 100;
            x(a);
            console.log(a);
        }
        y();
