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

    <div class="header cover-container d-flex h-100 mx-auto flex-column">
        <header class="container masthead">
            <div class="inner clearfix">
                <h3 class="masthead-brand">Cover</h3>
                <nav class="nav nav-masthead justify-content-center">
                    <a class="nav-link active" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Contact</a>
                </nav>
            </div>
        </header>
    </div>

    <!-- /End of header.php -->
