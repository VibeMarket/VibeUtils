FROM node:16

# Create the directory!
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Copy and Install our bot
COPY package.json /usr/src/bot
RUN npm install

# Our precious bot
COPY . /usr/src/bot

# Start me!
CMD ["npm run", "gen"]
CMD ["node", "index.js"]
