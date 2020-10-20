const express = require('express')
const mongoose = require("mongoose")
const router = express.Router()
const schemaControl = require('../Schema/schemaStructure')
const {getCodeLabs, getCodeLab, postCodeLab, patchCodeLab, deleteCodeLab} = require('../Controller/ViewController')



router.route('/').get(getCodeLabs).post(postCodeLab)
router.route('/:id').get(getCodeLab).patch(patchCodeLab).delete(deleteCodeLab)


module.exports = router