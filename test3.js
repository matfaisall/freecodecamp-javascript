// let a = ['dog', 'cat', 'bat'];
// a[100] = 'fox';

// console.log(a.indexOf('fox'));

// let x;
// let y = (x = 3) ? true : false;
// console.log(y);

// var a = 10;

// function test() {
//     console.log(a)
//     var a = 20;
//     console.log(a)
// }

// test()

// var test = function() {
//     console.log(10);
// }

// function test() {
//     console.log(20);
// }

// test(); // result : 10
/*
the test variable is assigned an anonymous function
which overrides the named function test. that is why is prints 10.
*/

var name = 'Zone';
var obj = {
    name: 'Study',
    showName: function() {
        console.log(this.name);
        setTimeout(function() {
            console.log(this.name);
        }, 3000)
    }
}

obj.showName();