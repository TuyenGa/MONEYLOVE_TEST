module.exports = (express) => {
    const router = express.Router();
    
    const sinhvien = require('./sinhvien')(express);
    router.use('/sinhvien',sinhvien);

    return router;
}