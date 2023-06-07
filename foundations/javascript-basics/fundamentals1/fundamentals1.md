# JavaScript Fundamentals Part 1

Internal JS

<body>
    <script>
    </script>
</body>


External JS

<script src="javascript.js"></script>

## Variables

var, const or let

never use var !
always let, or const

## Numbers

js has only one "type" for numbers
int and float, scientific notation
-> always 64bit double

int accurate up to 15 digits

new operator : exponentiation **
5 ** 2 == 25
same as
Math.pow(x, 2)

+ -> with numbers, addition
+ -> with strings,  string concat
+ -> with number and string, string concat
+ -> with string and number, string concat

let x = 10
let y = 20
let y = "The result is: " + x + y;
-> The result is: 1020

let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
-> 3030     because operator priority

## Numeric Strings

js strings have a "numeric content"
you can divide strings, multiply strings

NaN == not a number
non-numeric string -> NaN

isNaN() -> really useful

typeof keyword : tells the type of a variable
typeof "salut" -> string
typeof 10 -> number
typeof Nan -> number

Infinity, -Infinity -> number
division by 0 -> Infinity

0x.. -> hex

x.toString() function : output number in base 2 to 36

## Numbers as Objects

let x = 123; -> primitive value from literal
lex y = new Number(123); -> defined as object

useless and harmful to create Number objects

x == y -> true
x === y -> false

comparing two js objects always returns false

== -> "loose equality"
type coercion -> comparison
=== -> "strict equality"
-> if type differ -> false



JS type coercion rules :
if one string -> the other to string
if one number -> the other to number
if one bool -> bool to number (0 or 1)
if one obj and one primitive value -> obj to prim val
if one is null or undefined -> other should be too, or false