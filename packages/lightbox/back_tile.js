Famous.loaded(function (t) {
    function s() {
        if (this.options.size = [this.options.maxImageSize[0], this.options.maxImageSize[1]], l(this.options.size, [window.innerWidth, window.innerHeight], this.options.mainSurfaceRatio), this._visible) {
            var t = v.halfOf(v.sub(this._lastSize, this.options.size));
            this.emit("resize", t), this.originOffset[0] = .5 * window.innerWidth - .5 * this._lastSize[0], this.originOffset[1] = .5 * window.innerHeight - .5 * this._lastSize[1]
        }
        this.options.titleSize[0] = this.options.size[0], this.titleSurface && this.titleSurface.setSize(this.options.titleSize), this.mainSurface && (this.image.width !== this.options.size[0] || this.image.height !== this.options.size[1]) && (this.mainSurface.setSize(this.options.size), this.image.width = this.options.size[0], this.image.height = this.options.size[1])
    }

    function o(t) {
        this._isMobile = !0;
        var i = window.innerWidth, e = window.innerHeight, s = this.originOffset, o = this.options;
        [.5 * (i - o.size[0]), .5 * (e - o.size[1])], o.tagSize[0] = o.size[0], o.tagSize[1] = o.size[1], this.tagSurface && (this.tagSurface.setProperties({paddingTop: 2 * o.margin + o.titleSize[1] + "px", paddingLeft: o.margin + "px", paddingRight: o.margin + "px", backgroundColor: o.mobileTagBgColor}), this.tagSurface.setSize(o.tagSize)), this.titleSurface && this.titleSurface.setProperties({padding: o.margin + "px", fontSize: "14px", bottom: "0px"}), this.transitions.close = {method: "physics", spring: {period: 800, dampingRatio: .75}, wall: !0, v: 0}, this.transitions.info = {method: "physics", spring: {period: 500, dampingRatio: .85}, wall: !0, v: 0}, this.startPositions = {close: f.translate(-s[0] - 500, -s[1] + e - o.margin - o.closeSize[1]), info: f.translate(-s[0] + i - o.infoSize[0] - o.margin + o.size[0], -s[1] + e - o.margin - o.infoSize[1]), title: f.translate(0, 200, -2), tag: f.move(f.scale(1, .001), [0, -200])}, this.finalPositions = {close: f.translate(o.margin, e - o.margin - o.closeSize[1]), info: f.translate(i - o.infoSize[0] - o.margin, e - o.margin - o.infoSize[1]), title: f.translate(0, o.margin + o.titleSize[1], 2), tag: f.translate(0, 0, 1), titleOpacity: 0, tagOpacity: 0, infoOpacity: 1}, this._init && (this._visible ? t || this.activate() : this.deactivate())
    }

    function n(t) {
        function i() {
            this.tagSurface.setSize(h.tagSize), this.tagSurface.setProperties({paddingRight: "0px", paddingLeft: "0px", paddingTop: "0px", backgroundColor: "transparent"}), this.titleSurface.setProperties({padding: "0px", fontSize: "16px", top: "0px"})
        }

        function e() {
            h.titleSize[0] = u[0] - 3 * h.margin, this.titleSurface.setSize(h.titleSize), h.tagSize[0] = u[0] - 4 * h.margin, h.tagSize[1] = h.size[1] - h.titleSize[1]
        }

        function s() {
            this.startPositions.title = f.translate(-a[1] + n - .5 * h.titleSize[0], 0, 0), this.finalPositions.title = f.translate(h.size[0] + 2 * h.margin, 0, 0), this.startPositions.tag = f.translate(-a[1] + n, h.titleSize[1] + 2 * h.margin, 0), this.finalPositions.tag = f.translate(h.size[0] + 2 * h.margin, h.titleSize[1] + 2 * h.margin, 0)
        }

        function o() {
            var t = h.size[0] + 2 * h.margin, i = u[1] < h.margin ? h.margin : 0;
            this.startPositions.title = f.translate(t + 200, i, -5), this.finalPositions.title = f.translate(t, i, 0), this.startPositions.tag = f.translate(h.size[0] + 2 * h.margin + 200, h.titleSize[1] + h.margin + i), this.finalPositions.tag = f.translate(h.size[0] + 2 * h.margin, h.titleSize[1] + h.margin + i);
            var e = f.getTranslate(this.finalPositions.close);
            this.startPositions.close = f.translate(e[0], e[1] + i - 500, e[1]), this.finalPositions.close = f.translate(e[0], e[1] + i, e[1])
        }

        this._isMobile = !1;
        var n = window.innerWidth, r = window.innerHeight, a = this.originOffset, h = this.options, u = [.5 * (n - h.size[0]), .5 * (r - h.size[1])];
        i.call(this), e.call(this), this.startPositions = {close: f.translate(-this.options.closeSize[0] - this.options.margin, 0), tag: f.translate(this.options.size[0] - 50, -1), title: void 0, info: f.identity}, this.finalPositions = {close: f.translate(-this.options.closeSize[0] - 2 * this.options.margin, 0), tag: f.translate(this.options.size[0] + this.options.margin, 0), title: void 0, info: f.identity, tagOpacity: 1, titleOpacity: 1, infoOpacity: 0}, this.transitions.title = {method: "physics", spring: {period: this._springTitlePeriod || 800, dampingRatio: this._springTitleDamping || .75}, wall: !0, v: 0}, this.transitions.tag = {method: "physics", spring: {period: this._springTagPeriod || 500, dampingRatio: this._springTagDamping || .65}, wall: !0, v: 0}, u[1] > this.options.titleSize[1] + h.margin ? s.call(this) : o.call(this), this._init && (this._visible ? t || this.activate() : this.deactivate())
    }

    function r(t) {
        var i = "";
        return t.series && (i += '<p class="lightbox-tag-title"> SERIES </p>', i += '<p class="lightbox-tag-content">' + t.series + "</p>"), t.edition && (i += '<p class="lightbox-tag-title"> EDITION </p>', i += '<p class="lightbox-tag-content">' + t.edition + "</p>"), t.artist && (i += '<p class="lightbox-tag-title"> ARTIST </p>', i += '<p class="lightbox-tag-content">' + t.artist + "</p>"), t.date && (i += '<p class="lightbox-tag-title"> DATE</p>', i += '<p class="lightbox-tag-content">' + t.date + "</p>"), t.material && (i += '<p class="lightbox-tag-title"> MATERIAL </p>', i += '<p class="lightbox-tag-content">' + t.material + "</p>"), t.size && (i += '<p class="lightbox-tag-title"> SIZE </p>', i += '<p class="lightbox-tag-content">' + t.size + "</p>"), i
    }

    function a() {
        m.apply(this, arguments), this._isMobile, this._init = !1, this._visible = !1, this._infoVisible = !1, this._springTitleDamping, this._springTitlePeriod, this._springTagDamping, this._springTagPeriod, this._lastSize, this.startPositions = {}, this.finalPositions = {}, this.originOffset = [0, 0, 0], this.layouts = {mobile: {minWidth: 0, maxWidth: 1137, layouts: [
            {fns: [s.bind(this), o.bind(this)]}
        ]}, desktop: {minWidth: 1138, maxWidth: 4e3, layouts: [
            {fns: [s.bind(this), n.bind(this)]}
        ]}}, w.add(this.layouts), this.transitions = {close: {curve: _.inOutBackNorm, duration: 500}, titleOp: {curve: _.inSineNorm, duration: 500}, title: {curve: _.outBackNorm, duration: 500}, tag: {curve: _.outBackNorm, duration: 500}, physics: {method: "physics", spring: {period: 300, dampingRatio: .45}, wall: !0, v: 0}, info: {curve: _.outBackNorm, duration: 400}}, this.options.imgSrc ? (this.image = new Image, this.image.src = this.options.imgSrc, this.image.width = this.options.size[0], this.image.height = this.options.size[1], this.mainSurface = new d({size: this.options.size, content: this.image, properties: {backgroundColor: "#494949"}})) : this.mainSurface = new d({size: this.options.size, properties: {backgroundColor: "#494949"}}), y.isMobile() && (this.options.closeSize = [100, 100], this.options.infoSize = [100, 100]), this.titleSurface = new d({size: this.options.titleSize, content: '<span class="lightbox-title">' + this.options.englishTitle + '</span><span class="lightbox-spanish-title">' + this.options.spanishTitle + "</span>"}), this.tagSurface = new d({size: this.options.tagSize, content: r(this.options.tagData)}), w.triggerLayout(this.layouts), this.titleMod = new g({transform: this.startPositions.title, opacity: 0}), this.tagMod = new g({transform: this.startPositions.tag, opacity: 0}), this.infoMod = new g({transform: this.startPositions.info, opacity: 0}), this._clickClose = u.bind(this), this._clickInfo = p.bind(this), this.node.add(this.mainSurface), this.node.add(this.titleMod).link(this.titleSurface), this.node.add(this.tagMod).link(this.tagSurface), this.eventInput.pipe(this.eventOutput), this.mainSurface.on("click", h.bind(this)), this._init = !0
    }

    function h(t) {
        t.preventDefault(), t.stopPropagation(), this.eventOutput.emit("lightbox")
    }

    function u() {
        this.emit("lightbox", void 0);
        var t = c(this.finalPositions.close, [.5, .5, 1], this.options.closeSize);
        b.setTransform(t, this.options.clickCurve)
    }

    function p(t) {
        t.preventDefault(), t.stopPropagation();
        var i = c(this.finalPositions.info, [.5, .5, 1], this.options.infoSize);
        S.halt(), S.setTransform(i, this.options.clickCurve, this._resetInfoButton.bind(this)), this._toggleInfo()
    }

    function c(t, i, e) {
        var s = f.getTranslate(t);
        return s[0] += .5 * (1 - i[0]) * e[0], s[1] += .5 * (1 - i[1]) * e[1], f.move(f.scale(i[0], i[1], i[2]), s)
    }

    function l(t, i, e) {
        if (t[0] > i[0] * e[0]) {
            var s = t[1] / t[0];
            t[0] = Math.round(i[0] * e[0]), t[1] = Math.round(t[0] * s)
        }
        if (t[1] > i[1] * e[1]) {
            var o = t[0] / t[1];
            t[1] = Math.round(i[1] * e[1]), t[0] = Math.round(t[1] * o)
        }
    }

    var d = t("famous/Surface");
    t("famous/ImageSurface");
    var f = t("famous/Matrix"), m = t("famous/View"), g = t("famous/Modifier");
    t("famous-utils/Time");
    var y = t("famous-utils/Utils"), _ = t("famous-animation/Easing"), v = Lightbox.ArrayHelpers, b = Lightbox.CloseButton, S = Lightbox.InfoButton, w = Lightbox.LayoutEngine;
    a.prototype = Object.create(m.prototype), a.prototype.constructor = a, a.DEFAULT_OPTIONS = {imgSrc: void 0, englishTitle: "Main Title goes here.", spanishTitle: "Sub title goes here.", tagData: {}, containerSize: [window.innerWidth, window.innerHeight], size: [1e3, 800], maxImageSize: [1e3, 800], titleSize: [1e3, 100], desktopTagSize: [250, 300], tagSize: [250, 300], margin: 20, mainSurfaceRatio: [.7, 1], closeSize: [45, 45], infoSize: [45, 45], clickCurve: {curve: _.outBounceNorm, duration: 300}, mobileTagBgColor: "rgba(25, 25, 25, 0.8)"}, a.prototype.setVisibile = function (t) {
        this._visible = t
    }, a.prototype._resetInfoButton = function () {
        S.setTransform(this.finalPositions.info, this.options.clickCurve)
    }, a.prototype._toggleInfo = function () {
        this._infoVisible ? this._hideInfo() : this._showInfo()
    }, a.prototype._hideInfo = function () {
        this._infoVisible = !1, this.tagMod.halt(), this.tagMod.setTransform(this.startPositions.tag, this.transitions.tag), this.tagMod.setOpacity(0, this.transitions.tag), this.titleMod.halt(), this.titleMod.setOpacity(0, this.transitions.titleOp), this.titleMod.setTransform(this.startPositions.title, this.transitions.title)
    }, a.prototype._showInfo = function () {
        this._infoVisible = !0, this.tagMod.halt(), this.tagMod.setTransform(this.finalPositions.tag, this.transitions.tag), this.tagMod.setOpacity(1, this.transitions.tag), this.titleMod.halt(), this.titleMod.setOpacity(1, this.transitions.titleOp), this.titleMod.setTransform(this.finalPositions.title, this.transitions.title)
    }, a.prototype.render = function () {
        return this._visible ? this.node.render() : void 0
    }, a.prototype.getSize = function () {
        return this.mainSurface.getSize()
    }, a.prototype.setOffset = function (t) {
        this._lastSize = [this.options.size[0], this.options.size[1]], this.parentOffset = t, this._isMobile ? o.call(this, !0) : n.call(this, !0)
    }, a.prototype.activate = function () {
        this._buttonEvents(), b.halt(), b.setOpacity(1, this.transitions.close), b.setTransform(this.finalPositions.close, this.transitions.physics), S.halt(), S.setOpacity(this.finalPositions.infoOpacity, this.transitions.info), S.setTransform(this.finalPositions.info, this.transitions.info), 0 == this._isMobile ? (this.titleMod.halt(), this.titleMod.setOpacity(this.finalPositions.titleOpacity, this.transitions.titleOp), this.titleMod.setTransform(this.finalPositions.title, this.transitions.title), this.tagMod.halt(), this.tagMod.setOpacity(this.finalPositions.tagOpacity, this.transitions.tag), this.tagMod.setTransform(this.finalPositions.tag, this.transitions.tag)) : this._hideInfo()
    }, a.prototype.deactivate = function () {
        this._visible && (this._removeButtonEvents(), b.halt(), b.setOpacity(0, this.transitions.close), b.setTransform(this.startPositions.close, this.transitions.close), S.halt(), S.setOpacity(0, this.transitions.info), S.setTransform(this.startPositions.info, this.transitions.info), this.titleMod.halt(), this.titleMod.setOpacity(0, this.transitions.titleOp), this.titleMod.setTransform(this.startPositions.title, this.transitions.title), this.tagMod.halt(), this.tagMod.setOpacity(0, this.transitions.tag), this.tagMod.setTransform(this.startPositions.tag, this.transitions.tag))
    }, a.prototype._buttonEvents = function () {
        b.on("click", this._clickClose), S.on("click", this._clickInfo)
    }, a.prototype._removeButtonEvents = function () {
        b.unbind("click", this._clickClose), S.unbind("click", this._clickInfo)
    }

    Lightbox.BackTile = a;
});