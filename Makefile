build-dev:
	sh Dockerscripts/build-dev.sh
	sh Dockerscripts/run-dev.sh
	sh Dockerscripts/enter-dev.sh

run-dev:
	sh Dockerscripts/run-dev.sh
	sh Dockerscripts/enter-dev.sh

stop-dev:
	sh Dockerscripts/stop-dev.sh

rebuild-dev: 
	sh Dockerscripts/stop-dev.sh 
	sh Dockerscripts/build-dev.sh
	sh Dockerscripts/run-dev.sh
	sh Dockerscripts/enter-dev.sh

enter-dev:
	sh Dockerscripts/enter-dev.sh

