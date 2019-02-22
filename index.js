// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#BB0000")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

// basic cube
var geometry = new THREE.IcosahedronGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0xA6A6A6, flatShading: true, metalness: 0, roughness: 1 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

var geometry = new THREE.SphereGeometry( 1/3, 1/3, 1/3)
var material = new THREE.MeshStandardMaterial( { color: 0x4D4D4D, flatShading: true, metalness: 0, roughness: 1 })
var sphere = new THREE.Mesh ( geometry, material )
scene.add( sphere )


// wireframe cube
var geometry = new THREE.TorusGeometry( 5, 2, 16, 110 );
var material = new THREE.MeshBasicMaterial( {
	color: "#000", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

// ambient light
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

var step=0;
function animate() {
	requestAnimationFrame( animate )
	//cube.rotation.x += 0.04;
	cube.rotation.y += 0.04;
	wireframeCube.rotation.x -= 0.01;
	wireframeCube.rotation.y -= 0.02;
	renderer.render( scene, camera )
    step+=0.05;
    sphere.position.x=1.5*(Math.sin(step));
    sphere.position.y=0.8*(Math.cos(step));
    sphere.position.z=1.5*(Math.cos(step));
    sphere.rotation.y+=0.04;
}
animate()