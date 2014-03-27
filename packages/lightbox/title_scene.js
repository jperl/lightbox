Famous.loaded(function (t) {
    function s() {
        a.apply(this, arguments), this.palette = new u([(new p).setFromHex("#e1dbcd"), (new p).setFromHex("#141501")]), this.button = new o({content: '<h3 class="title-button">ENTER EXHIBITION</h3>',classes: ["backfaceVisible"],properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "24px",cursor: "pointer",borderRight: "1px solid " + this.palette.getCSS(0),borderLeft: "1px solid " + this.palette.getCSS(0),padding: "5px"},size: [200, 50]}), this.torque = new l({views: [this.button],forceStrength: 0,forceSpringDamping: .55,forceSpringPeriod: 1100,torqueStrength: .12,torquePeriod: 5}), this.button.on("click", function() {
            h.setTimeout(function() {
                d.setScene("lightbox")
            }, 150)
        }), this.content = {title: {render: new o({content: '<h3 class="title-first-name">FRANCISCO</h3><br><h3 class="title-second-name">GOYA<h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "48px"},size: [316, 200]}),mod: new r({opacity: 0,origin: [.125, .375],transform: n.translate(0, 50)})},birthDate: {render: new o({content: '<p>BORN</p></br><h3 class="title-birth-date">1746</h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "16px"},size: [100, 50]}),mod: new r({opacity: 0,origin: [.125, .125]})},deathDate: {render: new o({content: '<p>DIED</p></br><h3 class="title-death-date">1828</h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "16px"},size: [100, 50]}),mod: new r({opacity: 0,origin: [.825, .125]})},caprichoDate: {render: new o({content: '<p>LOS CAPRICHOS</p></br><h3 class="title-creation-date">1799</h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "16px"},size: [150, 50]}),mod: new r({opacity: 0,origin: [.577439024390241, .125]})},caprichoText: {render: new o({content: '<h3 class="title-capricho">Los Caprichos</h3>',properties: {textAlign: "left",color: this.palette.getCSS(0),fontSize: "24px"},size: [200, 50]}),mod: new r({opacity: 0,origin: [.577439024390241, .125],transform: n.translate(0, -100, 0)})},descriptionText: {render: new c({content: "Los Caprichos are a set of 80 aquatint prints created by the Spanish artist Francisco Goya in 1797 and 1798, and published as an album in 1799.<br><br>The prints were an artistic experiment: a medium for Goya's condemnation of the universal follies and foolishness in the Spanish society in which he lived.<br><br>The criticisms are far-ranging and acidic; he speaks against the predominance of superstition, the ignorance and inabilities of the various members of the ruling class, pedagogical short-comings, marital mistakes and the decline of rationality.",size: [.375 * window.innerWidth, 200],properties: {fontSize: "16px",lineHeight: "24px"}}),mod: new r({opacity: 0,origin: [.72, .6]})},button: {render: this.torque,mod: new r({opacity: 0})}}, this.setTorquePos(), this.node.add(this.torque), this.content.descriptionText.render.init(), this.addContent(this.content), h.setTimeout(this.initAnimations.bind(this), 250)
    }
    t("famous/ImageSurface");
    var o = t("famous/Surface"), n = t("famous/Matrix"), r = t("famous/Modifier");
    t("famous/Engine"), t("famous/Utility"), t("famous-animation/Easing"), t("famous-views/Scrollview");
    var a = t("famous-scene/Scene");
    t("famous-utils/Utils"), t("famous-modifiers/Draggable"), t("app/widgets/MakeDraggable"), t("core/Interface"), t("famous-animation/RegisterEasing");
    var h = t("famous-utils/Time"), u = t("famous-color/ColorPalette"), p = t("famous-color/Color"), c = t("famous-ui/Text/Label"), l = t("app/widgets/TorqueRenderable"), d = t("app/SceneController"), f = t("app/SceneTransitions");
    s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.prototype.initAnimations = function() {
        this.content.title.mod.setOpacity(1, {curve: "inSineNorm",duration: 400}), this.content.title.mod.setTransform(n.identity, {curve: "outBackNorm",duration: 800}, this._birth.bind(this))
    }, s.prototype._birth = function() {
        this.content.birthDate.mod.setOpacity(1, {curve: "inSineNorm",duration: 400}, this._death.bind(this))
    }, s.prototype._death = function() {
        this.content.deathDate.mod.setOpacity(1, {curve: "inSineNorm",duration: 400}), h.setTimeout(this._caprichoDate.bind(this), 700)
    }, s.prototype._caprichoDate = function() {
        this.content.caprichoDate.mod.setOpacity(1, {curve: "inSineNorm",duration: 400}), this.content.caprichoDate.mod.setTransform(n.identity, {curve: "inOutBackNorm",duration: 800}, this._descriptionText.bind(this))
    }, s.prototype._capricho = function() {
        this.content.caprichoText.mod.setOpacity(1, {curve: "inSineNorm",duration: 400}), this.content.caprichoText.mod.setTransform(n.translate(0, 50, 0), {curve: "inOutBackNorm",duration: 800})
    }, s.prototype._descriptionText = function() {
        this.content.descriptionText.mod.setOpacity(1, {curve: "inSineNorm",duration: 700}), this.content.descriptionText.mod.setTransform(n.translate(40, 0), {curve: "inOutBackNorm",duration: 800}, this._button.bind(this))
    }, s.prototype._button = function() {
        this.content.button.mod.setOpacity(1, {curve: "inSineNorm",duration: 400})
    }, s.prototype.setTorquePos = function() {
        var t = this.button.getSize();
        this.torque.setTransform(n.translate(.5 * window.innerWidth - .5 * t[0], .65 * window.innerHeight - .5 * t[1]), {curve: "inOutBackNorm",duration: 500})
    }, s.prototype.addContent = function(t) {
        for (var i in t) {
            var e = t[i];
            e.mod ? this.node.add(e.mod).link(e.render) : this.node.add(e.render)
        }
    }, s.prototype.initUI = function() {
        this.labelProperties = {borderBottom: "1px solid white",color: "rgba( 255, 255, 255, 1 )",fontSize: "16px"}, this.autoUI = [{type: "label",uiOptions: {content: "GRID",properties: this.labelProperties}}], this.ui = new AutoUI({defaultSelected: this}), this.node.add(this.ui)
    }, s.prototype.deactivate = function(t) {
        f.sceneFadeLeft(t)
    }

    Lightbox.TitleScene = s;
});