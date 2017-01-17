


function convertImageToCanvas() {
  var canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext("2d").drawImage(image, 0, 0);
 
  return canvas;
}
convertImageToCanvas();


download.addEventListener("click", function() {
  // only jpeg is supported by jsPDF
  var imgData = canvas.toDataURL("image/jpg", 1.0);
  var pdf = new jsPDF();

  pdf.addImage(imgData, 'JPEG', 0, 0);
  var download = document.getElementById('a');

  pdf.save("download.pdf");
}, false);


//function getBase64Image(img) {
//
//    var canvas = document.createElement("canvas");
//
//    canvas.width = img.width;
//    canvas.height = img.height;
//    var ctx = canvas.getContext("2d");
//
//    ctx.drawImage(img, 0, 0);
//
//    var dataURL = canvas.toDataURL("image/jpeg");
//
//    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
//
//}
//var img = new Image();
//
//img.onload = function(){
//    var dataURI = getBase64Image(img);
//    return dataURI;
//
//}
//
//img.src = "";
//var doc = new jsPDF();
//doc.addImage(img.onload(), 'JPEG', 15, 40, 180, 100);
//doc.save('Test.pdf');
//
