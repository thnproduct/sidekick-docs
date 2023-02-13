---
title: Identifying Stack Changes & Stack Comparison
sidebar_position: 5
slug: /use-cases/identifying-stack-changes-and-stack-comparison
---


import { Card } from "@site/src/components/Card";

# Identifying Stack Changes & Stack Comparison

Identifying stack changes and stack comparison is a debugging technique that involves comparing the stack traces of two different executions of an application to understand how the application's behavior has changed. This can be useful in various situations, such as when you are trying to troubleshoot an issue in a live production environment or trying to understand how changes to the application's code have affected its behavior.

In microservices, identifying stack changes and comparisons can be handy for understanding behavioral changes in the individual services that make up the microservices architecture. For example, suppose you are experiencing an issue with one of your microservices and suspect it may be related to a change in the service's behavior. In that case, you can use stack comparison to compare the stack traces of the service before and after the transition to see what has changed.

To use this technique, you will need to set up a way to collect stack traces from the application at different points in time. This may involve setting up saved logpoints or saved tracepoints in the code and setting reference events for them. Once you have collected the stack traces, you can compare them within Sidekick Web IDE and identify changes in the application's behavior.

Overall, identifying stack changes and stack comparison can be valuable for understanding behavioral changes in microservices, as it allows you to compare the stack traces of different executions of the application to see how their behavior has changed. This can help you identify issues or bugs more quickly and efficiently and save time when debugging in a live production environment.


<div className="w-full cols-1">


<Card title="Reference events and probe tags" target="../sidekick-actions/reference-events-and-probe-tags" isNewWindow={false}>

</Card>

</div>