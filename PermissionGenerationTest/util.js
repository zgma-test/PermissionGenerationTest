let AWS = require('aws-sdk');
const sns = new AWS.SNS();
module.exports = {

    sendSMS: (phoneNumber, message) => {
        return sns.publish({
            Message: message,
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType': {
                    'DataType': 'String',
                    'StringValue': 'Promotional'
                }
            },
            PhoneNumber: phoneNumber
        }).promise();
    }

};