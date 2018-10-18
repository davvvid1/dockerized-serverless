Steps to reproduce strange behaviour:

- clone  this repository
- `git checkout 9c46164`
- `docker-compose up --build`
- Kill the server by `Ctrl + C` when you see it's ready (`... listening on 3000 ...`)
- `git checkout master`
- `docker-compose up --build`

Last step fails on my machine!

```
ERROR: for dockerizdserverless_serverless-app_1  Cannot create container for service serverless-app: b'invalid volume specification: \'9dc67aeaf5395a96258d3df870f4d4aa80b256c29a4763b03bd3999d11b87830:app:rw\': invalid mount config for type "volume": invalid mount path: \'app\' mount path must be absolute'
```
