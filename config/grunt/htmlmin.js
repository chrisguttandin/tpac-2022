module.exports = {
    default: {
        files: [
            {
                cwd: 'build/tpac-2022',
                dest: 'build/tpac-2022',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }
};
