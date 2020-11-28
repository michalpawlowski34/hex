console.log("wczytano plik Settings.js")
var hexRadius=100
var Settings={
    hexRadius: hexRadius,
    material1: new THREE.MeshPhongMaterial({
        color:0xff0ff0,
        shininess:50,
        side:THREE.DoubleSide,
    }),
    geometry1: new THREE.BoxGeometry(hexRadius*0.1,hexRadius,hexRadius),
    geometryDoors:new THREE.BoxGeometry((hexRadius+(hexRadius/100*15))/15,hexRadius,hexRadius/4)
    // geometryDoors:new THREE.BoxGeometry(hexRadius,hexRadius,hexRadius/3)
}