// Variables
let container, scene, camera, renderer,material, geometry, mesh, light,loader,loader1,  house,texture;
let clock = new THREE.Clock();

// ! initialisation
const init = () => {

    container = document.querySelector('.scene');

    // Config Scene
    scene = new THREE.Scene();
    // Config camera
    camera = new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight, 0.1, 2000);
    camera.position.set(0,0,300);

    // Config renderer
    renderer = new THREE.WebGLRenderer({antialias : true, alpha:true});
    renderer.setSize(container.clientWidth,container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Config loader
    loader = new THREE.FBXLoader();
    loader.load('leopard/source/Leopard .fbx', function(object){
        house = new THREE.AnimationMixer( object );

        let action = house.clipAction( object.animations[ 0 ] );
        action.play();
        object.rotation.y = -Math.PI/2;
        scene.add( object );
    });

    // Config light
    light = new THREE.AmbientLight(0xffffff, 5);
    scene.add(light);

    let control = new THREE.OrbitControls(camera, renderer.domElement);
    }

// ! Config animation
const animate = () => {

    let delta = clock.getDelta()
    if ( house ) house.update( delta );

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