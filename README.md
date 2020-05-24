This repo serves to reproduce an issue I'm facing while using webpack 5 beta while trying to lazy load multiple federated plugins.

## Steps to reproduce

1. Run `npm i`.

1. Run `npm run build`.

1. Run `docker-compose up -d`

1. Go to http://127.0.0.1:8000/

1. Try to switch to the `Profile` tab.

[Issue Video](./issue_video.mp4)
