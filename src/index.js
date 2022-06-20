import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './assets/sass/vendors/style.scss';
// import '../css/style.css';
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery/dist/jquery.min.js';
// import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery-circle-progress/dist/circle-progress.js'
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';

console.log('hello world')


var student = require('./studentname');
var student1 =  student('Noor', 'hilles');

setTimeout(()=>{alert('hello student')},4000)