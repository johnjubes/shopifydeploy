FROM node:16.4
COPY . .
RUN npm install --production --legacy-peer-deps
RUN npm run build
CMD npm run start
EXPOSE 8081
