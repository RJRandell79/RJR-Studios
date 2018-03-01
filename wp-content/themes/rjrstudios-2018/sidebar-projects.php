
<!-- This is the sidebar -->
<aside class="sidebar py-4">
    <div class="post-nav">
        <a href="<?php the_permalink( 36 ); ?>" title="Back to projects"><div class="btn">Back to projects</div></a>
        <?php previous_post_link( '%link', '<div class="btn">Previous project</div>' ); ?>
        <?php next_post_link( '%link', '<div class="btn">Next project</div>' ); ?>
    </div>
    <hr />

    <?php
        $blog_args = array(
            'post_type' => 'projects',
            'posts_per_page' => 5
        );
        $blogposts = new WP_Query( $blog_args );
        if( $blogposts->have_posts() ) :
    ?>

    <div class="recentposts">
        <h5>Recent Projects</h5>

        <ul class="blogroll">
            <?php
                while( $blogposts->have_posts() ) : $blogposts->the_post();

                $img_id = get_post_thumbnail_id();
                if( !$img_id ) :
                    $img_id = 135;
                endif;
                $img_src = wp_get_attachment_image_src( $img_id, 'thumbnail' );
            ?>
            <li class="clearfix">
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <img class="lozad" data-src="<?php echo esc_url( $img_src[ 0 ] ); ?>" alt="<?php the_title(); ?>" />
                </a>
                <div>
                    <h6><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h6>
                    <p>By Rob Randell on <span><?php echo the_time( 'M j, Y' ); ?></span></p>
                </div>
            </li>
            <?php endwhile; ?>

        </ul>
    </div>
    <?php endif; wp_reset_query(); ?>

    <?php
        $posttags = get_tags();
        if( $posttags ) :
    ?>
    <hr />
    <div class="sidebartags">
        <h5>Tags</h5>
        <ul class="taglist clearfix">
            <?php foreach( $posttags as $tag ) : ?>
            <li><a class="btn" href="<?php echo get_tag_link( $tag->term_id ); ?>" title="<?php echo $tag->name; ?>"><?php echo $tag->name; ?></a></li>
            <?php endforeach; ?>
        </ul>
    </div>
    <?php endif; ?>
</aside>
