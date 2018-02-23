<?php get_header(); ?>

<!-- This is the index.php -->
<section class="container-fluid">
	<article class="container">

    <?php
        if( have_posts() ) : while ( have_posts() ) : the_post();
        the_title();
        the_content();
        endwhile; endif;
    ?>

    </article>
</section>

<?php get_footer(); ?>
