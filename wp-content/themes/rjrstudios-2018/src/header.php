<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

        <link rel="icon" href="<?php echo get_template_directory_uri() .
            '/assets/icons/favicon.ico'; ?>">
        <link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-57x57.png'; ?>">
        <link rel="apple-touch-icon" sizes="60x60" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-60x60.png'; ?>">
        <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-72x72.png'; ?>">
        <link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-76x76.png'; ?>">
        <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-114x114.png'; ?>">
        <link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-120x120.png'; ?>">
        <link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-144x144.png'; ?>">
        <link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-152x152.png'; ?>">
        <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri() .
            '/assets/icons/apple-icon-180x180.png'; ?>">
        <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo get_template_directory_uri() .
            '/assets/icons/android-icon-192x192.png'; ?>">
        <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() .
            '/assets/icons/favicon-32x32.png'; ?>">
        <link rel="icon" type="image/png" sizes="96x96" href="<?php echo get_template_directory_uri() .
            '/assets/icons/favicon-96x96.png'; ?>">
        <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() .
            '/assets/icons/favicon-16x16.png'; ?>">
        <link rel="manifest" href="<?php echo get_template_directory_uri() .
            '/manifest.json'; ?>">
        <meta name="msapplication-TileColor" content="#FFFFFF">
        <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri() .
            '/assets/icons/ms-icon-144x144.png'; ?>">
        <meta name="theme-color" content="#FFFFFF">

        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?> >

    <div id="top-section" class="header cover-container d-flex h-100 mx-auto flex-column">
        <header class="container masthead">
            <div class="inner clearfix">
                <h3 class="masthead-brand">RJR Studios</h3>
                <nav class="nav nav-masthead justify-content-center">
                    <a class="nav-link" href="<?php bloginfo(
                        'url'
                    ); ?>">Home</a>
                    <?php if (is_front_page()): ?>
                    <a id="about" class="jumpto nav-link" href="#">About</a>
                    <a id="services" class="jumpto nav-link" href="#">Services</a>
                    <a id="portfolio" class="jumpto nav-link" href="#">Portfolio</a>
                    <a id="blog" class="jumpto nav-link" href="#">Blog</a>
                    <a id="contact" class="jumpto nav-link" href="#">Contact</a>
                    <?php else: ?>
                    <a class="jumpto nav-link" href="<?php bloginfo(
                        'url'
                    ); ?>#about-section">About</a>
                    <a class="jumpto nav-link" href="<?php bloginfo(
                        'url'
                    ); ?>#services-section">Services</a>
                    <a class="jumpto nav-link" href="<?php bloginfo(
                        'url'
                    ); ?>#portfolio-section">Portfolio</a>
                    <a class="jumpto nav-link" href="<?php bloginfo(
                        'url'
                    ); ?>#blog-section">Blog</a>
                    <a class="jumpto nav-link" href="<?php bloginfo(
                        'url'
                    ); ?>#contact-section">Contact</a>
                    <?php endif; ?>
                </nav>
            </div>
        </header>
    </div>

    <!-- /End of header.php -->
