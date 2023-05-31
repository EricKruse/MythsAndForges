# Verwenden des offiziellen Node.js-Images als Basis
FROM node:latest

# Setzen des Arbeitsverzeichnisses im Container
WORKDIR /app

# Kopieren der package.json und package-lock.json in den Container
COPY package*.json ./

# Installation der Abhängigkeiten
RUN npm install

# Kopieren des restlichen Projektinhalts in den Container
COPY . .

# Öffnen des Ports für den Zugriff auf die Anwendung
EXPOSE 8000

# Starten des Backend-Servers
CMD ["npm", "start"]