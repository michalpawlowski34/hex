console.log("wczytano plik Ui.js")
class Ui{
    constructor(){
        this.selectAmountSupport()
        this.typeButtonsSupport()
        this.saveLevelSupport()
        this.loadLevelSupport()
        this.goToHexSupport()
        this.goToGameSupport()
      }
      selectAmountSupport(){
        this.amount="3"
      $("#selectAmount").on("change",(e)=>{
          this.amount=$("#selectAmount").val()
        $("#right").empty()             //clearing everything inside div
        $("#levelLogSpan").empty()      //clearing text inside levellog
        main.createWholeLevelObject()   //reseting whole level object
        main.createDivs(this.amount)    //create new hexes
      })  
    }
    typeButtonsSupport(){
      $("#buttonWalls").on("click",()=>{
        this.typeValue="walls"
        $(".typeButtons").css("border-color","darkgrey")
        $("#buttonWalls").css("border-color","blue")
      })
      $("#buttonEnemy").on("click",()=>{
        this.typeValue="enemy"
        $(".typeButtons").css("border-color","darkgrey")
        $("#buttonEnemy").css("border-color","blue")
      })
      $("#buttonTreasure").on("click",()=>{
        this.typeValue="treasure"
        $(".typeButtons").css("border-color","darkgrey")
        $("#buttonTreasure").css("border-color","blue")
      })
      $("#buttonLight").on("click",()=>{
        this.typeValue="light"
        $(".typeButtons").css("border-color","darkgrey")
        $("#buttonLight").css("border-color","blue")
      })
      $("#buttonWalls").click()
    }
    updateLevelLog(){
      var span=document.getElementById("levelLogSpan")
      var text=JSON.stringify(main.wholeLevelObject,null,5)
      span.innerHTML=text
    }
    saveLevelSupport(){
      $("#buttonSaveLevel").on("click",()=>{
        var saveName=$("#inputSaveLevel").val()
        net.saveLevel(main.wholeLevelObject,saveName)
      })
    }
    addOptionSavedLevel(saveNameTab){
      $("#selectLoadLevel").empty()
      for(let i=0;i<saveNameTab.length;i++){
        $("#selectLoadLevel").append($("<option>",{value:saveNameTab[i],text:saveNameTab[i]}))
      }
    }
    loadLevelSupport(){
      $("#buttonLoadLevel").on("click",()=>{
        var saveName=$("#selectLoadLevel").val()
        net.loadLevel(saveName)
      })
    }
    goToHexSupport(){
      $("#goToHex").on("click",()=>{
        window.location.href="/hex"
      })
    }
    goToGameSupport(){
      $("#goToGame").on("click",()=>{
        window.location.href="/game"
      })
    }
}
