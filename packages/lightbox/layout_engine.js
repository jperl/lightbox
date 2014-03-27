Famous.loaded(function (t) {
    function s() {
        p.on("resize", c.debounce(r.bind(this), 400)), this.layouts = [], this.screenSize, n.call(this)
    }
    function o(t) {
        return this.layouts.indexOf(t)
    }
    function n() {
        this.screenSize = [window.innerWidth, window.innerHeight]
    }
    function r() {
        n.call(this);
        for (var t = 0; t < this.layouts.length; t++)
            a.call(this, t)
    }
    function a(t) {
        var i = this.layouts[t], e = h.call(this, i);
        e && u.call(this, e)
    }
    function h(t) {
        var i, e, s = [];
        for (var o in t)
            t[o].minWidth < this.screenSize[0] && t[o].maxWidth > this.screenSize[0] && s.push(o);
        if (0 == s.length)
            return console.warn("No possible layout"), void 0;
        for (var n = 0; n < s.length; n++)
            if (i) {
                var r = t[s[n]];
                r.maxWidth > i && (e = s[n], i = r.maxWidth)
            } else
                i = t[s[n]].maxWidth, e = s[n];
        return t[e]
    }
    function u(t) {
        for (var i = t.layouts, e = 0; e < i.length; e++) {
            var s = i[e];
            if (s.transform && (s.matrix && s.transform.setTransform(s.matrix, s.transition, s.transformCallback), s.origin && s.transform.setOrigin(s.origin, s.originTransition, s.originCallback), s.opacity && s.transform.setOpacity(s.opacity, s.opacityTransition, s.opacityCallback), s.size && s.transform.setSize(s.size, s.sizeTransition, s.sizeCallback)), s.fns)
                if (c.isArray(s.fns))
                    for (var e = 0; e < s.fns.length; e++)
                        s.fns[e]();
                else
                    s.fns()
        }
    }
    var p = t("famous/Engine"), c = t("famous-utils/Utils");
    s.prototype.add = function(t) {
        this.layouts.push(t)
    }, s.prototype.remove = function(t) {
        var i = o(t);
        -1 !== i && this.layouts.splice(1, i)
    }, s.prototype.triggerLayout = function(t) {
        if (t) {
            var i = o.call(this, t);
            -1 !== i && a.call(this, i)
        } else
            r.call(this)
    }, s.prototype.getScreenSize = function() {
        return this.screenSize
    };
    var l = new s;

    Lightbox.LayoutEngine = l;
});