/* global THREE */
let scene, camera, renderer, stars, starGeo, container,light,light2,light3, light4, house,loader,loader2,loader3,tree,grass, sky,sunSphere;

function init() {

    container = document.querySelector('.scene');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight,  1, 5000);
    camera.position.y = -20;
    camera.rotation.x = Math.PI / 2;
    // camera.position.set(40,300,50);

    renderer = new THREE.WebGLRenderer({container});
    renderer.setSize(window.clientWidth, window.clientHeight);
    document.body.appendChild(renderer.domElement);

    // Config pikagirl
    loader = new THREE.GLTFLoader();
    loader.load('pika_girl/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        house.position.set(18, 3, -4.5)
        house.rotation.x = -0.1;
        house.rotation.y = -0.07;
        house.rotation.z = 1;
    });
    // config grass
    loader2 = new THREE.GLTFLoader();
    loader2.load('grass_pack_lp/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        grass = gltf.scene.children[0];
        grass.position.set(8, 3, -14.5)
        grass.rotation.x = Math.PI *1.89;
        grass.scale.x = 10;
        grass.scale.y = 10;
        grass.scale.z = 10;
        grass.rotation.y = Math.PI*2;
        grass.rotation.z = Math.PI/2;
    });
    loader2 = new THREE.GLTFLoader();
    loader2.load('grass_pack_lp/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        grass = gltf.scene.children[0];
        grass.position.set(15, 3, -15)
        grass.rotation.x = Math.PI *1.89;
        grass.scale.x = 10;
        grass.scale.y = 10;
        grass.scale.z = 10;
        grass.rotation.y = Math.PI*2;
        grass.rotation.z = Math.PI/2;
    });
    // config tree
    loader2 = new THREE.GLTFLoader();
    loader2.load('hazelnut_bush/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        tree = gltf.scene.children[0];
        tree.position.set(-24, 3, -30)
        tree.rotation.x = Math.PI;
        tree.scale.x = 8;
        tree.scale.y = 1;
        tree.scale.z = 10;
        tree.rotation.y = Math.PI;
        tree.rotation.z = Math.PI;
    });

    starGeo = new THREE.Geometry();
    for (let i = 0; i < 4000; i++) {
        star = new THREE.Vector3(
            Math.random() * 800 - 300,
            Math.random() * -800 - 40,
            Math.random() * 400
        );
        star.velocity = 0;
        star.acceleration = 0.00001;
        starGeo.vertices.push(star);
    }

    let sprite = new THREE.TextureLoader().load('img/star.png');
    let starMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.4,
        map: sprite
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    light = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(light);

    let sphereLight = new THREE.SphereGeometry(0.05, 8, 8);

    light2 = new THREE.PointLight(0xffffff, 6, 6);
    light2.position.set(13, 0, 0);
    light2.add(new THREE.Mesh(sphereLight, new THREE.MeshStandardMaterial({color:0xF2E41C})));
    scene.add(light2);

    light3 = new THREE.PointLight(0x1CF2D5, 6, 13);
    light3.position.set(18, 0, 0);
    light3.add(new THREE.Mesh(sphereLight, new THREE.MeshStandardMaterial({color:0x1CF2F2})));
    scene.add(light3);

    light4 = new THREE.PointLight(0x1CF240, 6, 9);
    light4.position.set(11, 0, 0);
    light4.add(new THREE.Mesh(sphereLight, new THREE.MeshStandardMaterial({color:0x1CF240})));
    scene.add(light4);

    // Add Sky
    sky = new THREE.Sky();
    sky.scale.setScalar( 450000 );
    scene.add( sky );

    // Add Sun Helper
    sunSphere = new THREE.Mesh(
        new THREE.SphereBufferGeometry( 2, 1, 8 ),
        new THREE.MeshBasicMaterial( { color: 0x987600 } )
    );
    sunSphere.visible = false;
    scene.add( sunSphere );

    let effectController = {
        turbidity:30,
        rayleigh: 0.09,
        mieCoefficient: 0.001,
        mieDirectionalG: 0.7,
        luminance: 1.18,
        inclination:- 2.49 * Math.PI, // elevation / inclination (0.49) de base xD
        azimuth: 0.25, // Facing front,
        sun: ! false
    };

    let distance = 400000;

    function guiChanged() {

        let uniforms = sky.material.uniforms;
        uniforms[ "turbidity" ].value = effectController.turbidity;
        uniforms[ "rayleigh" ].value = effectController.rayleigh;
        uniforms[ "mieCoefficient" ].value = effectController.mieCoefficient;
        uniforms[ "mieDirectionalG" ].value = effectController.mieDirectionalG;
        uniforms[ "luminance" ].value = effectController.luminance;
        
        let theta = Math.PI * ( effectController.inclination - 0.5 );
        let phi = 2 * Math.PI * ( effectController.azimuth - 0.5 );

        sunSphere.position.x = distance * Math.cos( phi );
        sunSphere.position.y = distance * Math.sin( phi ) * Math.sin( theta );
        sunSphere.position.z = distance * Math.sin( phi ) * Math.cos( theta );

        sunSphere.visible = effectController.sun;

        uniforms[ "sunPosition" ].value.copy( sunSphere.position );
    }
    guiChanged();

    let control = new THREE.OrbitControls(camera, renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);

    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;

        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    starGeo.verticesNeedUpdate = true;
    let time = Date.now() * 0.0005;
    stars.rotation.y += 0;
    light2.position.z = Math.sin( time * 0.3 ) * -3;
    light3.position.z = Math.sin( time * 0.3 ) * -1;
    light4.position.z = Math.sin( time * 0.3 ) * -6;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();