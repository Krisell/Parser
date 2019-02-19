# JSON parser wrapper
Wrapper for ```JSON.parse()``` with added error handling. Non-valid JSON (e.g. null or empty string) returns a default value which can be specified to be an object (default) or an array.

# Installation
```npm install @krisell/parser```

# How to use
```Parser.json(stringifiedData)```  will return ```{}``` if ```stringifiedData``` can't be parsed. ```Parser.json(stringifiedData, 'array')``` will return ```[]``` if ```stringifiedData``` can't be parsed.
Returns the same as ```JSON.parse()``` in all other cases.

The data and type settings can also be provided as named parameters (using an object literal).

```JavaScript
Parser.json({
    serialized: stringifiedData,
    type: 'array'
})
```
