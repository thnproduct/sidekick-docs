# Error Stack Collection

You can now activate automatic error stack collection and start collecting exception call stacks from your running applications without needing for putting a tracepoint beforehand.

Simply we can describe this new feature as an always on tracepoint that is looking out for uncaught exceptions.



Below you can find the related configuration:

| Config                                              | Requirement | Default Value |
| --------------------------------------------------- | ----------- | ------------- |
| SIDEKICK\_ERROR\_STACK\_ENABLE                      | Optional    | false         |
| SIDEKICK\_ERROR\_COLLECTION\_ENABLE\_CAPTURE\_FRAME | Optional    | false         |

Once an error stack is collected you can observe it in Error Stack tab inside the Sidekick UI.



