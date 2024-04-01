# Используем официальный Node.js образ
FROM node:14 as build

# Устанавливаем рабочую деректорию в контейнере
WORKDIR /app

# Копируем package.json package-lock.json файлы внутрь урнтейнера
COPY package*.json ./

# Установить зависимости
RUN npm install

#Копируем все остальное внутрь контейнера
COPY . .

# Делаем build
RUN npm run build

# Используем официальныый nginx образ для продакшн build
FROM nginx:1.21-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80 для сервера nginx
EXPOSE 80

# Запускаем nginx сервер
CMD ["nginx", "-g", "daemon off;"]