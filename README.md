<details>
<summary>🇺🇸 English version (click here)</summary>

## What is zotkat?

Zotkat `[:tzo:tkat]` is an extension of Zotero for cataloguing in a broad sense and contains also some experimental approaches.

## How can I install an additional export translator from zotkat?

1. Install [Zotero](https://www.zotero.org/)
2. Go to the [Zotero Data Directory Location](https://www.zotero.org/support/preferences/advanced) (usually in your Firefox profile) and then to the subfolder `translators`
3. Copy the raw (!) text file of the additional export translator from zotkat
4. Restart Zotero and/or Firefox
5. Go to `Preferences...` > `Export` > `Default Output Options` and choose the new export translator there (if this list is empty or the option does not occur there then close the preferences dialog and open it again)

## Which translator do exists?

Currently, zotkat has the following additonal Zotero Translators:
 * [`BIBFRAME.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/BIBFRAME.js) : This is a import translator with the goal to save data in the BIBFRAME format into Zotero. Ideally this translator would be extended to an import/export translator.
 * [`MARC21XML.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/MARC21XML.js) : This is an export translator with the goal to save data from Zotero in the MARCXML format. Ideally one would integrate this into the existing import translator for MARCXML, cf. https://github.com/zotero/translators/issues/762 .
 * [`PicaSWB.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/PicaSWB.js) : This is a export translator with the goal data from Zotero to save in the Pica format as it is used in the SWB union cataloguing and then for example import it in the WinIBW client. See also this German article [LIBREAS #29](http://libreas.eu/ausgabe29/05kim/).
 * [`PicaGBV.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/PicaGBV.js) : This is an export translaot with the goal to save data from Zotero in the Pica format as it is used in the GBV union cataloguing. the translator is adjusted for the use case to catalogue chapters from ebooks.
 * [`Wikidata QuickStatements.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/Wikidata%20QuickStatements.js) : This is an export translator with the goal to save data from Zotero in the input format of the Quickstatement tools.
 
## How can I report an error or correct it?

Everyone can report errors here directly by opening an [issue](https://github.com/UB-Mannheim/zotkat/issues). Moreover, feature reqests can be discussed there. Any changes of a translator can be done suggested by a pull reqest directly on GitHub. A more detailed description (in German) can be found on this [wiki page](https://github.com/UB-Mannheim/zotkat/wiki).


</details>



<details open>
<summary>🇩🇪 Deutsche Version</summary>


## Was ist zotkat?

Zotkat ist eine Erweiterung von Zotero für die Katalogisierung und enthält auch experimentelle Ansätze. Allgemein soll Katalogisierung hier breit gefasst werden und auch weitere Arbeiten mit Metadaten umfassen. Beispielsweise kann die Zotero-Erweiterung beim Katalogisieren von Zeitschriftenaufsätzen in FID-Bibliotheken zum Einsatz kommen oder beim Umwandeln von Metadaten für einen Discovery-Index.

## Wie installiert man die zusätzlichen Translator von zotkat?

1. [Zotero](https://www.zotero.org/) installieren
2. Navigiere zum [Zotero-Speicherort](https://www.zotero.org/support/de/preferences/advanced#speicherort) (meist im Fireofx Profil Ordner) und dann zum Unterordner `translators`
3. Den entsprechende Translator Datei hier als Textdatei kopieren. Wichtig ist dass man die "raw" Version und somit die Textversion der Datei kopiert und nicht die HTML-Version.
4. Zotero und/oder Firefox neu starten
5. Unter Einstellungen ... > Export > Standard Output Optionen die neue Export-Möglichkeit auswählen (falls diese Liste leer ist oder die neue Option nicht aufgelistet ist, dann kann man versuchen das Einstellungsfenster zu schließen und erneut zu öffnen)

## Welche Dateien gibt es?

Momentan bietet zotkat folgende zusätzelich Zotero Translator an:
 * [`BIBFRAME.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/BIBFRAME.js) : Hierbei handelt es sich momentan um einen Import-Translator mit dem Ziel bibliographische Metadaten im BIBFRAME Format in Zotero zu speichern. Idealerweise würde man daraus einen Import/Export-Translator machen um beide Richtungen zu unterstützen.
 * [`MARC21XML.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/MARC21XML.js) : Hierbei handelt es sich um einen Export-Translator mit dem Ziel aus Zotero auch Daten im MARCXML-Format zu speichern. Idealerweise würde man dies mit dem bereits bestehenden Import-MARCXML-Translator kombinieren vgl. auch https://github.com/zotero/translators/issues/762 .
 * [`PicaSWB.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/PicaSWB.js) : Hierbei handelt es sich um einen Export-Translator mit dem Ziel aus Zotero die Daten ins Picaformat des SWBs zu transformieren und beispielsweise in den WinIBW-Client als Ausgangsbasis zu benutzen. Siehe Näheres dazu den Artikel auf [LIBREAS #29](http://libreas.eu/ausgabe29/05kim/).
 * [`PicaGBV.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/PicaGBV.js) : Hierbei handelt es sich um einen Export-Translator mit dem Ziel bibliographische Daten aus Zotero ins Picaformat des GBV zu transformieren. Angepasst ist er für den Anwendungsfall: Aufsatzkatalogisierung von Buchkapiteln aus E-Books.
 * [`Wikidata QuickStatements.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/Wikidata%20QuickStatements.js) : Hierbei handelt es sich  um einen Export-Translator welcher Einträge aus Zotero in das Eingabeformat des Quickstatements-Tool transformiert.
 
## Wie kann ich einen Fehler korrigieren oder melden?
 
Alle  können hier direkt Fehler melden und dazu einfach einen [Issue](https://github.com/UB-Mannheim/zotkat/issues) aufmachen. Ebenfalls können dabei weitere Funktionalitäten gewünscht werden. Anpassungen an die Translator können über Pull Request direkt in GitHub gemacht werden. Eine genauere Beschreibung befindet sich auf der [Wiki-Seite](https://github.com/UB-Mannheim/zotkat/wiki).



</details>
