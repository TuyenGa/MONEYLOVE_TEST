const sinhvienController = require('../controllers/sinhvienController');

module.exports = (express) => {
    
    const router = express.Router();

    router.route('/')
        .get(sinhvienController.index);

    router.route('/addSinhVien')
        .post(sinhvienController.addSV);

    router.route('/editSinhVien/:Id')
        .put(sinhvienController.updateSV)

    router.route('/deleteSinhVien/:Id')
        .delete(sinhvienController.deleteSV);

    router.route('/:Id')
        .get(sinhvienController.getSV);
    return router;
}