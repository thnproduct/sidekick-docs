# Expiration Settings

Any tracepoint will expire after certain hit count or time (age) limits are exceeded. When a tracepoint expires, it will be removed automatically. There won't be any tracepoint events for this tracepoint.

![Tracepoint - Expiration Settings](../../../.gitbook/assets/TracepointExpireLimits.png)

:::info
By default, a tracepoint will expire after capturing 50 snapshots, or 30 minutes after its creation, whichever occurs first. You can increase these limits up to 1000 hit count and 24 hours at maximum.
:::
