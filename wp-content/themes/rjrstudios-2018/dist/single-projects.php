<?php
	get_header();
	$imgs = get_images( get_the_ID() );
?>

<!-- This is the single-projects.php -->
<section class="banner container-fluid" role="banner">
	<img src="<?php echo $imgs[ 0 ]; ?>" srcset="<?php echo $imgs[ 1 ]; ?>" alt="<?php echo $imgs[ 2 ]; ?>" />
	<article class="container">
		<div class="titles"><?php echo fancy_title( get_the_title() ); ?></div>
	</article>
</section>

<section class="container-fluid">
	<div class="container">
		<div class="row">

			<div class="col-md-8">
				<article class="post-content py-4">
				<?php
					if( have_posts() ) : while( have_posts() ) : the_post();
					$type = get_field( 'project_type' );
					$client = get_field( 'client' );
					$weblink = get_field( 'website_link' );

					$banner_id = get_field( 'banner_image' );
					$banner_src = wp_get_attachment_image_src( $banner_id, 'medium_large' );
					$banner_srcset = wp_get_attachment_image_srcset( $banner_id, 'medium_large' );
					$banner_alt = get_post_meta( $banner_id, '_wp_attachment_image_alt', true );

					$fullbanner_id = get_field( 'banner_link' );
					$fullbanner_src = wp_get_attachment_image_src( $fullbanner_id, 'full' );

				?>
					<p class="metadata">In <span><?php echo $type; ?></span> / By <span>Rob Randell</span> on <span><?php echo the_time( 'jS F Y' ); ?></span></p>

					<?php if( have_rows( 'screenshots' ) ) : ?>
	                <div class="owl-carousel project-carousel">
	                    <?php
	                        while( have_rows( 'screenshots' ) ) : the_row();
							$img_id = get_sub_field( 'slide' );
							$img_src = wp_get_attachment_image_src( $img_id, 'medium_large' );
						    $img_srcset = wp_get_attachment_image_srcset( $img_id, 'medium_large' );
						    $img_alt = get_post_meta( $img_id, '_wp_attachment_image_alt', true );

							$img_full_id = get_sub_field( 'full_image' );
							$img_full_src = wp_get_attachment_image_src( $img_full_id, 'full' );
	                    ?>
						<a data-fancybox="carousel" href="<?php echo $img_full_src[ 0 ]; ?>">
							<img src="<?php echo esc_url( $img_src[ 0 ] ); ?>" srcset="<?php echo esc_attr( $img_srcset ); ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $img_alt; ?>" />
						</a>
						<?php endwhile; ?>
	                </div>

					<?php elseif( $banner_id && $fullbanner_src ) : ?>

					<a data-fancybox="banner" href="<?php echo $fullbanner_src[ 0 ]; ?>">
						<img class="lozad" data-src="<?php echo esc_url( $banner_src[ 0 ] ); ?>" data-srcset="<?php echo esc_attr( $banner_srcset ); ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $banner_alt; ?>" />
					</a>

					<?php else : ?>
					<p>Hmm&hellip; something isn&rsquo;t quite right here. Please check the post content and custom fields.</p>

		            <?php endif; ?>

					<div class="row">
						<div class="col-md-4">
							<h3 class="rule">Project Overview</h3>
							<ul class="timeline">
								<li><div><span></span><div></div></div>
									<span>Project Type: </span><?php echo ucfirst( $type ); ?>
								</li>
								<?php if( $client ) : ?>
								<li><div><span></span><div></div></div>
									<span>Client: </span><?php echo $client; ?>
								</li>
								<?php endif; ?>
								<?php if( $weblink ) : ?>
								<li><div><span></span><div></div></div>
									<span>Website Link: </span><a target="_blank" class="link" href="<?php echo $weblink; ?>" title="See website"><?php echo $weblink; ?></a>
								</li>
								<?php endif; ?>
							</ul>
						</div>
						<div class="col-md-8">
							<h3 class="rule">Project Details</h3>
							<?php the_content(); ?>
						</div>
					</div>
					<hr />

					<?php
	                    $posttags = get_the_tags();
	                    if( $posttags ) :
	                        $endtag = end( $posttags );
	                ?>
	                <div class="tags clearfix">
	                    <p>Tags: </p>
	                    <ul class="clearfix">
	                        <?php foreach( $posttags as $tags => $tag ) : ?>
	                        <li><a href="<?php echo get_tag_link( $tag->term_id ); ?>" title="<?php echo ucfirst( $tag->name ); ?>"><?php echo ucfirst( $tag->name ); ?></a><?php if( $tag != $endtag ) : echo ', '; endif; ?></li>
	                        <?php endforeach; ?>
	                    </ul>
	                </div>
					<?php else : ?>
					<p>No tags added for this post.</p>
	                <?php endif; ?>
				<?php endwhile; endif; ?>
				</article>
			</div>

			<div class="col-md-4">
				<?php
					wp_reset_query();
					get_sidebar( 'projects' );
				?>
			</div>

		</div>
	</div>
</section>

<?php get_footer(); ?>
