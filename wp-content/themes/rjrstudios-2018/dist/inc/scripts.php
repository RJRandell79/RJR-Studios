<?php

function theme_scripts()
{
    wp_enqueue_style(
        'bootstrap_css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        '',
        null
    );
    wp_enqueue_style(
        'opensans',
        'http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,400,700,800',
        '',
        null
    );
    wp_enqueue_style('styles', get_stylesheet_uri(), null, THEME_VERSION);

    wp_enqueue_style(
        'tinyslider_css',
        'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/tiny-slider.css',
        '',
        null
    );
    wp_enqueue_style(
        'font-awesome',
        'https://use.fontawesome.com/releases/v5.8.0/css/all.css',
        '',
        null
    );
    if (is_singular('projects')):
        wp_enqueue_style(
            'fancybox_css',
            'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css',
            '',
            null
        );
        wp_register_script(
            'fancybox_js',
            'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js',
            '',
            null,
            true
        );
        wp_enqueue_script('fancybox_js');
    endif;

    wp_deregister_script('jquery');

    wp_register_script(
        'jquery',
        'https://code.jquery.com/jquery-3.3.1.min.js',
        '',
        null,
        true
    );
    wp_enqueue_script('jquery');

    wp_register_script(
        'bootstrap_js',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
        '',
        null,
        true
    );
    wp_enqueue_script('bootstrap_js');

    $theme = '/assets/js/theme.js';
    $slider = '/assets/js/slider.js';

    wp_enqueue_script(
        'theme',
        get_template_directory_uri() . $theme,
        null,
        filemtime(get_template_directory() . $theme),
        true
    );

    wp_enqueue_script(
        'slider',
        get_template_directory_uri() . $slider,
        null,
        filemtime(get_template_directory() . $slider),
        true
    );

    if (function_exists('wpcf7_enqueue_scripts')):
        wpcf7_enqueue_scripts();
    endif;

    if (function_exists('wpcf7_enqueue_styles')):
        wpcf7_enqueue_styles();
    endif;
}
add_action('wp_enqueue_scripts', 'theme_scripts');
