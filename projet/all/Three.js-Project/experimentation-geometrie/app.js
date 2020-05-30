// Variables
let scene, camera, renderer, cube, sphere, donuts, material, material1, material2, meshCube, meshSphere, meshDonuts, light, light1, sphereLight, objects = [], textGeometry ;

// ! initialisation
const init = () => {

    // Config Scene
    scene = new THREE.Scene();
    // Config camera
    camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight);
    camera.position.z = 35;

    // Config renderer
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Config material

    material = new THREE.MeshPhysicalMaterial({
        color: 0x41484c,
        emissive: 0x1e1a1a,
        roughness: 0.6,
        metalness: 2
    });
    material1 = new THREE.MeshPhysicalMaterial({color: 0x444ee0});
    material2 = new THREE.MeshToonMaterial({color: 0x675437});

    //Config geometry 
    cube = new THREE.BoxGeometry(8,8,8);
    sphere = new THREE.SphereGeometry(5, 32, 32);
    donuts= new THREE.TorusGeometry(6, 3.7, 13, 60);

    // Config mesh et ajout dans la scene
    meshCube = new THREE.Mesh(cube, material);
    meshCube.position.set(25, 0, 0);
    scene.add(meshCube);

    // meshSphere = new THREE.Mesh(sphere, material1);
    // scene.add(meshSphere);

    meshDonuts = new THREE.Mesh(donuts, material2);
    meshDonuts.position.set(-25,0,0);
    scene.add(meshDonuts);

    //  Texture photo sur la sphere
    new THREE.TextureLoader().load( 'link7.jpeg', function ( texture ) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        //texture.matrixAutoUpdate = false; // default true; set to false to update texture.matrix manually

        let materialTexture = new THREE.MeshBasicMaterial( { map: texture } );

        meshSphere = new THREE.Mesh(sphere, materialTexture);
        scene.add(meshSphere);

    });

    // Config light
    sphereLight = new THREE.SphereGeometry(0.5, 16, 8);

    light = new THREE.PointLight(0x6789905, 4, 50);
    light.position.set(0, 20, 0);
    light.add(new THREE.Mesh(sphereLight, new THREE.MeshStandardMaterial({color:0x212121})));
    scene.add(light);

    light1 = new THREE.PointLight(0x559087, 7, 50);
    light1.position.set(10, 0, 0);
    light1.add(new THREE.Mesh(sphereLight, new THREE.MeshPhysicalMaterial({color:0xFFF654})));
    scene.add(light1);

    // light5 = new THREE.AmbientLight(0xffffff, 5);
    // scene.add(light5);

    // light = new THREE.HemisphereLight(0x67ff32, 0x540067, 2)
    // light.position.set(0,10,0);
    // scene.add(light);

    // light = new THREE.SpotLight(0x6789905, 2);
    // light.position.set(10,30,0);
    // scene.add(light);

    // let light4 = new THREE.DirectionalLight(0xffffff, 5);
    // light4.position.set(-10,5,0).normalize();
    // light4.target = meshDonuts;
    // scene.add(light4);

    // config dragControls
    // objects.push(meshCube,meshDonuts,meshSphere,light);
    // let controls = new THREE.DragControls( objects, camera, renderer.domElement );
    //     controls.addEventListener( 'dragstart', function ( event ) {
    //         event.object.material.emissive.set( 0xaaaaaa );
    //     } );

    //     controls.addEventListener( 'dragend', function ( event ) {
    //         event.object.material.emissive.set( 0x000000 );
    //     } );

    // config orbitControl
    let orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    }

// ! Config animation
const animate = () => {
    requestAnimationFrame(animate);
    let time = Date.now() * 0.0005;
    console.log(time);
    
    meshDonuts.rotation.y += 0.002;
    meshCube.rotation.z += 0.002;
    meshCube.rotation.y += 0.002;
    // meshDonuts.scale.z += -0.002;
    // meshSphere.scale.y += -0.002;
    light.position.x = Math.sin( time * 0.6 ) * 20;
    light.position.y = Math.cos( time * 0.4 ) * 20;
    light.position.z = Math.cos( time * 0.2 ) * 20;
    light1.position.x = Math.cos( time * 5 ) * 15;
    light1.position.y = Math.sin( time * 15 ) * 5;
    light1.position.z = Math.sin( time * 5 ) * 10;
    meshCube.position.y = Math.cos( time * 0.3 ) * 10;
    // camera.position.x = Math.cos( time * 0.1 ) * 40;
    // camera.position.y = Math.cos( time * 0.1 ) * 10;
    renderer.render(scene, camera);

}
init();
animate();