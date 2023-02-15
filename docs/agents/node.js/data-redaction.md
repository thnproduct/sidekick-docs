# Data Redaction

Sidekick Node agent lets you define custom data redaction functions. Below you can see the related confing and an example:

| Config                            | Requirement | default |
| --------------------------------- | ----------- | ------- |
| captureFrameDataReductionCallback | Optional    | false   |
| logMessageDataReductionCallback   | Optional    | false   |

```javascript
SidekickDebugger.start({
    apiKey: 'your-api-key',
    applicationName: 'testApp',
    captureFrameDataReductionCallback: (captureFrames) => {
        //edit this function based on your needs
        return captureFrames;
    },
    logMessageDataReductionCallback: (
        logMessageDataReductionInfo,
        locals) => {
            //edit this function based on your needs
            return logMessageDataReductionInfo.logMessage + '-' + 'custom logs'
    }
})
```
