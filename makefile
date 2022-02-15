build: 
	docker build . -t ericroosdeveloper:latest
tag:
	docker tag ericroosdeveloper:latest ericroos13/ericroosdeveloper:latest
push:
	docker push ericroos13/ericroosdeveloper:latest
start:
	docker run --rm -d -v /development/eric-roos-developer/server/keys/:/etc/ssl/certs/ -p 80:80 -p 443:443 --name ericroosdeveloper-www ericroosdeveloper:latest
stop:
	docker stop ericroosdeveloper-www
	docker rm ericroosdeveloper-www
deploy:
	@make build tag push
	ssh DateFeed 'cd /home/ec2-user/deployables/ericroosdeveloper && ./restart.sh'

