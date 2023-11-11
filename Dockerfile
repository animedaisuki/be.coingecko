FROM node:18-alpine3.15
WORKDIR /root/dev/be.coingecko
COPY . .
RUN chmod +x ./node_modules/.bin/*
EXPOSE 8080
CMD [ "npm", "run", "dev" ]