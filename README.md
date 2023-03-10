docker build . -t voytsik/node-web-app

docker run -p 49160:80 --cpu-period=50000 --cpu-quota=25000 -d voytsik/node-web-app

docker ps

docker logs 52287c2b9028

// Якщо що, пушив образ у публічний репозиторій через Docker Desktop, а не консольну команду
// Не знайшов, як додати сюди папку node_modules
