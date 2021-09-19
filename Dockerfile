FROM node:14-alpine as build-stage

ARG ENV_PHASE=development

ENV ENV_PHASE=${ENV_PHASE}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Override config
RUN cp ./src/config/${ENV_PHASE}/http-common.js ./src/config/http-common.js

RUN npm run build

FROM nginx:alpine as production-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
