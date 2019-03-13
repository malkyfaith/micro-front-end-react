# Micro front end - Footer
#Dockerise command

docker build . -t footer-app

docker run -t -e PORT=9092 -p 9092:9092 footer-app