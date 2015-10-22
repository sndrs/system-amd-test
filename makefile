default:
	@./node_modules/.bin/jspm bundle app/core.js --skip-source-maps
	# @./node_modules/.bin/r.js -o name=app/compare out=compare_require.js optimize=none
	# @jspm bundle app/compare compare_jspm.js --skip-source-maps