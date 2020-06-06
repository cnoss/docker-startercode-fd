#!/bin/bash
. Dockerconfig.cfg

echo ""
echo "// ----------------------------------------------------------------------"
echo "// Entering Development Container."
echo "// Type <exit> to exit."
echo "// Type <npm run watch> to start watchmode."
echo "// Type <npm run> for all available commands."
echo ""

docker exec -it ${name}-dev env TERM=xterm-256color /bin/bash && livereload src
