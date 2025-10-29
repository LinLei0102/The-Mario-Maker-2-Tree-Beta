function layerDisplay(id){
    if(tmp[id].layerShown===undefined){
        return true
    }
    return tmp[id].layerShown
}

function layerDisplayTotal(id){
    for(i in id){
        let a = layerDisplay(id[i])
        if(a==true){
            return true
        }
    }
}

addLayer("OtherTab small", {
    name: "AllLayer",
    position: 0,
    row: 0,
    symbol() {return geti18n() ? '↓ 其他页面 ↓' : '↓ Other Tab ↓'},
    symbolI18N() {return geti18n() ? '↓ 其他页面 ↓' : '↓ Other Tab ↓'},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        small: true,
        points: new ExpantaNum(0),
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['Setting','Statistics','Information','Changelog'])},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("Setting", {
    name: "Setting",
    position: 1,
    row: 0,
    symbol() {return geti18n() ? '设置' : 'Setting'},
    symbolI18N() {return geti18n() ? '设置' : 'Setting'},
    startData() { return {
        unlocked: true,
        small: true,
        points: new ExpantaNum(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("Information", {
    name: "Information",
    position: 2,
    row: 0,
    symbol() {return geti18n() ? '信息' : 'Information'},
    symbolI18N() {return geti18n() ? '信息' : 'Information'},
    startData() { return {
        unlocked: true,
        small: true,
        points: new ExpantaNum(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})

addLayer("Changelog", {
    name: "Changelog",
    position: 3,
    row: 0,
    symbol() {return geti18n() ? '更新日志' : 'Changelog'},
    symbolI18N() {return geti18n() ? '更新日志' : 'Changelog'},
    startData() { return {
        unlocked: true,
        small: true,
        points: new ExpantaNum(0),
    }},
    color: "rgb(230, 230, 236)",
    type: "none",
    tooltip(){return false},
    tabFormat: [
        ["display-text", function() { return getPointsDisplay() }],
    ],
})