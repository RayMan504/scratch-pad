#!/usr/bin/env node

'use strict';

var ds = require("./data-structures");
// object that has access to Stack function
console.log(ds);

var deck = new ds.Stack(); 
// constructor function keyword: new
deck.push('a');
console.log(deck.length());

function baseConverter(decNumber, base) {
    var remStack = new ds.Stack();
    var rem = [];
    var baseString = '';
    var digits = '0123456789ABCDEF';
    while(decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while(!remStack.isEmpty()) {
        p(baseString);
        p(digits[remStack.pop()]);
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

function p(value) {
    console.log(value);
}



p(baseConverter(10, 16));


var q = new ds.Queue();
q.enqueue('a');
q.enqueue('b');
p(q.length());
p(q.dequeue());
p(q.length());

var pq = new ds.PriorityQueue();
pq.enqueue("John Fraboni", 1);
pq.enqueue("Ray Millet", 2);
pq.enqueue("Kristen Haydel", 1);
p(pq.dequeue());
p(pq.dequeue());
p(pq.dequeue());

