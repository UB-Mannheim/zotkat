{
	"translatorID": "ce0ab080-7d72-4fa3-ab4b-4bd8950f3379",
	"label": "MARC21XML",
	"creator": "Philipp Zumstein",
	"target": "xml",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"displayOptions": {
		"exportNotes": false
	},
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "g",
	"lastUpdated": "2014-09-07 12:58:51"
}

// DISCLAIMER:
// There are different cataloguing rules, specification of MARC dialects,
// various usage over time and places. This export translator will follow
// the current MARC21 bibliographic format which is described online:
// http://www.loc.gov/marc/bibliographic/


// MODS to MARC21 mapping:
// http://www.loc.gov/standards/mods/v3/mods2marc-mapping.html

// source for MARC21 XML examples (replace idn number):
// https://portal.dnb.de/opac.htm?method=requestMarcXml&idn=999678876

// Some more useful links:
// https://github.com/zotero/translators/blob/master/MARC.js
// https://github.com/zotero/translators/issues/762
// https://forums.zotero.org/discussion/38956/export-of-zotero-citation-to-marc-format-for-import-into-koha-lms


var recordLength;
var countFields = {"controlfield" : 0, "datafield" : 0, "subfield" : 0 };
var ns = "http://www.loc.gov/MARC21/slim";
var xmlDocument;

var typeMap = {
//default value "a" for every written text is taken (e.g. for book, article, report, webpage,...), everything else should be declared here
	"artwork" : "k",
	"audioRecording" : "j",
	"computerProgram" : "m",
	"film" : "g",
	"manuscript" : "t",
	"map" : "e",//"f" is normally less likely
	"podcast" : "i",
	"presentation" : "a",//slides -> a, speech -> i
	"radioBroadcast" : "i",
	"tvBroadcast" : "g",
	"videoRecording" : "g"
};	

var secondTypeMap = {//based on 008/24-27
	"patent" : "j",
	"statute" : "l",
	"thesis" : "m",
	"case" : "v"
};

String.prototype.replaceAt=function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
};

function fillZerosLeft(text, size) {
	if (!text) text = '';
	if (typeof text == 'number') text=text.toString();
	missingCharacters = size-text.length;
	if (missingCharacters>0) {
		text = Array(missingCharacters+1).join('0') + text;
	}
	return text;		
}


// @property can either a string which will be attachad as a textNode
// or just the Boolean "true" which will then just create the nodes
// without any content
function mapProperty(parentElement, elementName, attributes, property) {
	if (!property) return null;
	//var xmlDocument = parentElement.ownerDocument,
	newElement = xmlDocument.createElementNS(ns, elementName);
	if(attributes) {
		for(var i in attributes) {
			newElement.setAttribute(i, attributes[i]);
		}
	}
	if (property && (typeof property == "string" || typeof property == "number") ) {
		newElement.appendChild(xmlDocument.createTextNode(property));
		recordLength += property.toString().length;
	}
	countFields[elementName]++;//for calculating the record length

	parentElement.appendChild(newElement);
	return newElement;
}



function doExport() {
	Zotero.setCharacterSet("utf-8");
	var parser = new DOMParser();
	xmlDocument = parser.parseFromString('<collection xmlns="http://www.loc.gov/MARC21/slim" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.loc.gov/MARC21/slim http://www.loc.gov/standards/marcxml/schema/MARC21slim.xsd" />', 'application/xml');
	
	var item, i;
	while ((item = Zotero.nextItem())) {
		Z.debug(item);
		
		var exportNotes = Zotero.getOption("exportNotes");
		
		//these two variables are important for several places
		var typeOfRecord = "a";
		if (typeMap[item.itemType]) typeOfRecord = typeMap[item.itemType];
		
		var bibliographicLevel = "m";//default
		if (item.itemType == "bookSection" || item.itemType == "conferencePaper" || item.itemType == "dictionaryEntry" || item.itemType == "encyclopediaArticle" || item.itemType == "journalArticle" || item.itemType == "magazineArticle" || item.itemType == "newspaperArticle") {
			bibliographicLevel = "a";
		}
		
		//initial value
		recordLength = 26;// 24 length of the leader + 1 record terminator + 1 field terminator after the leader and directory
		
		var recordNode = mapProperty(xmlDocument.documentElement, "record", {"type" : "Bibliographic"} , true);
		
		var currentFieldNode;
		
		//BEGIN of the export
		//leader will be added later, but before this node
		var firstChild = mapProperty(recordNode, "controlfield", {"tag" : "001"}, item.itemID );
	
		var cleanedDateModified =  item.dateModified.replace(/\D/g , '');//format must be YYYYMMDDHHMMSS
		mapProperty(recordNode, "controlfield", {"tag" : "005"}, cleanedDateModified + '.0'  );

		var dateFirst = ZU.strToDate(item.dateAdded);
		var dateFirstString = dateFirst.year.substr(2,2) + fillZerosLeft(dateFirst.month,2) + fillZerosLeft(dateFirst.day,2);
		var date;
		var datePublicationString;
		
		if (item.date) {
			date = ZU.strToDate(item.date);
			if (date.year) {
				if (date.month) {
					if (date.day) {
						datePublicationString = 'e'+ date.year + fillZerosLeft(date.month,2) + fillZerosLeft(date.day,2);
					} else {
						datePublicationString = 'e'+date.year + fillZerosLeft(date.month,2)+'uu';
					}
				} else {
					datePublicationString = 's'+date.year+'    ';
				}
			} else {//date without year, possible?
				datePublicationString = 'n        ';
			}
		} else {//unknown date
			datePublicationString = 'n        ';
		}
		//position 18-34 where | is indicating that we don't have this information
		var details = '|||||||||||||||||';
		if (secondTypeMap[item.itemType]) details = details.replaceAt(24-18, secondTypeMap[item.itemType]);
		if (item.itemType == "computerProgram") details = details.replaceAt(26-18, 'b');
		if (item.itemType == "conferencePaper") details = details.replaceAt(29-18, '1');
		if (item.itemType == "letter") details = details.replaceAt(33-18, 'i');
		
		mapProperty(recordNode, "controlfield", {"tag" : "008"}, dateFirstString + datePublicationString + '|||'+ details +'||||u' );
		
		if (item.ISBN) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "020", "ind1" : " ", "ind2" : " " }  , true);
			var cleanedISBN = item.ISBN.replace(/[a-zA-Z,\.;:\-_]/g, '');//can there be more than one isbn in the item.ISBN field? 
			if (cleanedISBN != item.ISBN) {
				mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , cleanedISBN );
				mapProperty(currentFieldNode, "subfield",  {"code" : "9"} , item.ISBN );
			} else {
				mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.ISBN );
			}
		}
		
		if (item.ISSN && bibliographicLevel == "m") {//see also field 773 for e.g. articles
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "022", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.ISSN );
		}
		
		if (item.DOI) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "024", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.DOI );
			mapProperty(currentFieldNode, "subfield",  {"code" : "2"} , "doi" );
		}
		
		currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "040", "ind1" : " ", "ind2" : " " } , true  );
		mapProperty(currentFieldNode, "subfield",  {"code" : "c"} , 'Zotero' );//not strictly a Marc organization code, but we should mention the Zotero as the 'cataloguing tool' somewhere and here is a good place and is implicitely referred because of the 'u' in 008/37
		
		if (item.language) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "041", "ind1" : " ", "ind2" : " " } , true  );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.language );
		}
		
		if (item.callNumber) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "090", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.callNumber );
		}
		
		//100 vs 700  and 110 vs 710
		//--> practical decision: move everything to the 7xx fields
		//because we cannot decide about "Main Entry" fields
		//especially in regards with the different cataloguing rules
		
		
		if (item.shortTitle) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "210", "ind1" : "0", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.shortTitle );
		}
		
		if (item.title) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "245", "ind1" : "1", "ind2" : "0" } , true  );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.title );
			mapProperty(currentFieldNode, "subfield",  {"code" : "n"} , item.volume );
		}
		
		if (item.edition) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "250", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.edition );
		}
		
		if (item.scale) {//for cartographic maps
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "255", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.scale );
		}
		
		if (item.version || item.system || item.programmingLanguage || item.company) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "256", "ind1" : " ", "ind2" : " " } , true );//is there a better place for this information?
			var computerFileArray = [];
			if (item.version) computerFileArray.push(item.version);
			if (item.system) computerFileArray.push(item.system);
			if (item.programmingLanguage) computerFileArray.push(item.programmingLanguage);
			if (item.company) computerFileArray.push(item.company);
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , computerFileArray.join(", ") );
		}
		
		if (item.publisher || item.place || date) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "260", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.place );
			mapProperty(currentFieldNode, "subfield",  {"code" : "b"} , item.publisher );
			if (date && date.year) {//date was defined in the beginning
				mapProperty(currentFieldNode, "subfield",  {"code" : "c"} , date.year );
			}
		}
	
		if (item.numPages || item.numberOfVolumes || item.runningTime) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "300", "ind1" : " ", "ind2" : " " } , true );
			var extensionArray = [];
			if (item.numberOfVolumes) {
				if ( item.numPages.match(/[a-zA-Z]/) ) {
					extensionArray.push( item.numberOfVolumes );
				} else {
					extensionArray.push( item.numberOfVolumes + " v." );
				}
			}
			if (item.numPages) {
				if ( item.numPages.match(/[a-zA-Z]/) ) {
					extensionArray.push( item.numPages );
				} else {
					extensionArray.push( item.numPages + " p." );
				}
			}
			if (item.runningTime) {
				extensionArray.push( item.runningTime );
			}
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , extensionArray.join(" : ") );	
		}
		
		if (item.medium || item.artworkSize) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "340", "ind1" : " ", "ind2" : " " }, true  );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.medium );
			mapProperty(currentFieldNode, "subfield",  {"code" : "b"} , item.artworkSize );
		}
		
		if (item.seriesTitle || item.seriesNumber) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "490", "ind1" : "0", "ind2" : " " }, true  );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.seriesTitle );
			mapProperty(currentFieldNode, "subfield",  {"code" : "v"} , item.seriesNumber );
		}
		
		if (item.notes.length>0 && exportNotes) {
			var noteArray = [];
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "500", "ind1" : " ", "ind2" : " " } , true );
			for (i=0; i<item.notes.length; i++) {
				noteArray.push(item.notes[i].note);
			}
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , noteArray.join("; ") );
		}
		if (item.extra) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "500", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.extra );
		}
		
		if (item.thesisType || item.university) {//thesis
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "502", "ind1" : " ", "ind2" : " " } , true );
			var thesisArray = [];
			if (item.university) {
				thesisArray.push(item.university);
			}
			if (item.thesisType) {
				thesisArray.push(item.thesisType);
			}
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , thesisArray.join(", ") );
		}
		
		if (item.type && item.itemType =="report") {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "513", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.type );
		}
		
		if (item.abstractNote) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "520", "ind1" : " ", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.abstractNote );
		}
		
		if (item.tags.length>0) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "573", "ind1" : " ", "ind2" : " " } , true );
			for (i=0; i<item.tags.length; i++) {
				mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.tags[i].tag );
			}
		}

		
		for (i=0; i<item.creators.length; i++) {
			var creator = item.creators[i];
			if (creator.fieldMode === "") {
				currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "700", "ind1" : "1", "ind2" : " " } , true );
				mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , creator.lastName+', '+creator.firstName );
			} else {
				currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "710", "ind1" : "2", "ind2" : " " } , true);
				mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , creator.lastName );
			}
			if (creator.creatorType != "author") {
				mapProperty(currentFieldNode, "subfield",  {"code" : "e"} , creator.creatorType );
			}
		}
		
		//note 711 is repeatable but the subfield not. Thus, we create two different if statements.
		if (item.conferenceName) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "711", "ind1" : "2", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.conferenceName );
		}
		if (item.meetingName) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "711", "ind1" : "2", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "a"} , item.meetingName );
		}
		
		if (bibliographicLevel == "a") {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "773", "ind1" : "0", "ind2" : " " } , true );
			var subfieldCode;
			if (item.itemType == "conferencePaper") {
				subfieldCode = "m2am";
			}
			if (item.itemType == "bookSection" || item.itemType == "dictionaryEntry" || item.itemType == "encyclopediaArticle") {
				subfieldCode = "nnam";
			}
			if (item.itemType == "journalArticle" || item.itemType == "magazineArticle" || item.itemType == "newspaperArticle") {
				subfieldCode = "nnas";
			}	
			mapProperty(currentFieldNode, "subfield",  {"code" : "7"} , subfieldCode );
			mapProperty(currentFieldNode, "subfield",  {"code" : "t"} , item.publicationTitle );
			var descriptionArray = [];
			var siciDescription = ""; //https://en.wikipedia.org/wiki/Serial_Item_and_Contribution_Identifier
			if (item.volume) {
				descriptionArray.push(item.volume);
				siciDescription += item.volume;
			}
			if (item.issue) {
				descriptionArray.push(item.issue);
				siciDescription += ":" + item.issue;
			}
			if (item.pages) {
				descriptionArray.push(item.pages);
				siciDescription += "<" + parseInt(item.pages);
			}
			mapProperty(currentFieldNode, "subfield",  {"code" : "g"} , descriptionArray.join(', ') );
			mapProperty(currentFieldNode, "subfield",  {"code" : "p"} , item.journalAbbreviation );
			mapProperty(currentFieldNode, "subfield",  {"code" : "q"} , siciDescription );
			mapProperty(currentFieldNode, "subfield",  {"code" : "x"} , item.ISSN );
			//maybe move some other fields if journalArticle?
		}
		
		if (item.url) {
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "856", "ind1" : "4", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "u"} , item.url );
		}
		for (i=0; i<item.attachments.length; i++) {
			var link = item.attachments[i];
			currentFieldNode = mapProperty(recordNode, "datafield",  {"tag" : "856", "ind1" : "4", "ind2" : " " } , true );
			mapProperty(currentFieldNode, "subfield",  {"code" : "u"} , link.url );
			mapProperty(currentFieldNode, "subfield",  {"code" : "q"} , link.mimeType );
		}
		
		//finally, we will calculate the leader and add it as first child
		
		recordLength += countFields.controlfield*13+countFields.datafield*15+countFields.subfield*2;
		//controlfields: 12 characters in the directory + 1 field terminator
		//datafields: 12 characters in the directory + 2 indicators + 1 field terminator
		//subfields: 1 subfield code + 1 subfield terminator

		//base address of data starts after the leader and the directory
		var baseAdressData = 24+countFields.controlfield*12+countFields.datafield*12+1;

		
		var leaderContent = fillZerosLeft(recordLength,5) + "n" + typeOfRecord + bibliographicLevel +" a22" + fillZerosLeft(baseAdressData,5) +"zu 4500";
		var newElement = xmlDocument.createElementNS(ns, "leader");
		newElement.appendChild(xmlDocument.createTextNode(leaderContent));
		recordNode.insertBefore(newElement, firstChild);
		
		
	
	}
	
	Zotero.write('<?xml version="1.0"?>'+"\n");
	var serializer = new XMLSerializer();
	Zotero.write( serializer.serializeToString(xmlDocument) );
	//Z.debug( XML(serializer.serializeToString(xmlDocument)).toXMLString() ); //pretty print seems not to work, or maybe I don't know how

}
