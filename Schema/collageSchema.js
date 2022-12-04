import mongoose from "mongoose";

const CollageSchemaModel = new mongoose.Schema({
        SNo: { type: 'number' },
        c_id: { type: 'string' },
        State: { type: 'string' },
        college_District: { type: 'string' },
        Yrofestab: { type: 'number' },
        College_Name: { type: 'string' },
        Specialisation: { type: 'string' },
        Type: { type: 'string' },
        url: { type: 'string' },
        Phone: { type: 'string' },
        Email: { type: 'string' },
        location_coordinates: { type: 'string' },
        Image_Gallery: { type: 'string' },
        Logo: { type: 'string' },
        About: { type: 'string' },
        Updates: { type: 'string' },
        Programmes_Offered: { type: 'string' },
        Admissions: { type: 'string' },
        Placement: { type: 'string' },
        admissio_Test: { type: 'string' },
        Perceptions: { type: 'string' },
        NAAC_Grade_Validity: { type: 'string' },
        Ranking: { type: 'string' },
        fB: { type: 'string' },
        tR: { type: 'string' },
        yT: { type: 'string' },
        iG: { type: 'string' },
        LinkedIn: { type: 'string' }
      }
)

export const collageDetailSchema = new mongoose.model(
    "collages", CollageSchemaModel
)


