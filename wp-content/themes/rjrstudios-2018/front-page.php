
<?php get_header(); ?>

<!-- This is the front-page.php -->
<section class="banner container-fluid" role="banner">
	<article class="container">
		<div class="titles">
			<h1><span class="light-font">Hi. This is Rob.</span><br />Professional <span class="primary-col">Web Developer</span></h1>
		</div>
	</article>
</section>

<section id="about-section" class="about container-fluid">
	<article class="container">
		<div class="py-4">
			<h2>About</h2>

			<div class="row">
				<div class="col-md">
					<h3 class="rule">Personal Details:</h3>
					<p>I specialise in creating and developing defining digital experiences. I am a UK based digital developer currently working at Heckford Advertising. I collabrate with User Experience (UX) Specialists and other Digital Designers and Digital Developers to create positive user experiences in all my projects.</p>

					<?php $emailaddress = get_option( 'email_address' ); ?>

					<ul class="timeline">
						<li><div><span></span><div></div></div><span>Name: </span> Rob Randell</li>
						<li><div><span></span><div></div></div><span>Date of Birth: </span> 13th January 1979</li>
						<li><div><span></span><div></div></div><span>Job: </span> Web Developer</li>
						<?php if( $emailaddress ) : ?>
						<li><div><span></span><div></div></div><span>Email: </span> <a href="mailto:<?php echo $emailaddress; ?>" title="Email"><?php echo $emailaddress; ?></a></li>
						<?php endif; ?>
					</ul>
				</div>

				<?php if( have_rows( 'skillset', 38 ) ) : ?>
				<div class="col-md">
					<h3 class="rule">My Skills:</h3>

					<?php while( have_rows( 'skillset', 38 ) ) : the_row(); ?>
					<div class="skill">
						<div class="clearfix">
							<p><?php the_sub_field( 'skill_name' ); ?></p>
							<p><?php the_sub_field( 'skill_rating' ); ?>%</p>
						</div>
						<div class="gauge">
							<span class="amount" style="width: <?php the_sub_field( 'skill_rating' ); ?>%"></span>
						</div>
					</div>
					<?php endwhile; ?>

				</div>
				<?php endif; ?>

			</div>
		</div>

		<p class="sidetext"><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Resume</p>
	</article>
</section>

<section class="resume container-fluid">
	<article class="container">
		<div class="py-4">
			<h2>Resume</h2>

			<div class="row">
				<div class="col-md">
					<h3 class="rule">Education:</h3>

					<ul class="timeline">
						<li><div><span></span><div></div></div>
							<span class="title">B.A. (Hons) Design</span>
							<span class="place">Blackpool &amp; The Fylde College (2000)</span>
							I studied a Bachelor of Art degree at Blackpool &amp; The Fylde College starting in 1997 and graduating with a second class degree in 2000. The course was mainly centred around technical illustration.</li>
						<li><div><span></span><div></div></div>
							<span class="title">BTEC Technical Illustration</span>
							<span class="place">Blackburn College (1997)</span>
							I studied for a BTEC National Diploma in technical illustration at Blackburn College. The course commenced in 1995 and was completed in 1997. I also gained another GCSE in Communication Studies.</li>
						<li><div><span></span><div></div></div>
							<span class="title">9 GCSEs Grades B - D</span>
							<span class="place">Walton-le-Dale High School (1995)</span>
							I attended Walton-le-Dale High School near Preston, Lancashire and left with 9 GCSE results between grades B and D. My highest results were in Geography and Art &amp; Design.</li>
					</ul>
				</div>

				<div class="col-md">
					<h3 class="rule">Experience:</h3>

					<ul class="timeline">
						<li><div><span></span><div></div></div>
							<span class="title">Web Developer</span>
							<span class="place">Heckford Advertising, Preston (2016 - present)</span>
							I am currently employed at Heckford Advertising as a Web Developer. I am currently responsible for all of Heckford&rsquo;s client websites, the development of new bespoke websites and the maintenance of existing websites.</li>
						<li><div><span></span><div></div></div>
							<span class="title">Web Developer</span>
							<span class="place">MMA Digital, Cheadle (2014 - 2016)</span>
							I was employed at MMA Digital as a Web Developer. I was building and maintaining new and existing MMA Digital client websites. MMA Digital operated with the legal sector and many of the website were tailored for solicitors.</li>
						<li><div><span></span><div></div></div>
							<span class="title">Digital Developer</span>
							<span class="place">APS Group, Cheadle (2012 - 2014)</span>
							I was working at The APS Group as a Digital Developer. I was part of a digital team creating and maintaining email builds, websites and I was involved with mobile app development pitches.</li>
					</ul>
				</div>
			</div>

		</div>

		<p class="sidetext"><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Services</p>
	</article>
</section>

<section id="services-section" class="services container-fluid">
	<article class="container">
		<div class="py-4">
			<h2>Services</h2>

			<div class="row">
				<div class="col-md">
					<div class="service">
						<i class="fa fa-desktop" aria-hidden="true"></i>
						<p>User Experience</p>
						<p>I can help you improve experiences with your products and services by understanding your customers and by identifying issues with your user experience (UX) through research and testing.</p>
					</div>
				</div>
				<div class="col-md">
					<div class="service">
						<i class="fa fa-desktop" aria-hidden="true"></i>
						<p>Web Development</p>
						<p>I can develop websites usually via the utilisation of Wordpress CMS that are engaging and a joy to use.</p>
					</div>
				</div>
				<div class="col-md">
					<div class="service">
						<i class="fa fa-desktop" aria-hidden="true"></i>
						<p>Web Design</p>
						<p>From wireframes to page mock ups to develop the look and feel of the website whilst keeping a multi-screen approach in mind to ensure the designs translate well across all devices and screens.</p>
					</div>
				</div>
			</div>
		</div>

		<p class="sidetext"><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Portfolio</p>
	</article>
</section>

<?php
	$projectargs = array(
		'post_type' => 'projects',
		'posts_per_page' => 5
	);
	$projects = new WP_Query( $projectargs );

	if( $projects->have_posts() ) :
		$y = 0;
?>

<section id="portfolio-section" class="portfolio container-fluid">
	<article class="container">
		<div class="py-4">
			<h2>Portfolio</h2>

			<div class="row">
				<div class="col-md">

					<?php
						while( $projects->have_posts() ) : $projects->the_post();

						if( $y <= 1 ) :
							$imgs = get_images( get_the_ID() );
					?>
					<div class="portfolio-item <?php echo 'project-' . $y; ?>">
						<img class="lozad" data-src="<?php echo $imgs[ 0 ] ?>" data-srcset="<?php echo $imgs[ 1 ] ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[ 2 ]; ?>" />
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
							<div>
								<p>&plus;</p>
								<p><?php the_title(); ?></p>
								<p><?php the_field( 'project_type' ); ?></p>
							</div>
						</a>
					</div>
				<?php endif; $y++; endwhile; rewind_posts(); $y = 0; ?>

				</div>
				<div class="col-md">

					<?php
						while( $projects->have_posts() ) : $projects->the_post();

						if( $y == 2 ) :
							$imgs = get_images( get_the_ID() );
					?>
					<div class="portfolio-item extended <?php echo 'project-' . $y; ?>">
						<img class="lozad" src="<?php echo $imgs[ 0 ] ?>" data-srcset="<?php echo $imgs[ 1 ] ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[ 2 ]; ?>" />
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
							<div>
								<p>&plus;</p>
								<p><?php the_title(); ?></p>
								<p><?php the_field( 'project_type' ); ?></p>
							</div>
						</a>
					</div>
				<?php endif; $y++; endwhile; rewind_posts(); $y = 0; ?>

				</div>
				<div class="col-md">

					<?php
						while( $projects->have_posts() ) : $projects->the_post();
						if( $y >= 3 ) :
							$imgs = get_images( get_the_ID() );
					?>
					<div class="portfolio-item <?php echo 'project-' . $y; ?>">
						<img class="lozad" data-src="<?php echo $imgs[ 0 ] ?>" data-srcset="<?php echo $imgs[ 1 ] ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[ 2 ]; ?>" />
						<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
							<div>
								<p>&plus;</p>
								<p><?php the_title(); ?></p>
								<p><?php the_field( 'project_type' ); ?></p>
							</div>
						</a>
					</div>
					<?php endif; $y++; endwhile; ?>

				</div>
			</div>

			<a class="btn" href="<?php the_permalink( 36 ); ?>" title="See more">See more&hellip;</a>
		</div>

		<p class="sidetext"><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Blog</p>
	</article>
</section>
<?php endif; wp_reset_query(); ?>

<?php
	$newsargs = array(
		'posts_per_page' => 5
	);
	$newsposts = new WP_Query( $newsargs );

	if( $newsposts->have_posts() ) :
		$x = 0;
?>

<section id="blog-section" class="news container-fluid">
	<article class="container">
		<div class="py-4">
			<h2>My Blog</h2>

			<div class="row">

				<?php
					while( $newsposts->have_posts() ) : $newsposts->the_post();
					$imgs = get_images( get_the_ID() );

					if( $x <= 1 ) :
						if( $x == 0 ) :
				?>
				<div class="col-md-8">
					<div class="news-item featured">
						<div class="featured-img">
							<img class="lozad" data-src="<?php echo $imgs[ 0 ] ?>" data-srcset="<?php echo $imgs[ 1 ] ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[ 2 ]; ?>" />
						</div>
						<div class="captions">
							<h3><?php the_title(); ?></h3>
							<p><?php echo the_time( 'jS F Y' ); ?></p>
							<p><?php echo balanceTags( wp_trim_words( get_the_content(), $num_words = 40, $more = '&hellip;' ), true ); ?></p>
							<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">Read more&hellip;</a>
						</div>
					</div>
				</div>
				<?php else : ?>
				<div class="col-md-4">
					<div class="news-item">
						<div class="featured-img">
							<img class="lozad" data-src="<?php echo $imgs[ 0 ] ?>" data-srcset="<?php echo $imgs[ 1 ] ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[ 2 ]; ?>" />
						</div>
						<div class="captions">
							<h3><?php the_title(); ?></h3>
							<p><?php echo balanceTags( wp_trim_words( get_the_content(), $num_words = 20, $more = '&hellip;' ), true ); ?></p>
							<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">Read more&hellip;</a>
						</div>
					</div>
				</div>
				<?php
					endif;
						endif;
						$x++; endwhile; rewind_posts(); $x = 0;
				?>
			</div>

			<div class="row">
				<?php
					while( $newsposts->have_posts() ) : $newsposts->the_post();
					$imgs = get_images( get_the_ID() );

					if( $x >= 2 ) :
				?>
				<div class="col-md">
					<div class="news-item">
						<div class="featured-img">
							<img class="lozad" data-src="<?php echo $imgs[ 0 ] ?>" data-srcset="<?php echo $imgs[ 1 ] ?>" sizes="(max-width: 600px) 100vw, 600px" alt="<?php echo $imgs[ 2 ]; ?>" />
						</div>
						<div class="captions">
							<h3><?php the_title(); ?></h3>
							<p><?php echo balanceTags( wp_trim_words( get_the_content(), $num_words = 20, $more = '&hellip;' ), true ); ?></p>
							<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">Read more&hellip;</a>
						</div>
					</div>
				</div>
				<?php endif; $x++; endwhile; ?>
			</div>

			<a class="btn" href="<?php the_permalink( 6 ); ?>" title="See more">See more&hellip;</a>
		</div>

		<p class="sidetext"><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Contact</p>
	</article>
</section>
<?php endif; wp_reset_query(); ?>

<section id="twitter-section" class="twitter-feed container-fluid banner">
	<?php $imgs = get_image( 66 ); ?>
	<img class="lozad" data-src="<?php echo $imgs[ 0 ]; ?>" data-srcset="<?php echo $imgs[ 1 ]; ?>" alt="<?php echo $imgs[ 2 ]; ?>" />
	<article class="container">
		<div class="py-4">
			<h2>Twitter</h2>

			<div class="row">
				<div class="col-md-6 offset-md-3">
					<div class="twitter-container">
						<div class="twitter-inner owl-carousel">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</section>

<section id="contact-section" class="contact container-fluid">
	<article class="container">
		<div class="py-4">
			<h2>Contact</h2>

			<?php
				$facebook = get_option( 'facebook_url' );
				$twitter = get_option( 'twitter_url' );
				$pinterest = get_option( 'pinterest_url' );
				$linkedin = get_option( 'linkedin_url' );
			?>

			<div class="row">
				<div class="col-md">
					<?php if( $emailaddress ) : ?><p class="contact-point"><span>Email:</span>&nbsp;<a href="mailto:<?php echo $emailaddress; ?>" title="Email me"><?php echo $emailaddress; ?></a></p><?php endif; ?>
					<p class="contact-point"><span>Address:</span>&nbsp;Penwortham, Preston, Lancashire.</p>

					<?php if( $facebook || $twitter || $pinterest || $linkedin ) : ?>
					<ul class="social-links">
						<?php if( $facebook ) : ?><li class="facebook"><a href="<?php echo $facebook; ?>" title="Twitter" target="_blank" rel="noopener nofollow"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><?php endif; ?>
						<?php if( $twitter ) : ?><li class="twitter"><a href="<?php echo $twitter; ?>" title="Twitter" target="_blank" rel="noopener nofollow"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><?php endif; ?>
						<?php if( $pinterest ) : ?><li class="pinterest"><a href="<?php echo $pinterest; ?>" title="Pinterest" target="_blank" rel="noopener nofollow"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li><?php endif; ?>
						<?php if( $linkedin ) : ?><li class="linkedin"><a href="<?php echo $linkedin; ?>" title="LinkedIn" target="_blank" rel="noopener nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li><?php endif; ?>
					</ul>
					<?php endif; ?>

				</div>
				<div class="col-md">
					<?php echo do_shortcode( '[contact-form-7 id="29" title="Footer Contact Form"]' ); ?>
				</div>
			</div>

		</div>
	</article>
</section>

<?php get_footer(); ?>
