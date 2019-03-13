# MIcro front end - Header
#Dockerise command

docker build . -t header-app

docker run -t -e PORT=9091 -p 9091:9091 header-app