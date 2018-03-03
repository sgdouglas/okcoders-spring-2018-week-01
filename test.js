#!/usr/bin/env node

var name = "Sean";
var born = 1971;
var year = 2018;
var age = year - born;

console.log("My name is " + name + ".");
console.log("I am " + age +" years old.");

if ( age > 40 ){
	console.log("Damn... I am OLD!!");
} else if ( age == 40 ) {
	console.log("Soon I will be old as well.")
} else {
	console.log("I hate you!")
}