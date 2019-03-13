# Micro front end - First
#Dockerise command

docker build . -t second-app

docker run -t -e PORT=9094 -p 9094:9094 second-app