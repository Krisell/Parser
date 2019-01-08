# JSON parser wrapper
Simple wrapper for ```JSON.parse()``` with the option to set default data type, in case of parse error (e.g. empty string).

# Installation
```npm install @krisell/parser```

# How to use
```Parser.json(stringifiedData)```  will return ```{}``` if ```stringifiedData``` can't be parsed, whereas ```Parser.json(stringifiedData, 'array')``` will return ```[]```. 

That's all there is to it.
