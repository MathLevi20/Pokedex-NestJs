# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install Yarn globally
RUN npm install -g yarn

# Install application dependencies using Yarn
RUN yarn 

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start"]
