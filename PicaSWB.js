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
	"lastUpdated": "2015-08-18 21:52:00"
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
var journalMapping = {
	"0021-9231" : "!014411350!" // Journal of Biblical Literature  http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=014411350&INDEXSET=1
};

function doExport() {

	while (item = Zotero.nextItem()) {
		//item.type --> 0500 Bibliographische Gattung und Status
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
		Zotero.write( "0500 Aou\n");//TODO abhängig von item.type
		
		//item.date --> 1100 
		var date = Zotero.Utilities.strToDate(item.date);
		if (date["year"] != undefined) {
			Zotero.write( "1100 "+ date["year"].toString() +  "\n");
		}
		
		//1130 Datenträger
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_1130.htm
		Zotero.write( "1130 \n");
		
		//1140 Veröffentlichungsart und Inhalt
		Zotero.write( "1140 \n");
		
		//item.language --> 1500 Sprachcodes
		if (item.language) { Zotero.write( "1500 " + item.language + "\n"); }
		
		//item.ISBN --> 2000 ISBN
		if (item.ISBN) { Zotero.write( "2000 " + item.ISBN + "\n"); }
		
		//item.DOI --> 2051 oder 2053 ???
		if (item.DOI) { Zotero.write( "2051 " + item.DOI + "\n"); }
		
		//Autoren --> 3000ff
		//Titel, erster Autor --> 4000
		var titleStatement = "4000 ";
		if (item.shortTitle) {
			titleStatement += item.shortTitle;
			if (item.title && item.title.length > item.shortTitle.length) {
				titleStatement += "$d" + item.title.substr(item.shortTitle.length).replace(/^\s*:\s*/,'');
			}
		} else {
			titleStatement += item.title;
		}
		var i = 0;
		while (item.creators.length>0) {
			var creator = item.creators.shift();
			if (creator.creatorType == "author") {
				Zotero.write( "300"+i+" " + creator.lastName + ", " + creator.firstName + "\n" );
				if (i == 0) {
					titleStatement += "$h" + creator.firstName + " " + creator.lastName;
				}
				i++;
			}
			//TODO: editors, other contributors...
		}
		Zotero.write( titleStatement + "\n");
		
		//Ausgabe --> 4020
		if (item.edition) { Zotero.write( "4020 " + item.edition + "\n"); }
		
		//Erscheinungsvermerk --> 4030
		var publicationStatement = "4030 ";
		if (item.place) { publicationStatement += item.place; }
		if (item.publisher) { publicationStatement +=  "$n" + item.publisher; }
		Zotero.write( publicationStatement +"\n");
		
		//4070 $v Bandzählung $j Jahr $h Heftnummer $p Seitenzahl
		var volumeyearissuepage = "4070 ";
		if (item.volume) { volumeyearissuepage += "$v" + item.volume; }
		if (date["year"] != undefined) { volumeyearissuepage +=  "$j" + date["year"]; }
		if (item.issue) { volumeyearissuepage += "$h" + item.issue; }
		if (item.pages) { volumeyearissuepage += "$p" + item.pages; }
		Zotero.write( volumeyearissuepage +"\n");
		
		//URL --> 4085
		if (item.url) { Zotero.write( "4085 " + item.url + "$xH" + "\n"); }
		
		//Reihe --> 4110
		var seriesStatement = "4110 ";
		if (item.series) { seriesStatement += item.series; }
		if (item.seriesNumber) { seriesStatement += " ; " + item.seriesNumber; }
		Zotero.write(seriesStatement + "\n");
		
		//item.publicationTitle --> 4241
		if (item.itemType == "journalArticle") {
			if (item.ISSN && journalMapping[ZU.cleanISSN(item.ISSN)]) {
				Zotero.write( "4241 In: " + journalMapping[ZU.cleanISSN(item.ISSN)] + "\n");
			} else if (item.publicationTitle) {
				Zotero.write( "4241 In: "  + item.publicationTitle + "\n");
			}
		}
		
	}
}