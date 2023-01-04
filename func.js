

// blink "on" state
function show()
{
	if (document.getElementById)
	document.getElementById("light").style.boxShadow  = "0.1rem 0.1rem 40px 10px #00ffff";
}

// blink "off" state
function hide()
{
	if (document.getElementById)
	document.getElementById("light").style.boxShadow = "0.1rem 0.1rem 40px 10px #181818";
}

// toggle "on" and "off" states every 450 ms to achieve a blink effect
// end after 4500 ms (less than five seconds)
for(var i=900; i < 40500; i=i+900)
{
	setTimeout("hide()",i);
	setTimeout("show()",i+40);
}
