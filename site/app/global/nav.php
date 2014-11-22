<?php if (nmg_is_logged()) { ?>
<div class="row nmg-nav">
    <div class="container">
        <div class="row">
            <h4>School Member Only Menu</h4>
            <p class="lead"><a href="#/parents/handbook">Handbook</a></p>
        </div>
    </div>
</div>
<?php } ?>
<div class="row nmg-nav nmg-toggle" ng-if="isMenuVisible">
    <div class="container">
        <div class="row">
            <div class="nmg-nav-col">
                	<h4>About</h4>
                    <a href="#/about/school">Our School</a>
                    <a href="#/about/teachers">Teachers</a>
                    <a href="#/about/contact">Contact Us</a>
                    <a href="#/about/tour">Tours and Interviews</a>
                    <a href="#/about/waldorf">What is Waldorf Education?</a>
            </div>
            <div class="nmg-nav-col">
                	<h4>Curriculum</h4>
                    <a href="#/curriculum/overview">Overview</a>
                    <a href="#/curriculum/art-programs">Art Programs</a>
                    <h5>Early Childhood</h5>
                    Preschool (description coming soon)
                    <a href="#/curriculum/kindergarten">Kindergarten</a>
                    <h5>Grades</h5>
                    <a href="#/curriculum/1st-grade">First Grade</a>
                    <a href="#/curriculum/2nd-grade">Second Grade</a>
                    <a href="#/curriculum/3rd-grade">Third Grade</a>
                    <a href="#/curriculum/4th-grade">Fourth Grade</a>
                    <a href="#/curriculum/5th-grade">Fifth Grade</a>
            </div>
            <div class="nmg-nav-col">
                	<h4>Parent Resources</h4>
                    <a href="#/parents/calendar">School Calendar</a>
                    <?php if (nmg_is_logged()) { ?>
                        <a href="#/parents/handbook">Handbook</a>
                    <?php } else { ?>
                        <a href="#/login">Handbook&nbsp;<i class="glyphicon glyphicon-lock" title="You will be prompted to sign-in in order to view the handbook."></i></a>
                    <?php } ?>
                    
            </div>
            <div class="nmg-nav-col">
                	<h4>Programs</h4>
                    <a href="#/programs/hands-on-art">Hands On Art</a>
                    <a href="#/programs/spring-art-camp">Spring Art Camp</a>
                    <a href="#/programs/summer-art-camp">Summer Art Camp</a>
                    <a href="#/programs/ski-week-art-camp">Ski Week Art Camp</a>
            </div>
            <div class="nmg-nav-col">
                	<h4>Events</h4>
                    <a href="#/events/open-house">Open House</a>
                    <a href="#/events/spring-faire">Spring Faire</a>
                    <!-- <a href="#/events/mfj">Magic Forest Journey</a> -->
                    <a href="#/events/mae">Magical Autumn Evening</a>
                    <a href="#/events/amahl">Amahl and the Night Visitors</a>
            </div>
            <div class="nmg-nav-col">
                	<h4>Community</h4>
                    <a href="#/community/activities">School Activities</a>
                    <a href="http://njerismorningglory.com/blog/" target="_blank">Our Blog</a>
                    <a href="http://sjwaldorf1.exblog.jp/" target="_blank">Japanese Blog</a>
                    <a href="#/community/links">Links</a>
            </div>
        </div>
    </div>
</div>
