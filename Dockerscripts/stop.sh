#!/bin/bash
. Dockerconfig.cfg

function stop_container {
  if [ "$(docker ps -q -f name=$1)" ]; then
    echo "Stoping container \"$1\""
    docker stop $1
  fi
}

stop_container ${name}
