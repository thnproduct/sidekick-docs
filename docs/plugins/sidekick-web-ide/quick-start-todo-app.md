import { Card } from "@site/src/components/Card";

# 🏃Quick Start: To-Do App

### Option 1: Sandbox

We have prepared a sandbox environment for you  to try Sidekick without Sign-up and installing any dependency. You can try it from <a href="https://app.runsidekick.com/sandbox?utm_source=github&#x26;utm_medium=docs">here.</a>

### Option 2: Example Setup

This example provides the steps to deploy a simple To-Do app with Docker and debug using Sidekick. It includes:

* [Connecting a source code from a public GitHub repository](quick-start-todo-app#1st-step-connect-the-source-code)
* [Run a Sidekick agent installed To-Do app using Docker container](quick-start-todo-app#2nd-step---run-a-sidekick-agent-installed-to-do-app-using-docker-container--)
* [Putting a tracepoint](quick-start-todo-app#4th-step---open-source-file-and-put-tracepoint)
* [Generating a tracepoint event](quick-start-todo-app#5th-step---executing-your-code-and-generating-a-snapshot)
* [Analyzing the snapshot](quick-start-todo-app#6th-step---analyzing-your-snapshot)

After completing this example, you'll have an up and running app that can be debugged with Sidekick.

Therefore, we have designed a tailored experience for you to understand how Sidekick works with a simple To-Do application.



### **1st step: Connect the source code**


![](../../.gitbook/assets/managesources(1)(1).png)

We will use our demo-todo-app for this tutorial. You can fork it from here:

[https://github.com/runsidekick/sidekick-demo-todo-app-java](https://github.com/runsidekick/sidekick-demo-todo-app-java)

It's essential for Sidekick agents to know which branch/code you want to debug. By connecting your source code, you allow Sidekick to understand the correct source code and the correct tracepoint location.

:::info
**Sidekick has only read-only access to your source code and never brings it to servers and keeps it in your browser.**  
:::

Learn more about connecting your source code

<div className="w-full cols-1">

<Card title="Connect Source Code" target="how-to/import-source-code" isNewWindow={false}>

</Card>

</div>

### **2nd step - Run a Sidekick agent installed To-Do app using Docker container** 

Instrumenting ToDo app with Docker. For this step, Docker needs to be initialized on your system.

Download the Docker image using:

```bash
docker pull runsidekick/sidekick-demo-todo-app-java:latest
```

Run in your local:

```bash
docker run -e SIDEKICK_APIKEY=<YOUR-API-KEY> \
-e SIDEKICK_AGENT_BROKER_HOST=wss://broker.service.runsidekick.com -p 8080:8080 \
runsidekick/sidekick-demo-todo-app-java:latest
```

Learn more about instrumenting your own application:

<div className="w-full cols-1">

<Card title="Java Agent Installation" target="../../agents/java/configuration" isNewWindow={false}>

</Card>

</div>


### 3rd Step - Application selection

Apps need to be selected to start debugging. When you click "Select Application For Me" you will be able to start debugging.

![](../../.gitbook/assets/select_apps.png)


### 4th Step - Open source file and put tracepoint

Sidekick will capture the snapshot when you add a task on To-Do app. For this purpose, you will open `ToDoServiceImpl.java` file and add a tracepoint on 27th line. Right click on that line select Add Tracepoint. Then press the Add button to put your first tracepoint.


![](../../.gitbook/assets/puttracepoint.png)


![](../../.gitbook/assets/puttracepoint2_1.png)



### 5th Step - Executing your code and generating a snapshot

Your app needs to be up and running at `localhost:8080` Open your To**-**Do app and add a task.

![](../../.gitbook/assets/onb-todo.png)

### 6th Step - Analyzing your snapshot

You will see the events generated when you add a task. In order to see events panel, click on a **collected event.**

![](../../.gitbook/assets/events.png)

![](../../.gitbook/assets/select_event.png)


### Final

Your snapshots events will be listed on the bottom panel and you can click the generated events. 

![](../../.gitbook/assets/onb-step8.png)

You are all set!
