FROM node:18.17

WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 8080

CMD ["yarn", "dev", "--host", "0.0.0.0"]
