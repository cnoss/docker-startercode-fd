#!/bin/bash
. Dockerconfig.cfg

function remove_image {
  if [ "$(docker images $1)" ]; then
    echo ""
    echo "// ----------------------------------------------------------------------"
    echo "// Removing image \"$1\""
    docker rmi $1 -f
  fi
}

remove_image ${name}-dev
echo ""
echo "// ----------------------------------------------------------------------"
echo "// Building Development Container"
docker build -t ${name}-dev -f Dockerfile.dev .
echo "// Development build done. yeah!"


