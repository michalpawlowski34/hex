console.log("wczytano plik Doors3D.js")
class Doors3D{
    constructor(){
        let container=new THREE.Object3D()
        this.radius=Settings.hexRadius
        var wall1=new THREE.Mesh(Settings.geometryDoors,Settings.material1)
        var wall2=wall1.clone()
        wall1.position.z=-(this.radius-this.radius*0.25)/2
        wall2.position.z=(this.radius-this.radius*0.25)/2
        container.add(wall1,wall2)
        return container
    }
}