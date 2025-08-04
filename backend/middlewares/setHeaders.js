// const setHeaders = (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://expensia-frontend.vercel.app');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     next();
// };

// module.exports = setHeaders;


const setHeaders = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // ← your local frontend
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};

module.exports = setHeaders;
