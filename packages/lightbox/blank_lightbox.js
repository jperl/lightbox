Famous.loaded(function (t) {
    function s() {
        o.apply(this), this.lightbox = new u({commonFrontProperties: {backgroundColor: "white",boxShadow: "0px 1px 1px 1px #333",borderRadius: "5px",lineHeight: "400px",backgroundColor: "#ccc",textAlign: "center"},commonBackProperties: {backgroundColor: "#33ccff"},columnWidth: 400,rowHeight: 400}), this.initUI(), this.parentUI = new p, this.parentUI.setCurrentObject(this), n.pipe(this.parentUI), this.node.add(this.parentUI), this.node.add(this.lightbox), this.events(), this.setData()
    }
    var o = t("famous-scene/Scene");
    t("famous/Surface"), t("famous/Matrix");
    var n = t("famous/Engine");
    t("famous/Utility");
    var r = t("famous-utils/Utils"), a = t("app/widgets/FrontTile"), h = t("app/widgets/BackTile"), u = t("app/widgets/Lightbox"), p = t("core/Interface");
    t("app/data"), s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.prototype.events = function() {
        this.parentUI.on("showUI", function() {
            this.showUI()
        }.bind(this)), this.parentUI.on("hideUI", this.hideUI.bind(this)), this.lightbox.on("selectionView", this.parentUI.hideAllUI.bind(this.parentUI)), this.lightbox.on("gridView", this.parentUI.showAllUI.bind(this.parentUI))
    }, s.prototype.initUI = function() {
        this.nonDeboucnedReflow = this.lightbox.layout.reflow.bind(this.lightbox.layout), this.reflowGrid = r.debounce(this.lightbox.layout.reflow.bind(this.lightbox.layout), 150), this.labelProperties = {borderBottom: "1px solid white",color: "rgba( 255, 255, 255, 1 )",fontSize: "16px"}, this.autoUI = [{type: "label",uiOptions: {content: "GRID",properties: this.labelProperties}}, {key: "columnGutters",type: "slider",object: this.lightbox.layout.options,callback: this.reflowGrid,uiOptions: {range: [0, 200],name: "Column Gutters",defaultValue: this.lightbox.layout.options.columnGutters,backOpacity: .8}}, {key: "rowGutters",type: "slider",object: this.lightbox.layout.options,callback: this.nonDeboucnedReflow,uiOptions: {range: [0, 200],name: "Row Gutters",defaultValue: this.lightbox.layout.options.rowGutters}}, {key: "topMargin",type: "slider",object: this.lightbox.layout.options,callback: this.nonDeboucnedReflow,uiOptions: {range: [0, 400],name: "topMargin",defaultValue: this.lightbox.layout.options.topMargin}}, {key: "bottomMargin",type: "slider",object: this.lightbox.layout.options,callback: this.nonDeboucnedReflow,uiOptions: {range: [0, 400],name: "bottomMargin",defaultValue: this.lightbox.layout.options.bottomMargin}}, {type: "label",uiOptions: {content: "LIGHTBOX",properties: this.labelProperties}}, {type: "slider",callback: this.lightbox.setDeactivateZDepth.bind(this.lightbox),uiOptions: {range: [100, 5e3],name: "Deactivate Depth",defaultValue: this.lightbox.layout.options.bottomMargin}}, {key: "simplexAmplitude",type: "slider",object: this.lightbox.options,uiOptions: {range: [0, 500],name: "Duration Variance",defaultValue: this.lightbox.options.simplexAmplitude}}]
    }, s.prototype.showUI = function() {
        this.lightbox.layout.showDebug()
    }, s.prototype.hideUI = function() {
        this.lightbox.layout.hideDebug()
    }, s.prototype.setData = function(t) {
        this.data = t;
        for (var i = [], e = 0; 80 > e; e++) {
            var s = new a({}), o = new h({size: [500, 800]});
            i.push({front: s,back: o})
        }
        this.lightbox.setContent(i)
    }

    Lightbox.BlankLightbox = s;
});