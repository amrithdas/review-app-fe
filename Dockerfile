# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /review-app-fe

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Serve the React app
CMD ["npm", "start"]
