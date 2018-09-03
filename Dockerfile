FROM node:8.9.4

RUN mkdir -p app

WORKDIR /app

COPY . /app


RUN npm install

ENV PORT=80

ENV TEST_ENV =local

EXPOSE 80

ENTRYPOINT ["npm","run","prod"]
