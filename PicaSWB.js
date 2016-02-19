{
	"translatorID": "2edf7a1b-eded-48d7-ae11-7126fd1c1b07",
	"label": "PicaSWB",
	"creator": "Philipp Zumstein",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "gcs",
	"lastUpdated": "2016-01-23 13:10:00"
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
  
  Code ist unter AGPL Lizenz:
  https://github.com/zuphilip/translators/wiki/Common-code-blocks-for-translators#licence-block
*/

var item;
var journalMapping = {
	"0021-9231" : "!014411350!" // Journal of Biblical Literature  http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=014411350&INDEXSET=1
};
var nachnameMapping = {
	"Hemingway" : "!16137493X!" // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=16137493X&INDEXSET=1
};
var nameMapping = {
	"Berners-Lee, Tim" : "!18195804X!" // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=18195804X&INDEXSET=1
};

var languageMapping = {
	"en" : "eng",
}


function doExport() {

	while (item = Zotero.nextItem()) {
		
		//item.type --> 0500 Bibliographische Gattung und Status
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
		switch (item.itemType) {
			case "journalArticle":
			case "bookSection":
			case "magazineArticle":
			case "newspaperArticle":
			case "encyclopediaArticle":
				Zotero.write( "0500 Aou\n");
				break;
			default:
				Zotero.write( "0500 Aau\n");
		}
		
		//item.type --> 0501 Inhaltstyp
		Zotero.write( "0501 Text$btxt \n");
		
		//item.type --> 0502 Medientyp
		Zotero.write( "0502 ohne Hilfsmittel zu benutzen$bn \n");
		
		//item.type --> 0503 Datenträgertyp
		Zotero.write( "0503 Band$bnc \n");	
		
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
		if (item.language && languageMapping[(item.language)]) {
				Zotero.write( "1500 " + languageMapping[(item.language)] + "\n");
		} else {
			Zotero.write( "1500 eng \n");
		}
		
		//1505 Katalogisierungsquelle
		Zotero.write( "1505 $erda \n" );
		
		//item.ISBN --> 2000 ISBN
		if (item.ISBN) { Zotero.write( "2000 " + item.ISBN + "\n"); }
		
		//item.DOI --> 2051 oder 2053 ???
		if (item.DOI) { Zotero.write( "2051 " + item.DOI + "\n"); }
		
		//Autoren --> 3000, 3010
		//Titel, erster Autor --> 4000
		var titleStatement = "4000 ";
		if (item.shortTitle) {
			titleStatement += item.shortTitle;
			if (item.title && item.title.length > item.shortTitle.length) {
				titleStatement += "$d" + item.title.substr(item.shortTitle.length).replace(/^\s*:\s*/,'');
			}
		} else {
			titleStatement += item.title.replace(/\s*:\s*/,'$d');
		}
		var i = 0;
		while (item.creators.length>0) {
			var creator = item.creators.shift();
			if (creator.creatorType == "author") {
				var content;
				if (creator.firstName && nameMapping[creator.lastName + ", " + creator.firstName]) {
					content = nameMapping[creator.lastName + ", " + creator.firstName];
				} else if (nachnameMapping[creator.lastName]) {
					content = nachnameMapping[creator.lastName];
				} else {
					content = creator.lastName + (creator.firstName ? ", " + creator.firstName : "");
				}
				if (i == 0) {
					Zotero.write( "3000 " + content + "$BVerfasserIn$4aut \n" );
					titleStatement += "$h" + (creator.firstName ? creator.firstName + " " : "") + creator.lastName;
				} else {
					Zotero.write( "3010 " + content + "$BVerfasserIn$4aut \n" );
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
		if (item.itemType == "journalArticle") {
			var volumeyearissuepage = "4070 ";
			if (item.volume) { volumeyearissuepage += "$v" + item.volume; }
			if (date["year"] != undefined) { volumeyearissuepage +=  "$j" + date["year"]; }
			if (item.issue) { volumeyearissuepage += "$h" + item.issue; }
			if (item.pages) { volumeyearissuepage += "$p" + item.pages; }
			Zotero.write( volumeyearissuepage +"\n");
		}
		
		//URL --> 4085
		if (item.url) { Zotero.write( "4085 " + item.url + "$xH" + "\n"); }
		
		//Reihe --> 4110
		var seriesStatement = "4110 ";
		if (item.series) { seriesStatement += item.series; }
		if (item.seriesNumber) { seriesStatement += " ; " + item.seriesNumber; }
		Zotero.write(seriesStatement + "\n");
		
		//Inhaltliche Zusammenfassung -->4207
		if (item.abstractNote) { Zotero.write( "4207 " + item.abstractNote + "\n"); }
		
		//item.publicationTitle --> 4241 Beziehungen zur größeren Einheit 
		if (item.itemType == "journalArticle") {
			if (item.ISSN && journalMapping[ZU.cleanISSN(item.ISSN)]) {
				Zotero.write( "4241 Enthalten in: " + journalMapping[ZU.cleanISSN(item.ISSN)] + "\n");
			} else if (item.publicationTitle) {
				Zotero.write( "4241 Enthalten in: "  + item.publicationTitle + "\n");
			}
		}
		
	}
}
