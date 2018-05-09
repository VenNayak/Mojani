const express = require('express');
const router = express.Router();
const multer = require('multer');
// set the directory for the uploads to the uploaded to
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
//file upload function
router.post("/fileUpload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});


module.exports = router;