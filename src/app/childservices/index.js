import PropertyController from '../controller.js';
import { handleErr, resize_save } from '../../helpers/index';
import { randomString } from '../../helpers/common';

const Controller = PropertyController('childservices');
const ServiceController = PropertyController('services');

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
    // recordData.description = req.body.description;
    recordData.sectionsContent = JSON.parse(req.body.sectionsContent);
    // console.log('record data -- ----------', req.files);
    // console.log('record data -- ----------', recordData.sectionsContent);
    const images = req.files;
    try {
        // console.log("--------------stepper1",req.files)
        if (req.files && req.files['otherImages']) {
            const otherImages = req.files.otherImages;
            const file_paths = [];
            if (typeof (otherImages.name) !== 'undefined') {
                console.log("--------------stepper2 --- waaaa")
                let fileNam = file.name.split(".")[0]
                const fileName = `${fileNam}.webp`
                let _filename = fileName.split("_")[0]
                    for(let i =0; i< recordData.sectionsContent; i++){
                        console.log("--------------stepper3", importScripts)
                        if (recordData.sectionsContent[i].name === _filename){
                        return recordData.sectionsContent[i].imageurl = filepath
                        }
                }
                // file_paths.push(filepath);
                resize_save({ file: images.otherImages, fileName: fileName, height: 300, width:500}, 'uploads/services');
            } else{
                // console.log("--------------stepper2",recordData.sectionsContent)
                for (const file of otherImages) {
                    // const fileName = recordData.url + '-' + randomString();
                    let fileNam = file.name.split(".")[0]
                    const fileName = `${fileNam}.webp`
                    let _filename = fileName.split("_")[0]
                    for(let i = 0; i < recordData.sectionsContent.length; i++){
                        // console.log("--------------stepper3",recordData.sectionsContent[i].name, _filename)
                        if (recordData.sectionsContent[i].name === _filename){
                         recordData.sectionsContent[i].imageurl = fileName
                        }
                    }
                    resize_save({ file: file, fileName: fileNam, height: 300, width:500}, 'uploads/services');
                };
            }
            // update database
           const record = await Controller.create(recordData);
            // end of database
        }
        // end of other images

        return res.send({ state: true });
    }
    catch (err) {
        handleErr(res, err);
    }
}
export async function updateRecord(req, res) {
    let recordData = JSON.parse(req.body.product);
    recordData.sectionsContent = JSON.parse(req.body.sectionsContent);
    // console.log("+++++++++++++++++++++++",recordData.sectionsContent)
    try {
        if (req.files && req.files['otherImages']) {
            const otherImages = req.files['otherImages']
            // console.log("+++++++++++++++++++++++ step 1")
            if (typeof (otherImages.name) !== 'undefined') {
                let fileNam = otherImages.name.split(".")[0]
                const fileName = `${fileNam}.webp`
                let _filename = fileName.split("_")[0]
                // console.log("+++++++++++++++++++++++ step 2", _filename,recordData.sectionsContent.length)
                    for (let i = 0; i < recordData.sectionsContent.length; i++){
                        // console.log("+++++++++++++++++++++++", _filename)
                        if (recordData.sectionsContent[i].name === _filename){
                         recordData.sectionsContent[i].imageurl = fileName
                         recordData.sectionsContent[i].edited = false
                        }
                }
                resize_save({ file: otherImages, fileName: fileNam, height: 300, width:500}, 'uploads/services');
            }else {
                    for (const file of otherImages) {
                        let fileNam = file.name.split(".")[0]
                        const fileName = `${fileNam}.webp`
                        let _filename = fileName.split("_")[0]
                        for(let i = 0; i < recordData.sectionsContent.length; i++){
                            if (recordData.sectionsContent[i].name === _filename){
                            recordData.sectionsContent[i].imageurl = fileName
                            recordData.sectionsContent[i].edited = false
                            }
                        }
                        resize_save({ file: file, fileName: fileNam, height: 300, width:500 }, 'uploads/services');
                    };
                }
            }
            const updated_property = await Controller.update( recordData, recordData._id);
        return res.send({ state: true });
    }
    catch (err) {
        console.log(err);
        handleErr(res, err);
    }
}