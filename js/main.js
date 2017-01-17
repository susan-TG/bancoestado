
function getBase64Image(img) {

    var canvas = document.createElement("canvas");

    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");

    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/jpeg");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

}
var img = new Image();

img.onload = function(){
    var dataURI = getBase64Image(img);
    return dataURI;

}

img.src = "";
var doc = new jsPDF();
doc.addImage(img.onload(), 'JPEG', 15, 40, 180, 100);
doc.save('Test.pdf');

