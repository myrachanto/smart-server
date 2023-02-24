import PropertyController from '../controller.js';
import { handleErr, resize_save } from '../../helpers/index';
import { randomString } from '../../helpers/common';

const Controller = PropertyController('categories');
const ChildrenController = PropertyController('childservices');

export async function deleteRecord(req, res) {
    try {
        const record = await Controller.remove(req.params.id);
        return res.send({ record, state: true });
    } catch (err) {
        handleErr(res, err);
    }
}

export async function queryMenus(req, res) {
    try {
        const categories = await Controller.find({});

        const menus = [];
        for(const category of categories) {
            const children = await ChildrenController.find({ category: category._id});
            const details = {
                category: category.title,
                children: children
            };

            menus.push(details);

        }

        return res.send({ menus, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}

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

export async function createRecord(req, res) {
    let recordData = JSON.parse(req.body.category);
    try {
        const record = await Controller.create(recordData);   
        return res.send({ state: true, ResultDesc: 1200 });
    }
    catch (err) {
        handleErr(res, err);
    }
}


export async function updateRecord(req, res) {
    try {
        let recordData = JSON.parse(req.body.category);

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