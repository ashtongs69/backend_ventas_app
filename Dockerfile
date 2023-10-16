# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación a la imagen
COPY package*.json ./
COPY dist/ ./dist/

# Instala las dependencias
RUN npm install --only=production

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["node", "dist/main.js"]
