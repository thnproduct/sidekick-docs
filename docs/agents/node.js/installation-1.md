---
description: >-
  In this section we will explain how you can use Sidekick Node.js agent with a
  containerized application.
---

# Docker Configuration

Sidekick agent can be used in containerized applications, without any extra modification in your application source code.

We highly recommend using your API key as an environment variable instead of hard-coded.

## Sample Docker Configuration

Below is a very common docker configuration for N**odejs** applications.

First, create a directory. \
Install dependencies including the Sidekick agent.\
Bundle packages and bind ports.\
Finally, run the application with the **start** command you declared in the package.json file.

#### Sample Dockerfile:

```
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000

CMD [ "npm", "start"]
```

#### Build your docker image

```
docker build . -t < NAME-YOUR-IMAGE >
```

As we mentioned before, we highly recommend using your API key as an environment variable. \


To use Sidekick agent, you can either add variables to your **Dockerfile** or give them as a parameter to your **run** command or you can use a .env file as well.

#### Option 1: Edit Dockerfile

Add this line to your **Dockerfile** before the **npm start** command

```
...
    # Required
    ENV SIDEKICK_APIKEY=<YOUR-SIDEKICK-API-KEY> 
    
    # Optional
    ENV SIDEKICK_APPLICATION_NAME=<application_name>
    ENV SIDEKICK_APPLICATION_STAGE=<application_stage>
    ENV SIDEKICK_APPLICATION_VERSION=<application_version>
    ENV SIDEKICK_DEBUG_ENABLE=True
...                  
```

#### Option 2: Use runtime parameters

**Run** your container as below:

```
docker run  
    -e SIDEKICK_APIKEY=<YOUR-SIDEKICK-API-KEY> \
    -e SIDEKICK_APPLICATION_NAME=<YOUR-APP-NAME> \
    -e SIDEKICK_APPLICATION_STAGE=dev \
    -e SIDEKICK_APPLICATION_VERSION=<YOUR-APP-VERSION> \
    -e SIDEKICK_DEBUG_ENABLE=True \
    -p 3000:3000 <NAME-YOUR-IMAGE>
```

#### Option 3: Use a .env file

Create a file with the .env extension and add the following to it using your own environment variables.

```
SIDEKICK_APIKEY=<YOUR-SIDEKICK-API-KEY> 
SIDEKICK_APPLICATION_NAME=<application_name>
SIDEKICK_APPLICATION_STAGE=<application_stage>
SIDEKICK_APPLICATION_VERSION=<application_version>
SIDEKICK_DEBUG_ENABLE=True
```



Execute following:

```
docker run ...     
```

