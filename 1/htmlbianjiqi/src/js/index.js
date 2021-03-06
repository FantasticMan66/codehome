// require('../css/app.css');
require('../less/main.less');
import {sum,testES6} from './util';
console.log(sum);
window.myclick = ()=>{
   // document.getElementById('textarea').value;
    // var el = document.getElementById('myiframe');
    
    var el = window.document.getElementsByTagName("iframe")[0];
    var mydocument = el.contentDocument || el.contentWindow.document;
    mydocument.write(document.getElementById('textarea').value);
    mydocument.close();
    console.log(document);
    console.log(2);
    console.log('sum(1+2)',sum(1,2));
    testES6();
}