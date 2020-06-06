#!/bin/bash
. Dockerconfig.cfg

function remove_image {
  if [ "$(docker images $1)" ]; then
    echo "Removing image \"$1\""
    docker rmi $1 -f
  fi
}

remove_image ${name}

echo "** Building Container **"
docker build -t ${name} .
echo "- build done -"
