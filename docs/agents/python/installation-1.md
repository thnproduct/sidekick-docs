# Docker Configuration

After installation you can bundle Sidekick agent with your containers to debug them while they are running. Below you can see how you can run your container with related Sidekick configurations.

## Sample Docker Configuration

#### Simple Django production-ready Docker file:

```
FROM python:3

# This is the port that Gunicorn uses, so expose it to the outside
# world.
EXPOSE 8000

# Don't just add the base code directory, to try to cut down on
# rebuild sizes.
RUN mkdir /code
WORKDIR /code

# Install all the requirements -- doing things in this order should
# reduce the size of redeployments if we don't change dependencies.
ADD requirements.txt /code/
RUN pip install -r requirements.txt

# Add the main code directory and point at the start script.
ADD . /code
CMD ["./start.sh"]
```

#### Start.sh file

```
#!/bin/bash
gunicorn --bind=0.0.0.0:8000 --workers=3 --access-logfile '-' --error-logfile '-' --capture-output conduit.wsgi
```

#### Run using environment variables:

```
docker run ... \ 
    -e SIDEKICK_APIKEY=<YOUR-SIDEKICK-API-KEY> \
    -e SIDEKICK_APPLICATION_NAME=<YOUR-APP-NAME> \
    -e SIDEKICK_APPLICATION_STAGE=dev \
    -e SIDEKICK_APPLICATION_VERSION=<YOUR-APP-VERSION> \
    -e SIDEKICK_DEBUG_ENABLE=True \
    ...    
```

#### Run using a .env file:

Create a file with the .env extension and add the following into it with your own environment variables.

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

