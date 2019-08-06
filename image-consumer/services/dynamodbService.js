const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
})

const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE = 'images'

const putItem = item => {
    return new Promise((resolve, reject) => {
        dynamodb.put({
            TableName: TABLE,
            Item: item
        }, (error, data) => {
            if (error) {
                return reject(error);
            }
            return resolve(data);
        });
    })
}

const getItem = id => {
    return new Promise((resolve, reject) => {
        dynamodb.get({
            TableName: TABLE,
            Key: {
                id: id
            },
            ConsistentRead: true
        }, (error, data) => {
            if (error) {
                return reject(error)
            }
            return resolve(data.Item)
        })
    })
}

module.exports = {
    putItem,
    getItem
}