let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Road.jpg') {
      myImage.setAttribute ('src','images/Lab.PNG');
    } else {
      myImage.setAttribute ('src','images/Road.jpg');
    }
}
