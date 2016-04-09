{
	"translatorID": "292d45bb-f3c7-428d-aed7-22f437b7fce9",
	"label": "BIBFRAME",
	"creator": "Philipp Zumstein",
	"target": "rdf",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"configOptions": {
		"dataMode": "rdf/xml"
	},
	"inRepository": true,
	"translatorType": 1,
	"browserSupport": "gcsiv",
	"lastUpdated": "2014-12-19 21:12:00"
}

/*
	***** BEGIN LICENSE BLOCK *****
	
	Copyright © 2014 Philipp Zumstein
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


var n = {
	dc : "http://purl.org/dc/elements/1.1/",
	rdfs : "http://www.w3.org/2000/01/rdf-schema#",
	bf : "http://bibframe.org/vocab/",
	bfp : "http://bibframe.org/bfp/",
	rdf : "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
	skos : "http://www.w3.org/2004/02/skos/core#",
	dcterms : "http://purl.org/dc/terms/"
};

//Zotero -> MARC Relation
//http://id.loc.gov/vocabulary/relators.html
var creatorMapping = {
	"author" : [ "aut" ],
	"contributor" : [ "ctb" ],
	"editor" : [ "edt" ],
	"seriesEditor" : [ "edc" ], //edc = Editor of compilation
	"translator" : [ "trl" ]
};



//e.g. followProperties(itemList, [n.bf+"associatedAgent", n.bf+"label"]);
function followProperties(itemList, propertiesList) {
	if (!itemList) return false;
	if (!Array.isArray(itemList)) return followProperties([ itemList ], propertiesList);
	if (propertiesList.length === 0) return itemList;
	var result = [];
	for (var j=0; j<itemList.length; j++) {
		var temp = Zotero.RDF.getStatementsMatching(itemList[j], propertiesList[0], null);
		for (var i=0; i<temp.length; i++) {
			result.push(temp[i][2]);
		}	
		
	}
	propertiesList.shift();
	return followProperties(result, propertiesList);
}

function detectImport() {
	//
	var instances = Zotero.RDF.getStatementsMatching(null, n.rdf+"type", n.bf+"Instance");
	var works = Zotero.RDF.getStatementsMatching(null, n.rdf+"type", n.bf+"Work");
	if(instances || works) {
		return true;
	}
	return false;
}

function doImport() {
	//Z.debug( Zotero.RDF.getAllResources() );
	
	var inverseCreatorMapping = {}, k, code;
	for (k in creatorMapping) {
		for (var m=0; m<creatorMapping[k].length; m++) {
			code = creatorMapping[k][m];
			if (!inverseCreatorMapping[code]) {
				inverseCreatorMapping[code] = k;
			}
		}
	}
	//Z.debug(inverseCreatorMapping);
	
	var itemNode, predicateNode, objectNode;
	var instancesList = Zotero.RDF.getStatementsMatching(null, n.rdf+"type", n.bf+"Instance");
	for (var j=0; j<instancesList.length; j++) { // for each(var instance in instancesList) {
		var item = instancesList[j][0];
		
		//each instance should be connected to exactly one work
		//which we try to identify here
		var correspondingWork = Zotero.RDF.getStatementsMatching(null, n.bf+"hasInstance", item);
		if (correspondingWork) {
			itemWork = correspondingWork[0][0];
		} else {
			correspondingWork = Zotero.RDF.getStatementsMatching(item, n.bf+"instanceOf", null);
			if (correspondingWork) {
				itemWork = correspondingWork[0][0];//0 or 2??
			}
		}

		var newItem = new Zotero.Item();
		newItem.itemType = "book";
		
		//title
		var title = Zotero.RDF.getStatementsMatching(item, n.bf+"title", null);
		if (title) {
			newItem.title = title[0][2];
		}
		//isbn
		var isbn = Zotero.RDF.getStatementsMatching(item, n.bf+"isbn13", null);
		if (isbn) {
			newItem.ISBN = isbn[0][2];
		}
		//numberOfPages
		var extent = Zotero.RDF.getStatementsMatching(item, n.bf+"extent", null);
		if (extent) {
			newItem.numPages = extent[0][2];//TODO clean up
		}
		//editionStatement
		var edition = Zotero.RDF.getStatementsMatching(item, n.bf+"editionStatement", null);
		if (edition) {
			newItem.edition = edition[0][2];
		}
		
		//TODO check structure of data
		//Z.debug(Zotero.RDF.getStatementsMatching(item, n.bf+"providerEntity", null));
		var provider = Zotero.RDF.getStatementsMatching(item, n.bf+"distribution", null);
		if (provider) {
			//Z.debug(Zotero.RDF.getStatementsMatching(provider[0][2], null, null));
			var publisher = Zotero.RDF.getStatementsMatching(provider[0][2], n.bf+"providerName", null);
			if (publisher) {
				newItem.publisher = publisher[0][2];
			}
			var place = Zotero.RDF.getStatementsMatching(provider[0][2], n.bf+"providerPlace", null);
			if (place) {
				newItem.place = place[0][2];
			}
			var date = Zotero.RDF.getStatementsMatching(provider[0][2], n.bf+"providerDate", null);
			if (date) {
				newItem.date = date[0][2];
			}	
		}
		
		//TODO check
		var diss = Zotero.RDF.getStatementsMatching(null, n.bf+"dissertationNote", null);
		if (diss) {
			newItem.extra = diss[0][2];
		}
		
		var authors = followProperties(itemWork, [n.bf+"associatedAgent", n.bf+"label"]);
		//Z.debug(authors);
		
	
		var agents = Zotero.RDF.getStatementsMatching(itemWork, n.bf+"associatedAgent", null);
		for (k=0; k<agents.length; k++) {
			var label = Zotero.RDF.getStatementsMatching(agents[k][2], n.bf+"label", null);
			var role = Zotero.RDF.getStatementsMatching(agents[k][2], n.bf+"resourceRole", null);
			if (label) {
				var creatorType = Zotero.RDF.getResourceURI(role[0][2]);
				code = creatorType.substr(creatorType.length-3);	
				if (inverseCreatorMapping[code]) {
					newItem.creators.push( ZU.cleanAuthor( label[0][2], inverseCreatorMapping[code], true ) );
				} else {
					Z.debug(creatorType);
					newItem.creators.push( ZU.cleanAuthor( label[0][2], "author", true ) );
				}
			}
		}

		
		newItem.complete();
	}

}/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "import",
		"input": "<rdf:RDF xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdfs=\"http://www.w3.org/2000/01/rdf-schema#\" xmlns:bf=\"http://bibframe.org/vocab/\" xmlns:bfp=\"http://bibframe.org/bfp/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:skos=\"http://www.w3.org/2004/02/skos/core#\" xmlns:dcterms=\"http://purl.org/dc/terms/\">\n\t\t<bf:Instance rdf:about=\"http://d-nb.info/999678876\">\n\t\t\t<bf:modeOfIssuance>Einbändiges Werk</bf:modeOfIssuance>\n\t\t\t<bf:instanceOf rdf:resource=\"http://d-nb.info/bf_temp/work_999678876\" />\n\t\t\t<bf:isbn13>9783898383271</bf:isbn13>\n\t\t\t<bf:isbn13>9781607500971</bf:isbn13>\n\t\t\t<bf:nbn>10,A10</bf:nbn>\n\t\t\t<bf:nbn>10,H04</bf:nbn>\n\t\t\t<bf:responsibilityStatement>Simone Paolo  Ponzetto</bf:responsibilityStatement>\n\t\t\t<bf:extent>XVIII, 212 S.</bf:extent>\n\t\t\t<bf:dimensions>21 cm</bf:dimensions>\n\t\t\t<bf:illustrativeContentNote>graph. Darst.</bf:illustrativeContentNote>\n\t\t\t<bf:title>Knowledge acquisition from a collaboratively generated encyclopedia</bf:title>\n\t\t\t<bf:providerEntity>\n\t\t\t\t<bf:providerName>AKA</bf:providerName>\n\t\t\t\t<bf:providerPlace>Heidelberg</bf:providerPlace>\n\t\t\t\t<bf:providerDate>2010</bf:providerDate>\n\t\t\t</bf:providerEntity>\n\t\t\t<bf:frequency rdf:resource=\"http://marc21rdf.info/terms/continuingfre%23/u\" />\n\t\t</bf:Instance>\n\t\t<bf:Work rdf:about=\"http://d-nb.info/bf_temp/work_999678876\">\n\t\t\t<bf:hasInstance rdf:resource=\"http://d-nb.info/999678876\" />\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/140299017\" />\n\t\t\t\t\t<bf:label>Ponzetto, Simone Paolo</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/aut\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:subject rdf:resource=\"http://d-nb.info/gnd/7545251-0\" />\n\t\t\t<bf:subject rdf:resource=\"http://d-nb.info/gnd/4241169-5\" />\n\t\t\t<bf:subject rdf:resource=\"http://d-nb.info/gnd/4546354-2\" />\n\t\t\t<bf:subject rdf:resource=\"http://d-nb.info/gnd/4284757-6\" />\n\t\t\t<bf:subject rdf:resource=\"http://d-nb.info/gnd/4827894-4\" />\n\t\t\t<bf:subject rdf:resource=\"http://d-nb.info/gnd/4242662-5\" />\n\t\t\t<bf:class-ddc>006.331</bf:class-ddc>\n\t\t\t<bf:class-ddc>006.331</bf:class-ddc>\n\t\t\t<bf:class-ddc>006.312</bf:class-ddc>\n\t\t\t<bf:class-ddc>006.312</bf:class-ddc>\n\t\t\t<bf:title>Knowledge acquisition from a collaboratively generated encyclopedia</bf:title>\n\t\t\t<bf:dissertation>\n\t\t\t\t<bf:dissertationNote>Zugl.: Stuttgart, Univ., Diss., 2009</bf:dissertationNote>\n\t\t\t</bf:dissertation>\n\t\t</bf:Work>\n\t\n</rdf:RDF>\n",
		"items": [
			{
				"itemType": "book",
				"title": "Knowledge acquisition from a collaboratively generated encyclopedia",
				"creators": [
					{
						"firstName": "Simone Paolo",
						"lastName": "Ponzetto",
						"creatorType": "author"
					}
				],
				"ISBN": "9783898383271",
				"numPages": "XVIII, 212 S.",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "import",
		"input": "<rdf:RDF xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:rdfs=\"http://www.w3.org/2000/01/rdf-schema#\" xmlns:bf=\"http://bibframe.org/vocab/\" xmlns:bfp=\"http://bibframe.org/bfp/\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:skos=\"http://www.w3.org/2004/02/skos/core#\" xmlns:dcterms=\"http://purl.org/dc/terms/\">\n    \t<bf:Instance rdf:about=\"http://d-nb.info/1045792101\">\n\t\t\t<bf:modeOfIssuance>Einbändiges Werk</bf:modeOfIssuance>\n\t\t\t<bf:instanceOf rdf:resource=\"http://d-nb.info/bf_temp/work_1045792101\" />\n\t\t\t<bf:isbn13>9783868284874</bf:isbn13>\n\t\t\t<bf:ean>9783868284874</bf:ean>\n\t\t\t<bf:nbn>14,N02</bf:nbn>\n\t\t\t<bf:nbn>15,A01</bf:nbn>\n\t\t\t<bf:local>\n\t\t\t\t<bf:identifierScheme>VLB / Netzpublikationen</bf:identifierScheme>\n\t\t\t\t<bf:identifierValue>4555296</bf:identifierValue>\n\t\t\t</bf:local>\n\t\t\t<bf:responsibilityStatement>Kunsthalle Mannheim. Hrsg. von Ulrike Lorenz ... [Autorinnen und Autoren: Thierry Dufrêne ...]</bf:responsibilityStatement>\n\t\t\t<bf:extent>143 S.</bf:extent>\n\t\t\t<bf:dimensions>25 cm</bf:dimensions>\n\t\t\t<bf:illustrativeContentNote>Ill., graph. Darst.</bf:illustrativeContentNote>\n\t\t\t<bf:title>Skulptur pur</bf:title>\n\t\t\t<bf:providerEntity>\n\t\t\t\t<bf:providerName>Kehrer</bf:providerName>\n\t\t\t\t<bf:providerPlace>Heidelberg, Berlin</bf:providerPlace>\n\t\t\t\t<bf:providerDate>2014</bf:providerDate>\n\t\t\t</bf:providerEntity>\n\t\t\t<bf:frequency rdf:resource=\"http://marc21rdf.info/terms/continuingfre%23/u\" />\n\t\t</bf:Instance>\n\t\t<bf:Work rdf:about=\"http://d-nb.info/bf_temp/work_1045792101\">\n\t\t\t<bf:hasInstance rdf:resource=\"http://d-nb.info/1045792101\" />\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/13230967X\" />\n\t\t\t\t\t<bf:label>Dufrêne, Thierry</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/122012666\" />\n\t\t\t\t\t<bf:label>Lorenz, Ulrike</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/edt\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/111152690\" />\n\t\t\t\t\t<bf:label>Greenlee, Mark W.</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/180343904\" />\n\t\t\t\t\t<bf:label>Hartog, Arie</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/11297760X\" />\n\t\t\t\t\t<bf:label>Jansen, Petra</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/1063991846\" />\n\t\t\t\t\t<bf:label>Myssok, Johannes</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/1044393599\" />\n\t\t\t\t\t<bf:label>Schneemann, Peter J.</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/109311701\" />\n\t\t\t\t\t<bf:label>Wagner, Monika</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/10089237X\" />\n\t\t\t\t\t<bf:label>Wolff, Christian</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/178813850\" />\n\t\t\t\t\t<bf:label>Zuschlag, Christoph</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/ctb\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/1034416030\" />\n\t\t\t\t\t<bf:label>Patruno, Stefanie</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/edt\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:associatedAgent>\n\t\t\t\t<bf:Person>\n\t\t\t\t\t<bf:hasGNDLink rdf:resource=\"http://d-nb.info/gnd/101458959\" />\n\t\t\t\t\t<bf:label>Wagner, Christoph</bf:label>\n\t\t\t\t\t<bf:resourceRole rdf:resource=\"http://id.loc.gov/vocabulary/relators/edt\" />\n\t\t\t\t</bf:Person>\n\t\t\t</bf:associatedAgent>\n\t\t\t<bf:subject rdf:resource=\"http://d-nb.info/gnd/4046277-8\" />\n\t\t\t<bf:class-ddc>730</bf:class-ddc>\n\t\t\t<bf:class-ddc>730</bf:class-ddc>\n\t\t\t<bf:title>Skulptur pur</bf:title>\n\t\t</bf:Work>\n\t\n</rdf:RDF>\n",
		"items": [
			{
				"itemType": "book",
				"title": "Skulptur pur",
				"creators": [
					{
						"firstName": "Thierry",
						"lastName": "Dufrêne",
						"creatorType": "contributor"
					},
					{
						"firstName": "Ulrike",
						"lastName": "Lorenz",
						"creatorType": "editor"
					},
					{
						"firstName": "Mark W.",
						"lastName": "Greenlee",
						"creatorType": "contributor"
					},
					{
						"firstName": "Arie",
						"lastName": "Hartog",
						"creatorType": "contributor"
					},
					{
						"firstName": "Petra",
						"lastName": "Jansen",
						"creatorType": "contributor"
					},
					{
						"firstName": "Johannes",
						"lastName": "Myssok",
						"creatorType": "contributor"
					},
					{
						"firstName": "Peter J.",
						"lastName": "Schneemann",
						"creatorType": "contributor"
					},
					{
						"firstName": "Monika",
						"lastName": "Wagner",
						"creatorType": "contributor"
					},
					{
						"firstName": "Christian",
						"lastName": "Wolff",
						"creatorType": "contributor"
					},
					{
						"firstName": "Christoph",
						"lastName": "Zuschlag",
						"creatorType": "contributor"
					},
					{
						"firstName": "Stefanie",
						"lastName": "Patruno",
						"creatorType": "editor"
					},
					{
						"firstName": "Christoph",
						"lastName": "Wagner",
						"creatorType": "editor"
					}
				],
				"ISBN": "9783868284874",
				"numPages": "143 S.",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "import",
		"input": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<rdf:RDF\n  xmlns:bf=\"http://bibframe.org/vocab/\"\n  xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n>\n  <bf:Work rdf:about=\"http://bibframe.org/resources/sample-bl/007625792\">\n    <bf:derivedFrom rdf:resource=\"http://bibframe.org/resources/sample-bl/007625792.marcxml.xml\"/>\n    <bf:title xml:lang=\"x-bf-sort\">eighth day :</bf:title>\n    <bf:language rdf:resource=\"http://id.loc.gov/vocabulary/languages/eng\"/>\n    <bf:authorizedAccessPoint xml:lang=\"x-bf-hash\">casejohneighthdayathrillerengworktext</bf:authorizedAccessPoint>\n    <bf:authorizedAccessPoint>Case, John. The eighth day :a thriller</bf:authorizedAccessPoint>\n    <bf:creator rdf:resource=\"http://bibframe.org/resources/sample-bl/007625792person11\"/>\n    <rdf:type rdf:resource=\"http://bibframe.org/vocab/Text\"/>\n    <bf:classification rdf:resource=\"http://bibframe.org/resources/sample-bl/007625792classification13\"/>\n    <bf:workTitle rdf:resource=\"http://bibframe.org/resources/sample-bl/007625792title9\"/>\n  </bf:Work>\n  <bf:Person rdf:about=\"http://bibframe.org/resources/sample-bl/007625792person11\">\n    <bf:label>Case, John.</bf:label>\n    <bf:authorizedAccessPoint>Case, John.</bf:authorizedAccessPoint>\n    <bf:hasAuthority rdf:resource=\"http://id.loc.gov/authorities/names/n2001020777\"/>\n  </bf:Person>\n  <bf:Classification rdf:about=\"http://bibframe.org/resources/sample-bl/007625792classification13\">\n    <bf:classificationEdition>full</bf:classificationEdition>\n    <bf:label>813.54</bf:label>\n    <bf:classificationScheme>ddc</bf:classificationScheme>\n    <bf:classificationNumber>813.54</bf:classificationNumber>\n    <bf:classificationEdition>23</bf:classificationEdition>\n  </bf:Classification>\n  <bf:Title rdf:about=\"http://bibframe.org/resources/sample-bl/007625792title9\">\n    <bf:titleValue>The eighth day :</bf:titleValue>\n    <bf:subtitle>a thriller </bf:subtitle>\n  </bf:Title>\n  <bf:Monograph rdf:about=\"http://bibframe.org/resources/sample-bl/007625792instance19\">\n    <bf:isbn13 rdf:resource=\"http://isbn.example.org/9780754092889\"/>\n    <bf:title xml:lang=\"x-bf-sort\">eighth day : (Chivers : pbk.)</bf:title>\n    <bf:titleStatement>The eighth day : a thriller</bf:titleStatement>\n    <bf:dimensions>23 cm.</bf:dimensions>\n    <bf:isbn10 rdf:resource=\"http://isbn.example.org/0754092887\"/>\n    <bf:nbn rdf:nodeID=\"Nc8ebbdf2e4a345b8abad08fa4ee3259c\"/>\n    <bf:providerStatement>Waterville, Me. : Thorndike ; Bath : Chivers, 2003, c2002.</bf:providerStatement>\n    <bf:modeOfIssuance>single unit</bf:modeOfIssuance>\n    <bf:instanceOf rdf:resource=\"http://bibframe.org/resources/sample-bl/007625792\"/>\n    <bf:derivedFrom rdf:resource=\"http://bibframe.org/resources/sample-bl/007625792.marcxml.xml\"/>\n    <bf:edition>Large print ed.</bf:edition>\n    <bf:format>paperback</bf:format>\n    <bf:title>The eighth day :a thriller (Chivers : pbk.)</bf:title>\n    <bf:note>Standard print ed. originally published: London : Century, 2002.</bf:note>\n    <bf:lccn rdf:nodeID=\"N6e8202ea26924d80a80dacfd371f0943\"/>\n    <rdf:type rdf:resource=\"http://bibframe.org/vocab/Instance\"/>\n    <bf:instanceTitle rdf:resource=\"http://bibframe.org/resources/sample-bl/007625792title27\"/>\n    <bf:publication rdf:nodeID=\"N0516315292c14f93b3903d1c8adb17b3\"/>\n    <bf:publication rdf:nodeID=\"N25a6c42d3a054bf9bfab28791ca50fea\"/>\n  </bf:Monograph>\n</rdf:RDF>\n",
		"items": [
			{
				"itemType": "book",
				"title": "eighth day : (Chivers : pbk.)",
				"creators": [],
				"ISBN": "<http://isbn.example.org/9780754092889>",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	}
]
/** END TEST CASES **/
