import PropertyController from '../controller.js';
import { handleErr, resize_save } from '../../helpers/index';

const Controller = PropertyController('categories');

const { SendEmail } = require('../../helpers/sendmail.js');

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
    let data = req.body;
 
    try {
        const content = `
        From: ${data.name} 
        
        Phone Number: ${data.phone}

        Email: ${data.email || 'Not Filled'} 
        
        Message: ${data.message}

        Date ${new Date()}`;

    const subject = `Website Enquiry From: ${data.name} - (${data.phone})`;
    const title = subject;

    SendEmail({ content: content, subject: subject, title: title })
    return res.send({ state: true, ResultDesc: 1200 });
    }
    catch (err) {
        handleErr(res, err);
    }
}