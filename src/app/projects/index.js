import PropertyController from '../controller.js';
import { handleErr, resize_save } from '../../helpers/index';
import { randomString } from '../../helpers/common';

const Controller = PropertyController('projects');

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
        const record = await Controller.findOne({ url: req.params.id});
        return res.send({ record, state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}

export async function createRecord(req, res) {
    let recordData = JSON.parse(req.body.product);
    recordData.content = req.body.content;
    const images = req.files;
    try {
        const record = await Controller.create(recordData);
        // save cover image
        if (images && images.coverImage) {
            //  measurements 680 X 680
            const fileName = recordData.url + '-' + randomString();
            resize_save({ file: images.coverImage, fileName: fileName, width: null, height: null }, 'uploads/projects');
            const updated = await Controller.update({ coverImage: `${fileName}.webp` }, record._id);
        }
        // end

        // other images
        if (req.files && req.files['otherImages']) {
            const otherImages = req.files.otherImages;
            const file_paths = [];
            if (typeof (otherImages.name) !== 'undefined') {
                const fileName = recordData.url + '-' + randomString();
                const filepath = `${fileName}.webp`
                file_paths.push(filepath);
                resize_save({ file: images.otherImages, fileName: fileName, width: null, height: null }, 'uploads/projects');
            } else {
                for (const file of otherImages) {
                    const fileName = recordData.url + '-' + randomString();
                    const filepath = `${fileName}.webp`
                    file_paths.push(filepath);
                    resize_save({ file: file, fileName: fileName, width: null, height: null }, 'uploads/projects');
                };
            }
            // update database
            const updated_property = await Controller.update({ otherImages: file_paths }, record._id);
            // end of database
        }
        // end of other images

        return res.send({ state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}