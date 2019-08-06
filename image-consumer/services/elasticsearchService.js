const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    apiVersion: '6.8',
    host: 'https://vpc-elasticsearch-cluster-tkb3yp7kzfh3gam63rq6ofpnyq.us-east-1.es.amazonaws.com',
});

const index = async document => {
    await client.index({
        index: 'images',
        type: 'object',
        body: document
    })
}

module.exports = {
    index
}