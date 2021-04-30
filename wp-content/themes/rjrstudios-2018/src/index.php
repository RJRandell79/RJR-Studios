<?php
get_header();
$imgs = get_images(get_the_ID());

if (is_category()):
    $terms = get_the_category();
    $title = 'Browsing articles categorised: ' . $terms[0]->name;
elseif (is_tag()):
    $title = single_tag_title('Browsing articles tagged: ', false);
elseif (is_archive()):
    $title = 'Browsing articles dated: ' . get_the_time('F Y');
else:
    $title = get_the_title();
endif;
?>

<!-- This is the index.php -->
<section class="banner container-fluid" role="banner">
	<img src="<?php echo $imgs[0]; ?>" srcset="<?php echo $imgs[1]; ?>" alt="<?php echo $imgs[2]; ?>" />
	<article class="container">
		<div class="titles"><?php echo fancy_title($title); ?></div>
	</article>
</section>

<section class="container-fluid">
	<div class="container">
		<div class="py-4">
			<div class="row">

				<div class="col-md-8">
					<div class="row">

						<?php if (have_posts()):
          while (have_posts()):

              the_post();
              $imgs = get_images(get_the_ID());
              ?>

						<div class="col-md-6">
							<div class="news-item">
								<div class="featured-img">
									<img src="<?php echo $imgs[0]; ?>" srcset="<?php echo $imgs[1]; ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[2]; ?>" />
								</div>
								<div class="captions">
									<h3><?php the_title(); ?></h3>
									<p><?php echo balanceTags(
             wp_trim_words(
                 get_the_content(),
                 $num_words = 20,
                 $more = '&hellip;'
             ),
             true
         ); ?></p>
									<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">Read more&hellip;</a>
								</div>
							</div>
						</div>

					<?php
          endwhile;
      else:
           ?>
						<p>There is nothing to display here at the moment.</p>

					<?php
      endif; ?>
					</div>

					<?php if ($wp_query->max_num_pages > 1): ?>
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
