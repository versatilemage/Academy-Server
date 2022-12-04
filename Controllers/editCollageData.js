import { collageDetailSchema } from "../Schema/collageSchema.js";

export const editCollage = (req, res) => {
    let {
        SNo,
        c_id,
        State,
        college_District,
        Yrofestab,
        College_Name,
        Specialisation,
        Type,
        url,
        Phone,
        Email,
        location_coordinates,
        Image_Gallery,
        Logo,
        About,
        Updates,
        Programmes_Offered,
        Admissions,
        Placement,
        admissio_Test,
        Perceptions,
        NAAC_Grade_Validity,
        Ranking,
        fB,
        tR,
        yT,
        iG,
        LinkedIn
    } = req.body.values;

    collageDetailSchema.updateOne(
        {SNo: SNo},
        {
            $set: {
                c_id,
                State,
                college_District,
                Yrofestab,
                College_Name,
                Specialisation,
                Type,
                url,
                Phone,
                Email,
                location_coordinates,
                Image_Gallery,
                Logo,
                About,
                Updates,
                Programmes_Offered,
                Admissions,
                Placement,
                admissio_Test,
                Perceptions,
                NAAC_Grade_Validity,
                Ranking,
                fB,
                tR,
                yT,
                iG,
                LinkedIn
            }
        },
        { upsert: true },
        (err, data) => {
        if (err) {
        console.log(err);
        } else {
        return res.send({
          status: 200,
          message: "updated events",
          data: data,
        });
      }
    }
    )
}
