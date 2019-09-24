let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const util = require('./util');

exports.handler = function (event, context, callback) {
    sns.publish({
        Message: 'test',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:TestSNS'
    }).promise()
        .then(data => {
            util.sendSMS("+94123456789", "hello");
        })
        .catch(err => {
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}