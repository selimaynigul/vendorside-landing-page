FROM node:16.15.1-alpine as build-stage
# WORKDIR /packages/app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json /app/package.json
# COPY yarn.lock /app/yarn.lock
# RUN yarn
# COPY . /app
WORKDIR /app
COPY . .

# RUN yarn build

FROM nginx:1.16.0-alpine

COPY --from=build-stage /app/packages/app/build /usr/share/nginx/html
COPY ./packages/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

