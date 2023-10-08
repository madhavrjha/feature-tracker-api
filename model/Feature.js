const mongoose = require('mongoose')

const featureSchema = new mongoose.Schema({
	project: {
		platform: String,
		task: String,
		description: String,
		profile: String,
		navigationBar: String,
		module: String,
		responsible: String,
	},
	requirement: {
		ideation: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
		mvp: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
	},
	design: {
		draft: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
		review: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
		approved: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
	},
	dev: {
		backend: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
		api: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
		webPortal: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
	},
	flutter: {
		integration: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
		apk: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
	},
	deployment: {
		testBed: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
		uat: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
		live: {
			checked: Boolean,
			updatedAt: { type: Date, default: Date.now },
		},
	},
	comment: String,
})

module.exports = mongoose.model('Feature', featureSchema)
