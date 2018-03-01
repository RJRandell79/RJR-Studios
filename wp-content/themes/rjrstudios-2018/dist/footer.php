
<!-- This is the footer.php -->
<?php $analytics = get_option( 'analytics' ); ?>

<footer class="footer container-fluid">
	<div class="container">
		<p>&copy;<?php echo date( 'Y' ); ?>&nbsp;Rob Randell.</p>
		<p><a href="#" title="Privacy policy">Privacy Policy</a></p>
	</div>

	<?php wp_footer(); ?>

	<script type="text/javascript">
		const observer = lozad(); // lazy loads elements with default selector as '.lozad'
		observer.observe();
	</script>

    <?php if( $analytics && $_SERVER[ 'SERVER_NAME' ] != 'rjrstudios.local' ) : echo $analytics; endif; ?>

</footer>

<a id="top" class="jumpto backtotop" href="#" title="Back to top">
	<i class="fa fa-chevron-up" aria-hidden="true"></i>
</a>

</body>
</html>
