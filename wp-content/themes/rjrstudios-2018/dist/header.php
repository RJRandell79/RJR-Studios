<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

        <link rel="icon" href="<?php echo get_template_directory_uri() . '/dist/img/favicon.ico'; ?>">

        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?> >

    <div id="top-section" class="header cover-container d-flex h-100 mx-auto flex-column">
        <header class="container masthead">
            <div class="inner clearfix">
                <h3 class="masthead-brand">Cover</h3>
                <nav class="nav nav-masthead justify-content-center">
                    <a class="nav-link" href="<?php bloginfo( 'url' ); ?>">Home</a>
                    <?php if( is_front_page() ) : ?>
                    <a id="about" class="jumpto nav-link" href="#">About</a>
                    <a id="services" class="jumpto nav-link" href="#">Services</a>
                    <a id="portfolio" class="jumpto nav-link" href="#">Portfolio</a>
                    <a id="blog" class="jumpto nav-link" href="#">Blog</a>
                    <a id="contact" class="jumpto nav-link" href="#">Contact</a>
                    <?php else : ?>
                    <a class="jumpto nav-link" href="<?php bloginfo( 'url' ); ?>#about-section">About</a>
                    <a class="jumpto nav-link" href="<?php bloginfo( 'url' ); ?>#services-section">Services</a>
                    <a class="jumpto nav-link" href="<?php bloginfo( 'url' ); ?>#portfolio-section">Portfolio</a>
                    <a class="jumpto nav-link" href="<?php bloginfo( 'url' ); ?>#blog-section">Blog</a>
                    <a class="jumpto nav-link" href="<?php bloginfo( 'url' ); ?>#contact-section">Contact</a>
                    <?php endif; ?>
                </nav>
            </div>
        </header>
    </div>

    <!-- /End of header.php -->
