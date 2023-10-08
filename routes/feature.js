const express = require('express')
const { getAllFeatures, updateFeature, addFeature, deleteFeature } = require('../controllers/FeatureController')

const router = express.Router()

router.route('/').get(getAllFeatures).post(addFeature).put(updateFeature).delete(deleteFeature)

module.exports = router
