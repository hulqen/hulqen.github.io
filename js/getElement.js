function getideFunction() 
{
	xmlDoc=loadXMLDoc("databas.xml");

	x=xmlDoc.getElementsByTagName("Empire Burlesque");
	document.write(x.tagName);
}