FROM bitnami/node:latest
WORKDIR /app
COPY yarn.lock .
COPY package.json .
RUN npm install -G yarn
RUN yarn install
COPY ./src /app/src
COPY ./tailwind.config.js /app/tailwind.config.js
COPY ./postcss.config.js /app/postcss.config.js
COPY ./public/* ./public/
RUN yarn build

FROM nginx:latest
COPY --from=0 /app/build /usr/share/nginx/html
COPY ./server/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
