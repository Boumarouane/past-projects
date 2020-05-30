

// Variables
let scene, camera, renderer, material, geometry, mesh, lightTop, lightBotttom, control;

// ! initialisation
const init = () => {

    let canvas = document.querySelector('#c');

    // Configuration renderer
    renderer = new THREE.WebGLRenderer({canvas, antialias : true});
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvas = renderer.domElement;

    // Configuration Scene
    scene = new THREE.Scene();
    
    // Configuration camera
    let fov = 60;
    let aspect = 2;
    let near = 0.1;
    let far = 2000;
    camera = new THREE.PerspectiveCamera(fov,aspect, near, far);
    camera.position.set(0, 1, 20);
    camera.lookAt(0, 0, 0);

    // Configuration material
    material = new THREE.MeshToonMaterial({color:0x675432});

    //  Configuration de la lumière
    lightTop = new THREE.AmbientLight(0xFFFFFF, 1);
    lightTop.position.set(0, 10, 0);
    scene.add(lightTop);

    lightBottom = new THREE.DirectionalLight(0xFFFFFF, 1);
    lightBottom.position.set(0, -10, 0);
    scene.add(lightBottom);

    //Configuration geometry 
    geometry = new THREE.TorusGeometry(3, 6, 15, 25);
    
    // Configuration mesh et ajout dans la scene
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Configuration du controleur
    control = new THREE.OrbitControls(camera, renderer.domElement);
}


// ! Animation
const animate = () => {

    
    // camera.rotation.y += 0.2;
    
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
animate();