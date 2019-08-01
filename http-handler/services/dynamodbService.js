const AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1'
})

const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE = 'images';

const put = item => {
    return new Promise((resolve, reject) => {
        dynamodb.put({
            TableName: TABLE,
            Item: {
                id: item.key,
                bucket: item.bucket
            }
        }, (error, data) => {
            if (error) {
                return reject(error);
            }
            return resolve(data);
        });
    })
}

module.exports = {
    put: put
}