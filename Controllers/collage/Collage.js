import GenerateSchema from 'generate-schema';
import mongoose from "mongoose" ;
import { collageDetailSchema } from '../../Schema/collageSchema.js';

const postCollage = (req, res) => {
    const schema = GenerateSchema.json("Collages", req.body[0])
    console.log(schema)
    const collegeSchemaModel = mongoose.model("collages", schema.properties)

    collegeSchemaModel.insertMany(req.body)
    .then(function(response){
        console.log("data inserted")
        return res.send("data inserted")
    })
    .catch(function (error) {
        console.log(error);
    });
}

const getCollage = (req, res) => {
    collageDetailSchema
      .find((err, data) => {
        if (err) {
          console.log(err);
        } else {
          return res.send({
            status: 200,
            message: "Programme details",
            data: data,
          });
        }
      })
  };

export {postCollage, getCollage};
