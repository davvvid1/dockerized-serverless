FROM node:8.10

WORKDIR /serverless
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./app app
RUN npm install
ENV PATH="${PATH}:/serverless/node_modules/.bin/"
EXPOSE 3000
COPY ./serverless.yml serverless.yml
CMD serverless offline start
