{
	"translatorID": "2edf7a1b-eded-48d7-ae11-7126fd1c1b07",
	"label": "PicaSWB",
	"creator": "Philipp Zumstein",
	"target": "txt",
	"minVersion": "1.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "gcs",
	"lastUpdated": "2014-02-10 19:58:51"
}

/*
  Zotero Export Translator für das Pica Intern Format
  (wie es im SWB Verbund benutzt wird)
  
  Der Anwendungsfall dafür soll es sein, Referenzen in Zotero
  zu speichern und über Quick Copy in den Pica Client zu ziehen.
  Dadurch sollte hoffentlich die manuelle Arbeit wesentlich
  erleichtert werden.
  
  Dies ist momentan nur ein proof of concept und hat noch
  keinen Anspruch auf Vollständigkeit. Insbesondere wurde
  meist davon ausgegangen, dass man es mit üblichen Büchern
  zu tun hat.
  
  Code ist unter GPL Lizenz:
  https://github.com/zuphilip/translators/wiki/Common-code-blocks-for-translators#licence-block
*/

var item;

function doExport() {

	while (item = Zotero.nextItem()) {
		var date = Zotero.Utilities.strToDate(item.date);
		if (date["year"] != undefined) {
			Zotero.write( "1100 "+ date["year"].toString() +  "\n");
		}
		if (item.language) { Zotero.write( "1500 " + item.language + "\n"); }
		if (item.ISBN) { Zotero.write( "2000 " + item.ISBN + "\n"); }
		if (item.DOI) { Zotero.write( "2051 " + item.DOI + "\n"); }
		var i = 0;
		while (item.creators.length>0) {
			var firstCreator = item.creators.shift();
			Zotero.write( "300"+i+" "+ firstCreator.firstName + " " + firstCreator.lastName + " (" + Zotero.Utilities.getLocalizedCreatorType(firstCreator.creatorType) +")\n" );
			i++;
		}
		Zotero.write( "4000 " + item.title + "\n");
		if (item.edition) { Zotero.write( "4020 " + item.edition + "\n"); }
		var publicationStatement = "4030 ";
		if (item.place) { publicationStatement += item.place; }
		if (item.publisher) { publicationStatement +=  "$n" + item.publisher; }
		Zotero.write( publicationStatement +"\n");
		if (item.url) { Zotero.write( "4085 " + item.url + "$xH"); }
		var seriesStatement = "4110 ";
		if (item.series) { seriesStatement += item.series; }
		if (item.seriesNumber) { seriesStatement += " ; " + item.seriesNumber; }
		Zotero.write(seriesStatement + "\n");
	}
}