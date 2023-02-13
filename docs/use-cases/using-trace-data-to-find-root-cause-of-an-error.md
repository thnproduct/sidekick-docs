---
title: Using Trace Data to Find Root Cause of an Error
sidebar_position: 6
slug: /use-cases/using-trace-data-to-find-root-cause-of-an-error
---

import { Card } from "@site/src/components/Card";

# Using Trace Data to Find Root Cause of an Error

Trace data refer to the detailed information that is collected about the execution of an application. This data can help debug and troubleshoot issues in an application, as it provides a detailed record of what the application was doing at different points in time.

When you enable distributed tracing with Sidekick, tracepoint snapshot events will be correlated to active traces at the time of tracepoint snapshot has been taken. So you will be able to go to the tracepoint snapshot event's related traces to understand what happened in the system during the execution of the overall flow/transaction.


<div className="w-full cols-1">

<Card title="Article: Dynamic observability meets Open Telemetry" target="https://medium.com/runsidekick/dynamic-observability-meets-opentelemetry-16a087755245" isNewWindow={true}>

</Card>

<Card title="🔌 Thundra APM Tracing Integration" target="../integrations/thundra-apm-tracing-integration" isNewWindow={false}>

</Card>
<Card title="🔌 Open-Telemetry Tracing Integration" target="../integrations/open-telemetry-tracing-integration" isNewWindow={false}>

</Card>
</div>

