const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    apiVersion: '6.8',
    host: 'https://vpc-elasticsearch-cluster-tkb3yp7kzfh3gam63rq6ofpnyq.us-east-1.es.amazonaws.com',
});

const search = async query => {
    return await client.search({
        index: 'images',
        q: 'tags:' + query
    })
}

module.exports = {
    search
}