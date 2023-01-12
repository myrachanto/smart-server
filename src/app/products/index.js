import PropertyController from "../controller.js";
import { handleErr, resize_save } from "../../helpers/index";
import { randomString } from "../../helpers/common";

const Controller = PropertyController("products");

export async function findAll(req, res) {
  try {
    const records = await Controller.find({});
    // console.log(records, "products records");
    return res.send({ records, state: true });
  } catch (err) {
    handleErr(res, err);
  }
}

export async function findByUrl(req, res) {
  try {
    const record = await Controller.findOne({ url: req.params.id });
    // console.log( "products records",record);
    return res.send({ record, state: true });
  } catch (err) {
    handleErr(res, err);
  }
}

export async function deleteRecord(req, res) {
  try {
    const records = await Controller.remove(req.params.id);
    return res.send({ records, state: true });
  } catch (err) {
    handleErr(res, err);
  }
}

export async function createRecord(req, res) {
  let recordData = JSON.parse(req.body.product);
  recordData.description = req.body.description;
  const images = req.files;
  recordData.url = recordData.title.toLowerCase().replace(/[^\w\s]/gi, "").trim().split(" ").join("-");
  // console.log("-------------------------", recordData)
  try {
    recordData.coverImage = ''
    if (images && images.coverImage) {
      //  measurements 680 X 680
  // console.log("------------------------- step1")
      const fileName = recordData.url + "-" + randomString();
      resize_save(
        {
          file: images.coverImage,
          fileName: fileName,
          width: 800,
          height: 500,
        },
        "uploads/products"
      );
      recordData.coverImage = `${fileName}.webp`
    }
    // console.log("------------------------- step1 sfsgd")
    const record = await Controller.create(recordData);
    // save cover image
    
    // end

    // other images
  console.log("------------------------- step3")
    if (req.files && req.files["otherImages"]) {
      const otherImages = req.files.otherImages;
      const file_paths = [];
      if (typeof otherImages.name !== "undefined") {
        const fileName = recordData.url + "-" + randomString();
        const filepath = `${fileName}.webp`;
        file_paths.push(filepath);
        resize_save(
          {
            file: images.otherImages,
            fileName: fileName,
            width: 800,
            height: 500,
          },
          "uploads/products"
        );

  console.log("------------------------- step4")
      } else {
        for (const file of otherImages) {
          const fileName = recordData.url + "-" + randomString();
          const filepath = `${fileName}.webp`;
          file_paths.push(filepath);
          resize_save(
            { file: file, fileName: fileName, width: null, height: null },
            "uploads/products"
          );
        }
      }
      // update database
      const updated_property = await Controller.update(
        { otherImages: file_paths },
        record._id
      );
      // end of database
    }
    // end of other images

    return res.send({ state: true });
  } catch (err) {
    handleErr(res, err);
  }

}

export async function updateRecord(req, res) {
  let recordData = JSON.parse(req.body.product);
  recordData.description = req.body.description;
  recordData.content = req.body.content;
  let imageUrl = recordData.url;
  delete recordData.url;
  const images = req.files;
  try {
    const record = await Controller.update(recordData, req.params.id);
    // save cover image
    if (images && images.coverImage) {
      //  measurements 680 X 680
      const fileName = imageUrl + "-" + randomString();
      resize_save(
        {
          file: images.coverImage,
          fileName: fileName,
          width: 800,
          height: 500,
        },
        "uploads/products"
      );
      const updated = await Controller.update(
        { coverImage: `${fileName}.webp` },
        record._id
      );
    }
    // end

    // other images
    if (req.files && req.files["otherImages"]) {
      const otherImages = req.files.otherImages;
      const file_paths = [];
      if (typeof otherImages.name !== "undefined") {
        const fileName = imageUrl + "-" + randomString();
        const filepath = `${fileName}.webp`;
        file_paths.push(filepath);
        resize_save(
          {
            file: images.otherImages,
            fileName: fileName,
            width: 800,
            height: 500,
          },
          "uploads/products"
        );
      } else {
        for (const file of otherImages) {
          const fileName = imageUrl + "-" + randomString();
          const filepath = `${fileName}.webp`;
          file_paths.push(filepath);
          resize_save(
            { file: file, fileName: fileName, width: 800, height: 300 },
            "uploads/products"
          );
        }
      }
      // update database
      const updated_property = await Controller.update(
        { otherImages: file_paths },
        record._id
      );
      // end of database
    }
    // end of other images

    return res.send({ state: true });
  } catch (err) {
    handleErr(res, err);
  }
}