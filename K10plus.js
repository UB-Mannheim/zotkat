{
	"translatorID": "70cd13b4-dd8f-46c0-be47-30cf6ab3a3d5",
	"label": "K10plus",
	"creator": "Philipp Zumstein",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"displayOptions": {
		"Gedruckte Ressource": false,
		"Lizenzfrei": true
	},
	"lastUpdated": "2024-02-22 10:48:00"
}


/*
	***** BEGIN LICENSE BLOCK *****

	Copyright © 2019 Philipp Zumstein

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

var ssgNummer = false;
var exportAbstract = false;
var defaultLanguage = "eng";
var physicalForm = Zotero.getOption("Gedruckte Ressource") ? "A" : "O";// 0500 Position 1
var lf = Zotero.getOption("Lizenzfrei");
var cataloguingStatus = "u";// 0500 Position 3

var journalMapping = {
	"0021-9231": "!014411350!" // Journal of Biblical Literature  http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=014411350&INDEXSET=1
};
var nachnameMapping = {
	Hemingway: "!16137493X!" // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=16137493X&INDEXSET=1
};
var nameMapping = {
	"Berners-Lee, Tim": "!18195804X!", // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=18195804X&INDEXSET=1
	"Neuenkirch, Andreas": "!512979650!"
};
// Sprachcodes nach ISO 639-2
// http://swbtools.bsz-bw.de/winibwhelp/Liste_1500.htm
var languageMapping = {
	en: "eng",
	de: "ger",
	fr: "fre",
	it: "ita",
	es: "spa",
	pr: "por"
};
var issnLangMapping = {
	"1010-9919": "ger",
	"1010-9911": "eng",
	"1010-9913": "fre"
};
var issnVolumeMapping = {
	"2031-5929": "N.S.",
	"2031-5922": "A.S."
};

// Da alles asynchron ablaufen kann:
// Jede Lookup einer AutorIn zählt 1 zu count
// und nach Erledigung wieder 1 weg. Der
// Startwert ist 1 und nach Erledigung aller
// anderen Zeilen wird 1 subtrahiert. Erst
// bei 0 wird die Ausgabe aus outputText erzeugt.
var count = 1;
var outputText = "";

function writeLine(code, line) {
	if (!line) return;
	
	// Halbgeviertstrich etc. ersetzen
	line = line.replace(/–/g, '-').replace(/’/g, '\'').replace(/œ/g, '\\u0153')
		.replace(/ā/g, '\\u0101')
		.replace(/â/g, '\\u00E2')
		.replace(/Ṣ/g, '\\u1E62')
		.replace(/ṣ/g, '\\u1E63')
		.replace(/ū/g, '\\u016B')
		.replace(/ḥ/g, '\\u1E25')
		.replace(/ī/g, '\\u012B')
		.replace(/ṭ/g, '\\u1E6D')
		.replace(/ʾ/g, '\\u02BE')
		.replace(/ʿ/g, '\\u02BF')
		.replace(/–/g, '-')
		.replace(/&#160;/g, "")
		.replace(/"/g, '"')
		.replace(/“/g, '"')
		.replace(/”/g, '"');

	// Text zusammensetzen
	outputText += code + " " + line + "\n";
}

function doExport() {
	var item;
	while ((item = Zotero.nextItem())) {
		// enrich items based on their ISSN
		if (!item.language && item.ISSN && issnLangMapping[item.ISSN]) {
			item.language = issnLangMapping[item.ISSN];
		}
		if (item.volume && item.ISSN && issnVolumeMapping[item.ISSN]) {
			item.volume = issnVolumeMapping[item.ISSN] + item.volume;
		}
		// save DOI always as item.DOI
		if (!item.DOI && item.extra) {
			var extraParts = item.extra.split("\n");
			for (let j = 0; j < extraParts.length; j++) {
				if (extraParts[j].indexOf("DOI:") === 0) {
					item.DOI = extraParts[j].substr(4).trim();
				}
			}
		}
		// normalize language field
		if (item.language && languageMapping[(item.language)]) {
			item.language = languageMapping[item.language];
		}

		var article = false;
		switch (item.itemType) {
			case "journalArticle":
			case "bookSection":
			case "magazineArticle": // wird bei der Erfassung von Rezensionen verwendet. Eintragsart "Magazin-Artikel" wird manuell geändert.
			case "newspaperArticle":
			case "encyclopediaArticle":
				article = true;
				break;
		}
		
		// item.type --> 0500 Bibliographische Gattung und Status
		// http://swbtools.bsz-bw.de/cgi-bin/k10plushelp.pl?cmd=kat&val=0500&katalog=Standard
		if (article) {
			writeLine("0500", physicalForm + "s" + cataloguingStatus);// z.B. Osu
		}
		else {
			writeLine("0500", physicalForm + "a" + cataloguingStatus);// z.B. Aau
		}
		
		// item.type --> 0501 Inhaltstyp
		writeLine("0501", "Text$btxt");
		
		if (physicalForm === "A") {
			// item.type --> 0502 Medientyp
			writeLine("0502", "ohne Hilfsmittel zu benutzen$bn");
			// item.type --> 0503 Datenträgertyp
			writeLine("0503", "Band$bnc");
		}
		if (physicalForm === "O") {
			// item.type --> 0502 Medientyp
			writeLine("0502", "Computermedien$bc");
			// item.type --> 0503 Datenträgertyp
			writeLine("0503", "Online-Ressource$bcr");
		}
		
		// item.date --> 1100
		var date = Zotero.Utilities.strToDate(item.date);
		if (date.year !== undefined) {
			writeLine("1100", date.year.toString() + "$n[" + date.year.toString() + "]");
		}
		
		// 1131 Art des Inhalts
		if (item.itemType == "magazineArticle") {
			writeLine("1131", "!106186019!");
		}
		
		// 1140 Veröffentlichungsart und Inhalt http://swbtools.bsz-bw.de/winibwhelp/Liste_1140.htm
		// if (item.itemType == "magazineArticle") {
		//	writeLine("1140", "uwre");
		// }
		
		// item.language --> 1500 Sprachcodes
		writeLine("1500", item.language || defaultLanguage);

		// 1505 Katalogisierungsquelle
		writeLine("1505", "$erda");
		
		// item.ISBN --> 2000 ISBN
		if (item.ISBN && physicalForm === "A" && !article) {
			writeLine("2000", item.ISBN);
		}
		
		// item.DOI --> 2051 bei "Oou" bzw. 2053 bei "Aou"
		// http://swbtools.bsz-bw.de/cgi-bin/k10plushelp.pl?cmd=kat&val=2051&katalog=Standard
		if (physicalForm === "O") {
			writeLine("2051", item.DOI);
		}
		else if (physicalForm === "A") {
			writeLine("2053", item.DOI);
		}
		
		// Autoren --> 3000, 3010
		// Titel, erster Autor --> 4000
		var titleStatement = "";
		if (item.shortTitle) {
			titleStatement += item.shortTitle;
			if (item.title && item.title.length > item.shortTitle.length) {
				titleStatement += "$d" + item.title.substr(item.shortTitle.length).replace(/^\s*:\s*/, '');
			}
		}
		else {
			titleStatement += item.title.replace(/\s*:\s*/, '$d');
		}
		// Sortierzeichen hinzufügen, vgl. https://github.com/UB-Mannheim/zotkat/files/137992/ARTIKEL.pdf
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
		if (item.language == "por" || !item.language) {
			titleStatement = titleStatement.replace(/^(A|O|As|Os|Um|Uma|Umas|Uns) ([^@])/, "$1 @$2");
		}
		if (item.language == "spa" || !item.language) {
			titleStatement = titleStatement.replace(/^(El|La|Los|Las|Un|Una|Unos|Unas) ([^@])/, "$1 @$2");
		}
		
		var i = 0, content, creator;
		while (item.creators.length > 0) {
			creator = item.creators.shift();
			if (creator.firstName && nameMapping[creator.lastName + ", " + creator.firstName]) {
				content = nameMapping[creator.lastName + ", " + creator.firstName];
			}
			else if (nachnameMapping[creator.lastName]) {
				content = nachnameMapping[creator.lastName];
			}
			else {
				content = creator.lastName + (creator.firstName ? ", " + creator.firstName : "");
			}
			if (creator.creatorType == "author") {
				content += "$BVerfasserIn$4aut";
			}
			else if (creator.creatorType == "editor") {
				content += "$BHerausgeberIn$4edt";
			}
			if (i === 0) {
				writeLine("3000", content);
				titleStatement += "$h" + (creator.firstName ? creator.firstName + " " : "") + creator.lastName;
			}
			else {
				writeLine("3010", content);
				titleStatement += ", " + (creator.firstName ? creator.firstName + " " : "") + creator.lastName;
			}
			i++;
		}
		
		writeLine("4000", titleStatement);
		
		// Ausgabe --> 4020
		if (item.edition) {
			writeLine("4020", item.edition);
		}
		
		// Erscheinungsvermerk --> 4030
		if (!article) {
			var publicationStatement = "";
			if (item.place) {
				publicationStatement += item.place;
			}
			if (item.publisher) {
				publicationStatement += "$n" + item.publisher;
			}
			writeLine("4030", publicationStatement);
		}
		
		// Anzahl Seiten --> 4060
		if (physicalForm == "O") {
			var seitenAngabe = "1 Online-Ressource";
			if (item.pages && !item.numPages) {
				var m = item.pages.match(/\b(\d+)-(\d+)\b/);
				if (m) {
					item.numPages = parseInt(m[2]) - parseInt(m[1]) + 1;
				}
			}
			if (item.numPages) {
				seitenAngabe += " (" + item.numPages + " Seiten)";
			}
			writeLine("4060", seitenAngabe);
		}
		
		// 4070 $v Bandzählung $j Jahr $a Heftnummer $p Seitenzahl
		if (item.itemType == "journalArticle" || item.itemType == "magazineArticle" || item.itemType == "bookSection") {
			var volumeyearissuepage = "";
			if (item.volume) {
				volumeyearissuepage += "$v" + item.volume;
			}
			if (date.year !== undefined) {
				volumeyearissuepage += "$j" + date.year;
			}
			if (item.issue) {
				volumeyearissuepage += "$a" + item.issue.replace(/^0/, "");
			}
			if (item.pages) {
				volumeyearissuepage += "$p" + item.pages;
			}
			
			writeLine("4070", volumeyearissuepage);
		}
		
		// URL --> 4950
		var suffix = lf ? "$LF" : "";
		if (physicalForm == "O") {
			// Sowohl DOI wie auch URL werden angegeben, da wir annehmen,
			// dass die URL auf die Zweitveröffentlichung zeigt.
			if (item.DOI && item.DOI !== "") {
				writeLine("4950", "https://doi.org/" + item.DOI + "$xR" + suffix);
			}
			if (item.url && !item.url.includes(item.DOI)) {
				writeLine("4950", item.url + "$xH" + suffix);
			}
		}
		
		// Reihe --> 4110
		if (!article) {
			var seriesStatement = "";
			if (item.series) {
				seriesStatement += item.series;
			}
			if (item.seriesNumber) {
				seriesStatement += " ; " + item.seriesNumber;
			}
			writeLine("4110", seriesStatement);
		}
		
		// Sonstige Anmerkungen (manuell eintragen) --> 4201
		writeLine("4201", "");
		
		// Inhaltliche Zusammenfassung --> 4207
		if (item.abstractNote && exportAbstract) {
			writeLine("4207", item.abstractNote);
		}
		
		// item.publicationTitle --> 4241 Beziehungen zur größeren Einheit
		if (item.itemType == "journalArticle" || item.itemType == "magazineArticle" || item.itemType == "bookSection") {
			if (item.ISSN && journalMapping[ZU.cleanISSN(item.ISSN)]) {
				writeLine("4241", "Enthalten in" + journalMapping[ZU.cleanISSN(item.ISSN)]);
			}
			else if (item.publicationTitle) {
				writeLine("4241", "Enthalten in!PPN!" + item.publicationTitle);
			}
			else if (item.ISSN) {
				writeLine("4241", "Enthalten in!PPN!" + ZU.cleanISSN(item.ISSN));
			}
		}
		
		// 4261 Themenbeziehungen (Beziehung zu der Veröffentlichung, die beschrieben wird)|case:magazineArticle
		if (item.itemType == "magazineArticle") {
			writeLine("4261", "Rezension von!!"); // zwischen den Ausrufezeichen noch die PPN des rezensierten Werkes manuell einfügen.
		}
		
		// Schlagwörter aus einem Thesaurus (Fremddaten) --> 5520
		for (i = 0; i < item.tags.length; i++) {
			writeLine("5520", "|s|" + item.tags[i].tag.replace(/\s?--\s?/g, ';'));
		}
		
		// SSG-Nummer --> 5056
		if (ssgNummer) {
			writeLine("5056", ssgNummer);
		}
		
	}
	outputText += "\n";
	
	count--;
	if (count === 0) {
		Zotero.write(outputText);
	}
}
