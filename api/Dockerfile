FROM node:8
RUN mkdir /travelpack-api
ADD . /travelpack-api
WORKDIR /travelpack-api
RUN npm i
EXPOSE 3030
CMD ["npm", "start"]