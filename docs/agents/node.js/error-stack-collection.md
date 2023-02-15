import { Card } from "@site/src/components/Card";


# Error Stack Collection

With our Node agent’s latest update, developers can now activate automatic error stack collection and start collecting exception call stacks from their running applications without stopping them.

Simply we can describe this new feature as an always on tracepoint that is looking out for uncaught exceptions.



Below you can find the related configuration:

| Config                            | Requirement | Environment Variable                               | Default Value |
| --------------------------------- | ----------- | -------------------------------------------------- | ------------- |
| errorCollectionEnable             | Optional    | SIDEKICK\_AGENT\_ERROR\_COLLECTION\_ENABLE         | false         |
| errorCollectionEnableCaptureFrame | Optional    | SIDEKICK\_AGENT\_ERROR\_COLLECTION\_CAPTURE\_FRAME | false         |

Once an error stack is collected you can observe it in Error Stack tab inside the Sidekick UI.



<div className="w-full cols-1">

<Card title="Capturing Exception Call Stacks in Python Applications with Sidekick" target="https://medium.com/runsidekick/capturing-exception-call-stacks-in-python-applications-with-sidekick-d4474374659" isNewWindow={true}>

</Card>


</div>