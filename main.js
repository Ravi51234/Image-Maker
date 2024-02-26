var canvas = new fabric.Canvas('myCanvas');

var imagee_x = 10;
var imagee_y = 10;

var imagee = "";
function upload(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        imagee = Img;
    
        imagee.scaleToWidth(150);
        imagee.scaleToHeight(150);
        imagee.set({
            top:imagee_y,
            left:imagee_x
        });
        canvas.add(imagee);
    });
}