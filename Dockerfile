# base image 
FROM node

# working dir
RUN mkdir /usr/src/app/client

COPY . /usr/src/app/client

WORKDIR /usr/src/app/client

ENV PATH /usr/src/app/client/node_modules/.bin:$PATH

RUN yarn

CMD ["npm", "start"]

