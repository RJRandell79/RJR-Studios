
<!-- This is the footer.php -->
<?php $analytics = get_option( 'analytics' ); ?>

<footer class="footer container-fluid">
	<div class="container">
		<p>&copy;<?php echo date( 'Y' ); ?>&nbsp;Rob Randell.</p>
	</div>

	<?php wp_footer(); ?>

    <?php if( $analytics && $_SERVER[ 'SERVER_NAME' ] != 'rjrstudios.local' ) : echo $analytics; endif; ?>

</footer>

</body>
</html>
