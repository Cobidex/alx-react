'use strict';
import './body.css';
const $ = require("jquery");
const _ = require("lodash");

$('body').append("<p>Dashboard data for the students</p>");
$("body").append("<button>Click here to get started</button>");
$("body").append("<p id='count'></p>");

let count = 0;

function updateCounter() {
  count += 1;
  $("#count").html(`${count} clicks on the button`);
}

$("button").on(
  'click',
  _.debounce(updateCounter, 500)
);