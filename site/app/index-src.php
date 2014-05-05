<?php session_start(); ?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="no-js"> <!--<![endif]-->

<?php
  include('app/global/vars.php');
  include('app/global/db.php');
?>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php include('app/global/seo.php'); ?>

    <title><?= $site_title; ?></title>

    <link rel="stylesheet" type="text/css" href="common/bootstrap/css/bootstrap.css">
    
    <!-- compiled CSS styles files from grunt --><% styles.forEach( function ( file ) { %>
    <link rel="stylesheet" href="<%= file %>"><% }); %>
</head>

<body>
  <!-- FACEBOOK INITIALIZATION -->
  <div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

  <!-- MAIN APPLICATION -->
  <div class="container" ng-app="app" ng-controller="AppCtrl">
    <?php
      // LOGIN DIALOG
      include('app/global/login.php');
    ?>

    <!-- TOP NAVIGATION AREA -->
    <div class="navbar" role="navigation">
      <?php if (nmg_is_logged()) { ?>
        <div class="nmg-menu-btn" ng-click="logoutButtonClick($event)">
          <a href="?logout">
            <h5 class="center nmg-menu-btn-title">Sign Out</h5>
            <i class="nmg-menu-btn-icon glyphicon glyphicon-log-out"></i>
          </a>
        </div>
      <?php } else { ?>
        <div class="nmg-menu-btn" ng-click="loginButtonClick($event)">
          <h5 class="center nmg-menu-btn-title">Sign In</h5>
          <i class="nmg-menu-btn-icon glyphicon glyphicon-log-in"></i>
        </div>
      <?php } ?>
      <div class="nmg-menu-btn">
        <a href="#/about/contact">
          <h5 class="center nmg-menu-btn-title">Contact</h5>
          <i class="nmg-menu-btn-icon glyphicon glyphicon-envelope"></i>
        </a>
      </div>
      <div class="nmg-menu-btn" ng-click="menuButtonClick($event)">
        <h5 class="center nmg-menu-btn-title">Menu</h5>
        <i class="nmg-menu-btn-icon glyphicon glyphicon-leaf"></i>
      </div>
      <a href="#/" class="nmg-bike-logo">
        <img src="assets/img/global/bike_transparent_color_vector_203x90.png">
        <div class="nmg-font">Where Education is a journey</div>
      </a>
      <h3>
        <a href="#/"><div class="nmg-school-title"><?= $site_title ?></div></a>
      </h3>
    </div>

    <?php // NAVIGATION ITSELF
      include('app/global/nav.php');
    ?>

    <div ng-view></div>

    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="text-center nmg-landing-ad-box">
            <!-- FACEBOOK LINK -->
            <a href="https://www.facebook.com/pages/Njeris-Morning-Glory-School-and-Art-Center/347516388712926" target="_blank">
              <h4>follow us on&nbsp;<img ng-src="assets/img/global/f_logo.png" class="nmg-facebook" alt="Njeri's Morning Glory School and Art Center on facebook"></h4>
            </a>
            <!--- FACEBOOK "Like" ICON -->
            <!-- https://developers.facebook.com/docs/plugins/like-button/ -->
            <div class="fb-like" data-href="https://www.facebook.com/pages/Njeris-Morning-Glory-School-and-Art-Center/347516388712926" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
          
            <br><br>

            <!-- Razoo: Donation button (until May 6) -->
            <p><br></p>
            <p class="lead">Our school is a Non-Profit Organization. Your donation helps us! Thank you!</p>
            <a href="http://www.razoo.com/story/Njeri-S-Morning-Glory-School-And-Art-Center?referral_code=share" target="_blank"><img alt="Donate Now" border="0" src="assets/img/global/razoo_svgives_2014_05.png" style="width:241px;height:142px;"/></a>
            <!-- Razoo's original code: <a href="http://www.razoo.com/story/Njeri-S-Morning-Glory-School-And-Art-Center?referral_code=share"><img alt="Donate Now" border="0" src="https://razoo-assets-prod.s3.amazonaws.com/public/assets/brands/1/donate_now.png" /></a>-->

          </div>

          <!-- <a href="http://njerismorningglory.com/blog/" target="_blank"><img src="<?=$prepend?>assets/images/checkout_our_blog.png" border="0"/></a> -->
          <h5><small>&copy; <?=date('Y')?> <?= $site_title ?> All rights reserved.</small></h5>
      </div>
    </div>
  </div>

  <!--[if lt IE 9]>
    <p class="chromeframe" style="z-index:1000;position:absolute;font-size:3em;text-align:center;vertical-align:middle;top:50%;left:0px;width:100%;height:100%;background-color:#EEEEEE;">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
  <![endif]-->

  <script src="common/angular/angular.min.js"></script>
  <script src="common/angular/angular-route.min.js"></script>
  <script src="common/angular/angular-resource.min.js"></script>
  <script src="common/angularui/ui-bootstrap-tpls-0.11.0-SNAPSHOT.min.js"></script>
  <!-- compiled JavaScript files from grunt --><% scripts.forEach( function ( file ) { %>
  <script type="text/javascript" src="<%= file %>"></script><% }); %>
</body>
</html>
