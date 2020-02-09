module.exports = {
    development: {
        apiBaseURL: 'http://localhost:8000/',
        port: 3333
        //apiBrowserBaseURL: 'http://localhost:3000/api'
    },
    production: {
        apiBaseURL: 'http://<production_server_IP>:8000/',
        port: 80
        //apiBrowserBaseURL: 'http://URL:PORT/api'
    }
};
