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
	"lastUpdated": "2016-09-02 11:37:00"
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
var physicalForm = "A";//0500 Position 1
var cataloguingStatus = "u";//0500 Position 3

var journalMapping = {
	"0021-9231" : "!014411350!", // Journal of Biblical Literature  http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=014411350&INDEXSET=1,
	"0591-2385" : "!01515663X!", // Zygon 
    "0891-5881" : "!023125381!", // Dialogue and alliance
	"0884-5379" : "!341092975!",  // fides et historia
	"1474-6700" : "!105283193!", // Theology and science  
	"1462-2459" : "!094835578!", //Reformation & Renaissance review  
	"0031-0328" : "!014896486!", //Palestine exploration quarterly 
	"0037-7686" : "!01440009X!", // Social compass !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1461-7404" : "!01440009X!", // Social compass !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1745-5294" : "!01521124X!" ,//Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142-064X" : "!01521124X!" ,//Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"1476-6728" : "!016069390!", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0309-0892" : "!016069390!", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0771-7776" : "!01496841X!", // Sacris erudiri  
	"2284-7308" : "!281073546!", // Perichoresis  
	"1745-5189" : "!033051313!", // Feminist theology !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"0966-7350" : "!033051313!", // Feminist theology !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1745-5286" : "!018245471!", // Journal for the study of the pseudepigrapha   !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0951-8207" : "!018245471!", // Journal for the study of the pseudepigrapha   !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
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
	"0943-7592" : "!040100804!", // Journal for the History of Modern Theology über Degruyter = 4213 Hauptsacht. bis 14.2007: Zeitschrift für neuere //Theologiegeschichte; @Grotz: als „…$h1-2“ (statt mit Querstrich: „…$h1/2“) 
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
	"1469-8145" : "!01489324X!", // New Testament studies
	"0021-9231" : "!014411350!", // Journal of Biblical Literature
	"1469-8145" : "!01489324X!", // New Testament studies
	"0048-1009" : "!014862662!", // Novum Testamentum
	"0040-571X" : "!01518594X!", // Theology
	"2044-2696" : "!01518594X!", // Theology
	"0040-5736" : "!015186830!", // Theology today
	"2044-2556" : "!015186830!", // Theology today
	"2304-4896" : "!018091229!", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0323-4142" : "!018091229!", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0486-5642" : "!015195538!", // Restoration quarterly
	"0360-3032" : "!015206114!", // Trinity journal
    "0340-6083" : "!01450135X!", // Göttinger Predigtmeditationen
	"0720-6259" : "!014553880!", // Pastoraltheologie
	"0031-2827" : "!014553880!", // Pastoraltheologie
    "0174-9927" : "!014553880!", // Pastoraltheologie
	"1065-6219" : "!054391385!", // Journal of research on Christian education
	"1934-4945" : "!054391385!", // Journal of research on Christian education
	"0926-6453" : "!032853262!", // Studies in spirituality
	"1783-1814" : "!032853262!", // Studies in spirituality
	"1745-5251" : "!032869959!", // Journal of pentecostal theology
	"0966-7369" : "!032869959!", // Journal of pentecostal theology
	"0043-4388" : "!015196739!", // Westminster Theological Seminary  
	"0043-4388" : "!015196739!", // Westminster Theological Seminary   
	"0033-5053" : "!015189589!", // Quaker history
	"1934-1504" : "!015189589!", // Quaker history
	"0809-7291" : "!121600203!", // Nordic journal of religion and society 
	"0802-0167" : "!121600203!", // Nordic journal of religion and society
	"1890-7008" : "!121600203!", // Nordic journal of religion and society 
	"1069-4404" : "!034203478!", // Sociology of religion
	"1759-8818" : "!034203478!", // Sociology of religion
	"0141-6200" : "!015208621!", // British journal of religious education
	"2169-2327" : "!381569306!", // International journal of philosophy and theology
	"0890-2461" : "!016231562!", // Philosophy & theology
	"1476-993X" : "!104194820!", // Currents in biblical research  !! Druckausgabe ausgewertet bis 14. 2015 = genauer: nur 14. 2015, 1
	"1745-5200" : "!104194820!", // Currents in biblical research 
	"0012-5806" : "!015178323!", // The Downside review  !! Druckausgabe ausgewertet bis 133. 2015, 470
	"2052-9449" : "!015182932!", // Review & expositor   !! Druckausgabe ausgewertet bis 112. 2015, 4
	"1568-5152" : "!033052395!", // Biblical interpretation
	"1370-6020" : "!054531918!", // INTAMS review      !!  siehe weiterer Eintrag oben  -  Abspeicherung mit Zauberstaub!
	"1783-2446" : "!038505428!", // Journal of the European Society of Women in Theological Research   -   Abspeicherung mit Zauberstaub!  Aufsätze an Stücktitel!
	"1026-2946" : "!077662814!", // Africa Journal of Evangelical Theology
	"0029-5973" : "!014497301!", // Numen PISSN
	"1568-5276" : "!014497301!", // Numen EISSN
	"1079-9265" : "!056622538!", // Religion and the arts
	"2033-4273" : "!379731398!", // ET-Studies Online Publikation 
	"2032-5215"	: "!379731398!", // ET-Studies Online Publikation
	"1783-1431" : "!040105555!", // Ethical Perspectives
	"0266-7177" : "!015394956!", // Modern theology Print-PPN  PISSN
	"1468-0025" : "!015394956!", // Modern theology Print-PPN  EISSN
	"0809-7291" : "!121600203!", // Northern journal of religion and society
	"0009-661X" : "!015191273!", // Churchman
	"1126-6244" : "!094423636!", // Adamantius.
	"1010-9919" : "!015906299!", // old testament essays
	"0935-7335" : "!018614302!", // Ethik in der Medizin 
	"1437-1618" : "!018614302!", // Ethik in der Medizin
	"1209-9392" : "!281190321!", // Women in Judaism
	"0305-7240" : "!014784963!", // Journal of moral education !!pppn
	"1465-3877" : "!079598684!", // Journal of moral education !!eppn
	"0167-4544" : "!018279333!", // Journal of business ethics !!pppn
	"1573-0697" : "!121465284!", // Journal of business ethics !!eppn
	"0269-9702" : "!015926192!", // Bioethics !!pppn
	"1467-8519" : "!078707986!", // Bioethics !!eppn
	"1467-8608" : "!078708001!", // Business ethics !!eppn
	"0962-8770" : "!049951394!", // Business ethics !!pppn
	"1468-2303" : "!07870815X!", // History and theory !!eppn
	"0018-2656" : "!014406314!", // History and thoery !!pppn
	"1092-1311" : "!281190658!", // The journal of religion and film
	"1086-3222" : "!09444921X!", // Journal of the history of ideas !!eppn
	"0022-5037" : "!014411148!", // Journal of the history of ideas !!pppn
	"1086-3184" : "!266224059!", // Journal of early Christian studies !!eppn
	"1067-6341" : "!034202323!", // Journal of early Christian studies !!pppn
	"1469-5103" : "!078589886!", // The historical journal !!eppn
	"0018-246X" : "!014411091!", // The historical journal !!pppn
	"1469-2147" : "!081985010!", // Cambridge quarterly of healthcare ethics !!eppn
	"0963-1801" : "!034192417!", // Cambridge quarterly of healthcare ethics !!pppn
	"1380-3603" : "!046711317!", // Christian bioethics !!pppn
	"1744-4195" : "!094085587!", // Christian bioethics !!eppn
	"0569-9789" : "!015211657!", // Analecta calasanctiana
	"0210-0460" : "!015036707!", // Anales valentinos
	"2444-684X" : "!015036707!", // Anales valentinos, Escritos del Vedat
	"0716-1662" : "!016060334!", // Anuario de historia de la Iglesia en Chile
	"0211-5255" : "!015231356!", // Archivo Dominicano
	"0211-2035" : "!015229572!", // Archivo agustiniano
	"0004-0452" : "!015149064!", // Archivo ibero-americano
	"0004-4970" : "!015190226!", // Asprenas
	"1594-3445" : "!026329999!", // Barnabiti studi
	"0006-0585" : "!015188272!", // Bibbia e oriente
	"0521-8195" : "!014959801!", // Burgense
	"0008-6673" : "!014525666!", // Carmelus
	"0094-2065" : "!015196542!", // Communio
	"0573-2018" : "!018207030!", // Compostellanum
	"0145-7233" : "!015208451!", // Concordia journal !!pppn
	"0145-7233" : "!325341397!", // Concordia journal !!eppn
	"0210-3133" : "!016056574!", // Escritos del vedat
	"0425-340X" : "!015193012!", // Estudio agustiniano
	"0210-0525" : "!015186695!", // Estudios
	"0210-4393" : "!01517879X!", // Estudios franciscanos
	"0071-2086" : "!015178803!", // Études grégoriennes
	"0883-0053" : "!016231430!", // Ex auditu !!pppn
	"0883-0053" : "!32534129X!", // Ex auditu !!eppn
	"0019-4530" : "!015184552!", // Indian church history review
	"1071-8257" : "!065483030!", // Josephinum journal of theology
	"2244-5161" : "!01544242X!", // Landas
	"0211-4011" : "!016231635!", // Liceo franciscano
	"0024-5895" : "!015193322!", // Logos
	"0456-8494" : "!016231759!", // Lumen
	"0544-9073" : "!015178714!", // Monte Carmelo
	"0470-3790" : "!015189813!", // Naturaleza y gracia
	"1451-3455" : "!111315980!", // Philotheos
	"0193-6212" : "!015195686!", // Presbyterion !!pppn
	"0193-6212" : "!325341338!", // Presbyterion !!eppn
	"0043-2873" : "!015182355!", // Proceedings of the Wesley Historical Society
	"0034-7078" : "!015182835!", // Revista bíblica
	"0036-4703" : "!015213676!", // Sapientia
	"1885-0588" : "!094451443!", // Selecciones de Franciscanismo
	"0210-5225" : "!015242285!", // Sinite
	"0144-8722" : "!015194868!", // Sobornost
	"1017-0499" : "!348457146!", // Studia historiae ecclesiasticae !!pppn
	"1017-0499" : "!454502966!", // Studia historiae ecclesiasticae !!eppn
	"2001-5828" : "!39804984X!", // Svenskt gudstjänstliv !!eppn
	"0251-4788" : "!018289851!", // Taiwan Journal of Theology
	"0495-1549" : "!015193764!", // Teología espiritual
	"0212-1964" : "!016231767!", // Teología y catequesis
	"0040-5620" : "!015185826!", // Theological education
	"0253-3812" : "!018290027!", // Theology & life
	"0211-7096" : "!018288529!", // Urgellia
	"1344-7297" : "!034203265!", // The Japan mission journal
	"0030-5839" : "!015236277!", // The Orthodox word
	"1550-0195" : "!059006382!", // Journal of Unitarian Universalist History
	
};
var nachnameMapping = {
	"Hemingway" : "!16137493X!"  // http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=16137493X&INDEXSET=1
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
var issnLangMapping = {
	"1010-9919" : "ger",
	"2031-5929" : "eng",
	"1010-9913" : "fre",
	"2031-5921" : "ger",
	"1209-9392" : "eng", 
	"0305-7240" : "eng",
	"0167-4544" : "eng",
	"1573-0697" : "eng",
	"1467-8519" : "eng",
	"1467-8608" : "eng",
	"1468-2303" : "eng",
	"1092-1311" : "eng", 
	"1094-5253" : "eng",
	"1086-3222" : "eng",
	"1086-3184" : "eng",
	"1469-8145" : "eng",
	"1469-5103" : "eng",
	"1469-2147" : "eng",
	"1380-3603" : "eng",
	"1744-4195" : "eng",
	"0569-9789" : "spa",
	"0210-0460" : "spa",
	"2444-684X" : "spa",
	"0716-1662" : "spa",
	"0211-5255" : "spa",
	"0211-2035" : "spa",
	"0004-0452" : "spa",
	"0004-4970" : "ita",
	"1594-3445" : "ita",
	"0006-0585" : "ita",
	"0521-8195" : "spa",
	"0008-6673" : "ita",
	"0094-2065" : "eng",
	"0573-2018" : "spa",
	"0145-7233" : "eng",
	"0210-3133" : "spa",
	"0425-340X" : "spa",
	"0210-0525" : "spa",
	"0210-4393" : "spa",
	"0071-2086" : "fre",
	"0883-0053" : "eng",
	"0019-4530" : "eng",
	"1071-8257" : "eng",
	"2244-5161" : "eng",
	"0211-4011" : "spa",
	"0024-5895" : "eng",
	"0456-8494" : "spa",
	"0544-9073" : "spa",
	"0470-3790" : "spa",
	"0193-6212" : "eng",
	"0043-2873" : "eng",
	"0034-7078" : "spa",
	"0036-4703" : "spa",
	"1885-0588" : "spa",
	"0210-5225" : "spa",
	"0144-8722" : "eng",
	"1017-0499" : "eng",
	"2001-5828" : "swe",
	"0251-4788" : "eng",
	"0251-4788" : "chi",
	"0495-1549" : "spa",
	"0212-1964" : "spa",
	"0040-5620" : "eng",
	"0253-3812" : "eng",
	"0253-3812" : "chi",
	"0211-7096" : "spa",
	"1344-7297" : "eng",
	"0030-5839" : "eng",
	"1550-0195" : "eng",
	
};

var issnVolumeMapping = {
	"2031-5929" : "N.S.",
	"2031-5922" : "A.S.",
	
	
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
		var lookupUrl = "http://swb.bsz-bw.de/DB=2.104/SET=70/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=1004&TRM0=" + authorName +"&ACT1=*&IKT1=2057&TRM1=*&ACT2=*&IKT2=8991&TRM2=*&ACT3=*&IKT3=8991&TRM3=" 
		//lookupUrl kann je nach Anforderung noch spezifiziert werden, z.B.
		//var lookupUrl = "http://swb.bsz-bw.de/DB=2.104/SET=70/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=1004&TRM0=" + authorName +"&ACT1=*&IKT1=2057&TRM1=3.*&ACT2=*&IKT2=8991&TRM2=theol*&ACT3=*&IKT3=8991&TRM3=19**";
		
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
		
		//enrich items based on their ISSN
		if (!item.language && item.ISSN && issnLangMapping[item.ISSN]) {
			item.language = issnLangMapping[item.ISSN];
		}
		if (item.volume && item.ISSN && issnVolumeMapping[item.ISSN]) {
			item.volume = issnVolumeMapping[item.ISSN] + item.volume;
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

		//item.type --> 0500 Bibliographische Gattung und Status
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
				
		if (article) {
			writeLine("0500", physicalForm+"o"+cataloguingStatus);//z.B. Aou, Oox
		} else {
			writeLine("0500", physicalForm+"a"+cataloguingStatus);//z.B. Aau
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
		writeLine("1100", date.year.toString() + "$n[" + date.year.toString() + "] \n");
		}
		
		//1130 Datenträger
		//http://swbtools.bsz-bw.de/winibwhelp/Liste_1130.htm
		switch (physicalForm) {
			case "A":
				writeLine("1130", "druck");
				break;
			case "O":
				writeLine("1130", "cofz");
				break;
			default:
				writeLine("1130", "");
		}
		
		//1131 Art des Inhalts
		if (item.itemType == "magazineArticle") {
				writeLine("1131", "!209083166!");
			}
		
		// 1140 Veröffentlichungsart und Inhalt http://swbtools.bsz-bw.de/winibwhelp/Liste_1140.htm
		if (item.itemType == "magazineArticle") {
				writeLine("1140", "uwre");
			}
	
		
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
		
		//item.DOI --> 2051 bei "Oou" bzw. 2053 bei "Aou"
		if (item.DOI) {
			if (physicalForm === "O") {
				writeLine("2051", item.DOI);
			} else if (physicalForm === "A") {
				writeLine("2053", item.DOI);
			}
		}
				
		//Autoren --> 3000, 3010
		//Titel, erster Autor --> 4000
		var titleStatement = "";
		if (item.shortTitle == "journalArticle") {
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
		if (!article) {
			var publicationStatement = "";
			if (item.place) { publicationStatement += item.place; }
			if (item.publisher) { publicationStatement +=  "$n" + item.publisher; }
			writeLine("4030", publicationStatement);
		}
		//4070 $v Bandzählung $j Jahr $h Heftnummer $p Seitenzahl
		if (item.itemType == "journalArticle" || item.itemType == "magazineArticle") {
			var volumeyearissuepage = "";
			if (item.volume && item.ISSN == "2031-5929") { volumeyearissuepage += "$vN.S." + item.volume; } // Schreibweise einer Bandzählung abhängig von jeweiliger Zss.-Aufanhme in WinIBW
			else if (item.volume && item.ISSN == "2031-5922") { volumeyearissuepage += "$vA.S." + item.volume; } // eventuell eine separate Mappingtabelle sinnvoll
			else if (item.volume) { volumeyearissuepage += "$v" + item.volume; }
			if (date.year !== undefined) { volumeyearissuepage +=  "$j" + date.year; }
			if (item.issue) { volumeyearissuepage += "$h" + item.issue.replace("-", "/").replace(/^0/, ""); }
			if (item.pages) { volumeyearissuepage += "$p" + item.pages; }
			
			writeLine("4070", volumeyearissuepage);
		}
				
		//URL --> 4085 nur bei Katalogisierung nach "Oox" im Feld 0500
		if (item.url && physicalForm == "O") {
			writeLine("4085", item.url + "$xH");
		}
		
		if (item.url && item.itemType == "magazineArticle") {
			writeLine("4085", item.url + "$xH");
		}
		
		//Reihe --> 4110
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
		
		//Inhaltliche Zusammenfassung -->4207
		if (item.abstractNote) {
			writeLine("4207", item.abstractNote.replace(/'/g, '\"').replace("<i>", "\'").replace("</i>", "\'").replace("<br/>", "")); 
		}
		
		
		//item.publicationTitle --> 4241 Beziehungen zur größeren Einheit 
		if (item.itemType == "journalArticle" || item.itemType == "magazineArticle") {
			if (item.ISSN && journalMapping[ZU.cleanISSN(item.ISSN)]) {
				writeLine("4241", "Enthalten in" + journalMapping[ZU.cleanISSN(item.ISSN)]);
			} else if (item.publicationTitle) {
				writeLine("4241", "Enthalten in"  + item.publicationTitle);
			}
		
		//4261 Themenbeziehungen (Beziehung zu der Veröffentlichung, die beschrieben wird)|case:magazineArticle
		if (item.itemType == "magazineArticle") {
				writeLine("4261", "Rezension von" + item.publicationTitle); // zwischen den Ausrufezeichen noch die PPN des rezensierten Werkes manuell einfügen.
			}
				
		//SSG-Nummer --> 5056
		if (ssgNummer) {
				writeLine("5056", ssgNummer);
			}	
		
		//Schlagwörter aus einem Thesaurus (Fremddaten) --> 5520
		for (var i=0; i<item.tags.length; i++) {
				var tagStatement = "|s|" + item.tags.map(function(tag) { return tag.tag; }).join('; ').split('; ', 1);
					writeLine("5520", "|s|" + item.tags[i].tag.replace(/ --/g, ';'));	
		}
		

		
		// 0999 verify outputText ppn in OGND
		var ppnVerify1 = "http://swb.bsz-bw.de/DB=2.104/SET=1/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=2072&TRM0=" + content + "&ACT1=*&IKT1=2057&TRM1=*&ACT2=*&IKT2=8991&TRM2=19**&ACT3=%2B&IKT3=4060&TRM3=tpv*&ACT4=%2B&IKT4=8991&TRM4=";
		
		var ppnVerify2 = "http://swb.bsz-bw.de/DB=2.104/SET=1/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=2072&TRM0=" + creator.lastName + "&ACT1=*&IKT1=2057&TRM1=*&ACT2=*&IKT2=8991&TRM2=19**&ACT3=%2B&IKT3=4060&TRM3=tpv*&ACT4=%2B&IKT4=8991&TRM4=&ACT5=*&IKT5=2057&TRM5=" ;
						
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
