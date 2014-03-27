Package.describe({
    summary: 'The lightbox controls for famous'
});

Package.on_use(function (api) {
    api.use('famous');

    //suspect that these are not used: title scene, title scene 2, blank lightbox,
    api.add_files([
        'lightbox.js', 'array_helpers.js', 'image_button.js', 'close_button.js', 'info_button.js', 'layout_engine.js', 'back_tile.js', 'title_scene.js', 'title_scene_2.js', 'lightbox_widget.js', 'lightbox_scene.js', 'blank_lightbox.js', 'app.js'
    ], 'client');

    api.export(['Lightbox'], 'client');
});