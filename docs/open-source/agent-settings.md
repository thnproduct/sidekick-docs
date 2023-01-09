# 🕵 Agent Settings

In order to use Sidekick agents with your self-hosted Sidekick instances you need to override their brokerHost and brokerPort values.&#x20;

Node.js Example:

```
SidekickDebugger.start({ 
    apiKey: 'my-token',
    applicationName: 'self-hosted-test',
    applicationStage: 'dev',
    applicationVersion: 'ebd3c74e381911eac5c64beed461b25e46fbe16f',
    brokerHost: "ws://127.0.0.1",
    brokerPort: 7777
});
```

Env variables for Java:

```
SIDEKICK_AGENT_BROKER_HOST=ws://127.0.0.1
SIDEKICK_AGENT_BROKER_PORT=7777
SIDEKICK_APIKEY=my-token
```

Env variables for Python:

```
SIDEKICK_BROKER_HOST="ws://127.0.0.1"
SIDEKICK_BROKER_PORT=7777
SIDEKICK_APIKEY=my-token
```
