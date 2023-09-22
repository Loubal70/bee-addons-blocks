export const getMimeType = (url) => {
	const extension = url.split('.').pop().toLowerCase();
	const mimeTypes = {
		jpg: 'image/jpeg',
		jpeg: 'image/jpeg',
		png: 'image/png',
		gif: 'image/gif',
		webp: 'image/webp',
		mp4: 'video/mp4',
		webm: 'video/webm',
	};
	return mimeTypes[extension] || '';
}
