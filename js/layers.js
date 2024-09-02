addLayer("tools", {
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        x: new Decimal(1),
        y: new Decimal(1),
        mapdata1:[
            [0,1,2,0,0],
            [0,1,1,3,0],
            [0,1,2,0,1],
            [2,0,1,1,1],
            [2,0,0,0,0]]
        
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "tp", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },

    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: Convert position into tools", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        {key: ",", onPress(){moveinmapdata1(0,-1)}},
        {key: "a", onPress(){moveinmapdata1(-1,0)}},
        {key: "o", onPress(){moveinmapdata1(0,1)}},
        {key: "e", onPress(){moveinmapdata1(1,0)}}
    ],
    layerShown(){return true},

    bars: {
        xBar: {
            direction: RIGHT,
            width: 250,
            height: 50,
            progress() { return x },
            unlocked:true
        },
        yBar: {
            direction: DOWN,
            width: 50,
            height: 250,
            progress() { return y },
            unlocked:true
        }
    }
})