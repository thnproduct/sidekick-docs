# 🔌 Open-Telemetry Tracing Integration

If you have Open-Telemetry agent installed, then the Sidekick Node.js agent will automatically recognize it and enable its tracing support.

{% embed url="https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/" %}

When you enable distributed tracing with Open-Telemetry, tracepoint snapshot events will be correlated to active traces when the tracepoint snapshot has been taken. So you will be able to go to the tracepoint snapshot event's related traces to understand what happened in the system during the execution of the overall flow/transaction.



{% embed url="https://medium.com/runsidekick/dynamic-observability-meets-opentelemetry-16a087755245" %}
