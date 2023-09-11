export const parseValue = (value) => {
	if (value.indexOf('var:') === 0) {
		const varValue = value.split(':')[1].split("|").join('--');
		// preset--spacing--40
		return `var(--wp--${varValue})`;
	}
	return value;
}

export const parseRadius = (value, onlyBottom) => {
	if (onlyBottom === true) {
		if (typeof value === 'object') {
			return `0 0 ${value.bottomRight} ${value.bottomLeft}`;
		} else {
			return `0 0 ${value} ${value}`;
		}
	} else {
		if (typeof value === 'object') {
			return `${value.topLeft} ${value.topRight} ${value.bottomRight} ${value.bottomLeft}`;
		} else {
			return value;
		}
	}
}
