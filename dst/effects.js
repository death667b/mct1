"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magik = magikcraft.io;
var PotionEffect = magik.type("potion.PotionEffect");
var PotionEffectType = magik.type("potion.PotionEffectType");
var Color = magik.type("Color");
function effects(type, opts) {
    if (opts === void 0) { opts = {}; }
    if (!opts) {
        opts = {};
    }
    var duration = opts.duration || 500;
    var amplifier = opts.amplifier || 1;
    var color = opts.color || "GREEN";
    var c = Color[color];
    var l = PotionEffectType[type];
    var effect = new PotionEffect(l, duration, amplifier, true, true, c);
    magik.getSender().addPotionEffect(effect);
}
exports.effects = effects;
