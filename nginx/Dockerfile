FROM nginx:1.21.3

WORKDIR /etc/nginx/nginx/conf.d/
# Logrotate conf to avoid being overwhelmed by logs
COPY nginx_logrotate.conf /etc/logrotate.d/nginx_logrotate.conf

COPY upstream.conf /etc/nginx/conf.d/

COPY nginxProd.conf /etc/nginx/conf.d/default.conf