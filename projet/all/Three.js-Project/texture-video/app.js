var renderer;
var scene;
var camera;
var orbit;


var control;
var videoTexture;

function init() {

    var video = document.getElementById('video');

    videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;
    videoTexture.generateMipmaps = false;

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);


    // create a render, sets the background color and the size
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xcccccc, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // create a cube and add to scene
    var cubeGeometry = new THREE.BoxGeometry(1, 9, 20);
    var cubeMaterial = new THREE.MeshBasicMaterial({map: videoTexture});

    // var materials = [];
    // materials.push(cubeMaterial);
    // for (var i = 1; i < 6; i++) {
    //     materials.push(new THREE.MeshLambertMaterial({color: 0x33aa33}));
    // }

    orbit = new THREE.OrbitControls(camera, renderer.domElement);

    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    var dirLightLeft = new THREE.DirectionalLight();
    dirLightLeft.position.set(15, 20, 20);
    scene.add(dirLightLeft);

    var dirLightRight = new THREE.DirectionalLight();
    dirLightRight.position.set(-15, 20, 20);
    scene.add(dirLightRight);

    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 12;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.body.appendChild(renderer.domElement);

    render();
}


function render() {
    renderer.render(scene, camera);

    videoTexture.needsUpdate = true;

    requestAnimationFrame(render);
}

// calls the init function when the window is done loading.
window.onload = init;
