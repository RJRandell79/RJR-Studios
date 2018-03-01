<?php get_header(); ?>

<!-- This is the 404.php -->
<section class="banner container-fluid" role="banner">
	<img src="<?php echo $imgs[ 0 ]; ?>" alt="<?php echo $imgs[ 2 ]; ?>" />
	<article class="container">
		<div><?php echo fancy_title( 'Page not found' ); ?></div>
	</article>
</section>

<section class="container-fluid">
	<div class="container">
		<div class="py-4">
			<div class="row">
				<div class="col-md">
					<p>Sorry, but the page you were looking for cannot be found. Please return to the <a href="<?php bloginfo( 'url' ); ?>" title="Return to homepage">homepage</a> and try again.</p>

				</div>
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>
