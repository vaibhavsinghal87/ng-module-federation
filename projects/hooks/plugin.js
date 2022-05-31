const webpack = require('webpack');

exports.defaults = {
    config: function(cfg) {
        var time = new Date().getTime();
        var pattern = 'getting-started.[name].' + time + '.js';
        cfg.output.filename = pattern;
        return cfg;
    },
    post: [
        new webpack.BannerPlugin('----- Vaibhav was here -----')
    ]
}