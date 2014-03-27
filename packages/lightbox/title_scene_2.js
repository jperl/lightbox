Famous.loaded(function (t) {
    function s() {
        a.apply(this, arguments), this.eventInput.pipe(this.eventOutput), this.palette, this.button, this.torque, this.content, this.initContent(), this.initPalette(), this.initButton(), this.events()
    }
    var o = t("famous/Matrix"), n = t("famous/Modifier");
    t("famous/Engine"), t("famous/Utility"), t("famous/ImageSurface");
    var r = t("famous/Surface");
    t("famous-animation/RegisterEasing"), t("famous-views/Scrollview");
    var a = t("famous-scene/Scene");
    t("famous-utils/Utils");
    var h = t("famous-utils/Time");
    t("famous-color/ColorPalette");
    var u = t("famous-color/Color"), p = t("famous-ui/Text/Label");
    t("famous-ui/AutoUI");
    var c = t("app/widgets/TorqueRenderable"), l = t("app/SceneController");
    t("app/SceneTransitions"), s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.PALETTE = ["#e1dbcd", "#141501"], s.prototype.events = function() {
        this.button.on("click", function() {
            h.setTimeout(function() {
                l.setScene("lightbox")
            }, 150)
        })
    }, s.prototype.createContent = function() {
        this.content = {title: {render: new r({content: '<h3 class="title-first-name">FRANCISCO</h3><br><h3 class="title-second-name">GOYA<h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "48px"},size: [316, 200]}),mod: new n({opacity: 0,origin: [.125, .375],transform: o.translate(0, 50)})},birthDate: {render: new r({content: '<p>BORN</p></br><h3 class="title-birth-date">1746</h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "16px"},size: [100, 50]}),mod: new n({opacity: 0,origin: [.125, .125]})},deathDate: {render: new r({content: '<p>DIED</p></br><h3 class="title-death-date">1828</h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "16px"},size: [100, 50]}),mod: new n({opacity: 0,origin: [.825, .125]})},caprichoDate: {render: new r({content: '<p>LOS CAPRICHOS</p></br><h3 class="title-creation-date">1799</h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "16px"},size: [150, 50]}),mod: new n({opacity: 0,origin: [.577439024390241, .125]})},caprichoText: {render: new r({content: '<h3 class="title-capricho">Los Caprichos</h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "24px"},size: [200, 50]}),mod: new n({opacity: 0,origin: [.577439024390241, .125],transform: o.translate(0, -100, 0)})},descriptionText: {render: new p({content: "Los Caprichos are a set of 80 aquatint prints created by the Spanish artist Francisco Goya in 1797 and 1798, and published as an album in 1799.<br><br>The prints were an artistic experiment: a medium for Goya's condemnation of the universal follies and foolishness in the Spanish society in which he lived.<br><br>The criticisms are far-ranging and acidic; he speaks against the predominance of superstition, the ignorance and inabilities of the various members of the ruling class, pedagogical short-comings, marital mistakes and the decline of rationality.",size: [.375 * window.innerWidth, 200],properties: {fontSize: "16px",lineHeight: "24px"}}),mod: new n({opacity: 0,origin: [.72, .6]})},button: {render: this.torque,mod: new n({opacity: 0})}}
    }, s.prototype.createAnimations = function() {
        this._openingAnimation = [{title: {opacity: 1,opacityCurve: "inSineNorm",opacityDuration: 400,transform: o.identity,curve: "outBackNorm",duration: 800}}, {birthDate: {opacity: 1,opacityCurve: "inSineNorm",opacityDuration: 400}}, {deathDate: {opacity: 1,opacityCurve: "inSineNorm",opacityDuration: 400}}, 700, {caprichoDate: {opacity: 1,opacityCurve: "inSineNorm",opacityDuration: 400,transform: o.identity,curve: "inOutBackNorm",duration: 800}}, {descriptionText: {opacity: 1,opacityCurve: "inSineNorm",opacityDuration: 700,transform: o.translate(40, 0),curve: "inOutBackNorm",duration: 800}}, {button: {opacity: 1,opacityCurve: "inSineNorm",opacityDuration: 400}}]
    }, s.prototype.initContent = function(t) {
        this.createContent();
        for (var i in this.content) {
            var e = t[i];
            e.mod ? this.node.add(e.mod).link(e.render) : this.node.add(e.render)
        }
        this.setTorquePos(), this.node.add(this.torque), this.content.descriptionText.render.init(), this.addContent(this.content)
    }, s.prototype.initPalette = function() {
        this.palette = [];
        for (var t = 0; t < s.PALETTE.length; t++)
            this.palette.push((new u).setFromHex(s.PALETTE[t]))
    }, s.prototype.initButton = function() {
        this.button = new r({content: '<h3 class="title-button">ENTER EXHIBITION</h3>',classes: ["backfaceVisible"],properties: {"text-align": "left",color: this.palette.getCSS(0),"font-size": "24px",cursor: "pointer","border-right": "1px solid " + this.palette.getCSS(0),"border-left": "1px solid " + this.palette.getCSS(0),padding: "5px"},size: [200, 50]}), this.torque = new c({views: [this.button],forceStrength: 0,forceSpringDamping: .55,forceSpringPeriod: 1100,torqueStrength: .12,torquePeriod: 5})
    }, s.prototype.setTorquePos = function() {
        var t = this.button.getSize();
        this.torque.setTransform(o.translate(.5 * window.innerWidth - .5 * t[0], .65 * window.innerHeight - .5 * t[1]), {curve: "inOutBackNorm",duration: 500})
    }

    Lightbox.TitleScene2 = s;
});