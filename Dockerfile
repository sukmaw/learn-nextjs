# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install any needed packages specified in package.json
RUN npm install
RUN npm run build

# Bundle app source inside the docker image
COPY . .

# Make port available to the world outside this container
EXPOSE ${PORT}

# Run the app when the container launches
CMD ["npm", "start"]