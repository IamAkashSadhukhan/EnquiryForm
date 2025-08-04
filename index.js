let express = require('express');
let cors = require('cors');
let app = express();
app.use(cors());
app.use(express.json());
let mongoose = require('mongoose');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');

//Routes
app.use('/api/website/enquiry', enquiryRouter);


require('dotenv').config();
// Connect to MongoDB
mongoose.connect(process.env.dbUrl).then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});
