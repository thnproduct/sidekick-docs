# 🔌 Thundra APM Tracing Integration

You can enable distributed tracing by integrating Thundra APM agent as explained [here](https://apm.docs.thundra.io/java/integration-options-for-containers-and-vms). Note that, to be able to use Thundra APM agent, you need to have a separate Thundra APM account which you can get it [here](https://apm.thundra.io/).

When you enable distributed tracing with Thundra APM agent, tracepoint snapshot events will be correlated to active traces at the time of tracepoint snapshot has been taken. So you will be able to go to the related traces from the tracepoint snapshot event to understand what did happen in the system during the execution of overall flow/transaction.
