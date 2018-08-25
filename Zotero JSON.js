{
	"translatorID": "51e5355d-9974-484f-80b9-f84d2b55782g",
	"label": "Zotero JSON",
	"creator": "Philipp Zumstein",
	"target": "txt",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 2,
	"browserSupport": "gcs",
	"displayOptions": {
		"cleaned": true
	},
	"lastUpdated": "2018-07-15 11:40:00"
}


/*
	***** BEGIN LICENSE BLOCK *****

	Copyright © 2017 Philipp Zumstein

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


function doExport() {
	var item;
	while ((item = Zotero.nextItem())) {
		if (Zotero.getOption("cleaned")) {
			delete item.collections;
			delete item.relations;
			delete item.dateAdded;
			delete item.dateModified;
			delete item.uri;
			delete item.uniqueFields;
			delete item.key;
			delete item.libraryID;
			for (let i=0; i<item.attachments.length; i++) {
				let cleanedAtt = {};
				for (let prop of ["title", "snapshot", "mimeType"]) {
					if (item.attachments[i][prop]) {
						cleanedAtt[prop] = item.attachments[i][prop];
					}
				}
				item.attachments[i] = cleanedAtt;
			}
		}
		Zotero.write(JSON.stringify(item, null, 2));
	}
}
