all: 
	stop run

build:
	sh Dockerscripts/build.sh

build-dev:
	sh Dockerscripts/build-dev.sh

run:
	sh Dockerscripts/run.sh

run-dev:
	sh Dockerscripts/run-dev.sh

stop:
	sh Dockerscripts/stop.sh

stop-dev:
	sh Dockerscripts/stop-dev.sh

rebuild: stop build run

rebuild-dev: stop-dev build-dev run-dev enter-dev

enter:
	sh Dockerscripts/enter.sh

enter-dev:
	sh Dockerscripts/enter-dev.sh

