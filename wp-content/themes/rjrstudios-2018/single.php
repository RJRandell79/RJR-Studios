<?php
	get_header();
	//$img = get_image( 66 );
	$imgs = get_images( get_the_ID() );

?>

<!-- This is the single.php -->
<section class="banner container-fluid" role="banner">
	<img src="<?php echo $imgs[ 0 ]; ?>" srcset="<?php echo $imgs[ 1 ]; ?>" alt="<?php //echo $imgs[ 2 ]; ?>" />
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
					$category = get_the_category();
				?>
					<img class="content-image" src="<?php echo $imgs[ 0 ]; ?>" srcset="<?php echo $imgs[ 1 ]; ?>" alt="<?php echo $imgs[ 2 ]; ?>" />

					<p class="metadata">In <span><?php echo $category[ 0 ]->name; ?></span> / By <span>Rob Randell</span> on <span><?php echo the_time( 'jS F Y' ); ?></span></p>

					<?php the_content(); ?>
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
					get_sidebar();
				?>
			</div>

		</div>
	</div>
</section>

<?php get_footer(); ?>
