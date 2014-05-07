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
                    <a href="#/curriculum/kindergarten">Kindergarten</a>
                	<h5>Grades</h5>
                    <a href="#/curriculum/1st-grade">First Grade</a>
                    <a href="#/curriculum/2nd-grade">Second Grade</a>
                    <a href="#/curriculum/3rd-grade">Third Grade</a>
                    <a href="#/curriculum/4th-grade">Fourth Grade</a>
                    <a href="#/curriculum/5th-grade">Fifth Grade</a>
            </div>
            <div class="nmg-nav-col">
                	<h4>Parents</h4>
                    <a href="#/parents/calendar">School Calendar</a>
                    <?php if (nmg_is_logged()) { ?>
                        <a href="#">Parent Handbook</a>
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
                    <a href="#">Open House</a>
                    <a href="#">Spring Faire</a>
                    <a href="#">Magic Forest Journey</a>
                    <a href="#">Amahl and the Night Visitors</a>
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