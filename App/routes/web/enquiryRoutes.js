let express = require('express');
const { enquiryInsert, enquiryList, enquiryDelete, enquirySingleRow, upddateRow } = require('../../controllers/web/enquiryController');
let enquiryRouter = express.Router();
enquiryRouter.post("/insert", enquiryInsert);
enquiryRouter.get("/view", enquiryList);
enquiryRouter.delete("/delete/:id", enquiryDelete);
enquiryRouter.get("/single/:id", enquirySingleRow);
enquiryRouter.put("/update/:id", upddateRow);

module.exports = enquiryRouter;