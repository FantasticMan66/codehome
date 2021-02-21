window.myclick = ()=>{
   // document.getElementById('textarea').value;
    // var el = document.getElementById('myiframe');
    
    var el = window.document.getElementsByTagName("iframe")[0];
    var mydocument = el.contentDocument || el.contentWindow.document;
    mydocument.write(document.getElementById('textarea').value);
    mydocument.close();
    console.log(document);
}