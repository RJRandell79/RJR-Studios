<?php get_header(); ?>

<!-- This is the index.php -->
<section class="container-fluid">
	<article class="container">

		<div class="row">
			<div class="col-md-12">

            <?php
                if( have_posts() ) : while ( have_posts() ) : the_post();
                the_title();
                the_content();
                endwhile; endif;
            ?>

            </div>
        </div>
    </article>
</section>

<?php get_footer(); ?>
