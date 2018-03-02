<?php
	get_header();
	$imgs = get_images( get_the_ID() );
?>

<!-- This is the page.php -->
<section class="banner container-fluid" role="banner">
	<img src="<?php echo $imgs[ 0 ]; ?>" srcset="<?php echo $imgs[ 1 ]; ?>" alt="<?php echo $imgs[ 2 ]; ?>" />
	<article class="container">
		<div class="titles"><?php echo fancy_title( get_the_title() ); ?></div>
	</article>
</section>

<section class="container-fluid">
	<div class="container">
		<div class="row">

			<div class="col-md">
				<article class="post-content py-4">
				<?php
					if( have_posts() ) : while ( have_posts() ) : the_post();
					the_content();
					endwhile; endif;
				?>
				</article>
			</div>

		</div>
	</article>
</section>

<?php get_footer(); ?>
