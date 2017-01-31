## Was ist zotkat?

Zotkat ist eine Erweiterung von Zotero für die Katalogisierung in Bibliotheken und enthält auch experimentelle Ansätze. Allgemein soll Katalogisierung hier breit gefasst werden und auch weitere Arbeiten mit Metadaten umfassen. Beispielsweise kann die Zotero-Erweiterung beim Katalogisieren von Zeitschriftenaufsätzen in FID-Bibliotheken zum Einsatz kommen oder beim Umwandeln von Metadaten für einen Discovery-Index.

## Wie kann ich zotkat nutzen?

Nach der normalen Installation von Zotero können diese zusätzlichen Translator in das [Zotero-Speicherort](https://www.zotero.org/support/de/preferences/advanced#speicherort) (meist im Firefox-Profil) dazu kopiert werden. Nach einem Neustart des Browser (Firefox) sollte dann auch die zusätzlichen Translators aktiv sein.

Siehe Näheres dazu den Artikel auf [LIBREAS #29](http://libreas.eu/ausgabe29/05kim/).

## Welche Dateien gibt es?

Momentan gibt es drei zusätzliche Zotero Translator:
 * [`BIBFRAME.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/BIBFRAME.js) : Hierbei handelt es sich momentan um einen Import-Translator mit dem Ziel bibliographische Metadaten im BIBFRAME Format in Zotero zu speichern. Idealerweise würde man daraus einen Import/Export-Translator machen um beide Richtungen zu unterstützen.
 * [`MARC21XML.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/MARC21XML.js) : Hierbei handelt es sich um einen Export-Translator mit dem Ziel aus Zotero auch Daten im MARCXML-Format zu speichern. Idealerweise würde man dies mit dem bereits bestehenden Import-MARCXML-Translator kombinieren vgl. auch https://github.com/zotero/translators/issues/762 .
 * [`picaSWB.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/PicaSWB.js) : Hierbei handelt es sich um einen Export-Translator mit dem Ziel aus Zotero die Daten ins Picaformat des SWBs zu transformieren und beispielsweise in den WinIBW-Client als Ausgangsbasis zu benutzen.
 * [`PicaGBV.js`](https://raw.githubusercontent.com/UB-Mannheim/zotkat/master/PicaGBV.js) : Hierbei handelt es sich um einen Export-Translator mit dem Ziel bibliographische Daten aus Zotero ins Picaformat des GBV zu transformieren. Angepasst ist er für den Anwendungsfall: Aufsatzkatalogisierung von Buchkapiteln aus E-Books.
 
## Wie kann ich einen Fehler korrigieren oder melden?
 
Alle  können hier direkt Fehler melden und dazu einfach einen [Issue](https://github.com/UB-Mannheim/zotkat/issues) aufmachen. Ebenfalls können dabei weitere Funktionalitäten gewünscht werden. Anpassungen an die Translator können über Pull Request direkt in GitHub gemacht werden. Eine genauere Beschreibung befindet sich auf der [Wiki-Seite](https://github.com/UB-Mannheim/zotkat/wiki).




