# Micro front end - First
#Dockerise command

docker build . -t first-app

docker run -t -e PORT=9093 -p 9093:9093 first-app