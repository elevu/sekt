This project was cloned from https://github.com/tink-ab/tink-connect-example

## Structure

* **NodeJS server/backend**: can be found in `server.js`
* **Angular client/frontend**: can be found in the `client` folder.

## Running the app locally

The client runs on port `3000` and the server runs on `8080`.

First, clone this repository and `cd` into that directory. Then install the dependencies.

```
$ npm install
```

Run both the backend (`server.js`) and the frontend (`client` folder) concurrently:

```
$ npm run dev
```

You should be redirected to the client app on `http://localhost:3000/`, but if you're not, just open that in your browser and you should see the example app.

## Build for production

Inside the `.buildkite` folder we have all the logic needed to deploy this app automatically. It downloads dependencies, builds the app and deploys it with `gcloud` to Google AppEngine.
