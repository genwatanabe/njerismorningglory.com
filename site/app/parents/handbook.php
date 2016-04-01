<?php session_start(); ?>
<parents-directive title="Parent Handbook">
<?php if (!isset($_SESSION['logged'])) { ?>
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="nmg-bg-light-1">
        <p class="lead">You are not authorized to view this page's contents. Please sign in by clicking "Sign In" icon at the top of this page.</p>
      </div>
    </div>
<?php } else { ?>
    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="nmg-bg-light-1">
        	<table class="table table-bordered table-hover">
	        	<thead>
	                <tr class="active">
	                    <td>
	                        <p>Document Image</p>
	                    </td>
	                    <td>
	                        <p>Description</p>
	                    </td>
	                </tr>
	            </thead>
	            <tbody>
	                <tr>
	                    <td>
	                        <p><a href="assets/pdf/parents/NMG_Parent_Hand_Book_2016to2017.pdf"><img src="assets/img/parents/parent_handbook_cover_2013.png" alt="Parent Handbook 2016-2017 Cover" title="PLEASE RIGHT CLICK AND CHOOSE THE 'SAVE AS...' OPTION."/>
	                        </a></p>
	                        <p>(<a href="assets/pdf/parents/NMG_Parent_Hand_Book_2016to2017.pdf" title="PLEASE RIGHT CLICK AND CHOOSE THE 'SAVE AS...' OPTION.">Download PDF</a>)</p>
	                    </td>
	                    <td>
	                        <p>Parent Handbook 2016-2017 for Njeri's Morning Glory School and Art Center</p>
	                    </td>
	                </tr>
	                
	                <!--
	                <tr>
	                    <td>
	                        <p><a href="assets/pdf/parents/Handbook_Acknowledgement_20130818.pdf"><img src="assets/img/parents/Acknowledgements.jpg" width="161" height="201" alt="Acknowledgements" /></a></p>
                        	<p>(<a href="assets/pdf/parents/Handbook_Acknowledgement_20130818.pdf">Download form</a>)</p>
	                    </td>
	                    <td>
	                        <p>Handbook Acknowledgement form</p>
                        	<p>Acknowlege that you've read this handbook</p>
	                    </td>
	                </tr>
	                <tr>
	                    <td>
	                        <p><a href="assets/pdf/parents/Safety_Procedures_Acknowledgement_20130818.pdf"><img src="assets/img/parents/NatureDay_and_FieldTrip_Safety_Procedures.jpg" width="164" height="207" alt="Nature Day Safe Procedure" /></a></p>
                        <p>(<a href="assets/pdf/parents/Safety_Procedures_Acknowledgement_20130818.pdf">Download form</a>)</p>
	                    </td>
	                    <td>
	                        <p>Nature Day/Field Trip Safety Procedures Acknowledgement and Parent Approval form</p>
	                    </td>
	                </tr>
	                -->
	            </tbody>
	        </table>

        </div>
    </div>
<?php } ?>
</parents-directive>
