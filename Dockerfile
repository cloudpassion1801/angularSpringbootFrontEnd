#base image
FROM node:12.2.0 as node
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app
ARG configuration=production

# start app
RUN npm run build -- --output-path=./dist/out --configuration $configuration


# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/out/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
