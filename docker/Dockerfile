FROM node:8.10

WORKDIR /serverless
ENV PATH="${PATH}:/serverless/node_modules/.bin/"
EXPOSE 3000
CMD serverless offline start

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
RUN npm install
COPY . ./
