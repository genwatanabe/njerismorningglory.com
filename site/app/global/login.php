<div class="text-right nmg-login" ng-if="isLogInVisible">
	<form class="form-inline" role="form" method="post" action="#/login">
	  <div class="form-group">
	    <label class="sr-only" for="exampleInputEmail2">Username</label>
	    <input type="text" class="form-control" name="username" placeholder="Enter Username">
	  </div>
	  <div class="form-group">
	    <label class="sr-only" for="exampleInputPassword2">Password</label>
	    <input type="password" class="form-control" name="password" placeholder="Password">
	  </div>
	  <button type="submit" class="btn btn-default" name="login">Sign In</button>
	</form>
</div>