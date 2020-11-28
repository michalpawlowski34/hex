console.log("wczytano plik Hex3D.js")
class Hex3D{
    constructor(doors1,doors2){
        // console.log(settings.cuboid)
        this.radius=Settings.hexRadius
        let container=new THREE.Object3D()
        var wall=new THREE.Mesh(Settings.geometry1,Settings.material1)
        for(let i=0;i<6;i++){
            let angle=((90+60*i)*Math.PI)/180
            let x=(Math.cos(angle)*this.radius*Math.sqrt(3))/2
            let z=(Math.sin(angle)*this.radius*Math.sqrt(3))/2
            var side
            if(doors1==i || doors2==i){
                side=new Doors3D()
            }
            else{
                side=wall.clone()
            }
            side.position.x=x
            side.position.y=this.radius/2+1
            side.position.z=z
            side.rotation.y=-angle
            container.add(side)
        }
        return container
    }
}