import PropertyController from '../controller.js';
import { handleErr, resize_save } from '../../helpers/index';
import { randomString } from '../../helpers/common';
import { connection } from 'mongoose';

const Controller = PropertyController('categories');

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

export async function findByMajorcategory(req, res) {
    try {
        console.log("-------------majorcategory", req.params.url)
        const record = await Controller.find({ majorcategory: req.params.url});
        return res.send({ record, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}
export async function createRecord(req, res) {
    let data = JSON.parse(req.body.product);
    try {
        const record = await Controller.create(data);
        return res.send({ state: true, ResultDesc: 1200 });
    }
    catch (err) {
        handleErr(res, err);
    }
}
export async function updateRecord(req, res) {
    try {
        let recordData = JSON.parse(req.body.product);
        recordData.description = req.body.description;
        const images = req.otherImages;
        const record = await Controller.update(recordData, recordData._id);
        if (images && images.coverImage) {
            const fileName = record.url + '-' + randomString();
            resize_save({ file: images.coverImage, fileName: fileName, width: null, height: null }, 'uploads/logos');
            const updated = await Controller.update({ coverImage: `${fileName}.webp` }, record._id);
        }
        return res.send({ state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}