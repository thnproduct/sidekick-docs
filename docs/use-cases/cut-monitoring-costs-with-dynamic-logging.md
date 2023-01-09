# Cut Monitoring Costs with Dynamic Logging

Dynamic logging with logpoints is a debugging technique that allows you to modify an application's log output while running without requiring a restart. This can be useful for debugging and troubleshooting issues in a live production environment. It allows developers to quickly and easily add or modify log statements in the application to collect more detailed information about its behavior.

One way dynamic logging with logpoints can lower monitoring costs is by allowing you to selectively log only the relevant data to the issue you are trying to resolve. For example, suppose you are experiencing a problem with a particular API in your application and want to understand what is happening when the API is called. In that case, you can use logpoints to insert log statements in the code that makes API calls to help understand what is going wrong. This can help you avoid collecting large amounts of unnecessary log data, which can reduce the overhead and cost of monitoring your application.

Dynamic logging with logpoints can also help lower monitoring costs by allowing you to control the level of detail logged. For example, you may log only warning-level messages in production environments to minimize the amount of data collected and then enable debug-level logging only when actively debugging an issue. This can help you balance the need for detailed log data with the cost of collecting and storing it.

[logpoint.md](../sidekick-actions/logpoint.md "mention")
