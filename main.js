canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");
img_width = 300;
img_height = 100;
var img_image;
img_x = 100;
img_y = 100;
function add()
{
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;  
}
function uploadimg() 
{
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((keyPressed >=97 && keyPressed<=122)||(keyPressed >=65 && keyPressed<=90))
	{
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet key";
		console.log("You have pressed alphabet");
	}
	if(keyPressed >=48 && keyPressed<=57)
	{
		numberkey();
		document.getEleyementById("d1").innerHTML="You pressed Number key";
		console.log("You have pressed Numbers");
	}
	if(keyPressed >= 17 && keyPressed <= 18 && keyPressed == 27)
	{
		specialkey();
		document.getElementById(d1).innerHTML="You pressed Special key"
		console.log("You pressed Special key")
	}
	if(keyPressed>=37 && keyPressed<=40)
	{
		specialkey();
		document.getElementById("d1"),innerHTML="You have pressed arrow key";
		console.log("You pressed Special Key")
	}
	else
	{
		otherkey();
		document.getElementById("d1").innerHTML="You have pressed other key";
		console.log("You pressed other key");
	}	
}
function aplhabetkey()
{
	img_image = "Alpkey.png";
	add(); 
}
function numberkey()
{
	img_image = "numkey.png";
	add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}

//10x8 = 80