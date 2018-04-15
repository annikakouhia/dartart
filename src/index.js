// change require to es6 import style
import $ from 'jquery';
import './style.scss';

// const $ = require('jquery');
//
let num = 0;

// got how to use setInterval off of w3schools
// got use of ` vs. ' off of stack overflow
setInterval(
  () => {
    $('#main').html(`youve been on this page for ${num} seconds`);
    num += 1;
  },
  1000,
);
