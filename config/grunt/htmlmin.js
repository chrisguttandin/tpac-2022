module.exports = {
    default: {
        files: [
            {
                cwd: 'build/tpac-2022/browser',
                dest: 'build/tpac-2022/browser',
                expand: true,
                src: ['**/404.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
