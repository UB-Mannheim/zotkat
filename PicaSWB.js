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
	"lastUpdated": "2017-06-29 09:01:00"
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
var journalMapping = {
	"0021-9231" : "!014411350!", // Journal of Biblical Literature  http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=014411350&INDEXSET=1,
	"0591-2385" : "!01515663X!", // Zygon
	"1467-9744" : "!090854799!", // Zygon
    "0891-5881" : "!023125381!", // Dialogue and alliance
	"0884-5379" : "!341092975!", // fides et historia
	"1474-6700" : "!105283193!", // Theology and science  
	"1462-2459" : "!094835578!", // Reformation & Renaissance review  
	"0031-0328" : "!014896486!", // Palestine exploration quarterly 
	"0037-7686" : "!01440009X!", // Social compass !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1461-7404" : "!01440009X!", // Social compass !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1745-5294" : "!099025957!", // Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142-064X" : "!099025957!", // Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142064X" : "!099025957!", // Journal for the study of the New Testament
	"1476-6728" : "!10337356X!", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0309-0892" : "!10337356X!", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"03090892" : "!10337356X!", // Journal for the study of the Old Testament
	"0771-7776" : "!01496841X!", // Sacris erudiri  
	"2284-7308" : "!281073546!", // Perichoresis  
	"1745-5189" : "!254072119!", // Feminist theology 
	"0966-7350" : "!254072119!", // Feminist theology
	"09667350" : "!254072119!", // Feminist theology
	"1745-5286" : "!119460610!", // Journal for the study of the pseudepigrapha 
	"0951-8207" : "!119460610!", // Journal for the study of the pseudepigrapha  
	"09518207" : "!119460610!", // Journal for the study of the pseudepigrapha 
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
	"0953-9468" : "!11946067X!", // Studies in Christian ethics
	"1745-5235" : "!11946067X!", // Studies in Christian ethics
	"09539468" : "!11946067X!", // Studies in Christian ethics
	"0888-3769" : "!015891976!", // Religion and literature
	"0029-4500" : "!015891976!", // Religion and literature
	"0888-3769" : "!311098312!", // Religion and literature
	"0040-5639" : "!266225179!", // Theological studies
	"2169-1304" : "!266225179!", // Theological studies
	"0943-7592" : "!040100804!", // Journal for the History of Modern Theology über Degruyter = 4213 Hauptsacht. bis 14.2007: Zeitschrift für neuere //Theologiegeschichte; @Grotz: als „…$h1-2“ (statt mit Querstrich: „…$h1/2“) 
	"1612-9776" : "!040100804!", // Journal for the History of Modern Theology // Zeitschrift für Neuere Theologiegeschichte
	"1743-1301" : "!014896486!", // Palestine exploration quarterly
    "1743-1301" : "!112775594!", // Palestine exploration quarterly
	"0031-0328" : "!112775594!", // Palestine exploration quarterly
	"1745-5316" : "!119461234!", // Ecclesiology !!hier kein direkter Downlaod, sondern über Zotero-button
	"0034-6373" : "!401709590!", // Review & Expositor
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
    "1030-570X" : "!32599787X!", // Pacifica
    "1839-2598" : "!32599787X!", // Pacifica
	"0890-1112" : "!023118172!", // Journal of ritual studies	
	"0091-8296" : "!319103501!", // Missiology
	"2051-3623" : "!319103501!", // Missiology
	"0011-1953" : "!273873555!", // Cross currents
	"1939-3881" : "!273873555!", // Cross currents
	"00111953" : "!273873555!", // Cross currents
	"19393881" : "!273873555!", // Cross currents
	"0020-9643" : "!344661555!", // Interpretation: A Journal of Bible and Theology
	"2159-340X" : "!344661555!", // Interpretation: A Journal of Bible and Theology
	"0067-6535" : "!015191826!", // Biblical research
	"0588-3237" : "!015194884!", // Colloquium
	"0003-2980" : "!015189996!", // Andrews University Seminary studies
	"0118-8534" : "!079721079!", // Asian journal of pentecostal studies
	"1477-8351" : "!103869212!", // Aramaic studies
	"1745-5227" : "!103869212!", // Aramaic studies
	"1462-3153" : "!078316677!", // Journal for the Aramaic bible
	"0229-2807" : "!059754931!", // ARC
	"0094-5323" : "!015192121!", // Augustinian studies
	"00143367" : "!015178811!", // Evangelical quarterly
	"1474-225X" : "!099026465!", // International journal for the study of the Christian church
	"1747-0234" : "!099026465!", // International journal for the study of the Christian church
	"1547-9080" : "!111171709!", // Newman studies journal
	"0144-8153" : "!015230376!", // Evangelical review of theology
	"0360-8808" : "!015535347!", // Journal of the Evangelical Theological Society
	"0092-6558" : "!015194132!", // Journal of the Interdenominational Theological Center
	"1934-9637" : "!260747769!", // Journal of spirituality in mental health
	"1934-9645" : "!260747769!", // Journal of spirituality in mental health
    "1570-0739" : "!014821419!", // Zeitschrift für Religions- und Geistesgeschichte
	"0275-5270" : "!015243044!", // Word and World
	"0034-3072" : "!015182711!", // Reformed theological review  
	"0025-9373" : "!015181278!", // The Mennonite quarterly review  
	"00259373" : "!015181278!", // The Mennonite quarterly review 
	"1023-0807" : "!043088619!", // Religion and theology  
	"1574-3012" : "!043088619!", // Religion and theology  
	"0036-3227" : "!015183696!", // St. Vladimir's theological quarterly   
	"0092-4245" : "!015192091!", // Wesleyan theological journal
	"0006-2014" : "!014828995!", // Biblische Zeitschrift
	"1469-8145" : "!01489324X!", // New Testament studies
	"0048-1009" : "!014862662!", // Novum Testamentum
	"0040-571X" : "!336956738!", // Theology
	"2044-2696" : "!336956738!", // Theology
	"0040-5736" : "!325341001!", // Theology today
	"2044-2556" : "!325341001!", // Theology today
	"2304-4896" : "!018091229!", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0323-4142" : "!018091229!", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0486-5642" : "!015195538!", // Restoration quarterly
	"0360-3032" : "!015206114!", // Trinity journal
    "0340-6083" : "!01450135X!", // Göttinger Predigtmeditationen
	"0720-6259" : "!014553880!", // Pastoraltheologie
	"0031-2827" : "!014553880!", // Pastoraltheologie
    "2197-0831" : "!014553880!", // Pastoraltheologie
	"0174-9927" : "!014553880!", // Pastoraltheologie
	"1065-6219" : "!054391385!", // Journal of research on Christian education
	"1934-4945" : "!054391385!", // Journal of research on Christian education
	"0926-6453" : "!032853262!", // Studies in spirituality
	"1783-1814" : "!032853262!", // Studies in spirituality
	"1745-5251" : "!032869959!", // Journal of pentecostal theology
	"0966-7369" : "!032869959!", // Journal of pentecostal theology
	"0043-4388" : "!015196739!", // Westminster Theological Seminary  
	"0033-5053" : "!015189589!", // Quaker history
	"1934-1504" : "!015189589!", // Quaker history
	"0809-7291" : "!477911633!", // Nordic journal of religion and society 
	"0802-0167" : "!477911633!", // Nordic journal of religion and society
	"1890-7008" : "!477911633!", // Nordic journal of religion and society 
	"1069-4404" : "!034203478!", // Sociology of religion
	"1759-8818" : "!034203478!", // Sociology of religion
	"0141-6200" : "!015208621!", // British journal of religious education
	"2169-2327, 2169-2335" : "!381569306!", // International journal of philosophy and theology
	"2169-2327" : "!381569306!", // International journal of philosophy and theology
	"0890-2461" : "!016231562!", // Philosophy & theology
	"1476-993X" : "!254675581!", // Currents in biblical research  !! Druckausgabe ausgewertet bis 14. 2015 = genauer: nur 14. 2015, 1
	"1745-5200" : "!254675581!", // Currents in biblical research 
	"1476993X" : "!254675581!", // Currents in biblical research
	"0012-5806" : "!462734986!", // The Downside review  !! Druckausgabe ausgewertet bis 133. 2015, 470
	"2052-9449" : "!401709590!", // Review & expositor   !! Druckausgabe ausgewertet bis 112. 2015, 4
	"1568-5152" : "!033052395!", // Biblical interpretation
	"1370-6020" : "!054531918!", // INTAMS review      !!  siehe weiterer Eintrag oben  -  Abspeicherung mit Zauberstaub!
	"1783-2446" : "!038505428!", // Journal of the European Society of Women in Theological Research   -   Abspeicherung mit Zauberstaub!  Aufsätze an Stücktitel!
	"1026-2946" : "!077662814!", // Africa Journal of Evangelical Theology
	"0029-5973" : "!014497301!", // Numen PISSN
	"1568-5276" : "!014497301!", // Numen EISSN
	"2033-4273" : "!379731398!", // ET-Studies Online Publikation 
	"2032-5215" : "!379731398!", // ET-Studies Online Publikation
	"1783-1431" : "!040105555!", // Ethical Perspectives
	"0266-7177" : "!015394956!", // Modern theology Print-PPN  PISSN
	"1468-0025" : "!096290587!", // Modern theology Print-PPN  EISSN
	"0009-661X" : "!015191273!", // Churchman
	"1126-6244" : "!094423636!", // Adamantius
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
	"0082-7118" : "!015195775!", // Tyndale Bulletin
	"2326-6236" : "!014891263!", // The jurist: studies in church law and ministry
	"2363-6696" : "!416961657!", // Entangled Religions
	"0044-3441" : "!14821419!", // Zeitschrift für Religions- und Geistesgeschichte
	"1862-5886" : "!281314136!", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "!281189013!", // Marburg Journal of Religion
	"0017-2251" : "!015194361!", // Christian scholar’s review
	"0774-5524" : "!015182746!", // Questions liturgiques
	"1861-5813" : "!281289085!", // Online - Heidelberg Journal of Religions on the Internet
	"1783-1806" : "!028039181!", // Studies in Interreligious Dialogue
	"1783-1709" : "!015182746!", // Questions Liturgiques/Studies in Liturgy
	"0035-0893" : "!014419440!", // Revue bénédictine
	"1861-5813" : "!281289085!", // Online - Heidelberg Journal of Religions on the Internet
	"1783-1806" : "!028039181!", // Studies in Interreligious Dialogue
	"1867-4240" : "!343626896!", // Transformierte Buddhismen
	"1583-0039" : "!281222681!", // Journal for the Study of Religions and Ideologies
	"2294-6209" : "!014398974!", // Byzantion
	"1468-2400" : "!094641951!", // International journal of systematic theology !!eppn
	"1463-1652" : "!094641951!", // International journal of systematic theology
	"14631652" : "!094641951!", // International journal of systematic theology
	"0361-0160" : "!014787814!", // The Sixteenth Century Journal !!pppn
	"0361-0160" : "!103189548!", // The Sixteenth Century Journal !!eppn
	"03610160" : "!014787814!", // The Sixteenth Century Journal !!pppn
	"03610160" : "!103189548!", // The Sixteenth Century Journal !!eppn
	"0014-2239" : "!424017644!", // Etudes théologiques et religieuses !!pppn
	"2272-9011" : "!424017644!", // Etudes théologiques et religieuses !!eppn
	"0038-8610" : "!015205207!", // Concordia Theological Quarterly
	"0047-2867" : "!015194620!", // Journal of Theology for Southern Africa
	"0342-0914" : "!014414104!", // Lutherjahrbuch
	"0194-3448" : "!015243265!", // American journal of theology and philosophy
	"2199-4463" : "!416962777!", // Religion in the Roman Empire
	"21994463, 21994471" : "!416962777!", // Religion in the Roman Empire
	"0148-3331" : "!273874853!", // Christianity & literature !! eppn
	"2056-5666" : "!273874853!", // Christianity & literature !! pppn
	"1868-8020" : "!323851452!", // Early Christianity
	"1868-7032" : "!325341478!", // Early Christianity 
	"0040-5698" : "!279448899!", // Theologische Rundschau
	"0044-3549" : "!252209540!", // Zeitschrift für Theologie und Kirche
	"2195-9773" : "!404297986!", // Philosophy, Theology and the Sciences
	"0944-5706" : "!307015734!", // Jewish Studies Quarterly
	"2192-2276" : "!433582189!", // Hebrew Bible and Ancient Israel
	"1063-8512" : "!033050201!", // Pro ecclesia
	"1890-7008, 0809-7291" : "!477911633!", // Nordic journal of religion and society 
	"00207047" : "!103746927!", // International Journal for Philosophy of Religion
	"0020-7047" : "!103746927!", // International Journal for Philosophy of Religion
	"1572-8684" : "!103746927!", // International Journal for Philosophy of Religion
	"2396-9393" : "!266225314!", // International bulletin of mission research
	"2396-9407" : "!01523083X!", // International bulletin of mission research
	"2396-9393, 2396-9407" : "!01523083X!", // International bulletin of mission research
	"0265-3788" : "!273886452!", // Transformation
	"0014-5246" : "!119460661!", // The Expository times
	"1745-5308" : "!119460661!", // The Expository times
	"0014-5246, 1745-5308" : "!119460661!", // The Expository times
	"00145246" : "!119460661!", // The Expository times
	"0003-1224" : "!094425426!", // American sociological review|krimdok
	"1862-2593" : "!26681946X!", // Berliner Journal für Soziologie|krimdok
	"0268-5809" : "!078709199!", // International sociology|krimdok
	"2196-8225" : "!276818768!", // Praxis der Kinderpsychologie und Kinderpsychiatrie|krimdok
	"2190-6238" : "!11093539X!", // Psychologische Rundschau|krimdok
	"1461-7439" : "!098253387!", // Theoretical criminology|krimdok
	"1438-9460" : "!294342109!", // Zeitschrift für Sexualforschung|krimdok
	"2380-8829" : "!483612618!", // The Covenant Quarterly
	"0212-1964" : "!016231767!", // Teología y catequesis 
	"14722089" : "!098783998!", //  International congregational journal 
	"1472-2089" : "!098783998!", //  International congregational journal
	"09602720" : "!032741545!", //  European journal of theology
	"0960-2720" : "!032741545!", //  European journal of theology
	"0555-9308" : "!331560291!", //  Pastoraltheologische Informationen
	"0093-531X" : "!014809931!", //  Perspectives in religious studies
	"0967-8948" : "!487680898!", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "!42401257X!", // Temenos : nordic journal of comparative religion
    "1799-3121" : "!367402394!", // Approaching religion    
    "1677-1222" : "!281208956!", // Rever : revista de estudos da religião
	"1475-5610" : "!094641897!", // Culture and Religion
	"00224189" : "!113710593!", // Journal of Religion
	"1549-6538" : "!113710593!", // Journal of Religion
	"0022-4189" : "!113710593!", // Journal of Religion
	
	
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
	"fr" : "fre",
	"English" : "eng",
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
	"0018-2710" : "eng",
	"0043-2040" : "ger",
	"0733-4273 (PRINT)" : "eng",
	"0082-7118" : "eng", // Tyndale Bulletin
	"0141-6200" : "eng", // British Journal of Religious Education
	"0943-3058" : "eng", // Method and theory in the study of religion
	"2363-6696" : "manuell", // Entangled Religions
	"0044-3441" : "ger", // Zeitschrift für Religions- und Geistesgeschichte
	"1862-5886" : "ger", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "eng", // Marburg Journal of Religion
	"0017-2251" : "eng", // Christian scholar’s review
	"0774-5524" : "eng", // Questions liturgiques
	"1783-1806" : "eng", // Studies in Interreligious Dialogue
	"1867-4240" : "ger", // Transformierte Buddhismen
	"0342-0914" : "ger", // Lutherjahrbuch
	"0040-5698" : "ger", // Theologische Rundschau
	"0044-3549" : "ger", // Zeitschrift für Theologie und Kirche
	"0212-1964" : "spa", // Teología y catequesis 
	"0555-9308" : "ger", // Pastoraltheologische Informationen
    "0967-8948" : "eng", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "eng", // Temenos : nordic journal of comparative religion
    "1799-3121" : "eng", // Approaching religion
    "1677-1222" : "manuell", // Rever : revista de estudos da religião

	
	
};

var issnVolumeMapping = {
	"2031-5929" : "N.S.",
	"2031-5922" : "A.S.",
	"1010-9919" : "N.S.",
};

var issnPhysicalFormMapping = {
	"1550-0195" : "O",
	"2031-5929" : "A",
	"2032-5215" : "O", // ET-Studies Online Publikation - weiter unten gleiche Zs mit "A"
	"0021-9231" : "A", // Journal of Biblical Literature  http://swb.bsz-bw.de/DB=2.1/PPNSET?PPN=014411350&INDEXSET=1,
	"0591-2385" : "A", // Zygon
	"1467-9744" : "O", // Zygon
    "0891-5881" : "A", // Dialogue and alliance
	"0884-5379" : "A", // fides et historia
	"1474-6700" : "A", // Theology and science  
	"1462-2459" : "A", // Reformation & Renaissance review  
	"0031-0328" : "A", // Palestine exploration quarterly 
	"0037-7686" : "A", // Social compass !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1461-7404" : "A", // Social compass !!hier kein direkter Downlaod, sondern über button "abstracts", ansonsten keine ISSN-Übernahme!!
	"1745-5294" : "O", // Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142-064X" : "O", // Journal for the study of the New Testament  !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0142064X" : "O", // Journal for the study of the New Testament
	"1476-6728" : "O", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"0309-0892" : "O", // Journal for the study of the Old Testament !!hier kein direkter Downlaod, sondern über button "abstracts", //ansonsten keine ISSN-Übernahme!!
	"03090892" : "O", // Journal for the study of the Old Testament
	"0771-7776" : "A", // Sacris erudiri  
	"2284-7308" : "A", // Perichoresis  
	"1745-5189" : "O", // Feminist theology 
	"0966-7350" : "O", // Feminist theology
	"09667350" : "O", // Feminist theology 
	"1357-4175" : "A", // Reformation  
	"1752-0738" : "A", // Reformation  
	"1462-317X, 1743-1719" : "A", // Political theology   
	"0360-6503" : "A", // Process studies   
	"0733-4273" : "A", // Journal of psychology and Christianity
	"0929-0761" : "A", // Dead Sea discoveries   
	"1568-5179" : "A", // Dead Sea discoveries  
	"0022-2097" : "A", // The journal of Jewish studies
	"0018-2613" : "A", // Historische Zeitschrift 
	"1871-241X" : "A", // Church history and religious culture   
	"1871-2428" : "A", // Church history and religious culture  
	"0946-3518" : "A", // Praktische Theologie
	"0938-5320" : "A", // Praktische Theologie
	"2198-0462" : "A", // Praktische Theologie                     
	"0043-2040, 2196-8284" : "A", // Wege zum Menschen
	"0021-1400" : "A", // Irish theological quaterly
	"0023-0707" : "A", // Kerygma und Dogma
	"1135-4712" : "A", // 'Ílu
	"0953-9468" : "O", // Studies in Christian ethics
	"1745-5235" : "O", // Studies in Christian ethics
	"09539468" : "O", // Studies in Christian ethics
	"0888-3769" : "A", // Religion and literature
	"0029-4500" : "A", // Religion and literature
	"0040-5639" : "O", // Theological studies
	"2169-1304" : "O", // Theological studies
	"0943-7592" : "A", // Journal for the History of Modern Theology über Degruyter = 4213 Hauptsacht. bis 14.2007: Zeitschrift für neuere Theologiegeschichte; @Grotz: als „…$h1-2“ (statt mit Querstrich: „…$h1/2“) 
	"1612-9776" : "A", // Journal for the History of Modern Theology // Zeitschrift für Neuere Theologiegeschichte
	"1743-1301" : "A", // Palestine exploration quarterly
	"1745-5316" : "A", // Ecclesiology !!hier kein direkter Downlaod, sondern über Zotero-button
	"0034-6373" : "O", // Review & Expositor
	"0034-4125" : "A", // Religious studies 
	"1469-901X" : "A", // Religious studies
	"1573-3831" : "A", // Mission studies
	"0168-9789" : "A", // Mission studies
	"0091-6471" : "A", // Journal of psychology and theology
	"1476-8690" : "A", // Journal for the study of the historical Jesus
	"2222-582X" : "A", // Journal of early Christian history
	"0018-2710" : "A", // History of religions
	"1545-6935" : "A", // History of religions
	"0384-9694" : "A", // Journal of religious ethics
	"1467-9795" : "A", // Journal of religious ethics
	"0943-3058" : "A", // Method & theory in the study of religion
	"1570-0682" : "A", // Method & theory in the study of religion
	"1783-1474" : "A", // INTAMS review
	"0022-4200" : "A", // Journal of religion in Africa
	"1570-0666" : "A", // Journal of religion in Africa
	"1092-6690" : "A", // Nova religio
	"1541-8480" : "A", // Nova religio
	"1079-9265" : "A", // Religion and the arts
	"1568-5292" : "A", // Religion and the arts
	"0008-4298" : "A", // Studies in religion = Sciences religieuses
	"2042-0587" : "A", // Studies in religion = Sciences religieuses
	"1380-7854" : "A", // Medieval encounters
	"1570-0674" : "A", // Medieval encounters
	"0319-485X" : "A", // Religious studies review
	"1748-0922" : "A", // Religious studies review
	"0497-1817" : "A", // Temenos
	"2342-7256" : "A", // Temenos
    "1030-570X" : "O", // Pacifica
    "1839-2598" : "O", // Pacifica
	"0890-1112" : "A", // Journal of ritual studies	
	"0091-8296" : "O", // Missiology
	"2051-3623" : "O", // Missiology
	"0011-1953" : "O", // Cross currents
	"1939-3881" : "O", // Cross currents
	"00111953" : "O", // Cross currents
	"19393881" : "O", // Cross currents
	"0020-9643" : "O", // Interpretation: A Journal of Bible and Theology
	"2159-340X" : "O", // Interpretation: A Journal of Bible and Theology
	"0067-6535" : "A", // Biblical research
	"0588-3237" : "A", // Colloquium
	"0003-2980" : "A", // Andrews University Seminary studies
	"0118-8534" : "A", // Asian journal of pentecostal studies
	"1477-8351" : "A", // Aramaic studies
	"1745-5227" : "A", // Aramaic studies
	"0229-2807" : "A", // ARC
	"0094-5323" : "A", // Augustinian studies
	"0014-3367" : "A", // Evangelical quarterly
	"1474-225X" : "A", // International journal for the study of the Christian church
	"1747-0234" : "A", // International journal for the study of the Christian church
	"1547-9080" : "A", // Newman studies journal
	"0144-8153" : "A", // Evangelical review of theology
	"0360-8808" : "A", // Journal of the Evangelical Theological Society
	"0092-6558" : "A", // Journal of the Interdenominational Theological Center
	"1934-9637" : "A", // Journal of spirituality in mental health
	"1934-9645" : "A", // Journal of spirituality in mental health
    "1570-0739" : "A", // Zeitschrift für Religions- und Geistesgeschichte
	"0275-5270" : "A", // Word and World
	"0034-3072" : "A", // Reformed theological review  
	"0025-9373" : "A", // The Mennonite quarterly review  
	"00259373" : "A", // The Mennonite quarterly review
	"1023-0807" : "A", // Religion and theology  
	"1574-3012" : "A", // Religion and theology  
	"0036-3227" : "A", // St. Vladimir's theological quarterly   
	"0092-4245" : "A", // Wesleyan theological journal
	"0006-2014" : "A", // Biblische Zeitschrift
	"1469-8145" : "A", // New Testament studies
	"0048-1009" : "A", // Novum Testamentum
	"0040-571X" : "O", // Theology
	"2044-2696" : "O", // Theology
	"0040-5736" : "O", // Theology today
	"2044-2556" : "O", // Theology today
	"00405736" : "O", // Theology today
	"2304-4896" : "A", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0323-4142" : "A", // Zeitschrift der Savigny-Stiftung für Rechtsgeschichte / Kanonistische Abteilung
	"0486-5642" : "A", // Restoration quarterly
	"0360-3032" : "A", // Trinity journal
    "0340-6083" : "A", // Göttinger Predigtmeditationen
	"0720-6259" : "A", // Pastoraltheologie
	"0031-2827" : "A", // Pastoraltheologie
    "2197-0831" : "A", // Pastoraltheologie
	"0174-9927" : "A", // Pastoraltheologie
	"1065-6219" : "A", // Journal of research on Christian education
	"1934-4945" : "A", // Journal of research on Christian education
	"0926-6453" : "A", // Studies in spirituality
	"1783-1814" : "A", // Studies in spirituality
	"1745-5251" : "A", // Journal of pentecostal theology
	"0966-7369" : "A", // Journal of pentecostal theology
	"0043-4388" : "A", // Westminster Theological Seminary  
	"0033-5053" : "A", // Quaker history
	"1934-1504" : "A", // Quaker history
	"0809-7291" : "A", // Nordic journal of religion and society 
	"0802-0167" : "A", // Nordic journal of religion and society
	"1890-7008" : "O", // Nordic journal of religion and society 
	"1069-4404" : "A", // Sociology of religion
	"1759-8818" : "A", // Sociology of religion
	"0141-6200" : "A", // British journal of religious education
	"2169-2327" : "A", // International journal of philosophy and theology
	"2169-2335" : "A", // International journal of philosophy and theology
	"0890-2461" : "A", // Philosophy & theology
	"1476-993X" : "O", // Currents in biblical research  !! Druckausgabe ausgewertet bis 14. 2015 = genauer: nur 14. 2015, 1
	"1745-5200" : "O", // Currents in biblical research 
	"1476993X" : "O", // Currents in biblical research 
	"0012-5806" : "O", // The Downside review  !! Druckausgabe ausgewertet bis 133. 2015, 470
	"2052-9449" : "O", // Review & expositor   !! Druckausgabe ausgewertet bis 112. 2015, 4
	"1568-5152" : "A", // Biblical interpretation
	"1370-6020" : "A", // INTAMS review      !!  siehe weiterer Eintrag oben  -  Abspeicherung mit Zauberstaub!
	"1783-2446" : "A", // Journal of the European Society of Women in Theological Research   -   Abspeicherung mit Zauberstaub!  Aufsätze an Stücktitel!
	"1026-2946" : "A", // Africa Journal of Evangelical Theology
	"0029-5973" : "A", // Numen PISSN
	"1568-5276" : "A", // Numen EISSN
	"2033-4273" : "A", // ET-Studies Online Publikation 
	"2032-5215" : "A", // ET-Studies Online Publikation
	"1783-1431" : "A", // Ethical Perspectives
	"0266-7177" : "A", // Modern theology Print-PPN  PISSN
	"1468-0025" : "O", // Modern theology Print-PPN  EISSN
	"0009-661X" : "A", // Churchman
	"1126-6244" : "A", // Adamantius
	"1010-9919" : "A", // old testament essays
	"0935-7335" : "A", // Ethik in der Medizin 
	"1437-1618" : "A", // Ethik in der Medizin
	"1209-9392" : "A", // Women in Judaism
	"0305-7240" : "A", // Journal of moral education !!pppn
	"1465-3877" : "A", // Journal of moral education !!eppn
	"0167-4544" : "A", // Journal of business ethics !!pppn
	"1573-0697" : "A", // Journal of business ethics !!eppn
	"0269-9702" : "A", // Bioethics !!pppn
	"1467-8519" : "A", // Bioethics !!eppn
	"1467-8608" : "A", // Business ethics !!eppn
	"0962-8770" : "A", // Business ethics !!pppn
	"1468-2303" : "A", // History and theory !!eppn
	"0018-2656" : "A", // History and thoery !!pppn
	"1092-1311" : "A", // The journal of religion and film
	"1086-3222" : "A", // Journal of the history of ideas !!eppn
	"0022-5037" : "A", // Journal of the history of ideas !!pppn
	"1086-3184" : "A", // Journal of early Christian studies !!eppn
	"1067-6341" : "A", // Journal of early Christian studies !!pppn
	"1469-5103" : "A", // The historical journal !!eppn
	"0018-246X" : "A", // The historical journal !!pppn
	"1469-2147" : "A", // Cambridge quarterly of healthcare ethics !!eppn
	"0963-1801" : "A", // Cambridge quarterly of healthcare ethics !!pppn
	"1380-3603" : "A", // Christian bioethics !!pppn
	"1744-4195" : "A", // Christian bioethics !!eppn
	"0569-9789" : "A", // Analecta calasanctiana
	"0210-0460" : "A", // Anales valentinos
	"2444-684X" : "A", // Anales valentinos, Escritos del Vedat
	"0716-1662" : "A", // Anuario de historia de la Iglesia en Chile
	"0211-5255" : "A", // Archivo Dominicano
	"0211-2035" : "A", // Archivo agustiniano
	"0004-0452" : "A", // Archivo ibero-americano
	"0004-4970" : "A", // Asprenas
	"1594-3445" : "A", // Barnabiti studi
	"0006-0585" : "A", // Bibbia e oriente
	"0521-8195" : "A", // Burgense
	"0008-6673" : "A", // Carmelus
	"0094-2065" : "A", // Communio
	"0573-2018" : "A", // Compostellanum
	"0145-7233" : "A", // Concordia journal !!pppn
	"0145-7233" : "A", // Concordia journal !!eppn
	"0210-3133" : "A", // Escritos del vedat
	"0425-340X" : "A", // Estudio agustiniano
	"0210-0525" : "A", // Estudios
	"0210-4393" : "A", // Estudios franciscanos
	"0071-2086" : "A", // Études grégoriennes
	"0883-0053" : "A", // Ex auditu !!pppn
	"0883-0053" : "A", // Ex auditu !!eppn
	"0019-4530" : "A", // Indian church history review
	"1071-8257" : "A", // Josephinum journal of theology
	"2244-5161" : "A", // Landas
	"0211-4011" : "A", // Liceo franciscano
	"0024-5895" : "A", // Logos : a journal of Eastern Christian Studies
	"0456-8494" : "A", // Lumen
	"0544-9073" : "A", // Monte Carmelo
	"0470-3790" : "A", // Naturaleza y gracia
	"1451-3455" : "A", // Philotheos
	"0193-6212" : "A", // Presbyterion !!pppn
	"0193-6212" : "A", // Presbyterion !!eppn
	"0043-2873" : "A", // Proceedings of the Wesley Historical Society
	"0034-7078" : "A", // Revista bíblica
	"0036-4703" : "A", // Sapientia
	"1885-0588" : "A", // Selecciones de Franciscanismo
	"0210-5225" : "A", // Sinite
	"0144-8722" : "A", // Sobornost
	"1017-0499" : "A", // Studia historiae ecclesiasticae !!pppn
	"1017-0499" : "A", // Studia historiae ecclesiasticae !!eppn
	"2001-5828" : "A", // Svenskt gudstjänstliv !!eppn
	"0251-4788" : "A", // Taiwan Journal of Theology
	"0495-1549" : "A", // Teología espiritual
	"0212-1964" : "A", // Teología y catequesis
	"0040-5620" : "A", // Theological education
	"0253-3812" : "A", // Theology & life
	"0211-7096" : "A", // Urgellia
	"1344-7297" : "A", // The Japan mission journal
	"0030-5839" : "A", // The Orthodox word
	"1550-0195" : "A", // Journal of Unitarian Universalist History
	"0014-701X" : "A", // Faith and freedom
	"0283-8486" : "A", // Journal of prehistoric religion
	"0342-2356" : "A", // Ugarit-Forschungen
	"0039-338X" : "A", // Studia theologica
	"0901-8328" : "A", // Scandinavian journal of the Old Testament
	"1086-3249" : "A", // Kennedy Institute of Ethics journal
	"0040-5671" : "A", // Theologische Literaturzeitung !!pppn
	"0889-048X" : "A", // Agriculture and human values !!pppn
	"1572-8366" : "A", // Agriculture and human values !!eppn
	"1386-2820" : "A", // Ethical theory and moral practice !!pppn
	"1572-8447" : "A", // Ethical theory and moral practice !!eppn
	"1187-7863" : "A", // Journal of agricultural and environmental ethics !!pppn
	"1573-322X" : "A", // Journal of agricultural and environmental ethics !!eppn
	"1468-2265" : "A", // Heythrop journal !!eppn
	"1468-0025" : "O", // Modern theology !!eppn
	"0031-2789" : "A", // Pastoral psychology !!pppn
	"1573-6679" : "A", // Pastoral psychology !!eppn
	"1364-436X" : "A", // International journal of children's spirituality !!pppn
	"0959-6410" : "A", // Islam and Christian-Muslim relations !!pppn
	"1203-1542" : "A", // The journal of Hebrew scriptures !!eppn
	"0024-5100" : "A", // Liturgisches Jahrbuch !!pppn
	"0024-5100" : "A", // Liturgisches Jahrbuch !!eppn
	"1099-0046" : "A", // Review of biblical literature !!pppn
	"1089-7747" : "A", // TC !!eppn
	"1467-9647" : "A", // Teaching theology & religion !!eppn
	"1540-6385" : "A", // Dialog !!eppn
	"1661-3317" : "O", // Lectio difficilior !!eppn
	"1473-4257" : "A", // Journal of medical ethics !!eppn
	"1468-2400" : "O", // International journal of systematic theology !!eppn
	"1463-1652" : "O", // International journal of systematic theology !!pppn
	"14631652" : "O", // International journal of systematic theology !!pppn
	"1466-769X" : "A", // Nursing philosophy !!eppn
	"2473-3725" : "A", // The Thomist !!pppn
	"2473-3725" : "A", // The Thomist !!eppn
	"0969-7330" : "A", // Nursing ethics !!pppn
	"1477-0989" : "A", // Nursing ethics !!eppn
	"0006-0887" : "A", // Biblica !!pppn
	"1568-5365" : "A", // Novum Testamentum !!eppn
	"1568-5330" : "A", // Vetus Testamentum !!eppn
	"1568-5179" : "A", // Dead Sea discoveries !!eppn
	"1091-6687" : "A", // Logos : a journal of catholic thought and culture !!pppn
	"0008-8080" : "A", // The Catholic historical review !!pppn
	"1568-5152" : "A", // Biblical interpretation !!eppn
	"0003-097X" : "A", // Bulletin of the American Schools of Oriental Research !!pppn
	"0017-8160" : "A", // The Harvard theological review !!pppn
	"1475-4517" : "A", // The Harvard theological review !!eppn
	"1535-3117" : "A", // Spiritus !!eppn
	"0361-0160" : "A", // The sixteenth century journal !!pppn
	"0034-4087" : "A", // Religious education !!pppn
	"0002-7049" : "A", // America !!pppn
	"0003-0279" : "A", // Journal of the American Oriental Society !!pppn
	"0003-3286" : "A", // Anglican theological review !!pppn
	"0003-3286" : "A", // Anglican theological review !!eppn
	"0006-0895" : "A", // The Biblical archeologist !!pppn
	"1094-2076" : "A", // Near Eastern archaeology !!pppn
	"0008-7912" : "A", // The catholic biblical quarterly !!pppn
	"0009-5281" : "A", // The Christian century !!pppn
	"0009-5281" : "A", // The Christian century !!eppn
	"0009-5753" : "A", // Christianity today !!pppn
	"0009-5753" : "A", // Christianity today !!eppn
	"0009-6407" : "A", // Church history !!pppn
	"1755-2613" : "A", // Church history !!eppn
	"1758-6623" : "A", // The ecumenical review !!eppn
	"1758-6631" : "A", // International review of mission !!eppn
	"0021-9231" : "A", // Journal of biblical literature !!eppn
	"0021-969X" : "A", // Journal of church and state !!pppn
	"2040-4867" : "A", // Journal of church and state !!eppn
	"0022-0256" : "A", // Journal of cuneiform studies !!pppn
	"0022-0558" : "A", // Journal of ecumenical studies !!pppn
	"0022-2097" : "A", // The journal of Jewish studies !!pppn - in Z. 29 mit ppn gemappt: diese Z. löschen?
	"0022-4235" : "A", // The journal of religious thought !!pppn
	"0022-4235" : "A", // The journal of religious thought !!eppn
	"0022-4480" : "A", // Journal of Semitic studies !!pppn
	"1477-8556" : "A", // Journal of Semitic studies !!eppn
	"0022-5185" : "A", // The journal of theological studies !!pppn
	"1477-4607" : "A", // The journal of theological studies !!eppn
	"0022-5762" : "A", // Judaism !!pppn
	"0022-5762" : "A", // Judaism !!eppn
	"0040-5736" : "A", // Theologie today !!pppn - in Z. 125 mit ppn gemappt: diese Z. löschen?
	"1570-0720" : "A", // Vigiliae Christianae !!eppn
	"1570-0631" : "A", // Journal for the study of Judaism !!eppn
	"0091-6471" : "A", // Journal of psychology and theology !!pppn - in Z. 61 mit ppn gemappt: diese Z. löschen?
	"00916471" : "A",  // Journal of psychology and theology !ohne Bindestrich im Zoterofeld
	"1552-146X" : "A", // The Hastings Center report !!eppn
	"0098-9444" : "A", // Biblical archaeology review !!pppn
	"0098-9444" : "A", // Biblical archaeology review !!eppn
	"2161-007X" : "A", // Counseling and values !!eppn
	"0163-4275" : "A", // Environmental ethics !!pppn
	"0163-4275" : "A", // Environmental ethics !!eppn
	"1572-543X" : "A", // Exchange !!eppn
	"2396-9393" : "O", // International bulletin of mission research !!pppn
	"2396-9407" : "O", // International bulletin of mission research !!eppn
	"2396-9393, 2396-9407" : "O", // International bulletin of mission research
	"0449-508X" : "A", // Journal of pastoral counseling !!pppn
	"0449-508X" : "A", // Journal of pastoral counseling !!eppn
	"0894-4857" : "A", // The Merton annual !!pppn
	"0894-4857" : "A", // The Merton annual !!eppn
	"0951-8207" : "O", // Journal for the study of the pseudepigrapha !!pppn
	"09518207" : "O", // Journal for the study of the pseudepigrapha !!pppn
	"1745-5286" : "O", // Journal for the study of the pseudepigrapha !!eppn
	"1745-5251" : "A", // Journal of pentecostal theology !!pppn - in Z. 140 mit ppn gemappt: diese Z. löschen?
	"1574-3012" : "A", // Religion & theology !!eppn
	"1052-150X" : "A", // Business ethics quarterly !!pppn
	"2153-3326" : "A", // Business ethics quarterly !!eppn
	"1094-2076" : "A", // Near Eastern archaeology !!pppn
	"1354-9901" : "A", // Studies in world christianity !!pppn
	"1355-8358" : "A", // Theology & sexuality !!pppn
	"1363-013X" : "A", // Quaker studies !!pppn
	"1363-013X" : "A", // Quaker studies !!eppn
	"1363-7320" : "A", // Ecotheology !!pppn
	"1749-4907" : "A", // Journal for the study of religion, nature and culture !!pppn
	"1462-2459" : "A", // Reformation & Renaissance review !!pppn - in Z. 7 wurde mit ppn gemappt: diese Z. hier löschen?
	"1462-3153" : "A", // Journal for the Aramaic bible !!pppn
	"1462-3153" : "A", // Journal for the Aramaic bible !!eppn
	"0733-4273 (PRINT)" : "A", // Journal of psychology and Christianity - oben bereits da, aber ohne (PRINT): löschen?
	"0082-7118" : "A", // Tyndale Bulletin
	"2326-6236" : "A", // The jurist: studies in church law and ministry
	"2363-6696" : "O", // Entangled Religions
	"0044-3441" : "A", // Zeitschrift für Religions- und Geistesgeschichte
	"1862-5886" : "O", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "O", // Marburg Journal of Religion
	"0017-2251":  "A", // Christian scholar’s review
	"0774-5524" : "A", // Questions liturgiques
	"1861-5813" : "O", // Online - Heidelberg Journal of Religions on the Internet
	"1783-1806" : "A", // Studies in Interreligious Dialogue
	"1783-1709" : "O", // Questions Liturgiques/Studies in Liturgy
	"0035-0893" : "A", // Revue bénédictine
	"1861-5813" : "O", // Online - Heidelberg Journal of Religions on the Internet
	"1783-1806" : "A", // Studies in Interreligious Dialogue
	"1867-4240" : "O", // Transformierte Buddhismen
	"1583-0039" : "O", // Journal for the Study of Religions and Ideologies
	"0141-6200" : "A", // British Journal of Religious Education
	"0360-6503" : "A", // Process studies
	"2294-6209" : "A", // Byzantion
	"0361-0160" : "A", // The Sixteenth Century Journal
	"03610160" : "A", // The Sixteenth Century Journal
	"0038-8610" : "A", // Concordia Theological Quarterly
	"0014-2239" : "O", // Etudes théologiques et religieuses !!pppn
	"2272-9011" : "O", // Etudes théologiques et religieuses !!eppn
	"0014-2239, 2272-9011" : "O", // Etudes théologiques et religieuses !!pppn + eppn
	"0047-2867" : "A", // ! 015194620!Journal of Theology for Southern Africa
	"0342-0914" : "A", // Lutherjahrbuch
	"0194-3448" : "A", // American journal of theology and philosophy
	"2199-4463" : "O", // Religion in the Roman Empire
	"21994463, 21994471" : "O", // Religion in the Roman Empire
	"0148-3331" : "O", // Christianity & literature
	"01483331" : "O", // Christianity & literature
	"2056-5666" : "O", // Christianity & literature
	"1868-8020" : "O", // Early Christianity
	"1868-7032" : "O", // Early Christianity
	"0040-5698" : "O", // Theologische Rundschau
	"0044-3549" : "O", // Zeitschrift für Theologie und Kirche
	"0944-5706" : "O", // Jewish Studies Quarterly
	"2195-9773" : "O", // Philosophy, Theology and the Sciences
	"2192-2276" : "O", // Hebrew Bible and Ancient Israel
	"00143367" : "A", // Evangelical quarterly
	"1063-8512" : "A", // Pro ecclesia
	"1890-7008, 0809-7291" : "O", // Nordic journal of religion and society 
	"0020-7047" : "O", // International Journal for Philosophy of Religion
	"00207047" : "O", // International Journal for Philosophy of Religion
	"0265-3788" : "O", // Transformation
	"0014-5246" : "O", // The Expository times
	"1745-5308" : "O", // The Expository times
	"00145246" : "O", // The Expository times
	"0014-5246, 1745-5308" : "O", // The Expository times
	"0003-1224" : "O", // American sociological review Online Publikation|krimdok
	"1862-2593" : "O", // Berliner Journal für Soziologie Online Publikation|krimdok
	"0268-5809" : "O", // International sociology Online Publikation|krimdok
	"2196-8225" : "O", // Praxis der Kinderpsychologie und Kinderpsychiatrie Online Publikation|krimdok
	"2190-6238" : "O", // Psychologische Rundschau Online Publikation|krimdok
	"1461-7439" : "O", // Theoretical criminology Online Publikation|krimdok
	"1438-9460" : "O", // Zeitschrift für Sexualforschung Online Publikation|krimdok
	"2380-8829" : "O", // The Covenant Quarterly
	"0212-1964" : "A", // Teología y catequesis 
	"14722089" : "A", //  International congregational journal 
	"1472-2089" : "A", //  International congregational journal	
	"09602720" : "A", //  European journal of theology
	"0555-9308" : "O", //  Pastoraltheologische Informationen
	"0093-531X" : "A", //  Perspectives in religious studies
	"0967-8948" : "O", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "O", // Temenos : nordic journal of comparative religion
    "1799-3121" : "O", // Approaching religion
    "1677-1222" : "O", // Rever : revista de estudos da religião
	"1475-5610" : "A", // Culture and Religion
	"00224189" : "O", // Journal of Religion
	"1549-6538" : "O", // Journal of Religion
	"0022-4189" : "O", // Journal of Religion
	
	
};

var issnLicenceFieldMapping = {
	"1550-0195" : "l",
	"2031-5929" : "l",
	"1661-3317" : "l", // Lectio difficilior !!eppn
	"2363-6696" : "l", // Entangled Religions
	"1862-5886" : "l", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "l", // Marburg Journal of Religion
	"1861-5813" : "l", // Online - Heidelberg Journal of Religions on the Internet
	"1867-4240" : "l", // Transformierte Buddhismen
	"1583-0039" : "l", // Journal for the Study of Religions and Ideologie
	"2380-8829" : "l", //The Covenant Quarterly
	"0555-9308" : "l", // Pastoraltheologische Informationen
	"0967-8948" : "l", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "l", // Temenos : nordic journal of comparative religion
    "1799-3121" : "l", // Approaching religion
    "1677-1222" : "l", // Rever : revista de estudos da religião
	"00224189" : "l", // Journal of Religion
	"1549-6538" : "l", // Journal of Religion
	"0022-4189" : "l", // Journal of Religion
	
	
};

var issnSsgMapping = {
	"0044-3441" : "0; 1", // Zeitschrift für Religions- und Geistesgeschichte
	"1570-0739" : "0; 1", // Zeitschrift für Religions- und Geistesgeschichte
	"1862-5886" : "0", // Zeitschrift für junge Religionswissenschaft
	"1612-2941" : "0", // Marburg Journal of Religion
	"2363-6696" : "0", // Entangled Religions
	"0943-3058" : "0", // Method and theory in the study of religion
	"1570-0682" : "0", // Method and theory in the study of religion
	"0141-6200" : "0; 1", // British Journal of Religious Education
	"1749-4907" : "0; 1", // Journal for the study of religion, nature and culture
	"1094-2076" : "0; 1", // Near Eastern archaeology
	"1574-3012" : "0; 1", // Religion & theology
	"1023-0807" : "0; 1", // Religion & theology
	"0022-5762" : "0; 1", // Judaism
	"1570-0631" : "0; 1", // Journal for the study of Judaism
	"0022-4480" : "0; 1", // Journal of Semitic studies !!pppn
	"1477-8556" : "0; 1", // Journal of Semitic studies !!eppn
	"0022-4235" : "0; 1", // The journal of religious thought
	"0022-2097" : "0; 1", // The journal of Jewish studies
	"0003-0279" : "0; 1", // Journal of the American Oriental Society
	"0591-2385" : "0", // Zygon
	"1467-9744" : "0", // Zygon
    "0891-5881" : "0", // Dialogue and alliance
	"0037-7686" : "0; 1", // Social compass
	"1461-7404" : "0; 1", // Social compass
	"0018-2613" : "0; 1", // Historische Zeitschrift
	"1135-4712" : "0", // 'Ílu
	"0888-3769" : "0; 1", // Religion and literature
	"0029-4500" : "0; 1", // Religion and literature
	"0034-4125" : "0", // Religious studies 
	"1469-901X" : "0", // Religious studies
	"0018-2710" : "0", // History of religions
	"1545-6935" : "0", // History of religions
	"0384-9694" : "0; 1", // Journal of religious ethics
	"1467-9795" : "0; 1", // Journal of religious ethics
	"0022-4200" : "0", // Journal of religion in Africa
	"1570-0666" : "0", // Journal of religion in Africa
	"1092-6690" : "0", // Nova religio
	"1541-8480" : "0", // Nova religio
	"1079-9265" : "0; 1", // Religion and the arts
	"1568-5292" : "0; 1", // Religion and the arts
	"0008-4298" : "0", // Studies in religion = Sciences religieuses
	"2042-0587" : "0", // Studies in religion = Sciences religieuses
	"1380-7854" : "0; 1", // Medieval encounters
	"1570-0674" : "0; 1", // Medieval encounters
	"0319-485X" : "0", // Religious studies review
	"1748-0922" : "0", // Religious studies review
	"0497-1817" : "0; 1", // Temenos
	"2342-7256" : "0; 1", // Temenos
	"0890-1112" : "0", // Journal of ritual studies
	"0011-1953" : "0; 1", // Cross currents
	"1939-3881" : "0; 1", // Cross currents
	"00111953" : "0; 1", // Cross currents
	"19393881" : "0; 1", // Cross currents
	"0229-2807" : "0; 1", // ARC
	"1934-9637" : "0; 1", // Journal of spirituality in mental health
	"1934-9645" : "0; 1", // Journal of spirituality in mental health
	"1023-0807" : "0; 1", // Religion and theology  
	"1574-3012" : "0; 1", // Religion and theology
	"0926-6453" : "1", // Studies in spirituality
	"1783-1814" : "1", // Studies in spirituality
	"0809-7291" : "0; 1", // Nordic journal of religion and society 
	"0802-0167" : "0; 1", // Nordic journal of religion and society
	"1890-7008" : "0; 1", // Nordic journal of religion and society 
	"1069-4404" : "0", // Sociology of religion
	"1759-8818" : "0", // Sociology of religion
	"0029-5973" : "0", // Numen PISSN
	"1568-5276" : "0", // Numen EISSN
	"0935-7335" : "0; 1", // Ethik in der Medizin 
	"1437-1618" : "0; 1", // Ethik in der Medizin
	"1209-9392" : "0; 1", // Women in Judaism
	"0305-7240" : "0; 1", // Journal of moral education !!pppn
	"1465-3877" : "0; 1", // Journal of moral education !!eppn
	"0269-9702" : "0; 1", // Bioethics !!pppn
	"1467-8519" : "0; 1", // Bioethics !!eppn
	"1468-2303" : "0; 1", // History and theory !!eppn
	"0018-2656" : "0; 1", // History and theory !!pppn
	"1092-1311" : "0", // The journal of religion and film
	"1086-3222" : "0; 1", // Journal of the history of ideas !!eppn
	"0022-5037" : "0; 1", // Journal of the history of ideas !!pppn
	"1469-5103" : "0; 1", // The historical journal !!eppn
	"0018-246X" : "0; 1", // The historical journal !!pppn
	"1469-2147" : "0; 1", // Cambridge quarterly of healthcare ethics !!eppn
	"0963-1801" : "0; 1", // Cambridge quarterly of healthcare ethics !!pppn
	"0014-701X" : "0", // Faith and freedom
	"0283-8486" : "0", // Journal of prehistoric religion
	"1861-5813" : "0", // Online - Heidelberg Journal of Religions on the Internet
	"0342-2356" : "0; 1", // Ugarit-Forschungen
	"1086-3249" : "0; 1", // Kennedy Institute of Ethics journal
	"0889-048X" : "0; 1", // Agriculture and human values !!pppn
	"1572-8366" : "0; 1", // Agriculture and human values !!eppn
	"1187-7863" : "0; 1", // Journal of agricultural and environmental ethics !!pppn
	"1573-322X" : "0; 1", // Journal of agricultural and environmental ethics !!eppn
	"1468-2265" : "0; 1", // Heythrop journal !!eppn
	"1364-436X" : "0; 1", // International journal of children's spirituality !!pppn
	"0959-6410" : "0; 1", // Islam and Christian-Muslim relations !!pppn
	"1203-1542" : "0; 1", // The journal of Hebrew scriptures !!eppn
	"1467-9647" : "0; 1", // Teaching theology & religion !!eppn
	"1473-4257" : "0; 1", // Journal of medical ethics !!eppn
	"0969-7330" : "0; 1", // Nursing ethics !!pppn
	"1477-0989" : "0; 1", // Nursing ethics !!eppn
	"0003-097X" : "0; 1", // Bulletin of the American Schools of Oriental Research !!pppn
	"0034-4087" : "0; 1", // Religious education !!pppn
	"0022-0256" : "0; 1", // Journal of cuneiform studies !!pppn
	"1552-146X" : "0; 1", // The Hastings Center report
	"0163-4275" : "0; 1", // Environmental ethics
	"1783-1806" : "0; 1", // Studies in Interreligious Dialogue
	"1867-4240" : "0", // Transformierte Buddhismen
	"1583-0039" : "0", // Journal for the Study of Religions and Ideologies
	"2294-6209" : "0; 1", // Byzantion 
	"0944-5706" : "0; 1", // Jewish Studies Quarterly
	"2199-4463" : "0", // Religion in the Roman Empire
	"1890-7008, 0809-7291" : "0; 1", // Nordic journal of religion and society
	"0003-1224" : "FID-KRIM-DE-21", // American sociological review Online Publikation|krimdok
	"1862-2593" : "FID-KRIM-DE-21", // Berliner Journal für Soziologie Online Publikation|krimdok
	"0268-5809" : "FID-KRIM-DE-21", // International sociology Online Publikation|krimdok
	"2196-8225" : "FID-KRIM-DE-21", // Praxis der Kinderpsychologie und Kinderpsychiatrie Online Publikation|krimdok
	"2190-6238" : "FID-KRIM-DE-21", // Psychologische Rundschau Online Publikation|krimdok
	"1461-7439" : "FID-KRIM-DE-21", // Theoretical criminology Online Publikation|krimdok
	"1438-9460" : "FID-KRIM-DE-21", // Zeitschrift für Sexualforschung Online Publikation|krimdok
	"1890-7008, 0809-7291" : "0; 1", // Nordic journal of religion and society 
	"2380-8829" : "1", //The Covenant Quarterly
	"0967-8948" : "0", // Journal of the British Association for the Study of Religions - formerly DISKUS
    "2342-7256" : "0", // Temenos : nordic journal of comparative religion
    "1799-3121" : "0", // Approaching religion
    "1677-1222" : "0; 1", // Rever : revista de estudos da religião
	"1475-5610" : "0; 1", // Culture and Religion
	"00224189" : "0; 1", // Journal of Religion
	"1549-6538" : "0; 1", // Journal of Religion
	"0022-4189" : "0; 1", // Journal of Religion
	
	
	
	
};

// Mapping für ISSNs deren Schlagwörter statt 5520 in 680X abgelegt werden. KrimDok-Spezifikation
// inkrementell ab z.B. 680 exportiert werden sollen (6801, 6802, ...)
var issnKeywordMapping = {
	"0003-1224" : 6800, // American sociological review Online Publikation|krimdok
	"1862-2593" : 6800, // Berliner Journal für Soziologie Online Publikation|krimdok
	"0268-5809" : 6800, // International sociology Online Publikation|krimdok
	"2196-8225" : 6800, // Praxis der Kinderpsychologie und Kinderpsychiatrie Online Publikation|krimdok
	"2190-6238" : 6800, // Psychologische Rundschau Online Publikation|krimdok
	"1461-7439" : 6800, // Theoretical criminology Online Publikation|krimdok
	"1438-9460" : 6800, // Zeitschrift für Sexualforschung Online Publikation|krimdok
};

var defaultSsgNummer = "1";
var defaultLanguage = "eng";
var lokaldatensatz = "\nE* l01\n7100$jn \n8002 ixzs;ixzo\n";

//item.type --> 0500 Bibliographische Gattung und Status
//http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
var physicalForm = issnPhysicalFormMapping;//0500 Position 1	
var cataloguingStatus = "r";//0500 Position 3
var cataloguingStatusO = "r";//0500 Position 3
var licenceField = issnLicenceFieldMapping; // 0500 Position 4 only for Open Access Items; http://swbtools.bsz-bw.de/cgi-bin/help.pl?cmd=kat&val=4085&regelwerk=RDA&verbund=SWB
var SsgField = issnSsgMapping;

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
		var lookupUrl = "http://swb.bsz-bw.de/DB=2.104/SET=70/TTL=1/CMD?SGE=&ACT=SRCHM&MATCFILTER=Y&MATCSET=Y&NOSCAN=Y&PARSE_MNEMONICS=N&PARSE_OPWORDS=N&PARSE_OLDSETS=N&IMPLAND=Y&NOABS=Y&ACT0=SRCHA&SHRTST=50&IKT0=1&TRM0=" + authorName +"&ACT1=*&IKT1=2057&TRM1=*&ACT2=*&IKT2=8977&TRM2=theolog*&ACT3=-&IKT3=8978-&TRM3=1[1%2C2%2C3%2C4%2C5%2C6%2C7%2C8][0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9][0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9]?"
				
		/*lookupUrl kann je nach Anforderung noch spezifiziert werden, im obigen Abfragebeispiel: 
		suchen [und] (Person(Phrase: Nachname, Vorname) [PER]) " authorName "
		eingrenzen (Systematiknummer der SWD [SN]) *
		eingrenzen (Relationiertes Schlagwort in der GND [RLS]) theolog*
		ausgenommen (Relationierte Zeit in der GND [RLZ]) 1[1,2,3,4,5,6,7,8][0,1,2,3,4,5,6,7,8,9][0,1,2,3,4,5,6,7,8,9]
		
		IKT0=1 TRM0= für Persönlicher Name in Picafeld 100
		IKT1=2057 TRM1=3.* für GND-Systematik
		IKT2=8963 TRM2=theolog*    für Berufsbezeichnung 550
		IKT3=8991  TRM3=1[1,2,3,4,5,6,7,8][0,1,2,3,4,5,6,7,8,9][0,1,2,3,4,5,6,7,8,9] für Geburts- und Sterbedatum (Bereich)
		
		###OPERATOREN vor "IKT"###
		UND-Verknüpfung "&" | ODER-Verknüpfung "%2B&" | Nicht "-&"
		
		###TYP IKT=Indikatoren|Zweite Spalte Schlüssel(IKT)###
		Liste der Indikatoren und Routine http://swbtools.bsz-bw.de/cgi-bin/help.pl?cmd=idx_list_typ&regelwerk=RDA&verbund=SWB
		*/
		
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
		if (SsgField && item.ISSN && issnSsgMapping[item.ISSN]) {
			SsgField = issnSsgMapping[item.ISSN];
		}
		if (item.volume && item.ISSN && issnVolumeMapping[item.ISSN]) {
			item.volume = issnVolumeMapping[item.ISSN] + item.volume;
		}
		if (physicalForm && item.ISSN && issnPhysicalFormMapping[item.ISSN]) {
			physicalForm = issnPhysicalFormMapping[item.ISSN]; // position 1 http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
		}
		if (licenceField && item.ISSN && issnLicenceFieldMapping[item.ISSN]) {
			licenceField = issnLicenceFieldMapping[item.ISSN]; // position 4 http://swbtools.bsz-bw.de/winibwhelp/Liste_0500.htm
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
				
		if (article && licenceField === "l") { // wenn Position 4 = "l" dann Ooul
			writeLine("0500", physicalForm+"o"+cataloguingStatus+licenceField);
		} else if (article && physicalForm === "A") {
			writeLine("0500", physicalForm+"o"+cataloguingStatus); // //z.B. Aou, Oou, Oox etc.
			} else {
			writeLine("0500", physicalForm+"o"+cataloguingStatusO);
				}
		
		//item.type --> 0501 Inhaltstyp
		writeLine("0501", "Text$btxt");
		
		//item.type --> 0502 Medientyp
			switch (physicalForm) {
				case "A":
				writeLine("0502", "ohne Hilfsmittel zu benutzen$bn");
				break;
			case "O":
				writeLine("0502", "Computermedien$bc");
				break;
			default:
				writeLine("0502", "");
		}

		//item.type --> 0503 Datenträgertyp
		
		switch (physicalForm) {
				case "A":
				writeLine("0503", "Band$bnc");
				break;
			case "O":
				writeLine("0503", "Online-Ressource$bcr");
				break;
			default:
				writeLine("0503", "");
		}
		//item.date --> 1100 
		var date = Zotero.Utilities.strToDate(item.date);
		if (date.year !== undefined) {
		writeLine("1100", date.year.toString() + "$n[" + date.year.toString() + "]");
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
			titleStatement = titleStatement.replace(/^L'([^@])/, "L' @$1");
		}
		if (item.language == "ita" || !item.language) {
			titleStatement = titleStatement.replace(/^(La|Le|Lo|Gli|I|Il|Un|Una|Uno) ([^@])/, "$1 @$2");
			titleStatement = titleStatement.replace(/^L'([^@])/, "L' @$1");
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
			if (item.volume) { volumeyearissuepage += "$v" + item.volume; }
			if (date.year !== undefined) { volumeyearissuepage +=  "$j" + date.year; }
			if (item.issue) { volumeyearissuepage += "$h" + item.issue.replace("-", "/").replace(/^0/, ""); }
			if (item.pages) { volumeyearissuepage += "$p" + item.pages; }
			
			writeLine("4070", volumeyearissuepage);
}
		
		//URL --> 4085 nur bei Katalogisierung nach "Oox" im Feld 0500
		if (item.url && physicalForm === "O" && licenceField === "l") {
			writeLine("4085", "$u" + item.url + "$xH$xR$zLF");
			} else if (item.url && physicalForm === "O") {
				writeLine("4085", "$u" + item.url + "$xH");
			}
		
		
		if (item.url && item.itemType == "magazineArticle") {
			writeLine("4085", "$u" + item.url + "$xH");
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
			writeLine("4207", item.abstractNote.replace("<i>", "\'").replace("</i>", "\'").replace("<br/>", "").replace("Zusammenfassung", "").replace(" Summary", "").replace("", "").replace(/–/g, '-').replace(/&#160;/g, "")); 
		}  
		
		/* } else (!item.abstractNote){
			writeLine("4207");
			}
		
		"4207", item.abstractNote.replace(/'/g, '\"').replace("<i>", "\'").replace("</i>", "\'").replace("<br/>", "").replace("Zusammenfassung", "").replace(" Summary", "").replace("", "")); */
		
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
				
		//SSG bzw. FID-Nummer --> 5056 "0" = Religionwissenschaft | "1" = Theologie | "0; 1" = RW & Theol.
		
		if (SsgField === "0" || SsgField === "0; 1" || SsgField === "FID-KRIM-DE-21") {
			writeLine("5056", SsgField);
		} 	else {
			writeLine("5056", defaultSsgNummer);
		}

		
		
		if (item.itemType == "journalArticle") {
			writeLine ("",lokaldatensatz);
		}
	//Schlagwörter aus einem Thesaurus (Fremddaten) --> 5520 (oder alternativ siehe Mapping)
                if (item.ISSN && issnKeywordMapping[ZU.cleanISSN(item.ISSN)]) {
                        var ISSNclean = ZU.cleanISSN(item.ISSN);
                        var codeBase = issnKeywordMapping[ISSNclean];
                        for (i=0; i<item.tags.length; i++) {
                                var code = codeBase + i;
                                writeLine(code, "|s|" + item.tags[i].tag.replace(/\s?--\s?/g, '; '));
                        }
                } else {
                        for (i=0; i<item.tags.length; i++) {
                                writeLine("5520", "|s|" + item.tags[i].tag.replace(/\s?--\s?/g, '; '));
                        }
                }	
		}
		outputText += "\n";
	}
	count--;
	if (count === 0) {
		Zotero.write(outputText);
	}
}

