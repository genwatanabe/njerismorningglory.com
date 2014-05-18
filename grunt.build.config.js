/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * As this is a small site, there is no concept of src nor dst. They are identical.
   * It means all development and built files stay in this build_dir folder.
   */
  build_dir: 'site',

  ftp_dir: 'njerismorningglory.com/_debug',
  ftp_host: 'njerismorningglory.com',
  ftp_port: '21',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 
          'site/app/script-src.js',
          'site/app/**/script-src.js'
        ],
    sass: ['site/app/style-src.scss']
  },

  img_src_dir: 'site/assets/img-minify-env/src',
  img_dst_dir: 'site/assets/img-minify-env/dst'
};
