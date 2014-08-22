# Accept Header Versioning

The idea here is that your api endpoints should be semantic. When you are
querying a API for a resource (/api/users), you are looking for that resource,
not a version of that resource (/api/v2/users).

We accomplish versioning by passing in the API version via an Accept Header.

```bash
curl -H "Accept: vnd.domain.v2"
```

You can take this a step further by sending the format requested if your API 
responds with multiple formats.

```bash
curl -H "Accept: vnd.domain.v2+json"
```

In our application we now just need to read and parse this header key/value to
route the user to the correct method.

#Contributing

Feel free to fork this and send a pull request if you have an improvement.
