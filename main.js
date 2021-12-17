canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_image_array=["nasa___1.jpg","nasa__2.jpg","nasa_3.jpg","_nasa4.jpg"];
random_no=Math.floor(Math.random()*4);

rover_width = 100;
rover_height = 90;

background_image = nasa_image_array[random_no];
rover_image = "rover.png";

rover_x = 10 ;
rover_y = 10 ;



function add(){
    console.log("insideaddfunction");
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;  
}

function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    console.log("insideuploadbackground");
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    console.log("insideuploadrover");
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='38'){
        up();
        console.log("up");
    }

}

function up(){
    if (rover_y >=0){
        rover_y = rover_y-10;
        console.log("when up pressed x= "+rover_x+"y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if (rover_y <=500){
        rover_y = rover_y+10;
        console.log("when down pressed x= "+rover_x+"y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if (rover_x >=0){
        rover_x = rover_x-10;
        console.log("when left pressed x= "+rover_x+"y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (rover_x <=700){
        rover_x = rover_x+10;
        console.log("when right pressed x= "+rover_x+"y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
