<?php get_header(); ?>

<!-- This is the page.php -->
<section class="container-fluid">
	<article class="container">

	<?php if( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<h1><?php the_title(); ?></h1>
	<?php the_content(); ?>
	<?php endwhile; endif; ?>

	</article>
</section>

<?php get_footer(); ?>
