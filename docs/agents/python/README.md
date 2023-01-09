# 🐍 Python

Sidekick is a live application debugger that helps you to diagnose flaws & bugs in Python applications with near zero overhead thanks to the asynchronous approach.

{% embed url="https://www.youtube.com/watch?v=Dt5HoOpFjYE&t=87s&ab_channel=Sidekick%28byThundra%29" %}

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

{% hint style="info" %}
Fastapi has been supported for Python 3.7 and above.
{% endhint %}

{% embed url="https://medium.com/runsidekick/live-debugging-python-applications-cbec3e4099ab" %}

{% embed url="https://medium.com/runsidekick/capturing-exception-call-stacks-in-python-applications-with-sidekick-d4474374659" %}

### Limitations

* Tracepoints can be put onto only executable codes inside methods.
* Only method arguments and local variables are captured while getting a snapshot of the tracepoint.&#x20;
* Only the top frame (the method where the tracepoint was put) snapshot is captured. Lower frames' (caller methods in the call stack) snapshots are not captured yet but frame class name, method name, and line numbers are provided.
* Python agent is only available for Linux and MacOS (including Apple Silicon)
