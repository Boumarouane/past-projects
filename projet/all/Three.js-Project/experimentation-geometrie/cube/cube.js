let scene, camera, renderer, geometry, material, cube;

const init = () => {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 20;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    geometry = new THREE.BoxGeometry(4, 4, 4);

    material = new THREE.MeshNormalMaterial();

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.2;
    cube.rotation.y += 0.002;
    renderer.render(scene, camera);
}

init();
animate();