#!/bin/bash
. Dockerconfig.cfg
echo ""
echo "// ----------------------------------------------------------------------"
echo "// Entering Development Container."
echo "// Type <exit> to exit."
echo "// Type <npm run> for available commands."
docker exec -it ${name}-dev env TERM=xterm-256color /bin/bash
