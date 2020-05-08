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

**3.** Open your Command Palette `CTRL` + `SHIFT` + `P` and search for the command **Start REST API Server**.   

**4.** You can now make requests to your endpoints (in the previous example /users is the endpoint) over the port **9000**.    


**5.** You can turn off the server by searching for the command **Stop REST API Server** in your Command Palette or by clicking in the Status Item down below your VS Code that shows the status of the current opened server.

For further information please go to the [json-server](https://github.com/typicode/json-server) documentation.

