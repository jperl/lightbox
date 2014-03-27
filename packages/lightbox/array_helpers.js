Famous.loaded(function (t) {
    function s(t, i) {
        return [t[0] - i[0], t[1] - i[1]]
    }

    function o(t, i) {
        return [t[0] - i[0], t[1] - i[1]]
    }

    function n(t, i) {
        return [t[0] * i[0], t[1] * i[1]]
    }

    function r(t, i) {
        return [t[0] * i, t[1] * i]
    }

    Lightbox.ArrayHelpers = {halfOf: function (t) {
        return r(t, .5)
    }, sub: o, add: s, multiply: n, scalar: r};
});