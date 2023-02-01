# Source Bundling

For detecting mismatches between source code on your local and actual code running on remote applications, Sidekick agent requires source codes to be available in the running application artifact (jar). So source codes should be put into artifacts while building. Otherwise, source code incompatibility checks will not be applied as this is optional. In case of code level conflict is detected between local and remote, put tracepoint request will be rejected.\


Sample Maven configuration will look like this:

```markup
<build>
  <resources>
    <resource>
      <directory>src/main/java</directory>
    </resource>
    <resource>
      <directory>src/main/kotlin</directory>
    </resource>
    <resource>
      <directory>src/main/scala</directory>
    </resource>
    <resource>
      <directory>src/main/resources</directory>
    </resource>
    ...
  </resources>
  ...
</build>   
```

and sample Gradle configuration will look like this:

```markup
jar { 
    from sourceSets.main.allSource 
}
```

