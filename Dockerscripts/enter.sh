#!/bin/bash
. Dockerconfig.cfg

echo "Entering Container …"
docker exec -it ${name} /bin/sh
