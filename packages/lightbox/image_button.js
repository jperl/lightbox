Famous.loaded(function (t) {
    function s() {
        n.apply(this, arguments), this.image = new Image, this.image.src = this.options.imgSrc, r.isMobile() ? this.setSize(this.options.mobileSize) : this.setSize(this.options.desktopSize), this.surface.setContent(this.image)
    }
    t("famous/Surface");
    var o = t("famous/Matrix");
    t("famous/View"), t("famous/Modifier");
    var n = t("famous-ui/Buttons/ButtonBase"), n = t("famous-ui/Buttons/ButtonBase"), r = t("famous-utils/Utils");
    s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {surfaceOptions: {},openState: o.identity,closeState: o.rotateZ(.75 * Math.PI),transition: {curve: "inOutBackNorm",duration: 500},imgSrc: "",mobileSize: [100, 100],desktopSize: [50, 50]}, s.prototype.setSize = function(t) {
        this.surface.setSize(t), this.image.width = t[0], this.image.height = t[1]
    }, s.prototype.addTo = function(t) {
        t.add(this.node)
    }

    Lightbox.ImageButton = s;
});