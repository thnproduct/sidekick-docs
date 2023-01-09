# Troubleshooting

You can use the parameters below to troubleshoot your agent.



* Setting logLevel to 'debug' will generate extra logs for you to spot the problem.
* If you are having trouble with your agent's collections stack you can expand maxFrames, maxExpandFrames, maxProperties, and maxParseDepth to collect more in-depth data.
* If you are working within a monorepo that has multiple package.json files, use scriptPrefix to define your app's directories relative path to the main directory of your workspace.



| Config          | Requirement | Environment Variable                 | Default |
| --------------- | ----------- | ------------------------------------ | ------- |
| logLevel        | Optional    | SIDEKICK\_AGENT\_LOG\_LEVEL          | info    |
| maxFrames       | Optional    | SIDEKICK\_AGENT\_MAX\_FRAMES         | 20      |
| maxExpandFrames | Optional    | SIDEKICK\_AGENT\_MAX\_EXPAND\_FRAMES | 1       |
| maxProperties   | Optional    | SIDEKICK\_AGENT\_MAX\_PROPERTIES     | 10      |
| maxParseDepth   | Optional    | SIDEKICK\_AGENT\_MAX\_PARSE\_DEPTH   | 3       |
| scriptPrefix    | Optional    | SIDEKICK\_AGENT\_SCRIPT\_PREFIX      | None    |

