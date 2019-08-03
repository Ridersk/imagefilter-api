const AWS = require('aws-sdk')
const uuid = require('uuid')

AWS.config.update({
    region: 'us-east-1'
})

const S3 = new AWS.S3()

const BUCKET = 'nanoservices-images-ridersk'

const upload = body => {
    const id = uuid()
    return new Promise((resolve, reject) => {
        S3.putObject({
            Bucket: BUCKET,
            Key: id + '.jpg',
            Body: new Buffer(body.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg'
        }, (error) => {
            if (error) {
                return reject(error)
            }
            return resolve({
                bucket: BUCKET,
                key: id + '.jpg'
            });
        })
    })
}

module.exports = {
    upload: upload
}