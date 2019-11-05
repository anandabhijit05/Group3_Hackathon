const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const ctrlUser = require('../controllers/user.controller');
const ctrlUpload = require('../controllers/upload.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
let upload = multer({ storage: storage });

router.post('/upload', upload.single('saleshistory'), ctrlUpload.upload);

module.exports = router;