# Logpoint Expressions

Sidekick Logpoint expressions are based on \{{ mustache \}}. You can get detailed information about the mustache library from here: [https://mustache.github.io/mustache.5.html](https://mustache.github.io/mustache.5.html)



Sample basic usage:

```
sidekick log : {{name}}
{{age}}
{{company}}
```



You can also get properties of objects if the given property is in the scope:\


```
{{request.title}}
```

\
