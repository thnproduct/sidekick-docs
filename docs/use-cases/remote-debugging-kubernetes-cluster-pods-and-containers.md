import { Card } from "@site/src/components/Card";


# Remote Debugging Kubernetes Cluster, Pods, and Containers

In the context of live application debugging, remote debugging refers to the practice of debugging an application that runs on a remote machine rather than on the local machine where the debugger is running. This can be particularly useful when the application runs in a Kubernetes cluster, as it allows developers to troubleshoot and fix issues without setting up a local development environment or manually deploying the application to their local machine.

You only need to ship the Sidekick agent with your application to enable remote debugging of a Kubernetes cluster, pods, and containers.

Once the agent is set up, you can use Sidekick's tracepoints, logpoints, and other debugging tools to inspect its state. This can help you identify the root cause of any issues or bugs and allow you to make the necessary changes to fix them.

Overall, the use of remote debugging can significantly improve the efficiency of the debugging process, as it allows developers to troubleshoot issues in a live production environment without manually reproducing the problem on their local machine.

Both logpoints and tracepoints can be helpful for remote debugging a Kubernetes cluster, pods, and containers, as they allow you to collect information about the application's execution without manually reproducing the problem or pausing the application. This can help you identify issues or bugs more quickly and efficiently and save time when debugging in a live production environment.

Learn more:

<div className="w-full cols-1">


<Card title="Logpoints" target="../sidekick-actions/logpoint" isNewWindow={false}>

</Card>
<Card title="Tracepoints" target="../sidekick-actions/tracepoint" isNewWindow={false}>

</Card>
</div>