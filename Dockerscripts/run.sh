#!/bin/bash
. Dockerconfig.cfg

echo "** Starting Container **"
docker run --rm -t -d --net erco \
-v ${XML_BASE_PATH}:/usr/src/lightscout_xml \
--name ${name} \
${name} 
echo "- startup done -"
