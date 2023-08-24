console.log("Script running..")


let video = document.getElementById('video');

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: {
            width: 1280, height: 720
        }
    }).then((stream) => {
        window.stream = stream;
        video.srcObject = stream;
    }).catch((err) => console.log(err))
} else {
    console.log(false)
}
