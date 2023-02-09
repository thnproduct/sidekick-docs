# ⁉ FAQ

### **What does a Tracepoint mean?**

A tracepoint is basically a non-breaking remote breakpoint. Tracepoints differ from ordinary breakpoints in two ways:

* First, it doesn’t pause the code execution but just takes a screenshot of the variables when the code hits that line.
* Second, it’s integrated with Thundra’s distributed technology enabling the connection between several tracepoints in the same transaction.



### **What does a Logpoint mean?**

Logpoints open the way for dynamic(on-demand) logging to Sidekick users. Replacing traditional logging with dynamic logging has the potential to lower stage sizes, costs, and time for log searching while adding the ability to add new logpoints without editing the source code, redeploying, or restarting the application.



**What does “source code mismatch” mean?**

The source code you have is different from the source code bundled with the deployed artifact. Either you modified the code locally, or you don’t have the same version. You don’t get this error if the deployed artifact is not bundled with the source code.

**Under which conditions does the action of setting tracepoint fail?** 

In order to set a tracepoint, you need to import your source code, instrument your application, select an application to debug, and make sure that the selected application is up and running.

If setting tracepoint still fails this might mean that you imported the wrong source code or selected the wrong application.

**My tracepoint disappeared but I didn't remove it. What might be the reason?**

Tracepoints automatically expire after 30 minutes or 50 snapshots by default. In order to change this setting, please edit the respective tracepoint.

**I want Sidekick to generate a tracepoint event only when a specific condition occurs. How can I do this?**

You can achieve this by defining a condition for your tracepoint. You can write a logical statement in your programming language in order to make a comparison.

**Which programming languages are supported by Sidekick?**

Sidekick lets developers debug applications written in Java, Kotlin, Scala, Python and Node.js.

**Can I import the code from my local?**

For the Sidekick IDE we only support importing source code from source code management tools GitHub, GitLab, and Bitbucket (coming soon), but you can use Sidekick Visual Studio Code and Jetbrains IDEs within your local.
