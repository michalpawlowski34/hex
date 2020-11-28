console.log("wczytano plik Main.js")
var net
var ui
var main
$(document).ready(function(){
    net=new Net
    ui=new Ui
    main=new Main
})
class Main{
    constructor(){
        this.createDivs(3)
        this.createWholeLevelObject()
    }
    createWholeLevelObject(){
        this.wholeLevelObject={
            size: ui.amount,
            level:[]
        }
    }
    createDivs(amount){
        let left=500
        let top
        let id=0
        for(let i=0;i<amount;i++){
            if(i%2==0){
                top=0
            }
            else{
                top=50
            }
            for(let j=0;j<amount;j++){
                var div=new Hex(top,left,i,j,id)
                $("#right").append(div.div)
                id++
                top+=105
            }
            left+=95
        }
    }
    loadLevel(levelInfo){
        $("#selectAmount").val(`${levelInfo.size}`).change()
        for(let i=0;i<levelInfo.level.length;i++){
            levelInfo.level[i].dirOut=parseInt(levelInfo.level[i].dirOut)
            levelInfo.level[i].dirIn=parseInt(levelInfo.level[i].dirIn)
            var max=parseInt(levelInfo.level[i].dirOut)+1
            for(let j=0;j<max;j++){
                $(`#${levelInfo.level[i].id}`).trigger('click')
            }
        }
        this.wholeLevelObject.level=levelInfo.level
        ui.updateLevelLog()
    }
}
