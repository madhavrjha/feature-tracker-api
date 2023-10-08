let features = require('../model/data')
const Feature = require('../model/Feature')

const getFeaturetemplate = () => {
	return {
		project: {
			platform: '',
			task: '',
			description: '',
			profile: '',
			navigationBar: '',
			module: '',
			responsible: '',
		},
		requirement: {
			ideation: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
			mvp: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
		},
		design: {
			draft: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
			review: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
			approved: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
		},
		dev: {
			backend: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
			api: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
			webPortal: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
		},
		flutter: {
			integration: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
			apk: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
		},
		deployment: {
			testBed: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
			uat: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
			live: {
				checked: false,
				updatedAt: new Date().toISOString(),
			},
		},
		comment: '',
	}
}

const setFeaturetemplate = feature => {
	return {
		id: feature._id,
		project: {
			platform: feature.project.platform,
			task: feature.project.task,
			description: feature.project.description,
			profile: feature.project.profile,
			navigationBar: feature.project.navigationBar,
			module: feature.project.module,
			responsible: feature.project.responsible,
		},
		requirement: {
			ideation: {
				checked: feature.requirement.ideation.checked,
				updatedAt: feature.requirement.ideation.updatedAt,
			},
			mvp: {
				checked: feature.requirement.mvp.checked,
				updatedAt: feature.requirement.mvp.updatedAt,
			},
		},
		design: {
			draft: {
				checked: feature.design.draft.checked,
				updatedAt: feature.design.draft.updatedAt,
			},
			review: {
				checked: feature.design.review.checked,
				updatedAt: feature.design.review.updatedAt,
			},
			approved: {
				checked: feature.design.approved.checked,
				updatedAt: feature.design.approved.updatedAt,
			},
		},
		dev: {
			backend: {
				checked: feature.dev.backend.checked,
				updatedAt: feature.dev.backend.updatedAt,
			},
			api: {
				checked: feature.dev.api.checked,
				updatedAt: feature.dev.api.updatedAt,
			},
			webPortal: {
				checked: feature.dev.webPortal.checked,
				updatedAt: feature.dev.webPortal.updatedAt,
			},
		},
		flutter: {
			integration: {
				checked: feature.flutter.integration.checked,
				updatedAt: feature.flutter.integration.updatedAt,
			},
			apk: {
				checked: feature.flutter.apk.checked,
				updatedAt: feature.flutter.apk.updatedAt,
			},
		},
		deployment: {
			testBed: {
				checked: feature.deployment.testBed.checked,
				updatedAt: feature.deployment.testBed.updatedAt,
			},
			uat: {
				checked: feature.deployment.uat.checked,
				updatedAt: feature.deployment.uat.updatedAt,
			},
			live: {
				checked: feature.deployment.live.checked,
				updatedAt: feature.deployment.live.updatedAt,
			},
		},
		comment: feature.comment,
	}
}

const getAllFeatures = async (req, res) => {
	try {
		const features = await Feature.find()
		if (!features.length) return res.sendStatus(204)
		const safeFeatures = features.map(feature => setFeaturetemplate(feature))
		res.json(safeFeatures)
	} catch (e) {
		console.error('There are some error while getting features data from database')
		console.error(e.message)
		res.sendStatus(500)
	}
}

const addFeature = async (req, res) => {
	try {
		const newFeature = getFeaturetemplate()
		const result = await Feature.create(newFeature)
		const safeFeature = setFeaturetemplate(result)
		res.status(201).json(safeFeature)
	} catch (e) {
		console.error('There is an error while adding featire in database')
		res.sendStatus(500)
	}
}

const updateFeature = async (req, res) => {
	if (!req?.body?.id) return res.status(400).json({ message: 'feature id is required' })

	try {
		const foundFeature = await Feature.findOne({ _id: req.body.id }).exec()
		if (!foundFeature) return res.sendStatus(204)

		if (req.body?.project?.platform) foundFeature.project.platform = req.body.project.platform
		if (req.body?.project?.task) foundFeature.project.task = req.body.project.task
		if (req.body?.project?.task) foundFeature.project.task = req.body.project.task
		if (req.body?.project?.description) foundFeature.project.description = req.body.project.description
		if (req.body?.project?.description) foundFeature.project.description = req.body.project.description
		if (req.body?.project?.profile) foundFeature.project.profile = req.body.project.profile
		if (req.body?.project?.profile) foundFeature.project.profile = req.body.project.profile
		if (req.body?.project?.navigationBar) foundFeature.project.navigationBar = req.body.project.navigationBar
		if (req.body?.project?.navigationBar) foundFeature.project.navigationBar = req.body.project.navigationBar
		if (req.body?.project?.module) foundFeature.project.module = req.body.project.module
		if (req.body?.project?.module) foundFeature.project.module = req.body.project.module
		if (req.body?.project?.responsible) foundFeature.project.responsible = req.body.project.responsible
		if (req.body?.project?.responsible) foundFeature.project.responsible = req.body.project.responsible

		if (req.body?.requirement?.ideation) foundFeature.requirement.ideation = req.body.requirement.ideation
		if (req.body?.requirement?.ideation) foundFeature.requirement.ideation = req.body.requirement.ideation
		if (req.body?.requirement?.mvp) foundFeature.requirement.mvp = req.body.requirement.mvp
		if (req.body?.requirement?.mvp) foundFeature.requirement.mvp = req.body.requirement.mvp

		if (req.body?.design?.draft) foundFeature.design.draft = req.body.design.draft
		if (req.body?.design?.draft) foundFeature.design.draft = req.body.design.draft
		if (req.body?.design?.review) foundFeature.design.review = req.body.design.review
		if (req.body?.design?.review) foundFeature.design.review = req.body.design.review
		if (req.body?.design?.approved) foundFeature.design.approved = req.body.design.approved
		if (req.body?.design?.approved) foundFeature.design.approved = req.body.design.approved

		if (req.body?.dev?.backend) foundFeature.dev.backend = req.body.dev.backend
		if (req.body?.dev?.backend) foundFeature.dev.backend = req.body.dev.backend
		if (req.body?.dev?.api) foundFeature.dev.api = req.body.dev.api
		if (req.body?.dev?.api) foundFeature.dev.api = req.body.dev.api
		if (req.body?.dev?.webPortal) foundFeature.dev.webPortal = req.body.dev.webPortal
		if (req.body?.dev?.webPortal) foundFeature.dev.webPortal = req.body.dev.webPortal

		if (req.body?.flutter?.integration) foundFeature.flutter.integration = req.body.flutter.integration
		if (req.body?.flutter?.integration) foundFeature.flutter.integration = req.body.flutter.integration
		if (req.body?.flutter?.apk) foundFeature.flutter.apk = req.body.flutter.apk
		if (req.body?.flutter?.apk) foundFeature.flutter.apk = req.body.flutter.apk

		if (req.body?.deployment?.testBed) foundFeature.deployment.testBed = req.body.deployment.testBed
		if (req.body?.deployment?.testBed) foundFeature.deployment.testBed = req.body.deployment.testBed
		if (req.body?.deployment?.uat) foundFeature.deployment.uat = req.body.deployment.uat
		if (req.body?.deployment?.uat) foundFeature.deployment.uat = req.body.deployment.uat
		if (req.body?.deployment?.live) foundFeature.deployment.live = req.body.deployment.live
		if (req.body?.deployment?.live) foundFeature.deployment.live = req.body.deployment.live

		if (req.body?.comment) foundFeature.comment = req.body.comment

		const result = await foundFeature.save()
		res.sendStatus(200)
	} catch (e) {
		console.log('There are some errors while updating the features data to database')
		console.log(e.message)
	}
}

const deleteFeature = async (req, res) => {
	if (!req?.body?.id) return res.status(400).json({ message: 'feature id is required to delete' })

	try {
		const foundFeature = await Feature.findOne({ _id: req.body.id }).exec()
		if (!foundFeature) res.status(400).json({ message: 'feature with this id not found' })
		const result = await foundFeature.deleteOne()
		res.sendStatus(200)
	} catch (e) {
		cosnole.error('There was an error while deleting the feature')
		console.error(e.message)
	}
}

// Legecy Code

const _getAllFeatures = async (req, res) => {
	res.json(features)
}

const _addFeature = async (req, res) => {
	let id
	if (features.length) {
		id = Math.max(...features.map(f => parseInt(f.id))) + 1
	} else {
		id = 1
	}
	console.log(id)
	const newFeature = req.body
	newFeature.id = id
	features.push(newFeature)
	res.json({ id })
}

const _updateFeature = async (req, res) => {
	const featureIndex = features.findIndex(f => f.id === req.body.id)
	const feature = features[featureIndex]

	if (req.body.project?.platform) feature.project.platform = req.body.project.platform
	if (req.body.project?.task) feature.project.task = req.body.project.task
	if (req.body.project?.description) feature.project.description = req.body.project.description
	if (req.body.project?.profile) feature.project.profile = req.body.project.profile
	if (req.body.project?.navigationBar) feature.project.navigationBar = req.body.project.navigationBar
	if (req.body.project?.module) feature.project.module = req.body.project.module
	if (req.body.project?.responsible) feature.project.responsible = req.body.project.responsible

	if (req.body.requirement?.ideation) feature.requirement.ideation = req.body.requirement.ideation
	if (req.body.requirement?.mvp) feature.requirement.mvp = req.body.requirement.mvp

	if (req.body.design?.draft) feature.design.draft = req.body.design.draft
	if (req.body.design?.review) feature.design.review = req.body.design.review
	if (req.body.design?.approved) feature.design.approved = req.body.design.approved

	if (req.body.dev?.backend) feature.dev.backend = req.body.dev.backend
	if (req.body.dev?.api) feature.dev.api = req.body.dev.api
	if (req.body.dev?.webPortal) feature.dev.webPortal = req.body.dev.webPortal

	if (req.body.flutter?.integration) feature.flutter.integration = req.body.flutter.integration
	if (req.body.flutter?.apk) feature.flutter.apk = req.body.flutter.apk

	if (req.body.deployment?.testBed) feature.deployment.testBed = req.body.deployment.testBed
	if (req.body.deployment?.uat) feature.deployment.uat = req.body.deployment.uat
	if (req.body.deployment?.live) feature.deployment.live = req.body.deployment.live

	if (req.body.comment) feature.comment = req.body.comment

	res.sendStatus(200)
}

const _deleteFeature = async (req, res) => {
	features = features.filter(f => f.id !== req.body.id)
	res.json({ success: true })
}

module.exports = { getAllFeatures, updateFeature, addFeature, deleteFeature }
