# S3 Upload Example (Node)

## Installation

Install required node packages
```
$ yarn install
```

## Usage example

### Using S3

TODO

### Using local Minio server

Only tested in OSX currently! (With `homebrew` installed)

1. Start minio server using the following commands:
```
$ yarn setup
$ yarn server
```
2. Get `AccessKey` and `SecretKey` after starting minio server, and create or update `.env` based on `.env.sample`
3. Save an image as `image.jpeg` in root folder.
4. Execute `upload.js`
5. You should see the successfully uploaded image in `./data/image12345.jpeg`

## Release History

* 1.0.0
    * Working example for Node

## Meta

Ivan Foong – [@vonze21](https://twitter.com/vonze21) – vonze21@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

<https://github.com/ivanfoong/s3-upload-node-example>

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

