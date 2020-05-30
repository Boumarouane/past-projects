let clock = new THREE.Clock();
let house;
function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas,alpha:true});

    const sceneElements = [];

    function addScene(elem, fn) {
        sceneElements.push({elem,fn});
    }
    // !fonction qui retourne la scene et la camera
    function makeScene() {
        // on crée une scene
        const scene = new THREE.Scene();
        // camera
        const fov = 90;
        const aspect = 2;
        const near = 0.01;
        const far = 10000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 1, 300);
        camera.lookAt(0, 0, 0);
        // ajout de la lumière
        const light = new THREE.DirectionalLight(0xFFFFFF, 4);
        light.position.set(0, 0, 40);
        scene.add(light);
        
        return {scene,camera};
    }
    {
    // il vise le premier canvas
    const elem = document.querySelector('#box');
    // il met dans l'objet scene,camera la fonction qui permet de retourner la scene et la camera
    const {scene,camera} = makeScene();
    // geometry
    // const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    // material
    // const material = new THREE.MeshPhongMaterial({color: 'red'});
    // mesh
    // const mesh = new THREE.Mesh(geometry, material);
    // scene.add(mesh);
    loader = new THREE.FBXLoader();
    loader.load('../../leopard/source/Leopard .fbx', function(object){
        house = new THREE.AnimationMixer( object );

        let action = house.clipAction( object.animations[ 0 ] );
        action.play();
        // house.position.set(0,0,0)
        scene.add( object );

        addScene(elem, (time, rect) => {
            camera.aspect = rect.width / rect.height;
            camera.updateProjectionMatrix();
            object.position.set(0,0,0)
            renderer.render(scene, camera);

        });

    });
    }   
    // il vise le deuxieme canvas
    {
        const elem = document.querySelector('#pyramid');
        const {scene,camera} = makeScene();
        const geometry = new THREE.SphereBufferGeometry(0.8, 4, 2);
        const material = new THREE.MeshPhongMaterial({color: 'blue',flatShading: true,});
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        addScene(elem, (time, rect) => {
            camera.aspect = rect.width / rect.height;
            camera.updateProjectionMatrix();
            mesh.rotation.y = time * .1;
            renderer.render(scene, camera);
        });
    }

    const clearColor = new THREE.Color('#000');

    function render(time) {
        // camera.lookAt(object.position)
        time *= 0.001;

        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        renderer.setSize(width, height, false);

        let delta = clock.getDelta()
        if ( house ) house.update( delta );

        renderer.setScissorTest(false);
        renderer.setClearColor(clearColor, 0);
        renderer.clear(true, true);
        renderer.setScissorTest(true);

        const transform = `translateY(${window.scrollY}px)`;
        renderer.domElement.style.transform = transform;

        for (const {elem,fn} of sceneElements) {
            // get the viewport relative position opf this element
            const rect = elem.getBoundingClientRect();
            const {
                left,
                right,
                top,
                bottom,
                width,
                height
            } = rect;

            const isOffscreen =
                bottom < 0 ||
                top > renderer.domElement.clientHeight ||
                right < 0 ||
                left > renderer.domElement.clientWidth;

            if (!isOffscreen) {
                const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
                renderer.setScissor(left, positiveYUpBottom, width, height);
                renderer.setViewport(left, positiveYUpBottom, width, height);

                fn(time, rect);
            }
        }

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();


