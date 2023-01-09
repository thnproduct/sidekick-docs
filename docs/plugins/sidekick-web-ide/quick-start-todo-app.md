# 🏃♀ Quick Start: To-Do App

### Option 1: Sandbox

We have prepared a sandbox environment for you  to try Sidekick without Sign-up and installing any dependency. You can try it from here:

<figure><img src="https://camo.githubusercontent.com/4529671833d90c3ec39b3d68612ff79c3269d2ee8b359f04fe6cb0e0377a4846/68747470733a2f2f343735303136372e6673312e68756273706f7475736572636f6e74656e742d6e61312e6e65742f68756266732f343735303136372f536964656b69636b2532304f532532307265706f2f747279283129253230312e706e67" alt="" /><figcaption><p><a href="https://app.runsidekick.com/sandbox?utm_source=github&#x26;utm_medium=docs">GO TO SANDBOX</a></p></figcaption></figure>

### Option 2: Example Setup

This example provides the steps to deploy a simple To-Do app with Docker and debug using Sidekick. It includes:

* [Connecting a source code from a public GitHub repository](quick-start-todo-app.md#1st-step-connect-the-sample-source-code)
* [Run a Sidekick agent installed To-Do app using Docker container](quick-start-todo-app.md#2nd-step-run-a-sidekick-agent-installed-to-do-app-using-docker-container)
* [Putting a tracepoint](quick-start-todo-app.md#4th-step-open-source-file-and-put-tracepoint)
* [Generating a tracepoint event](quick-start-todo-app.md#5th-step)
* [Analyzing the snapshot](quick-start-todo-app.md#6th-step)

After completing this example, you'll have an up and running app that can be debugged with Sidekick.

Therefore, we have designed a tailored experience for you to understand how Sidekick works with a simple To-Do application.&#x20;



### **1st step: Connect the source code**

<figure><img src="../../.gitbook/assets/managesources(1) (1).png" alt="" /><figcaption></figcaption></figure>

We will use our demo-todo-app for this tutorial. You can fork it from here:

[https://github.com/runsidekick/sidekick-demo-todo-app-java](https://github.com/runsidekick/sidekick-demo-todo-app-java)

It's essential for Sidekick agents to know which branch/code you want to debug. By connecting your source code, you allow Sidekick to understand the correct source code and the correct tracepoint location.

{% hint style="info" %}
**Sidekick has only read-only access to your source code and never brings it to servers and keeps it in your browser.**  &#x20;
{% endhint %}

Learn more about connecting your source code

{% content-ref url="how-to/import-source-code.md" %}
[import-source-code.md](how-to/import-source-code.md)
{% endcontent-ref %}



### **2nd step - Run a Sidekick agent installed To-Do app using Docker container** &#x20;

Instrumenting ToDo app with Docker. For this step, Docker needs to be initialized on your system.&#x20;

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

{% content-ref url="../../agents/java/configuration.md" %}
[configuration.md](../../agents/java/configuration.md)
{% endcontent-ref %}



### 3rd Step - Application selection

Apps need to be selected to start debugging. When you click "Select Application For Me" you will be able to start debugging.

<figure><img src="../../.gitbook/assets/select apps.png" alt="" /><figcaption></figcaption></figure>

### 4th Step - Open source file and put tracepoint

Sidekick will capture the snapshot when you add a task on To-Do app. For this purpose, you will open `ToDoServiceImpl.java` file and add a tracepoint on 27th line. Right click on that line select Add Tracepoint. Then press the Add button to put your first tracepoint.

<figure><img src="../../.gitbook/assets/puttracepoint.png" alt="" /><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/puttracepoint2 (1).png" alt="" /><figcaption></figcaption></figure>

### 5th Step - Executing your code and generating a snapshot

Your app needs to be up and running at `localhost:8080` Open your To**-**Do app and add a task.&#x20;

![](../../.gitbook/assets/onb-todo.png)

### 6th Step - Analyzing your snapshot

You will see the events generated when you add a task. In order to see events panel, click on a **collected event.**

<figure><img src="../../.gitbook/assets/events.png" alt="" /><figcaption></figcaption></figure>

****

<figure><img src="../../.gitbook/assets/select event.png" alt="" /><figcaption></figcaption></figure>

### Final

Your snapshots events will be listed on the bottom panel and you can click the generated events. &#x20;

![](../../.gitbook/assets/onb-step8.png)

You are all set!
