function getideFunction() 
{

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","books.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 

	// xmlDoc=loadXMLDoc("books.xml");
	x=xmlDoc.documentElement;
	y=x.childNodes;

	for (i=0;i<y.length;i++)
	{
		for (z=0;z<y[i].childNodes.length;z++)
		{
			if(y[i].childNodes[z].nodeName=="author")
			{
				document.write("<br>"+ y[i].childNodes[z].nodeName);
				document.write("<br>"+ y[i].childNodes[z].value);
			}
		}
	}
}

function getideFunction2() 
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
	for (i=0;i<4; i++)
	{

	x=xmlDoc.getElementsByTagName("TAG")[i]
	y=x.childNodes[0];
	document.write(y.nodeValue+"<br>");
	}
}

numID;

function setId(num){

	numID=num;
}

function getId(){

	return numID;
}
// }

// function getideFunction() 
// {

// 	if (window.XMLHttpRequest)
// 	{// code for IE7+, Firefox, Chrome, Opera, Safari
// 	xmlhttp=new XMLHttpRequest();
// 	}
// 	else
// 	{// code for IE6, IE5
// 	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	xmlhttp.open("GET","databas.xml",false);
// 	xmlhttp.send();
// 	xmlDoc=xmlhttp.responseXML; 

// 	// xmlDoc=loadXMLDoc("books.xml");


// 	x=xmlDoc.getElementsByTagName("TAG")[0]
		
// 	y=x.childNodes[0];	
// 	document.write(y.nodeValue);
// 	y=x.childNodes[1];	
// 	document.write(y.nodeValue);
// 	y=x.childNodes[2];	
// 	document.write(y.nodeValue);

// 	x=xmlDoc.getElementsByTagName("TAG")[1]
		
// 	y=x.childNodes[0];	
// 	document.write(y.nodeValue);
// 	y=x.childNodes[1];	
// 	document.write(y.nodeValue);
// 	y=x.childNodes[2];	
// 	document.write(y.nodeValue);

// 	x=xmlDoc.getElementsByTagName("TAG")[2]
		
// 	y=x.childNodes[0];	
// 	document.write(y.nodeValue);
// 	y=x.childNodes[1];	
// 	document.write(y.nodeValue);
// 	y=x.childNodes[2];	
// 	document.write(y.nodeValue);


// }



