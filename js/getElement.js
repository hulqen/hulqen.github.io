function getideFunction(title) 
{
	xmlDoc=loadXMLDoc("databas.xml");

	x=xmlDoc.getElementsByTagName(title)[0].childNodes[0];
	txt=x.nodeValue;
	document.write(txt);
}