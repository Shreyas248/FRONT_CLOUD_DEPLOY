FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm i npm@latest -g
RUN npm install
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/


EXPOSE 80
CMD ["nginx","-g","daemon off;"]
