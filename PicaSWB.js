{
	"translatorID": "2edf7a1b-eded-48d7-ae11-7126fd1c1b07ixtheo",
	"label": "PicaSWB_ixzo",
	"creator": "Philipp Zumstein, Timotheus Kim",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "gcs",
	"lastUpdated": "2016-04-08 13:10:00"
}
/* jshint ignore:end */

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

var journalMapping = {
	"0591-2385" : "!01515663X!", // Zygon 
    "0891-5881" : "!023125381!", // Dialogue and alliance
	"0884-5379" : "!341092975!",  // fides et historia
	"1474-6700" : "!105283193!", // Theology and science  
	"1462-2459" : "!094835578!", //Reformation & Renaissance review  
	"0031-0328" : "!014896486!", //Palestine exploration quarterly 
	"0037-7686" : "!01440009X!", // Social compass !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1461-7404" : "!01440009X!", // Social compass !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1745-5294" : "!01521124X!" ,//Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"0142-064X" : "!01521124X!" ,//Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1476-6728" : "!016069390!", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"0309-0892" : "!016069390!", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"0771-7776" : "!01496841X!", // Sacris erudiri  
	"2284-7308" : "!281073546!", // Perichoresis  
	"1745-5189" : "!033051313!", // Feminist theology !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"0966-7350" : "!033051313!", // Feminist theology !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1745-5286" : "!018245471!", // Journal for the study of the pseudepigrapha   !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"0951-8207" : "!018245471!", // Journal for the study of the pseudepigrapha   !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1357-4175" : "!061284815!", // Reformation  
	"1752-0738" : "!061284815!", // Reformation  
	"1462-317X" : "!098784013!", // Political theology   
	"1743-1719" : "!098784013!", // Political theology   
	"0360-6503" : "!015202178!", // Process studies   
	"0733-4273" : "!015054578!", // Journal of psychology and Christianity
	"0929-0761" : "!041601858!", // Dead Sea discoveries   
	"1568-5179" : "!041601858!", // Dead Sea discoveries  
	"0022-2097" : "!014412152!", // The journal of Jewish studies
	"0018-2613" : "!014473801!", // Historische Zeitschrift 
	"1871-241X" : "!25902970X!", // Church history and religious culture   
	"1871-2428" : "!25902970X!", // Church history and religious culture  
	"0946-3518" : "!038886944!", // Praktische Theologie
	"0938-5320" : "!038886944!", // Praktische Theologie
	"2198-0462" : "!038886944!", // Praktische Theologie                     
	"0938-5320" : "!399752226!", // Praktische Theologie                     
	"0043-2040" : "!014841762!", // Wege zum Menschen
	"0021-1400" : "!015180522!", // Irish theological quaterly
	"0023-0707" : "!014412527!", // Kerygma und Dogma
	"1135-4712" : "!094083746!", // 'Ílu
	"1135-4712" : "!281290717!", // 'Ílu
	"0953-9468" : "!023106085!", // Studies in Christian ethics
	"1745-5235" : "!11946067X!", // Studies in Christian ethics
	"0888-3769" : "!015891976!", // Religion and literature
	"0029-4500" : "!015891976!", // Religion and literature
	"0888-3769" : "!311098312!", // Religion and literature
	"0040-5639" : "!01518501X!", // Theological studies
	"2169-1304" : "!266225179!", // Theological studies
	"0943-7592" : "!040100804!", // Journal for the History of Modern Theology über Degruyter = 4213 Hauptsacht. bis 14.2007: Zeitschrift für neuere Theologiegeschichte; @Grotz: als „…$h1-2“ (statt mit Querstrich: „…$h1/2“) 
	"1612-9776" : "!040100804!", // Journal for the History of Modern Theology 
	"1612-9776" : "!040100804!", // Zeitschrift für Neuere Theologiegeschichte
	"0943-7592" : "!040100804!", // Zeitschrift für Neuere Theologiegeschichte

	"0031-0328" : "!014896486!", // Palestine exploration quarterly
	"1743-1301" : "!014896486!", // Palestine exploration quarterly
    "1743-1301" : "!112775594!", // Palestine exploration quarterly
	"0031-0328" : "!112775594!", // Palestine exploration quarterly
	"1745-5316" : "!119461234!", // Ecclesiology !!hier kein direkter Downlaod, sondern über Zotero-button
	"0034-6373" : "!015182932!", // Review & Expositor
	"0034-4125" : "!014537311!", // Religious studies 
	"1469-901X" : "!014537311!", // Religious studies
	"1573-3831" : "!112775772!", // Mission studies
	"1573-3831" : "!01622664X!", // Mission studies
	"0168-9789" : "!01622664X!", // Mission studies
	"0091-6471" : "!015193306!", // Journal of psychology and theology
	"1476-8690" : "!106846396!", // Journal for the study of the historical Jesus
	"2222-582X" : "!370706498!", // Journal of early Christian history
	"0018-2710" : "!014406292!", // History of religions
	"1545-6935" : "!014406292!", // History of religions
	"0384-9694" : "!014804743!", // Journal of religious ethics
	"1467-9795" : "!014804743!", // Journal of religious ethics
	"0943-3058" : "!026374846!", // Method & theory in the study of religion
	"1570-0682" : "!026374846!", // Method & theory in the study of religion
	"1783-1474" : "!054531918!", // INTAMS review
	"0022-4200" : "!015180131!", // Journal of religion in Africa
	"1570-0666" : "!015180131!", // Journal of religion in Africa
	"1092-6690" : "!066688779!", // Nova religio
	"1541-8480" : "!066688779!", // Nova religio
	"1079-9265" : "!056622538!", // Religion and the arts
	"1568-5292" : "!056622538!", // Religion and the arts
	"0008-4298" : "!014775611!", // Studies in religion = Sciences religieuses
	"2042-0587" : "!014775611!", // Studies in religion = Sciences religieuses
	"1380-7854" : "!048518425!", // Medieval encounters
	"1570-0674" : "!048518425!", // Medieval encounters
	"0319-485X" : "!01455027X!", // Religious studies review
	"1748-0922" : "!01455027X!", // Religious studies review
	"0497-1817" : "!014862522!", // Temenos
	"2342-7256" : "!014862522!", // Temenos
    "1030-570X" : "!018291589!", // Pacifica
    "1839-2598" : "!018291589!", // Pacifica
	"0890-1112" : "!023118172!", // Journal of ritual studies	
	"0091-8296" : "!015194213!", // Missiology
	"2051-3623" : "!015194213!", // Missiology
	"0011-1953" : "!015191281!", // Cross currents
	"1939-3881" : "!015191281!", // Cross currents
	"0020-9643" : "!015184242!", // Interpretation
	"2159-340X" : "!015184242!", // Interpretation
	"0067-6535" : "!015191826!", // Biblical research
	"0588-3237" : "!015194884!", // Colloquium
	"0003-2980" : "!015189996!", // Andrews University Seminary studies
	"0118-8534" : "!079721079!", // Asian journal of pentecostal studies
	"1477-8351" : "!103869212!", // Aramaic studies
	"1462-3153" : "!103869212!", // Aramaic studies
	"0229-2807" : "!059754931!", // ARC
	"0094-5323" : "!015192121!", // Augustinian studies
	"0014-3367" : "!015178811!", // Evangelical quarterly
	"1474-225X" : "!099026465!", // International journal for the study of the Christian church
	"1747-0234" : "!099026465!", // International journal for the study of the Christian church
	"1547-9080" : "!111171709!", // Newman studies journal
	"0144-8153" : "!015230376!", // Evangelical review of theology
	"0360-8808" : "!015535347!", // Journal of the Evangelical Theological Society
	"0092-6558" : "!015194132!", // Journal of the Interdenominational Theological Center
	"1934-9637" : "!260747769!", // Journal of spirituality in mental health
	"1934-9645" : "!260747769!", // Journal of spirituality in mental health
    "1570-0739" : "!014821419!", // Zeitschrift für Religions- und Geistesgeschichte
	"0275-5270"	: "!015243044!", // Word and World
	"0034-3072" : "!015182711!", // Reformed theological review  
	"0025-9373" : "!015181278!", // The Mennonite quarterly review  
	"1023-0807" : "!043088619!", // Religion and theology  
	"1574-3012" : "!043088619!", // Religion and theology  
	"0036-3227" : "!015183696!", // St. Vladimir's theological quarterly   
	"0092-4245" : "!015192091!", // Wesleyan theological journal
	"0006-2014" : "!014828995!", // Biblische Zeitschrift
	"0021-9231" : "!014411350!", // Journal of Biblical Literature
	"1469-8145" : "!01489324X!",	// New Testament studies
	
	"0021-9231" : "!014411350!", // Journal of Biblical Literature
	"1469-8145" : "!01489324X!", // New Testament studies
	"0048-1009" : "!014862662!", // Novum Testamentum
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
			writeLine("1100", date.year.toString() + "$n[1977] \n"); // mit jedem Jahrgang Wert in Spitzklammern "$n []" anpassen.);
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
					writeLine("1500", "eng"); // default-wert ausgeben, wenn item.language nicht von zotero belegt ist
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
		writeLine("5056 1", "");
		
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
