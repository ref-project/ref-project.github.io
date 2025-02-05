function changeCategory(value) {
	if (value == 'image') {
		document.querySelector('#menu').innerHTML = `
<input type="text" id="i1" placeholder="Image Title" required>
<input type="url" id="i2" placeholder="Image URL" required>
<label><input type="checkbox" name="none">Image Name</label>
		`
	} else if (value == 'video') {
		document.querySelector('#menu').innerHTML = `
<input type="url" id="i1" placeholder="Video URL" required>
<label><input type="checkbox" onchange="thumbnail(this.checked)" name="none">Video Thumbnail</label>
<input type="url" id="i2" placeholder="Video Thumbnail URL" disabled required>
		`
	} else if (value == 'other') {
		document.querySelector('#menu').innerHTML = `
<input type="text" id="i1" placeholder="File Title" required>
<input type="url" id="i2" placeholder="File URL" required>
<label><input type="checkbox" name="none">File Name</label>
		`
	}
}
function thumbnail(c) {if (c) {document.querySelector('#i2').disabled = false;} else {document.querySelector('#i2').disabled = true;}}
function generate() {
	event.preventDefault();
	if (document.querySelector('input[value="image"]').checked) {
		if (!document.querySelector('#i1').checkValidity() || !document.querySelector('#i2').checkValidity()) {alert('Please enter a vaild URL or Title'); return;}
		if (document.querySelector('input[type="checkbox"]').checked) {
			const url = new URL(document.querySelector('#i2').value);
			const fileName = url.pathname.substring(url.pathname.lastIndexOf("/") + 1);
			document.querySelector('textarea').innerHTML = `<!DOCTYPE html>
<html>
	<head>
		<meta property="og:site_name" content="` + fileName + `">
		<meta property="og:title" content="` + document.querySelector('#i1').value + `">
		<meta name="twitter:card" content="summary_large_image">
		<meta property="og:image" content="` + document.querySelector('#i2').value +`">
		<meta http-equiv="refresh" content="0; url=` + document.querySelector('#i2').value + `">
	</head>
</html>`
		} else {
			document.querySelector('textarea').innerHTML = `<!DOCTYPE html>
<html>
	<head>
		<meta property="og:title" content="` + document.querySelector('#i1').value + `">
		<meta name="twitter:card" content="summary_large_image">
		<meta property="og:image" content="` + document.querySelector('#i2').value +`">
		<meta http-equiv="refresh" content="0; url=` + document.querySelector('#i2').value + `">
	</head>
</html>`
		}
	} else if (document.querySelector('input[value="video"]').checked) {
		if (!document.querySelector('#i1').checkValidity()) {alert('Please enter a vaild URL'); return;}
		if (!document.querySelector('#i2').disabled) {
			if (!document.querySelector('#i2').checkValidity()) {alert('Please enter a vaild URL'); return;}
			document.querySelector('textarea').innerHTML = `<!DOCTYPE html>
<html>
	<head>
		<meta property="og:image" content="` + document.querySelector('#i2').value + `">
		<meta property="og:type" content="video.other">
		<meta property="og:video:url" content="`+ document.querySelector('#i1').value + `">
		<meta http-equiv="refresh" content="0; url=` + document.querySelector('#i1').value + `">
	</head>
</html>`
		} else {
			document.querySelector('textarea').innerHTML = `<!DOCTYPE html>
<html>
	<head>
		<meta property="og:type" content="video.other">
		<meta property="og:video:url" content="`+ document.querySelector('#i1').value + `">
		<meta http-equiv="refresh" content="0; url=` + document.querySelector('#i1').value + `">
	</head>
</html>`
		}
	} else if (document.querySelector('input[value="other"]').checked) {
		if (!document.querySelector('#i1').checkValidity() || !document.querySelector('#i2').checkValidity()) {alert('Please enter a vaild URL or Title'); return;}
		if (document.querySelector('input[type="checkbox"]').checked) {
			const url = new URL(document.querySelector('#i2').value);
			const fileName = url.pathname.substring(url.pathname.lastIndexOf("/") + 1);
			document.querySelector('textarea').innerHTML = `<!DOCTYPE html>
<html>
	<head>
		<meta property="og:site_name" content="` + fileName + `">
		<meta property="og:title" content="` + document.querySelector('#i1').value + ` File">
		<meta http-equiv="refresh" content="0; url=` + document.querySelector('#i2').value + `">
	</head>
</html>`
		} else {
			document.querySelector('textarea').innerHTML = `<!DOCTYPE html>
<html>
	<head>
		<meta property="og:title" content="` + document.querySelector('#i1').value + ` File">
		<meta http-equiv="refresh" content="0; url=` + document.querySelector('#i2').value + `">
	</head>
</html>`
		}
	}
}
