# Stage 1
FROM nginx:1.17.1-alpine 
COPY /dist/opa-frontend /usr/share/nginx/html
