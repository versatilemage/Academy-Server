import { collageDetailSchema } from '../../Schema/collageSchema.js';

const getSelectedCollege = (req, res) => {
    const c_id = req.query.c_id
    collageDetailSchema.findOne({c_id: c_id},
        (err, data) => {
            if(err) {
                res.send(err)
            }else {
                if(!data){
                    return res.send("the params is not present")
                }
                return res.send({
                    status: 200,
                    message: "data is collected",
                    data: data
                })
            }
        })
}

export default getSelectedCollege;
