Package.describe({
    summary: 'The lightbox controls for famous'
});

Package.on_use(function (api) {
    api.use('famous');

    //Not quite sure what this is: article-views/article_full_view.js

    api.add_files([
        'lightbox.js', 'blank_lightbox.js', 'app.js'
    ], 'client');

    api.export(['Paper'], 'client');
});