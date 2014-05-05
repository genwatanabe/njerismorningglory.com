www.njerismorningglory.com


STEPS TO SET UP:

1. FIRST, install Node.js from: http://nodejs.org/
2. Install Grunt CLI (will install grunt comamnd; does not install grunt task runner):
	>sudo npm install -g grunt-cli
3. Install grunt dependencies:
	npm install --save-dev
	OR run individually:
	npm install grunt --save-dev
	npm install grunt-bump --save-dev
	npm install grunt-contrib-clean --save-dev
	npm install grunt-contrib-sass --save-dev
	npm install grunt-contrib-copy --save-dev
	npm install grunt-contrib-concat --save-dev
	npm install grunt-contrib-uglify --save-dev
	npm install grunt-contrib-watch --save-dev
	npm install grunt-contrib-jslint --save-dev
	npm install grunt-contrib-csslint --save-dev
	npm install grunt-contrib-imagemin --save-dev
	npm install grunt-contrib-htmlmin --save-dev
	npm install grunt-ftp-deploy --save-dev

4. Install SASS (see https://github.com/gruntjs/grunt-contrib-sass):
	>gem install sass
4. Create package.json.
5. Create Gruntfile.js and its config files; grunt.build.config.js and grunt.task.config.js.
6. Create a hidden file .ftppass that will be used to authenticate to ftp server by ftp-deploy task. Use the following JSON content:
	{
	  "key1": {
	    "username": "...",
	    "password": "..."
	  }
	}
7. Create a confidential credential file for database access at site/app/global/db-access.php with the following contents:
<?php
	$dbHost = "mysql.njerismorningglory.com"; 
	$dbUser = "";            //Database User Name
	$dbPass = "";            //Database Password
	$dbDatabase = "";    //Database Name
?>
DO NOT add/commit this file to git!!!


TO BUILD: Simply run 'grunt'. It will do the followings:
- Clean all the previously built script-combined-<version>.js and style-combined-<version>.css files.
- Combine all script-src.js files into one script-combined-<version>.js.
- Compile and combine all style-src.scss files into one style-combined-<version>.css.
- Update the new js/css file name (new <version>) in index-src and create index.php as an output.
- Bump the <version> number in package.json for the next build.

TO DEPLOY TO FTP:
- Run 'grunt deploy-app' to deploy the just app folder.
- Run 'grunt deploy-php' to deploy all the php files.
- Run 'grunt deploy-img' to deploy all the img files.
- Run 'grunt deploy-pdf' to deploy all the pdf files.
- Run 'grunt deploy-others' to deploy all other files.
- Run 'grunt deploy' to deploy all the files.
