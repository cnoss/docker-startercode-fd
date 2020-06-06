#!/bin/bash
. Dockerconfig.cfg

echo ""
echo "// ----------------------------------------------------------------------"
echo "// Starting Container in Development mode ..."
docker run --rm -t -d \
-p ${port}:8080 \
-p 35729:35729 \
-v $(pwd):/srv \
--name ${name}-dev \
${name}-dev

docker exec -ti ${name}-dev rm htdocs && ln -sf src/ htdocs

echo ""
echo "// ----------------------------------------------------------------------"
echo "HTTP Server available on: http://127.0.0.1:${port}"
echo "Live Reload available on port http://127.0.0.1:35729"
echo ""

