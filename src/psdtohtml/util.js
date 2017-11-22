module.exports = function util() {
	this.mappableFromObject = function(object) {
		const objectKeys = Object.keys(object);

		return objectKeys.map(function handleObjectKey(key) {
			return {}
		})
	}
} 