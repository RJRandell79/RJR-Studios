<?php
	get_header();

	$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
	$imgs = get_images( get_the_ID() );
?>

<!-- This is the page-portfolio.php -->
<section class="banner container-fluid" role="banner">
	<img src="<?php echo $imgs[ 0 ]; ?>" srcset="<?php echo $imgs[ 1 ]; ?>" alt="<?php echo $imgs[ 2 ]; ?>" />
	<article class="container">
		<div class="titles"><?php echo fancy_title( get_the_title() ); ?></div>
	</article>
</section>

<?php
	$projectargs = array(
		'post_type' => 'projects',
		'posts_per_page' => 9 ,
		'paged' => $paged
	);
	$wp_query = new WP_Query( $projectargs );
?>

<section class="container-fluid">
	<article class="container">
		<div class="py-4">

			<?php if( $wp_query->have_posts() ) : ?>
			<div class="row">

				<?php
					while( $wp_query->have_posts() ) : $wp_query->the_post();
					$imgs = get_images( get_the_ID() );
				?>
				<div class="col-md-4">
					<div class="portfolio-item <?php echo 'project-' . $y; ?>">
						<img class="lozad" src="<?php echo $imgs[ 0 ] ?>" srcset="<?php echo $imgs[ 1 ] ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[ 2 ]; ?>" />
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
							<div>
								<p>&plus;</p>
								<p><?php the_title(); ?></p>
								<p><?php the_field( 'project_type' ); ?></p>
							</div>
						</a>
					</div>
				</div>
				<?php endwhile; ?>

				<?php if( $wp_query->max_num_pages > 1 ) : ?>
                <div class="pagination-wrapper">
                    <div class="pagination" role="navigation">
                        <?php html5wp_pagination(); ?>
                    </div>
                </div>
                <?php endif; ?>

			</div>
			<?php endif; ?>

		</div>
	</article>
</section>

<?php get_footer(); ?>
