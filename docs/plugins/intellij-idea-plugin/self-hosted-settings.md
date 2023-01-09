---
description: This tutorial applies to both IntelliJ IDEA, PyCharm & WebStorm
---

# Self-hosted Settings

You need to change your broker host and port at the Sidekick IDEA plugin config file.

{% hint style="info" %}
If you can't find your plugin cofig file. First install Idea plugin and make sure you press Click to Connect for the first time.
{% endhint %}

Sidekick IDEA plugin config file is located under .sidekick folder under:

#### Windows:

C:\Users\\`USERNAME`\\.sidekick\pluginConfig

#### Mac & Linux

home/.sidekick/pluginConfig\


Edit the plugin settings file like below:

```
#Sidekick Intellij Plugin Properties
#Wed Aug 24 09:25:05 TRT 2022
webAppUrl=
brokerUrl=ws://127.0.0.1
brokerPort=7777
token=my-token
onPrem=false
oss=true

```

WebAppUrl must be cleared and all other fields must be filled.&#x20;
