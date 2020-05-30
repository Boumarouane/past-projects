// Variables
let container, scene, camera, renderer, material, geometry, mesh, light, loader,  house;

// ! initialisation
const init = () => {

    container = document.querySelector('.scene');


    // Config Scene
    scene = new THREE.Scene();

    // Config camera
    camera = new THREE.PerspectiveCamera(75,container.clientWidth/container.clientHeight, 0.1, 5000);
    camera.position.set(0,0,10);

    // Config renderer
    renderer = new THREE.WebGLRenderer({antialias : true, alpha: true});
    renderer.setSize(container.clientWidth,container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Config loader
    loader = new THREE.GLTFLoader();
    loader.load('pika_girl/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        // house.position.y = 5000;
    });

    // Config light
    light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    
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