class Hex{
    constructor(top,left,x,z,id){
        this.div=document.createElement("div")
        this.div.classList.add("divHex")
        this.div.style.top=`${top}px`
        this.div.style.left=`${left}px`
        this.x=x
        this.z=z
        this.id=id
        this.div.classList.add(`${this.x}_${this.z}`)
        this.div.setAttribute("id",`${this.id}`)
        this.divClick()
    }
    divClick(){
        this.clickCounter=0
        var insideDiv=document.createElement("div")
        insideDiv.classList.add("insideHexDiv")
        this.div.appendChild(insideDiv)
        this.div.onclick=()=>{
            insideDiv.innerHTML=this.clickCounter
            insideDiv.style.backgroundImage=`url("gfx/arrow.png")`
            insideDiv.style.transform=`rotate(${60*this.clickCounter}deg)`
            this.objectOperations()
            this.clickCounter++
            if(this.clickCounter>5){
                this.clickCounter=0
            }
        }
    }
    objectOperations(){
        if(this.objectPresence()==false){
            this.createObject()
        }
        else{
            this.replaceObjectInfo()
        }
    }
    objectPresence(){
        let bool=false
        for(let i=0;i<main.wholeLevelObject.level.length;i++){
            if(this.id==main.wholeLevelObject.level[i].id){
                this.savedObject=main.wholeLevelObject.level[i]
                bool=true
            }
        }
        if(bool){return true}
        if(bool==false){return false}
    }
    createObject(){        
        var obj={
            id: `${this.id}`,
            x: `${this.x}`,
            z: `${this.z}`,
            dirOut:this.clickCounter,
            dirIn:this.clickCounter+3,
            type:ui.typeValue
        }
        main.wholeLevelObject.level.push(obj)
        ui.updateLevelLog()
    }
    replaceObjectInfo(){
        var dirInValue
        if(this.clickCounter+3>5){
            dirInValue=this.clickCounter-3
        }
        else{
            dirInValue=this.clickCounter+3
        }
        this.savedObject.dirOut=this.clickCounter
        this.savedObject.dirIn=dirInValue
        this.savedObject.type=ui.typeValue
        ui.updateLevelLog()
    }
}