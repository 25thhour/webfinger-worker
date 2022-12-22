# Webfinger Worker

Use your own domain for Mastodon discoverability using the WebFinger protocol.

## Init

`npm ci`

## Customise

To cusomise for your own use:

1. Update the route in [wrangler.toml](./wrangler.toml) to point to your domain, e.g. `example.com/.well-known/webfinger*`
1. Update the webfinger response in [src/webfinger.js](./src/webfinger.js)

## Deploy

`wrangler publish`
