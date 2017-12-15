const SinhVien = require('../models/sinhvienModel');

module.exports = {
    index: async (req, res) => {
        try{
            const allSV = await SinhVien.find({});
            res.status(200).json(allSV);
        }catch(err){
            res.json({err: err.message})
        }
    },
    addSV: async (req, res) => {
         try {
             const add = await new SinhVien({
                name: req.body.name,
                age: req.body.age,
                address: req.body.address
             });
             await add.save();
             res.status(200).json(add);
         } catch (error) {
             res.json({err: error.message});
         }
    },
    updateSV: async (req, res) => {
        try {
            const sv = await SinhVien.find({});
            const edit = await SinhVien.findByIdAndUpdate(
                req.params.Id,
                {
                    name: req.body.name || sv.name,
                    age : req.body.age || sv.age,
                    address: req.body.address || sv.address,
                    update_at: Date.now()
                },
                {new: true}
            );
            await edit.save();
            res.status(200).json(edit);
        } catch (error) {
            res.json({err: error.message});
        }
    },
    deleteSV: async (req, res) => {
        try {
            const del =  await SinhVien.findByIdAndRemove(req.params.Id);
            res.status(200).json(del);

        } catch (error) {
            res.json({err: error.message});
        }
    },
    getSV: async (req, res) => {
        try {
            const sv = await SinhVien.findById(req.params.Id);
            res.status(200).json(sv);
        } catch (error) {
            res.json({err: error.message});
        }
    }
}
