import { Card } from "@site/src/components/Card";

# Client Settings

#### Visual Studio Code:


![VSCode settings](../.gitbook/assets/sidekick-vscode-integration.gif)


<div className="w-full cols-1">
<Card title="VSCode Self-hosted Settings" target="../plugins/visual-studio-code-extension-python-and-node.js/self-hosted-settings" isNewWindow={false}>

</Card>
</div>

#### IntelliJ Idea, PyCharm & WebStorm:


![JetBrains settings](../.gitbook/assets/idea-sidekcik.gif)


<div className="w-full cols-1">
<Card title="JetBrains IDEs Self-hosted Settings" target="../plugins/intellij-idea-plugin/self-hosted-settings" isNewWindow={false}>

</Card>
</div>

#### Node.js Client:

Set your broker and token info. Be sure to delete email & password fields.

```javascript
 "sidekick_host": "ws://127.0.0.1",
 "sidekick_port": "7777",
 "sidekick_token": "my-token"
```

