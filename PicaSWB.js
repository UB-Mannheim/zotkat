{
	"translatorID": "2edf7a1b-eded-48d7-ae11-7126fd1c1b07",
	"label": "PicaSWB",
	"creator": "Philipp Zumstein, Timotheus Kim",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "gcs",
	"lastUpdated": "2016-01-23 13:10:00"
}

// Zotero Export Translator für das Pica Intern Format
// (wie es im SWB Verbund benutzt wird)


/*
	***** BEGIN LICENSE BLOCK *****
	Copyright © 2016 Philipp Zumstein
	This file is part of Zotero.
	Zotero is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	Zotero is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU Affero General Public License for more details.
	You should have received a copy of the GNU Affero General Public License
	along with Zotero. If not, see <http://www.gnu.org/licenses/>.
	***** END LICENSE BLOCK *****
*/

var ssgNummer = "1";
var defaultLanguage = "eng";

var journalMapping = {
	"0021-9231" : "!014411350!" // Journal of Biblical Literature  http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=014411350&INDEXSET=1
};
var nachnameMapping = {
	"Hemingway" : "!16137493X!" // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=16137493X&INDEXSET=1
};
var nameMapping = {
	"Berners-Lee, Tim" : "!18195804X!" // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=18195804X&INDEXSET=1
};
//Sprachcodes nach ISO 639-2
//http://swbtools.bsz-bw.de/winibwhelp/Liste_1500.htm
var languageMapping = {
	"en" : "eng",
	"de" : "ger",
	"fr" : "fre"
};

// Da alles asynchron ablaufen kann:
//Jede Lookup einer AutorIn zählt 1 zu count
//und nach Erledigung wieder 1 weg. Der
//Startwert ist 1 und nach Erledigung aller
//anderen Zeilen wird 1 subtrahiert. Erst
//bei 0 wird die Ausgabe aus outputText erzeugt.
var count = 1;
var outputText = "";

function writeLine(code, line) {

	//Halbgeviertstrich ersetzen
	line = line.replace(/–/g, '-');

	//Text zusammensetzen
	outputText += code + " " + line + "\n";

	//Lookup für Autoren
	if ((code == "3000" || code == "3010") && line[0] != "!") {
		count++;
		var authorName = line.substring(0,line.indexOf("$"));
		var lookupUrl = "http://swb.bsz-bw.de/DB=2.104/SET=70/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=1004&TRM0=" + authorName +"&ACT1=*&IKT1=2057&TRM1=3.*&ACT2=*&IKT2=8991&TRM2=theol*&ACT3=*&IKT3=8991&TRM3=19**";
		ZU.processDocuments([lookupUrl], function(doc, url){
			var ppn = ZU.xpathText(doc, '//small[a[img]]');
			if (ppn) {
				outputText = outputText.replace(authorName, "!" + ppn.trim() + "!");
			}
		}, function() {
			count--;
			if (count === 0) {
				Zotero.write(outputText);
			}
		});
	}
}

function doExport() {
	var item;
	while ((item = Zotero.nextItem())) {

		//item.type --> 0500 Bibliographische Gattung und Status
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
		switch (item.itemType) {
			case "journalArticle":
			case "bookSection":
			case "magazineArticle":
			case "newspaperArticle":
			case "encyclopediaArticle":
				writeLine("0500", "Aou");
				break;
			default:
				writeLine("0500", "Aau");
		}
		
		//item.type --> 0501 Inhaltstyp
		writeLine("0501", "Text$btxt");
		
		//item.type --> 0502 Medientyp
		writeLine("0502", "ohne Hilfsmittel zu benutzen$bn");
		
		//item.type --> 0503 Datenträgertyp
		writeLine("0503", "Band$bnc");
		
		//item.date --> 1100 
		var date = Zotero.Utilities.strToDate(item.date);
		if (date.year !== undefined) {
			writeLine("1100", date.year.toString() + "$n[" + date.year.toString() + "]" );
		}
		
		//1130 Datenträger
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_1130.htm
		writeLine("1130", "");
		
		//1140 Veröffentlichungsart und Inhalt
		writeLine("1140", "");
		
		//item.language --> 1500 Sprachcodes
		if (item.language) {
			if (languageMapping[(item.language)]) {
				item.language = languageMapping[item.language];
			}
			writeLine("1500", item.language);
		} else {
			writeLine("1500", defaultLanguage);
		}
		
		//1505 Katalogisierungsquelle
		writeLine("1505", "$erda");
		
		//item.ISBN --> 2000 ISBN
		if (item.ISBN) {
			writeLine("2000", item.ISBN);
		}
		
		//item.DOI --> 2051 oder 2053 ???
		if (item.DOI) {
			writeLine("2051", item.DOI);
		}
		
		//Autoren --> 3000, 3010
		//Titel, erster Autor --> 4000
		var titleStatement = "";
		if (item.shortTitle) {
			titleStatement += item.shortTitle;
			if (item.title && item.title.length > item.shortTitle.length) {
				titleStatement += "$d" + item.title.substr(item.shortTitle.length).replace(/^\s*:\s*/,'');
			}
		} else {
			titleStatement += item.title.replace(/\s*:\s*/,'$d');
		}
		//Sortierzeichen hinzufügen, vgl. https://github.com/UB-Mannheim/zotkat/files/137992/ARTIKEL.pdf
		if (item.language == "ger" || !item.language) {
			titleStatement = titleStatement.replace(/^(Der|Die|Das|Des|Dem|Den|Ein|Eines|Einem|Eine|Einen|Einer) ([^@])/, "$1 @$2");
		}
		if (item.language == "eng" || !item.language) {
			titleStatement = titleStatement.replace(/^(The|A|An) ([^@])/, "$1 @$2");
		}
		if (item.language == "fre" || !item.language) {
			titleStatement = titleStatement.replace(/^(Le|La|Les|Des|Un|Une) ([^@])/, "$1 @$2");
			titleStatement = titleStatement.replace(/^L'([^@])/, "L'@$1");
		}
		if (item.language == "ita" || !item.language) {
			titleStatement = titleStatement.replace(/^(La|Le|Lo|Gli|I|Il|Un|Una|Uno) ([^@])/, "$1 @$2");
			titleStatement = titleStatement.replace(/^L'([^@])/, "L'@$1");
		}
		var i = 0, content, creator;
		while (item.creators.length>0) {
			creator = item.creators.shift();
			if (creator.creatorType == "author") {
				if (creator.firstName && nameMapping[creator.lastName + ", " + creator.firstName]) {
					content = nameMapping[creator.lastName + ", " + creator.firstName];
				} else if (nachnameMapping[creator.lastName]) {
					content = nachnameMapping[creator.lastName];
				} else {
					content = creator.lastName + (creator.firstName ? ", " + creator.firstName : "");
				}
				if (i === 0) {
					writeLine("3000", content + "$BVerfasserIn$4aut");
					titleStatement += "$h" + (creator.firstName ? creator.firstName + " " : "") + creator.lastName;
				} else {
					writeLine("3010", content + "$BVerfasserIn$4aut");
				}
				i++;
			}
			//TODO: editors, other contributors...
		}
		writeLine("4000", titleStatement);
		
		//Ausgabe --> 4020
		if (item.edition) {
			writeLine("4020", item.edition);
		}
		
		//Erscheinungsvermerk --> 4030
		var publicationStatement = "";
		if (item.place) { publicationStatement += item.place; }
		if (item.publisher) { publicationStatement +=  "$n" + item.publisher; }
		writeLine("4030", publicationStatement);
		
		//4070 $v Bandzählung $j Jahr $h Heftnummer $p Seitenzahl
		if (item.itemType == "journalArticle") {
			var volumeyearissuepage = "";
			if (item.volume) { volumeyearissuepage += "$v" + item.volume; }
			if (date.year !== undefined) { volumeyearissuepage +=  "$j" + date.year; }
			if (item.issue) { volumeyearissuepage += "$h" + item.issue; }
			if (item.pages) { volumeyearissuepage += "$p" + item.pages; }
			writeLine("4070", volumeyearissuepage);
		}
		
		//URL --> 4085
		if (item.url) {
			writeLine("4085", item.url + "$xH");
		}
		
		//Reihe --> 4110
		var seriesStatement = "";
		if (item.series) {
			seriesStatement += item.series;
		}
		if (item.seriesNumber) {
			seriesStatement += " ; " + item.seriesNumber;
		}
		writeLine("4110", seriesStatement);
		
		//Inhaltliche Zusammenfassung -->4207
		if (item.abstractNote) {
			writeLine("4207", item.abstractNote);
		}
		
		//item.publicationTitle --> 4241 Beziehungen zur größeren Einheit 
		if (item.itemType == "journalArticle") {
			if (item.ISSN && journalMapping[ZU.cleanISSN(item.ISSN)]) {
				writeLine("4241", "Enthalten in" + journalMapping[ZU.cleanISSN(item.ISSN)]);
			} else if (item.publicationTitle) {
				writeLine("4241", "Enthalten in"  + item.publicationTitle);
			}
			//SSG-Nummer --> 5056
			if (ssgNummer) {
				writeLine("5056", ssgNummer);
			}
			
			// 0999 verify outputText ppn in OGND
			var ppnVerify1 = "http://swb.bsz-bw.de/DB=2.104/SET=1/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=1004&TRM0=" + content + "&ACT1=*&IKT1=2057&TRM1=3.*&ACT2=*&IKT2=8991&TRM2=19**&ACT3=%2B&IKT3=4060&TRM3=tpv*&ACT4=%2B&IKT4=8991&TRM4=theol* neutestament*&ACT5=*&IKT5=1004&TRM5=" +  content;
			var ppnVerify2 = "http://swb.bsz-bw.de/DB=2.104/SET=1/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=1004&TRM0=" + creator.lastName + "&ACT1=*&IKT1=2057&TRM1=3.*&ACT2=*&IKT2=8991&TRM2=19**&ACT3=%2B&IKT3=4060&TRM3=tpv*&ACT4=%2B&IKT4=8991&TRM4=theol* neutestament*&ACT5=*&IKT5=1004&TRM5=" + creator.lastName;
			if (item.creators) {
				 ppnVerify1 += item.creators;
			}
			writeLine("\n" + "0999 ".fontcolor("green") + "MAPPING_BEDINGUNG > NACHNAME, VORNAME |AND| sn3.* |AND| 19** |OR| tpv* |OR| theol* neutestament*| VERIFY OUTPUT PPN IN OGND | LINK:   ".fontcolor("green"), ppnVerify1.link(ppnVerify1));
			writeLine("\n" + "0999 ".fontcolor("green") + "MAPPING_BEDINGUNG > NACHNAME |AND| sn3.* |AND| 19** |OR| tpv* |OR| theol* neutestament*| VERIFY OUTPUT PPN IN OGND | LINK:   ".fontcolor("green"), ppnVerify2.link(ppnVerify2) + "\n");
		}
		outputText += "\n";
	}
	count--;
	if (count === 0) {
		Zotero.write(outputText);
	}
}


