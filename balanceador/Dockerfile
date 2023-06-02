# imagen base a usar
FROM nginx:alpine

WORKDIR /usr/src/app

COPY ./nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx","-g","daemon off;"]



