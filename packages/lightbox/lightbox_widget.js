Famous.loaded(function (t) {
    function s() {
        c.apply(this, arguments), this.content, this._lastIndex, this._simplexOffset = 0, this.tiles = [], this.tileModifiers = [], this.simplexGradient = [], this.layout = new f({columnWidth: this.options.columnWidth, rowHeight: this.options.rowHeight, columnGutters: 200, rowGutters: 60}), this.simplex = new d, this.layout.getSize(), this.eventInput.pipe(this.eventOutput), this.eventArbiter = new p, u.pipe(this.eventArbiter), this.eventArbiter.forMode(g).pipe(this.layout), this.eventArbiter.setMode(g)
    }

    function o(t) {
        var i;
        i = void 0 == this._activeTile ? this._lastIndex ? this._lastIndex : t : this._activeTile, i = (i + t) % this.content.length, -1 == i && (i = this.content.length - 1), n.call(this, i)
    }

    function n(t) {
        void 0 == t || t == this._lastIndex && !this.tiles[t]._frontIsVisible ? (a.call(this), this.emit("gridView"), this.eventArbiter.setMode(g)) : (r.call(this, t), this._lastIndex = t, this.eventArbiter.setMode(y))
    }

    function r(t) {
        this._activeTile = t;
        for (var i = 0; i < this.tiles.length; i++)
            if (i !== t) {
                var e = this._getDelay(i);
                e ? l.setTimeout(this.tiles[i].sendBack.bind(this.tiles[i]), e) : this.tiles[i].sendBack.call(this.tiles[i])
            } else
                this.tiles[i].showBack(), this.emit("selectionView", this.tiles[i])
    }

    function a(t) {
        this._activeTile = void 0;
        for (var i = this.tiles.length, e = 0; i > e; e++) {
            var s = 0 == e ? t : void 0, o = this._getDelay(e);
            o ? l.setTimeout(this.tiles[e].showFront.bind(this.tiles[e], s), o) : this.tiles[e].showFront(s)
        }
        this._simplexOffset++
    }

    function h() {
    }

    t("famous/Surface"), t("famous/Matrix");
    var u = t("famous/Engine"), p = t("famous/EventArbiter"), c = t("famous/View");
    t("famous/Modifier");
    var l = t("famous-utils/Time");
    t("famous-utils/Utils"), t("famous-utils/KeyCodes");
    var d = t("famous-generative/SimplexNoise");
    t("famous-animation/Easing");
    var f = t("app/widgets/GridLayout_ui"), m = t("app/widgets/LightboxRenderableTile"), g = 0, y = 1;
    s.prototype = Object.create(c.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {commonFrontProperties: {}, commonBackProperties: {}, columnWidth: 400, rowHeight: 400, simplexAmplitude: 0, fadeProperties: {backgroundColor: "#000", pointerEvents: "none"}, fadeOutCurve: {duration: 350, curve: "outSineNorm"}, fadeInCurve: {duration: 350, curve: "inOutSineNorm"}}, s.prototype.setActive = function (t) {
        n.call(this, t)
    }, s.prototype.setContent = function (t) {
        this.content = t;
        for (var i = 0; i < this.content.length; i++) {
            var e = this.content[i];
            e.fade = !this._usingFader, this.simplexGradient.push(.5 * (this.simplex.noise2D(.5 * i, 1) + 1));
            var s = new m(e);
            this.tiles.push(s), s.on("lightbox", n.bind(this, i))
        }
        this.layout.append(this.tiles), this.node.add(this.layout), h.call(this)
    }, s.prototype.showNext = function () {
        o.call(this, 1)
    }, s.prototype.showPrev = function () {
        o.call(this, -1)
    }, s.prototype.setDeactivateZDepth = function (t) {
        for (var i = 0; i < this.tiles.length; i++)
            this.tiles[i].setDeactivateZDepth(t)
    }, s.prototype._getDelay = function (t) {
        return this.simplexGradient[(t + this._simplexOffset) % this.simplexGradient.length] * this.options.simplexAmplitude
    }, Lightbox.Lightbox = s;
});