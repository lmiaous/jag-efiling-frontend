Assuming this app will be deployed behind SiteMinder, we need a fake app
that mimics what SiteMinder would do.

This assumes the real app is already running on port 3000, and the api on 8080

To run the site minder fake from this folder, use something like
```
REACT_APP_API_URL=http://localhost:8080 npm start 
```