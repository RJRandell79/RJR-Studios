<?php
	get_header();
	$imgs = get_images( get_the_ID() );
?>

<!-- This is the home.php -->
<section class="banner container-fluid" role="banner">
	<img src="<?php echo $imgs[ 0 ]; ?>" srcset="<?php echo $imgs[ 1 ]; ?>" alt="<?php echo $imgs[ 2 ]; ?>" />
	<article class="container">
		<div class="titles"><?php echo fancy_title( 'My Blog' ); ?></div>
	</article>
</section>

<section class="container-fluid">
	<div class="container">
		<div class="py-4">
			<div class="row">

				<div class="col-md-8">
					<div class="row">

						<?php
							if( have_posts() ) : while( have_posts() ) : the_post();
							$imgs = get_images( get_the_ID() );
						?>

						<div class="col-md-6">
							<div class="news-item">
								<figure class="featured-img">
									<img class="lozad" data-src="<?php echo $imgs[ 0 ] ?>" data-srcset="<?php echo $imgs[ 1 ] ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[ 2 ]; ?>" />
									<?php if( $img[ 3 ] !== '' ) : ?><figcaption><a href="<?php echo $imgs[ 3 ]; ?>" title="<?php echo $imgs[ 3 ]; ?>" target="_blank" rel="nofollow noopener"><?php echo $imgs[ 3 ]; ?></a></figcaption><?php endif; ?>
								</figure>
								<div class="captions">
									<h3><?php the_title(); ?></h3>
									<p><?php echo balanceTags( wp_trim_words( get_the_content(), $num_words = 20, $more = '&hellip;' ), true ); ?></p>
									<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">Read more&hellip;</a>
								</div>
							</div>
						</div>

						<?php endwhile; endif; ?>
					</div>

					<?php if( $wp_query->max_num_pages > 1 ) : ?>
					<div class="pagination-wrapper">
						<div class="pagination">
							<?php echo html5wp_pagination(); ?>
						</div>
					</div>
					<?php endif; ?>
				</div>

				<div class="col-md-4">
					<?php
						wp_reset_query();
						get_sidebar();
					?>
				</div>

			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>
