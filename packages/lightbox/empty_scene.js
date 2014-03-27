Famous.loaded(function (t) {
    function s() {
        o.apply(this, arguments), this.eventInput.pipe(this.eventOutput)
    }

    t("famous/Matrix"), t("famous/Modifier"), t("famous/Engine"), t("famous/Utility"), t("famous/ImageSurface"), t("famous/Surface"), t("famous-animation/RegisterEasing"), t("famous-views/Scrollview");
    var o = t("famous-scene/Scene");
    t("famous-utils/Utils"), t("famous-utils/Time"), t("famous-color/ColorPalette"), t("famous-color/Color"), t("famous-ui/Text/Label"), t("famous-ui/AutoUI"), t("app/widgets/TorqueRenderable"), t("app/SceneController"), t("app/SceneTransitions"), s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}

    Lightbox.EmptyScene = s;
})