FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

RUN chown nginx.nginx /usr/share/nginx/html/ -R