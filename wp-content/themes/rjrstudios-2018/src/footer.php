
<!-- This is the footer.php -->
<?php $analytics = get_option('analytics'); ?>

<footer class="footer container-fluid">
	<div class="container">
		<p>&copy;<?php echo date('Y'); ?>&nbsp;Rob Randell.</p>
		<p><a href="<?php the_permalink(
      237
  ); ?>" title="Privacy policy">Privacy Policy</a></p>
	</div>

	<?php wp_footer(); ?>

    <?php if ($analytics && $_SERVER['SERVER_NAME'] != 'rjrstudios.local'):
        echo $analytics; ?>
	<script>document.addEventListener( 'wpcf7mailsent', function( event ) { ga('send', 'event', 'Contact', 'Submission'); }, false );</script>
    <?php
    endif; ?>

</footer>

<a id="top" class="jumpto backtotop" href="#" title="Back to top">
	<i class="fa fa-chevron-up" aria-hidden="true"></i>
</a>

<!--Start Cookie Script-->
<!-- <script type="text/javascript" charset="UTF-8" src="http://chs03.cookie-script.com/s/3580a7c6e9aba4f402773c6e93983357.js"></script> -->
<!--End Cookie Script-->
</body>
</html>
