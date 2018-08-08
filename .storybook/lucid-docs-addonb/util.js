export const stripIndent = text => {
	if (!text) {
		return '';
	}

	const sigLines = text.split(/\n/).filter(line => !/^\s*$/.test(line));
	const leadingWhitespaces = sigLines.map(line => /^(\s*)/g.exec(line)[1]);
	const minimumLeadingWhitespace = leadingWhitespaces.reduce(
		(min, line) => (line.length < min.length ? line : min),
		leadingWhitespaces[0]
	);
	return text
		.split(/\n/)
		.map(line => line.replace(minimumLeadingWhitespace, ''))
		.join('\n');
};
