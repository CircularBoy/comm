export const formParser = () => (req, res, next) => {
	// console.log('middleware headers', req.headers)
	if(req.headers['content-type'].includes('multipart/form-data')) {
		console.log('middleware for form-data', next.toString())
		let data = ''
		req.on('data', (chunk) => {
			console.log('chunk', chunk)
			data += chunk
		})
		req.on('end', () => {
			console.log('res', data)
		})
	}
	next()
}


const str = '----------------------------200796495129652452866713\n' +
	'Content-Disposition: form-data; name="month"\n' +
	'\n' +
	'january\n' +
	'----------------------------200796495129652452866713\n' +
	'Content-Disposition: form-data; name="lastStat"\n' +
	'\n' +
	'41241\n' +
	'----------------------------200796495129652452866713\n' +
	'Content-Disposition: form-data; name="addressName"\n' +
	'\n' +
	'Teatralna\n' +
	'----------------------------200796495129652452866713--'

function fieldNames(str) {
	const arr = []

	let iterator = 0
	for(var finished = true, index = 0; finished;) {
		iterator++
		const startIndex = str.indexOf('=\"', index)

		if(startIndex !== -1) {
			const start = startIndex + 2
			const finish = str.indexOf('\"', start)
			const fieldName = str.substring(start, finish)
			index = finish
			arr.push(fieldName)
			const startIdexOfValue = str.indexOf(/\w/gm, start)
			console.log(startIdexOfValue)
		} else {
			finished = false
		}
	}
	console.log('log', arr, iterator)
}
// fieldNames(str)
// console.log(/="\w+/gm.exec(str))
// console.log(str.match(/="\w+/gm))
// console.log(str.match(/\n*\w+\n-/gm))
