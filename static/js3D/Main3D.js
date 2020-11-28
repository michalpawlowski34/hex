console.log("wczytano plik Main3D.js")
var main3D
$(document).ready(function(){
    main3D=new Main3D
})
class Main3D{
    constructor(){
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(
            45,    // kąt patrzenia kamery (FOV - field of view)
            window.innerWidth/window.innerHeight,    // proporcje widoku, powinny odpowiadać proporcjom naszego ekranu przeglądarki
            0.1,    // minimalna renderowana odległość
            10000    // maksymalna renderowana odległość od kamery
        )
        this.renderer = new THREE.WebGLRenderer()
        this.axes = new THREE.AxesHelper(1000)
        this.light = new THREE.AmbientLight(0xffff00, 10)
        this.renderer.setClearColor(0xfffff0)
        this.renderer.setSize(window.innerWidth,window.innerHeight)
        $("#root").append(this.renderer.domElement)
        this.camera.position.set(500, 400, 0)
        this.camera.lookAt(this.scene.position)
        this.camera.fov = 34
        this.scene.add(this.axes)
        this.light.position.set(0, 0, 0)
        this.scene.add(this.light)
        this.orbitControl = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControl.addEventListener('change', ()=> {
            this.renderer.render(this.scene,this.camera)
        });
        var obj=new Hex3D(0,2)
        this.scene.add(obj)
        this.createFloor()
        this.render()
    }
    render(){
        requestAnimationFrame(this.render.bind(this))
        this.renderer.render(this.scene, this.camera)
        console.log("rendering")
    }
    createFloor(){
        var geometry = new THREE.PlaneGeometry(1000, 1000);
        var material = new THREE.MeshBasicMaterial( {color: 0xffc7c7c7, side: THREE.DoubleSide} );
        var plane = new THREE.Mesh( geometry, material );
        plane.rotateX(THREE.Math.degToRad(90))
        this.scene.add( plane );
    }
}