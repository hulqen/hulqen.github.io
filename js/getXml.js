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

function getideFunction(tilz) 
{
  for (i=0;i<x.length;i++)
  { 
    if(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue == tilz)
    {
      document.write('<p>Found at = '+i+'</p>');
    }else{
      document.write('<p>Did not found! Try again!</p>');
      // document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
    }
    
  }
}

v=xmlDoc.documentElement;
y=v.childNodes;

function gettagFunction() 
{
  
  for (i=0;i<v.length;i++)
  { 
    for (z=0;z<y[i].childNodes.length;z++)
  {
    document.write('<p>Found at = '+i+'</p>');
    document.write(y[i].childNodes[z].nodeName);
    }   
 }
  
}


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
      document.write("<p>"+i+"</p>");
    document.write("</div>");
  document.write("</div>");
}

function loopElemetinlistFunction() 
{
  for (i=0;i<x.length;i++)
    { 
    document.write("<li>");
    document.write('<div id="productBox">');
      document.write('<div id="productPicture">');
        document.write('<img src="'+x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue+'">');
      document.write("</div>");

      document.write('<div id="productDescription">');
        document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"<br>");
        document.write(x[i].getElementsByTagName("CREATOR")[0].childNodes[0].nodeValue+"<br>");
        document.write(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
        document.write("<p>"+i+"</p>");
      document.write("</div>");
    document.write("</div>");
    document.write("</li>");
  }
}


function loopNumElemetinlistFunction(k,j) 
{
  for (i=k;i<j;i++)
    { 
    document.write("<li>");
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
    document.write("</li>");
  }
}



function imgFunction(i) 
{
  document.write('<img src="'+x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue+'">');
}


function titelFunction(i) 
{
  document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
}


function creatorFunction(i) 
{
  document.write(x[i].getElementsByTagName("CREATOR")[0].childNodes[0].nodeValue);
}


function priceFunction(i) 
{
  document.write(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
}

function searchXML(input)
{
  size = input.length;
  for (i=0;i<x.length;i++){
    // startString = firstname.substring(0,size);
    startString = xmlDoc.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue.substring(0,size);
    if (startString.toLowerCase() == input.toLowerCase()){
        title=xmlDoc.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue;
        console.log(title + " " + i);
        break;
    } else {
      text = "The contact does not exist.";
      $("#search-result").html(text);
    }
  }
}
 








