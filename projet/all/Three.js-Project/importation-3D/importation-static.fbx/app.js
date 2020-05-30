// Variables
let container, scene, camera, renderer,material, geometry, mesh, light,loader;

// ! initialisation
const init = () => {

    container = document.querySelector('.scene');

    // Config Scene
    scene = new THREE.Scene();
    // Config camera
    camera = new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight, 0.1, 6000);
    camera.position.set(0,0,70);

    // Config renderer
    renderer = new THREE.WebGLRenderer({antialias : true, alpha:true});
    renderer.setSize(container.clientWidth,container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Config loader
    loader = new THREE.FBXLoader();
    loader.load('bull/source/zz bull.fbx', function(object){

        scene.add( object );
    });

    // Config light
    light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    let control = new THREE.OrbitControls(camera, renderer.domElement);
    }

// ! Config animation
const animate = () => {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth,container.clientHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();