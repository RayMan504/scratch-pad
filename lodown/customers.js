#!/usr/bin/env node

'use strict';

var lodown = require("./lodown");

var customers = require("./data/customers.json");

var genders = lodown.reduce(customers, function(memo, customer) {
    if(memo[customer].gender === "male") {
        memo[customer].gender += 1;
    } else {
        memo[customer].gender += 1;
    }
    return memo;
}, {male: 0, female: 0});