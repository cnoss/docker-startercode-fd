build-dev:
	sh Dockerscripts/build-dev.sh

run-dev:
	sh Dockerscripts/run-dev.sh

stop-dev:
	sh Dockerscripts/stop-dev.sh

rebuild-dev: 
	stop-dev build-dev run-dev enter-dev

enter-dev:
	sh Dockerscripts/enter-dev.sh

