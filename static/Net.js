console.log("wczytano plik Net.js")
class Net{
    constructor(){
        this.loadOptionsSavedLevels()
    }
    saveLevel(levelInfo,name){
        $.ajax({
            url: "/saveLevel",
            data: {levelInfo:levelInfo, saveName:name},
            type: "POST",
            success: function (data) {
                console.log(data);
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
        this.loadOptionsSavedLevels()
    }
    loadOptionsSavedLevels(){
        $.ajax({
            url: "/loadOptionsSavedLevels",
            type: "POST",
            success: function (data) {
                ui.addOptionSavedLevel(data)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
    loadLevel(name){
        $.ajax({
            url: "/loadLevel",
            data: {name:name},
            type: "POST",
            success: function (data) {
                main.loadLevel(data)
            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });
    }
}