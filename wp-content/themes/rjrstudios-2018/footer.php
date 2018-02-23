
<!-- This is the footer.php -->
<?php $analytics = get_option( 'analytics' ); ?>

<footer class="container-fluid">
	<div class="container">



	</div>

	<?php wp_footer(); ?>

    <?php if( $analytics && $_SERVER[ 'SERVER_NAME' ] != 'rjrstudios.local' ) : echo $analytics; endif; ?>

</footer>

</body>
</html>
