Famous.loaded(function (require) {
    function s() {
        o.apply(this), this.lightbox = new u({commonFrontProperties: {backgroundColor: "white",boxShadow: "0px 1px 1px 1px #333",borderRadius: "5px",lineHeight: "400px",backgroundColor: "#ccc",textAlign: "center"},commonBackProperties: {backgroundColor: "#33ccff"},columnWidth: 400,rowHeight: 400}), this.initUI(), this.parentUI = new p, this.parentUI.setCurrentObject(this), n.pipe(this.parentUI), this.node.add(this.parentUI), this.node.add(this.lightbox), this.events(), this.setData()
    }
    var o = require("famous-scene/Scene");
    require("famous/Surface"), require("famous/Matrix");
    var n = require("famous/Engine");
    require("famous/Utility");
    var r = require("famous-utils/Utils"), a = require("app/widgets/FrontTile"), h = Lightbox.BackTile, u = require("app/widgets/Lightbox"), p = require("core/Interface");
    require("app/data"), s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {}, s.prototype.events = function() {
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