const express = require('express');
const { forgotPass, resetPassword } = require('../controller/account.controller');
const accountRouter = express.Router()


accountRouter.post( "/forgotpass", forgotPass);

accountRouter.put('/reset', resetPassword);


module.exports = accountRouter;