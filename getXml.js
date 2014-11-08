if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","databas.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 


var x=xmlDoc.getElementsByTagName("CD");



function allFunction() 
{
  for (i=0;i<x.length;i++)
  { 
    document.write('<div id="productBox">');
      document.write('<div id="productPicture">');
        document.write('<img src="'+x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue+'">');
      document.write("</div>");

      document.write('<div id="productDescription">');
        document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"<br>");
        document.write(x[i].getElementsByTagName("CREATOR")[0].childNodes[0].nodeValue+"<br>");
        document.write(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
      document.write("</div>");
    document.write("</div>");
  }
}





function oneElemetFunction(i) 
{
  document.write('<div id="productBox">');
    document.write('<div id="productPicture">');
      document.write('<img src="'+x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue+'">');
    document.write("</div>");

    document.write('<div id="productDescription">');
      document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"<br>");
      document.write(x[i].getElementsByTagName("CREATOR")[0].childNodes[0].nodeValue+"<br>");
      document.write(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
    document.write("</div>");
  document.write("</div>");
}
















