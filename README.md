# REST API Server Extension!

Inspired by the [json-server](https://github.com/typicode/json-server) package, with this extension you can use a JSON file and serve it as an REST API Server already configured!

**NOTE!** *It's still in development, I want to add a lot of other features or at least give support to everything there's in the **json-server** package so it only provides the default routes and middlewares.*

### Supported formats

* JSON

### Usage

**1.** Create a JSON file anywhere
**2.** Complete your JSON file with whatever you want to serve asa basic REST API. Sample Code : 

```
{
    "users" : [
        { "id" : 1 , "name" : "Horacio" }
    ]
}
```
In this example you can see that inside the JSON file I placed a general object which represents the whole database. Inside there's a property called "users" which would represent a collection/table/resource with the same name and inside each resource you can bundle multiple objets wich would represent each register/document/registry.

For further information please go to the [json-server](https://github.com/typicode/json-server) documentation.

