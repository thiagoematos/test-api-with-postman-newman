const newman = require('newman');
const SocksProxyAgent = require('socks-proxy-agent');
const requestAgent = new SocksProxyAgent({ host: 'localhost', port: '1080' });

newman.run({
    collection: require('./GoogleTest.postman_collection.json'),
    reporters: ['cli', 'htmlextra'],
    requestAgents: {
        http: requestAgent, // agent used for HTTP requests
        https: requestAgent, // agent used for HTTPS requests
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
}).on('start', function (err, args) { // on start of run, log to console
    console.log('running a collection...');
}).on('done', function (err, summary) {
    if (err || summary.error) {
        console.error('collection run encountered an error.');
    }
    else {
        console.log('collection run completed.');
    }
});
