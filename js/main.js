//Global code for function
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

function loopElementInlist() 
{
  for (i=0;i<x.length;i++)
    { 
    document.write("<li>");
    document.write('<div id="productBox">');
      document.write('<div id="thumbnailPicture">');
        document.write('<img src="'+x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue+'" alt="'+i+'">');
      document.write("</div>");

      document.write('<div id="productDescription">');
        document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+" - ");
        document.write(x[i].getElementsByTagName("CREATOR")[0].childNodes[0].nodeValue);
      document.write("</div>");
    document.write("</div>");
    document.write("</li>");
  }
}

function setGrid() 
{
  new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
  });
}


function getTag() 
{
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

  // xmlDoc=loadXMLDoc("books.xml");
  for (i=0;i<3; i++)
  {

  x=xmlDoc.getElementsByTagName("TAG")[i]
  y=x.childNodes[0];
  document.write(y.nodeValue+"<br>");
  }
}

function minMaxList() 
{
  for (i=0;i<4;i++)
    { 
    document.write("<li>");
    document.write('<div id="productBoxThumb">');
      document.write('<div id="thumbnailPicture">');
        document.write('<img src="'+x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue+'">');
      document.write("</div>");

      document.write('<div id="productDescription">');
        document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+" - ");
        document.write(x[i].getElementsByTagName("CREATOR")[0].childNodes[0].nodeValue+" $");
        document.write(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
      document.write("</div>");
    document.write("</div>");
    document.write("</li>");
  }
}

function getImg(i) 
{
  document.write('<img src="'+x[i].getElementsByTagName("IMG")[0].childNodes[0].nodeValue+'">');
}

function getTitel(i) 
{
  document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
}

function getCreator(i) 
{
  document.write(x[i].getElementsByTagName("CREATOR")[0].childNodes[0].nodeValue);
}

function getPrice(i) 
{
  document.write(x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
}

function getDescription(i)
{
  document.write(x[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue)
}


function searchXML(input)
{
  size = input.length;
  for (i=0;i<x.length;i++){
    // startString = firstname.substring(0,size);
    startString = xmlDoc.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue.substring(0,size);
    if (startString.toLowerCase() == input.toLowerCase()){
        title=xmlDoc.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue;
        // console.log(title + " " + i);
        document.cookie = i;
        location.href = "product.html";
        break;
    } else {
      text = "The contact does not exist.";
      $("#search-result").html(text);
    }
  }
}