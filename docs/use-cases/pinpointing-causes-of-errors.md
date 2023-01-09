# Pinpointing Causes of Errors

Pinpointing the cause of errors is a common task when debugging an application, and tracepoints can be helpful for this purpose.

[tracepoint.md](../sidekick-actions/tracepoint.md "mention")

To use tracepoints for pinpointing the cause of errors, you can set up tracepoints in the areas of the code that you suspect may be causing the errors. For example, suppose you are experiencing errors when interacting with a particular API. In that case, you might set up tracepoints in the code that makes API calls to help you understand what is going wrong.

When the application is run, the tracepoints will be triggered, and a snapshot of the stack will be captured as the application executes. You can then review these stack data to understand what is happening in the code at the time of the error, which can help you identify the root cause of the issue.
