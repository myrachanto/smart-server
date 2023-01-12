import PropertyController from '../controller.js';
import { handleErr, resize_save } from '../../helpers/index';

const Controller = PropertyController('car-models');

export async function findAll(req, res) {
    try {
        const records = await Controller.find({});
        return res.send({ records, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function findByUrl(req, res) {
    try {
        const record = await Controller.findOne({ url: req.params.url});
        return res.send({ record, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function findModels(req, res) {
    try {
        const categoryId = req.params.id;
        console.log(categoryId, 'cat');
        const records = await Controller.find({ category: categoryId});
        console.log(records, 'records');
        return res.send({ records, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function createRecord(req, res) {
    let data = req.body;
    try { 
        const record = await Controller.create(data);
         // save cover image
        return res.send({ state: true, ResultDesc: 1200 });
    }
    catch (err) {
        handleErr(res, err);
    }
}
export async function updateRecord(req, res) {
    let recordData = JSON.parse(req.body.product);
    recordData.description = req.body.description;
    try {
        const record = await Controller.update(recordData, req.params.id);
        // save cover image
        // end
        return res.send({ state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}