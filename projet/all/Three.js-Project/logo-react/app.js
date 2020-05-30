// Variables
let scene, camera, renderer, sphere, anneau, material, meshSphere, anneauOne, anneauTwo, anneauThree, light, light1, light2, light3, sphereLight, textGeometry, loader, meshText, cylinder, materialCylinder, socle, meshSocle;

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
    material = new THREE.MeshPhysicalMaterial({
        color: 0x53C1DE,
        emissive: 0x1e1a1a,
        roughness: 0.8,
        metalness: 2
    });

    // Config text react
    loader = new THREE.FontLoader();

    loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
        textGeometry = new THREE.TextGeometry( 'R  E A C T', {
            font: font,
            size: 6.5,
            height: 1,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 1.4,
            bevelSize: 0.7,
            bevelOffset: 0,
            bevelSegments: 2
        } );
    // Config mesh et ajout dans la scene
    meshText = new THREE.Mesh(textGeometry, material);
    meshText.position.set(-20, 20, 0);
    scene.add(meshText);
    } );

    // Config socle
    cylinder = new THREE.CylinderGeometry(12.5, 7.7, 12, 8);
    materialCylinder = new THREE.MeshStandardMaterial({
        color:0x456789,
        emissive: 0x1e1a1a,
        roughness: 1,
        metalness: 3});
    socle = new THREE.Mesh(cylinder, materialCylinder);
    socle.position.set(0,-26,0);
    scene.add(socle);

    //Config geometry 
    sphere = new THREE.SphereBufferGeometry(0.5, 32, 32);
    anneau= new THREE.TorusBufferGeometry(11, 0.2, 8, 50);
    let anneauCenter = new THREE.TorusBufferGeometry(11, 0.2, 8, 50);

    // Config logo react et ajout dans la scene
    meshSphere = new THREE.Mesh(sphere, material);
    scene.add(meshSphere);

    anneauOne = new THREE.Mesh(anneau, material);
    anneauOne.position.set(0,-1,0);
    anneauOne.rotation.y = 2.3;
    anneauOne.rotation.x = 1.19;
    scene.add(anneauOne);

    anneauTwo = new THREE.Mesh(anneau, material);
    anneauTwo.position.set(0,-1,0);
    anneauTwo.rotation.y = -0.91;
    anneauTwo.rotation.x = -2;
    scene.add(anneauTwo);

    anneauThree = new THREE.Mesh(anneauCenter, material);
    anneauThree.position.set(0,0,0);
    anneauThree.rotation.x = 1.77;
    scene.add(anneauThree);

    // Config light
    sphereLight = new THREE.SphereBufferGeometry(0.5, 16, 8);

    light = new THREE.PointLight(0x53C1DE, 4, 50);
    light.position.set(11, 0, 0);
    light.rotation.x = 1.77;
    light.add(new THREE.Mesh(sphereLight, new THREE.MeshStandardMaterial({color:0xaaaaaa,transparent:true, opacity:0.01})));
    scene.add(light);

    light2 = new THREE.PointLight(0x678990, 4, 50);
    light2.position.set(6, 8, 0);
    light2.rotation.x = 1.77;
    light2.add(new THREE.Mesh(sphereLight, new THREE.MeshStandardMaterial({color:0xaaaaaa,transparent:true, opacity:0.01})));
    scene.add(light2);


    light3 = new THREE.PointLight(0x53C1DE, 60, 50);
    light3.position.set(0, 20, 10);
    light3.rotation.x = 1.77;
    light3.add(new THREE.Mesh(sphereLight, new THREE.MeshStandardMaterial({color:0xaaaaaa,transparent:true, opacity:0.01})));
    scene.add(light3);

    light1 = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light1);

    let rectLight = new THREE.RectAreaLight( 0x53C1DE, 100, 10, 10 );
    rectLight.position.set( 0, -20, 0 );
    rectLight.lookAt( 0, 0, 0 );
    scene.add( rectLight );
    let rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
    rectLight.add( rectLightHelper );

    // config orbitControl
    let orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
    }

// ! Animation
const animate = () => {
    requestAnimationFrame(animate);
    let time = Date.now() * 0.01;

    anneauOne.position.y = Math.cos( time * 0.05 ) * 3;
    anneauTwo.position.y = Math.cos( time * 0.05 ) * 3;
    anneauThree.position.y = Math.cos( time * 0.05 ) * 3;
    meshSphere.position.y = Math.cos( time * 0.05 ) * 3;
    light.position.x = Math.cos( time * 0.9 ) * 11;
    light.position.z = Math.sin( time * 0.9 ) * 11;
    light2.position.x = Math.cos( time * 1.5 ) * 10;
    light2.position.y = Math.sin( time * 1.5 ) * 10;
    light2.position.z = Math.sin( time * 1 ) * 9;
    light3.position.x = Math.cos( time * 0.4 ) * 25;
    light3.position.z = Math.sin( time * 0.09 ) * 25;

    renderer.render(scene, camera);
}
init();
animate();