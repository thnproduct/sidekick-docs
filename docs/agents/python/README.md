import { Card } from "@site/src/components/Card";


# 🐍 Python

Sidekick is a live application debugger that helps you to diagnose flaws & bugs in Python applications with near zero overhead thanks to the asynchronous approach.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Dt5HoOpFjYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Supported versions

* 2.7
* 3.5
* 3.6
* 3.7
* 3.8
* 3.9

### Supported Frameworks

| Framework | Supported Version |
| --------- | ----------------- |
| Django    | 1.11+             |
| Flask     | 0.5+              |
| Fastapi   | 0.62.0+           |

:::info
Fastapi has been supported for Python 3.7 and above.
:::


<div className="w-full cols-1">

<Card title="Article: Capturing Exception Call Stacks in Python Applications with Sidekick" target="https://medium.com/runsidekick/capturing-exception-call-stacks-in-python-applications-with-sidekick-d4474374659" isNewWindow={true}>

</Card>

<Card title="Article: Live Debugging Python Applications" target="https://medium.com/runsidekick/live-debugging-python-applications-cbec3e4099ab" isNewWindow={true}>

</Card>

</div>

### Limitations

* Tracepoints can be put onto only executable codes inside methods.
* Only method arguments and local variables are captured while getting a snapshot of the tracepoint.
* Only the top frame (the method where the tracepoint was put) snapshot is captured. Lower frames' (caller methods in the call stack) snapshots are not captured yet but frame class name, method name, and line numbers are provided.
* Python agent is only available for Linux and MacOS (including Apple Silicon)
