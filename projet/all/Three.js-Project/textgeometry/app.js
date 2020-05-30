// Variables
let scene, camera, renderer,material, mesh, light, control;

// ! initialisation
const init = () => {

    // Config Scene
    scene = new THREE.Scene();
    // Config camera
    camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight);
    camera.position.set( 300, 0, 700 );

    // Config renderer
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Config material
    material = new THREE.MeshNormalMaterial();

    //Config geometry 
    let loader = new THREE.FontLoader();

    loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
        
	let geometry = new THREE.TextGeometry( 'three.js', {
		font: font,
		size: 170,
		height: 50,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
    } );
    // Config mesh et ajout dans la scene
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
} );

    // Config light
    light = new THREE.AmbientLight(0x675432, 56);
    scene.add(light);

    control = new THREE.OrbitControls(camera, renderer.domElement);

    }

// ! Config animation
const animate = () => {
    requestAnimationFrame(animate);
    // camera.lookAt(mesh.position);
    renderer.render(scene, camera);

}

init();
animate();