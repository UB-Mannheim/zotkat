/**
 * Run Wikidata QuickStatements translator via node for unit tests.
 */

var fs = require('fs')
var vm = require('vm')

// read translator code, strip metadata
var translator = 'Wikidata QuickStatements.js'
var code = fs.readFileSync(translator, 'utf8')
code = code.replace(/^{[^}]+^}/m,'')

// compile translator code
function strToDate(str) {
    // simplification of Zotero implementation in zotero/xpcom/date.js
    var date = new Date(str)
    return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        day: date.getUTCDate()
    }
}
var wdq = {
    ZU: {
        strToDate: strToDate,
        strToISO: function(str) {
            var date = strToDate(str)
            var iso = false
            if (date.year) {
                iso = ''+date.year
                if (date.month) {
                    iso += (date.month < 9 ? '-0' : '-' ) + (1+date.month)
                    if(date.day) {
                        iso += (date.day < 10 ? '-0' : '-' ) + date.day
                    }
                }
            }
            return iso
        }
    }
}
var script = new vm.Script(code)
script.runInNewContext(wdq)

// transform test cases
var count = 1
var fail = 0

fs.readdirSync('test').forEach(file => {
    var match = file.match(/(.+)\.json$/)
    if (match) {
        console.log('\n== UNIT TEST '+count+' ==')
        var name = match[1]
        var item = JSON.parse(fs.readFileSync('test/'+file, 'utf8'))
        var got  = wdq.zoteroItemToQuickStatements(item);

        var expect = fs.readFileSync('test/'+name+'.txt', 'utf8')

        if (got == expect) {
            console.log('ok '+count+' - test/'+file)
        } else {
            fs.writeFileSync('test/'+name+'.output.txt', got);
            console.log('not ok '+count+' - test/'+file)
            console.log(got)
            console.log('see test/'+name+'.output.txt for the current output, e.g. with')
            console.log('git diff --no-index test/'+name+'.output.txt test/'+name+'.txt')
            fail=1
        }
        count++
    }
})

process.exit(fail)
