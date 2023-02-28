# Specify the base image
FROM node:19

# Create a directory for the app
RUN mkdir -p /home/app
WORKDIR /home/app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Copy the .env file to the app directory
COPY .env.example .env

# Copy the rest of the app to the app directory
COPY . .

# Install dependencies
RUN npm i -g nodemon && npm install

# RUN npm update
RUN apt update
# Expose port 3000 for the app
EXPOSE 3000

CMD ["npm", "run", "dev"]
