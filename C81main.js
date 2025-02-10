mouse_x = 0
mouse_y = 0

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color= "green";
// The codes for creating the first circle on the canvas
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
//ctx.arc(x,y,radius,start angle,end angle)
ctx.arc(600,300,90,0,2*Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e)
{


    color = document.getElementById("color_input").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x +" ,Y = " + mouse_y);
 circle(mouse_x, mouse_y);

}

function circle(mouse_x, mouse_y)
{

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0 , 2* Math.PI);
ctx.stroke();


}

function clearArea()
{

//ctx.clearRect(x,y,width,height);
ctx.clearRect(0, 0, canvas.width,canvas.height);
    
}