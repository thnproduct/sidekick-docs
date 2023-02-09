# Conditional tracepoints

You may need to take snapshots only when certain conditions are met. Use the “Condition” box in the edit popup to specify an optional condition:

![](<../../../.gitbook/assets/Screen Shot 2022-05-26 at 14.50.56.png>)

The condition syntax was kept very simple to make it understandable without referring to a manual. Any developer who is already using a mainstream language should feel familiar with the syntax.

Basically, the conditions defined should return a boolean value. So, some of the simplest forms consist of a comparison operator and two operands (variable or literal) like below:

```
id != null
name == “bob”
isRegistered == true
itemCount > 0
failedCount <= recoveredCount
```

You can combine those expressions with binary boolean operators to build more complex expressions:

```
id != null && isRegistered == true
id != null AND isRegistered == true

itemCount > 0 || failedCount <= recoveredCount
itemCount > 0 OR failedCount <= recoveredCount
```

You can use parentheses to force precedence between multiple boolean clauses:

```
(id != null && isRegistered == true) OR (itemCount > 0 || failedCount <= recoveredCount)
```

