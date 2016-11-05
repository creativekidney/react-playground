'use strict';
import moment from 'moment';
import styles from '../assets/stylesheets/application.css';

var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log( `Right now: ${rightNow}` );
// "October 23rd 2016, 9:30:24 pm"
