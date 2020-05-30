let clock = new THREE.Clock();
let house, camera, canvas, renderer,scene;

let init = () => {
    canvas = document.querySelector('#import');
    renderer = new THREE.WebGLRenderer({canvas, alpha:true});
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    canvas = renderer.domElement;

    // on crée une scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(90, 2, 0.1, 10000);
    camera.position.set(0, 1, 10);
    camera.lookAt(0,0,0);

    // ajout de la lumière
    const light = new THREE.DirectionalLight(0xFFFFFF, 4);
    light.position.set(0, 0, 40);
    scene.add(light);

    //      ajout de l'import 3D
    loader = new THREE.GLTFLoader();
    loader.load('robot_playground/scene.gltf', function(object){
        house = new THREE.AnimationMixer( object.scene );
    
        let action = house.clipAction( object.animations[ 0 ] );
        action.play();
        object.scene.position.set(0,-10,-30)
        scene.add( object.scene );
    });
}

    let animate = () => {

        let delta = clock.getDelta()
        if ( house ) house.update( delta );

        renderer.render(scene, camera);
        
        requestAnimationFrame(animate);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth,window.innerHeight);
    }
    
    window.addEventListener("resize", onWindowResize, false);

    init();
    animate();