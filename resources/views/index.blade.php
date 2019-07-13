<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
  <meta name="author" content="GCIS">
  <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">

    <title>Calendar</title>
	<link href="{{ mix('/css/app.css') }}" rel="stylesheet">
	<link href="{{ mix('/css/custom.css') }}" rel="stylesheet">
	
	
	<script>

	</script>
</head>
<body id="blade" class="vertical-layout vertical-menu content-detached-left-sidebar menu-expanded pace-done> bg-light">
	<div id="app">
		<app></app>
	</div>
	@if (app()->isLocal())
		<script src="{{ mix('js/app.js') }}"></script>
	@else
		<script src="{{ mix('js/manifest.js') }}"></script>
		<script src="{{ mix('js/vendor.js') }}"></script>
		<script src="{{ mix('js/app.js') }}"></script>
	@endif

</body>
</html>