const { enquiryModel } = require("../../models/enquiry.model");



const enquiryInsert = (req, res) => {
const { sName, sEmail, sPhone, sMessage } = req.body;

  const enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  });

  enquiry
    .save()
    .then(() => {
      res.send({
        status: 1,
        message: "Enquiry saved successfully",
      });
    })
    .catch((err) => {
      console.error("Error saving enquiry:", err);
      res.status(500).send({
        status: 0,
        message: "Failed to save enquiry",
      });
    });
};

const enquiryList = async(req, res) => {
  let enquiry = await enquiryModel.find();
  res.send({
    status: 1,
    enquiryList: enquiry
  });
}
const enquiryDelete = async (req,res)=>{
  const id = req.params.id;
  let delQuery = await enquiryModel.deleteOne({_id:id});
  res.send({
    status: 1,
    delQuery
  })
}
const enquirySingleRow = async (req, res) => {
  const id = req.params.id;
  let enquiry = await enquiryModel.findById(id);
  res.send({
    status: 1,
    enquiry
  });
}
const upddateRow = async (req, res) => {
  let enquiryId = req.params.id;
  const { sName, sEmail, sPhone, sMessage } = req.body;
  let enquiry = await enquiryModel.updateOne({ _id: enquiryId }, {
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  });
  res.send({
    status: 1,
    enquiry
  });
}
module.exports = { enquiryInsert, enquiryList ,enquiryDelete, enquirySingleRow, upddateRow };
