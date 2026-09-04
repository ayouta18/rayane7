const video=document.getElementById('webcam');
navigator.mediaDevices.getUserMedia({video:{facingMode: 'environment'}})
.then((stream)=>{
    video.srcObject=stream;
})
.catch((err)=>{
    console.error('Error accessing webcam: ', err);
});
function addModel(modelPath){
    const container=document.getElementById('ar-container');
    const newModel=document.createElement('model-viewer');
    newModel.setAttribute('src', modelPath);
    newModel.setAttribute('alt', '3D Model');
    newModel.setAttribute('camera-controls', '');
    newModel.setAttribute('auto-rotate', '');
    newModel.setAttribute('shadow-intensity', '1');

    container.appendChild(newModel);
}
