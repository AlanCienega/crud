# Specify the base image
FROM node:19

# Create a directory for the app
WORKDIR /app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the .env file to the app directory
COPY .env.example .env

# Copy the rest of the app to the app directory
COPY . .

# RUN npm update
RUN apt update
# Expose port 3000 for the app
EXPOSE 3000

# Load environment variables from the .env file
CMD ["node", "src/app.js"]
