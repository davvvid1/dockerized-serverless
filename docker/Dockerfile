FROM node:8.10

WORKDIR /serverless
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
RUN npm install
ENV PATH="${PATH}:/serverless/node_modules/.bin/"
CMD sleep 99999999
