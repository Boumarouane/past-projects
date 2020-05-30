
			var container, stats;
			var camera, scene, renderer, light;
			var controls, water, sphere;

			init();
			animate();

			function init() {

				container = document.getElementById( 'container' );

				//

				renderer = new THREE.WebGLRenderer({container,antialias:true});
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( container.clientWidth, container.clientHeight );
				container.appendChild( renderer.domElement );

				//

				scene = new THREE.Scene();

				//

				camera = new THREE.PerspectiveCamera( 55, 2, 1, 1000 );
				camera.position.set( 0, 25, 0 );
				camera.lookAt( scene.position );

				//

				light = new THREE.DirectionalLight( 0xFFFFFF,100 );
				scene.add( light );

				// Water

				var waterGeometry = new THREE.PlaneBufferGeometry( 120, 100 );

				water = new THREE.Water(
					waterGeometry,
					{
						textureWidth: 112,
						textureHeight: 112,
						waterNormals: new THREE.TextureLoader().load( 'waternormals.jpg', function ( texture ) {

							texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

						} ),
						alpha: 1.0,
						sunDirection: light.position.clone().normalize(),
						sunColor: 0x444444,
						waterColor: 0x02041a,
						distortionScale: 1.7,
						fog: scene.fog !== undefined
					}
				);

				water.position.y = 1;
				water.rotation.x = Math.PI * - 0.5;
				scene.add( water );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {
				requestAnimationFrame( animate );
				render();
			}

			function render() {

				// var time = performance.now() * 0.001;

				water.material.uniforms[ 'time' ].value += 1.0 / 50.0;

				renderer.render( scene, camera );

			}
