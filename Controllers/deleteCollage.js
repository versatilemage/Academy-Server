import { collageDetailSchema } from "../Schema/collageSchema.js";

export const DeleteCollage = (req, res) => {
    let {SNo} = req.params
    SNo = parseInt(SNo, 10)
    console.log(SNo)
    collageDetailSchema.deleteOne({
        SNo: SNo
    }, (err, data) => {
        return res.send({
            status: 200,
            message: "Data deleted",
            data: data
        })
    })
}
