const AWS = require('aws-sdk');
const fs = require('fs');
const dotenv = require('dotenv');

// Config / .env
dotenv.load();

// Ensure required ENV vars are set
let requiredEnv = [
    'S3_ACCESS_KEY', 'S3_SECRET_KEY'
];
let unsetEnv = requiredEnv.filter((env) => !(typeof process.env[env] !== 'undefined'));

if (unsetEnv.length > 0) {
    throw new Error("Required ENV variables are not set: [" + unsetEnv.join(', ') + "]");
}

const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY;
const S3_SECRET_KEY = process.env.S3_SECRET_KEY;

const s3  = new AWS.S3({
          accessKeyId: S3_ACCESS_KEY,
          secretAccessKey: S3_SECRET_KEY,
          endpoint: 'http://127.0.0.1:9000',
          s3ForcePathStyle: true, // needed with minio?
          signatureVersion: 'v4'
});

s3.headBucket({Bucket: 'testbucket'}, function(err, data) {
    if (err) { // if doesn't exist
        s3.createBucket({Bucket: 'testbucket'}, function(err, data) {
            if (err) {
                console.log(err);
            }
        });
    }
});

fs.readFile('image.jpeg', (err, data) => {
	if (err) throw err;
	// putObject operation.
	
	var params = {Bucket: 'testbucket', Key: 'image12345.jpeg', Body: data};
	
	s3.putObject(params, function(err, data) {
    	if (err)
			console.log(err)
		else   
			console.log("Successfully uploaded data to testbucket/testobject");
	});
	
	// getObject operation.
	
	var params = {Bucket: 'testbucket', Key: 'testobject'};
	
	var file = require('fs').createWriteStream('/tmp/mykey');
	
	s3.getObject(params).
		on('httpData', function(chunk) { file.write(chunk); }).
		on('httpDone', function() { file.end(); }).
	send();
});
