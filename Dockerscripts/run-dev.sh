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

docker exec -td ${name}-dev rm htdocs && ln -sf src/ htdocs

# HTTP Server in Container starten
# docker exec -td ${name}-dev npm install && http-server /usr/src/app/src
# echo "Starting up http-server, serving /usr/src/app/src
# Available on:
#  http://127.0.0.1:${port}"

