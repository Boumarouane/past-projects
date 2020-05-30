// Variables
let scene, camera, renderer,material, geometry, mesh, light;

// ! initialisation
const init = () => {

    // Config Scene
    scene = new THREE.Scene();
    // Config camera
    camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight, 1, 2000);
    camera.position.z = 65;

    // Config renderer
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Config material
    material = new THREE.MeshNormalMaterial();

    //Config geometry 
    geometry = new THREE.Geometry();

    // Config mesh et ajout dans la scene
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Config light
    light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    }

// ! Config animation
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

}

init();
animate();