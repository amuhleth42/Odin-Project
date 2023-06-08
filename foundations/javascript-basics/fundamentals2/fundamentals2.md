# JavaScript Fundamentals Part 2

## Data Types

dynamically typed -> a var can store any type

8 basic data types:
Number, BigInt, String, Bool,
null, "undefined", Object, Symbol


BigInt : recently added, to avoid the big int precision problem (more than 15 digits)
-> literal with n
let x = 839423473472847328234234244n;

String : with double quotes, single quotes or backticks [`]
backticks : "extended functionality" quotes
-> you can embed variables and expression with ${}

let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

all string methods return a new string, don't modify the original
-> we say that strings are immutable, they are all const

str[] : it exist and it is read only
str[0] = 'A'; -> no error but don't work

str.split("") -> convert a string into an Array


null : it's a type of its own
what it is not : null pointer, non existing object
what it is : "nothing", "empty", "value unknown"

undefined == value is not assigned

let x = undefined -> technically possible but to avoid please

Object : opposed to primitive value
a collection of data

Symbol : a unique identifier to object
it's a primitive data type (opposed to object)

typeof null -> object : it's an error kept for compatibility

typeof alert -> function : actually function is not a type, it's an object