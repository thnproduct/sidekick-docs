# Error Stack Collection

With our Node agent’s latest update, developers can now activate automatic error stack collection and start collecting exception call stacks from their running applications without stopping them.

Simply we can describe this new feature as an always on tracepoint that is looking out for uncaught exceptions.&#x20;



Below you can find the related configuration:

| Config                            | Requirement | Environment Variable                               | Default Value |
| --------------------------------- | ----------- | -------------------------------------------------- | ------------- |
| errorCollectionEnable             | Optional    | SIDEKICK\_AGENT\_ERROR\_COLLECTION\_ENABLE         | false         |
| errorCollectionEnableCaptureFrame | Optional    | SIDEKICK\_AGENT\_ERROR\_COLLECTION\_CAPTURE\_FRAME | false         |

Once an error stack is collected you can observe it in Error Stack tab inside the Sidekick UI.



See a use case example here:

{% embed url="https://medium.com/runsidekick/capturing-exception-call-stacks-from-running-node-js-applications-d9cd81407593" %}
