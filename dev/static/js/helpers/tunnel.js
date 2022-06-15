const query = 'dev';
const devCSS = function()  {
	var url = window.location.href;
	if(url.indexOf('?' + query + '=') != -1)
		return true;
	else if(url.indexOf('&' + query + '=') != -1)
		return true;
	return false
}
let localtunnel =  new URLSearchParams(window.location.search);
localtunnel = localtunnel.get(query);

const css = (devCSS() == true ? 'https://'+localtunnel +'.loca.lt/static/app.min.css' : '/assets/custom/files/css/app_min.css');

const cssLoad = function(css)  {
  var head = document.getElementsByTagName('HEAD')[0];  
  var link = document.createElement('link'); 
  link.rel = 'stylesheet';  
  link.type = 'text/css'; 
  link.href = css;  
  head.appendChild(link);  
}

cssLoad(css);
