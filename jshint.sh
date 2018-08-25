#!/bin/bash

# license for script: CC0

# 1st sed: Replace top lines including first beginning with '}' with empty string
# 2nd sed: Insert newline before every '/** BEGIN TEST'
# 3rd sed: Delete from first line containing 'BEGIN TEST' to end of file
# Run the npm-installed jshint
# No errors -> print 'filename.js OK'
# Errors -> Set $err to non-zero value
for f in *.js; do
      sed '1,/^}/ s/.*//' "$f" \
    | sed 's,/\*\* BEGIN TEST,\n\0,' \
    | sed '/BEGIN TEST/,$ d' \
    | ./node_modules/.bin/jshint --filename="$f" --config=jshintrc - \
        && echo "$f OK" \
        || err=1
done;
exit $err
