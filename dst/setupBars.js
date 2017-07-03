"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magik = magikcraft.io;
var mct1 = magikcraft.io.global('mct1');
function setupBars() {
    var Bars = magik.Bars;
    var TextComponent = magik.TextComponent;
    if (mct1.initialised) {
        return;
    }
    return new Promise(function (resolve, reject) {
        var insulin = Bars.addBar(magik.getSender(), new TextComponent("Insulin"), Bars.Color.BLUE, Bars.Style.NOTCHED_20, 0.0);
        var bgl = Bars.addBar(magik.getSender(), new TextComponent("BGL"), Bars.Color.RED, Bars.Style.NOTCHED_20, 0.0 // Progress (0.0 - 1.0)
        );
        resolve({ insulin: insulin, bgl: bgl });
    });
}
exports.setupBars = setupBars;