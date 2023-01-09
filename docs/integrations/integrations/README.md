# Integrations

### Data target integrations

Sidekick offers

* [Slack](slack-integration.md)
* [Logz.io](logz.io-integration.md)
* [Sumo Logic](sumo-logic-integration.md)
* [Solarwinds Loggly](solarwinds-loggly-integration.md)
* [New Relic](new-relic-integration.md)
* [Elasticsearch](elasticsearch-integration.md)
* [Loki](loki-integration.md)
* [Coralogix](coralogix-integration.md)
* [Custom webhook](webhook-integration.md)

integrations within Web IDE. Those integrations allow you to send your tracepoint events, logs & error snapshots to your desired data targets.

{% embed url="https://www.youtube.com/watch?v=HW9Shpbfi6M&ab_channel=Sidekick%28byThundra%29" %}

{% hint style="info" %}
If you can't find your desired tools on the list you can [contact to us](https://www.runsidekick.com/contact-us) or develop custom integrations via Sidekick [node.js-client.md](../node.js-client.md "mention").
{% endhint %}

###

### Set default targets for Sidekick Actions

###

<figure><img src="../../.gitbook/assets/Screen Shot 2023-01-03 at 10.17.02.png" alt="" /><figcaption></figcaption></figure>

###

###

### Developing custom integrations

Sidekick [node.js-client.md](../node.js-client.md "mention") offers you a way to implement custom logic using Sidekick Actions and work with Sidekick-generated data.

Furthermore, Sidekick [rest-api.md](../rest-api.md "mention") is available for remotely controlling Sidekick Actions & agents, allowing you to integrate Sidekick controls within your dashboards & applications. An example usage example of Sidekick REST API is Sidekick's Grafana plugin.

Check it out here:

[grafana-plugin-for-remote-controlling-sidekick-actions.md](../grafana-plugin-for-remote-controlling-sidekick-actions.md "mention")



### Sidekick for E2E Tests

Sidekick Test Module is an open-source web app that makes Sidekick-generated data available for E2E test cases. [cypress-plugin-for-e2e-tests.md](../cypress-plugin-for-e2e-tests.md "mention")makes use of this module for bringing stack-based tests & error stack collection to Cypress E2E tests.

You can get Sidekick Test Module here:

{% embed url="https://github.com/runsidekick/sidekick-test-module" %}

### Tracing Integrations

Sidekick plays well with Open-Telemetry & Thundra APM agents. Once one of those agents are installed together with the Sidekick agent, tracepoint snapshot events will be correlated to active traces when the tracepoint snapshot has been taken. So you will be able to go to the tracepoint snapshot event's related traces to understand what happened in the system during the execution of the overall flow/transaction.















