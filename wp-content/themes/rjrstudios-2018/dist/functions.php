<?php

/* -- Load Styles, Fonts, JS and conditional IE -- */

function theme_styles() {
    //global $wp_styles;
    wp_enqueue_style( 'bootstrap_css', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', '', null );

    if( is_singular( 'projects' ) ) :
        wp_enqueue_style( 'owl_carousel_css', get_template_directory_uri() . '/dist/css/owl.carousel.min.css', '', null );
        wp_enqueue_style( 'fancybox_css', get_template_directory_uri() . '/dist/css/jquery.fancybox.min.css', '', null );
    endif;

	wp_enqueue_style( 'theme_css', get_template_directory_uri() . '/dist/css/rjr_theme.min.css', '', null );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

function load_fonts() {
	wp_register_style( 'opensans', 'http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,400,700,800' );
	wp_enqueue_style( 'opensans' );
}
add_action( 'wp_print_styles', 'load_fonts' );

function theme_js() {
	global $wp_scripts;

    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.2.1.min.js', '', null, true );
    wp_enqueue_script( 'jquery' );

    if( is_singular( 'projects' ) ) :
        wp_enqueue_script( 'owl_carousel_js', get_template_directory_uri() . '/dist/js/owl.carousel.min.js', array( 'jquery' ), '', true );
        wp_enqueue_script( 'fancybox_css', get_template_directory_uri() . '/dist/js/jquery.fancybox.min.js', array( 'jquery' ), '', true );
    endif;

    wp_enqueue_script( 'lozad_js', 'https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', '', null, true );

    wp_enqueue_script( 'bootstrap_js', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'theme_rjr_js', get_template_directory_uri() . '/dist/js/rjr_theme.min.js', array( 'jquery', 'bootstrap_js' ), '', true );
}
add_action( 'wp_enqueue_scripts', 'theme_js' );

// Remove the version number from Javascript & CSS files that are enqueued using either wp_enqueue_script() or wp_enqueue_style()
function remove_scripts_styles_version( $src ) {
    if ( strpos( $src, 'ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'remove_scripts_styles_version', 9999 );
add_filter( 'script_loader_src', 'remove_scripts_styles_version', 9999 );

/* -- Theme Menus -- */

function add_thememenu_support() {
	register_nav_menus(
    	array(
    		'main-menu' => __( 'Top Navigation' ),
    	)
  	);
    add_theme_support( 'post-thumbnails' );

}
add_action( 'init', 'add_thememenu_support' );

add_theme_support( 'title-tag' );
remove_action( 'wp_head', 'wp_generator' );

/* -- Sidebar/Widgets -- */

if ( function_exists( 'register_sidebar' ) ) {
    register_sidebar(
        array(
            'id' => 'twitter',
            'name'=> 'Twitter Sidebar',
            'before_title' => '',
            'after_title' => '',
            'before_widget' => '',
            'after_widget' => '',
        )
    );
    register_sidebar(
        array(
            'id' => 'blog-sidebar',
            'name' => 'Blog Sidebar',
            'before_title' => '<p><strong>',
            'after_title' => '</strong></p>',
            'before_widget' => '<div class="post-widget border-bottom">',
            'after_widget' => '</div>',
        )
    );
}

/* -- Custom Post Types -- */

function register_cpt_projects() {

    $labels = array(
        'name' => _x( 'Projects', 'projects' ),
        'singular_name' => _x( 'Project', 'projects' ),
        'add_new' => _x( 'Add New Project', 'projects' ),
        'add_new_item' => _x( 'Add New Project', 'projects' ),
        'edit_item' => _x( 'Edit Project', 'projects' ),
        'new_item' => _x( 'New Project', 'projects' ),
        'view_item' => _x( 'View Project', 'projects' ),
        'search_items' => _x( 'Search Projects', 'projects' ),
        'not_found' => _x( 'No projects found', 'projects' ),
        'not_found_in_trash' => _x( 'No project found in Trash', 'projects' ),
        'parent_item_colon' => _x( 'Parent Project:', 'projects' ),
        'menu_name' => _x( 'Projects', 'projects' ),
    );

    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'supports' => array( 'title', 'editor', 'thumbnail' ),
        'taxonomies' => array( 'post_tag', 'page-category', 'Projects' ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-images-alt2',
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => true,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => true,
        'capability_type' => 'post'
    );
    register_post_type( 'projects', $args );
}
add_action( 'init', 'register_cpt_projects' );

function register_cpt_services() {

    $labels = array(
        'name' => _x( 'Services', 'services' ),
        'singular_name' => _x( 'Service', 'services' ),
        'add_new' => _x( 'Add New Service', 'services' ),
        'add_new_item' => _x( 'Add New Service', 'services' ),
        'edit_item' => _x( 'Edit Service', 'services' ),
        'new_item' => _x( 'New Service', 'services' ),
        'view_item' => _x( 'View Service', 'services' ),
        'search_items' => _x( 'Search Services', 'services' ),
        'not_found' => _x( 'No services found', 'services' ),
        'not_found_in_trash' => _x( 'No service found in Trash', 'services' ),
        'parent_item_colon' => _x( 'Parent Service:', 'services' ),
        'menu_name' => _x( 'Services', 'services' ),
    );

    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'supports' => array( 'title', 'editor', 'thumbnail' ),
        'taxonomies' => array( 'post_tag', 'page-category', 'Services' ),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-media-code',
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => true,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => true,
        'capability_type' => 'post'
    );
    register_post_type( 'services', $args );
}
add_action( 'init', 'register_cpt_services' );

/* -- Custom Post Categories -- */

function taxonomies_projects() {
    $labels = array(
        'name' => _x( 'Project Categories', 'taxonomy general name' ),
        'singular_name' => _x( 'Project Category', 'taxonomy singular name' ),
        'search_items' => __( 'Search Project Categories' ),
        'all_items' => __( 'All Project Categories' ),
        'parent_item' => __( 'Parent Project Category' ),
        'parent_item_colon' => __( 'Parent Project Category:' ),
        'edit_item' => __( 'Edit Project Category' ),
        'update_item' => __( 'Update Project Category' ),
        'add_new_item' => __( 'Add New Project Category' ),
        'new_item_name' => __( 'New Prject Category' ),
        'menu_name' => __( 'Project Categories' )
    );

    $args = array(
        'labels' => $labels,
        'hierarchical' => true
    );
    register_taxonomy( 'taxonomies_projects', 'projects', $args );
}
add_action( 'init', 'taxonomies_projects', 0 );

/* -- Bespoke functions -- */
function fancy_title( $str ) {
    $arr = explode( ' ', $str );
    $len = count( $arr );
    $html = '';
    $remaining = '';

    if( $len == 1 ) :
        $html = '<h1><span class="light-font">' . $arr[ 0 ] . '</span></h1>';
    elseif( $len == 2 ) :
        $html = '<h1><span class="light-font">' . $arr[ 0 ] . '</span> <span class="primary-col">' . $arr[ 1 ] . '</span></h1>';
    elseif( $len == 3 ) :
        $html = '<h1><span class="light-font">' . $arr[ 0 ] . ' ' . $arr[ 1 ] . '</span><br /><span class="primary-col">' . $arr[ 2 ] . '</span></h1>';
    else :
        for( $x = 4; $x < $len; $x++ ) :
            $remaining .= $arr[ $x ] . ' ';
        endfor;
        $html = '<h1><span class="light-font">' . $arr[ 0 ] . ' ' . $arr[ 1 ] . '</span><br />' . $arr[ 2 ] . ' <span class="primary-col">' .  $arr[ 3 ] . ' ' . $remaining . '</span></h1>';
    endif;

    return $html;
}

function get_images( $postid ) {
    $img_id = get_post_thumbnail_id( $postid );
    $img_src = wp_get_attachment_image_src( $img_id, 'full' );
    $img_srcset = wp_get_attachment_image_srcset( $img_id, 'full' );
    $img_alt = get_post_meta( $img_id, '_wp_attachment_image_alt', true );

    return array( esc_url( $img_src[ 0 ] ), esc_attr( $img_srcset ), $img_alt );
}

function international_number_link( $number, $country = 'uk' ) { // Adds international dialling prefix for GB unless country value is overidden
    $codes = array( 'austria' => 43, 'belgium' => 32, 'bulgaria' => 359, 'croatia' => 385, 'cyprus' => 357, 'czech' => 420, 'denmark' => 45, 'estonia' => 372, 'finland' => 358, 'france' => 33, 'gibraltar' => 350, 'germany' => 49, 'greece' => 30, 'hungary' => 36, 'iceland' => 354, 'ireland' => 353, 'italy' => 39, 'lativa' => 371, 'liechtenstein' => 423, 'lithuania' => 370, 'luxembourg' => 352, 'malta' => 356, 'netherlands' => 31, 'norway' => 47, 'poland' => 48, 'portugal' => 351, 'romania' => 40, 'slovakia' => 421, 'spain' => 34, 'sweden' => 46, 'uk' => 44 );
    $prefix = $codes[ $country ];

    $numbers = preg_replace( '/\s+/', '', $number );
    $str = substr( $numbers, 1 );
    $int_link = 'tel:+' . $prefix . $str;

    return $int_link;
}

function convert_to_numeric( $str ) { // Remove grammar from numeric figures and convert to float value
    $newstr = str_replace( array( ',', '.' ), '', $str );
    if( is_numeric( $newstr ) ) {
        $value = floatval( $newstr );

        return $value;
    }
    return false;
}

function read_time( $content ) { // Show average read time of an article
    $len = str_word_count( $content );
    $time = $len / 225; // 225 is average words read per minute.

    if( $time >= 1 && $time < 1.5 ) {
        $str = 'About a minute';
    }
    elseif( $time < 1 ) {
        $str = 'Less than a minute';
    }
    else {
        $str = round( $time ) . ' minutes';
    }
    return $str;
}

/* -- Pagination -- */

function html5wp_pagination() {

    global $wp_query;

    $big = 999999999;

    echo paginate_links( array(
        'base' => str_replace( $big, '%#%', get_pagenum_link( $big ) ),
        'format' => '?paged=%#%',
        'current' => max( 1, get_query_var( 'paged' ) ),
        'total' => $wp_query->max_num_pages )
    );
}
add_action( 'init', 'html5wp_pagination' );

/* -- SEO Yoast Locale -- */

function override_og_locale( $locale ) {
    return "en_GB";
}
add_filter( 'wpseo_locale', 'override_og_locale' );

/* -- Add Global Site Options Page -- */

function theme_settings_page() { ?>

    <div class="wrap">
        <?php settings_errors(); ?>
        <h1>RJR Studios Theme Panel &amp; Settings</h1>
        <form method="POST" action="options.php">

            <?php
                settings_fields( 'options-section' );
                do_settings_sections( 'options-section' );
            ?>

            <table>
                <tr>
                    <td><label for="twitter_url">Twitter </label></td>
                    <td><input type="text" id="twitter_url" name="twitter_url" size="45" value="<?php echo esc_attr( get_option( 'twitter_url' ) ); ?>" /></td>
                </tr>

                <tr>
                    <td><label for="facebook_url">Facebook </label></td>
                    <td><input type="text" id="facebook_url" name="facebook_url" size="45" value="<?php echo esc_attr( get_option( 'facebook_url' ) ); ?>" /></td>
                </tr>

                <tr>
                    <td><label for="linkedin_url">LinkedIn </label></td>
                    <td><input type="text" id="linkedin_url" name="linkedin_url" size="45" value="<?php echo esc_attr( get_option( 'linkedin_url' ) ); ?>" /></td>
                </tr>

                <tr>
                    <td><label for="pinterest_url">Pinterest </label></td>
                    <td><input type="text" id="pinterest_url" name="pinterest_url" size="45" value="<?php echo esc_attr( get_option( 'pinterest_url' ) ); ?>" /></td>
                </tr>

                <tr>
                    <td><label for="phone_no">Phone Number </label></td>
                    <td><input type="text" id="phone_no" name="phone_no" size="45" value="<?php echo esc_attr( get_option( 'phone_no' ) ); ?>" /></td>
                </tr>

                <tr>
                    <td><label for="email_address">Email Address </label></td>
                    <td><input type="text" id="email_address" name="email_address" size="45" value="<?php echo esc_attr( get_option( 'email_address' ) ); ?>" /></td>
                </tr>

                <tr>
                    <td><label for="analytics">Analytics </label></td>
                    <td><textarea id="analytics" name="analytics" rows="5" cols="75"><?php echo esc_attr(get_option( 'analytics' ) ); ?></textarea></td>
                </tr>

                <tr>
                    <td><?php submit_button(); ?></td>
                </tr>

            </table>

        </form>
    </div>

<?php
}

function register_sections_settings() {
    register_setting( 'options-section', 'twitter_url' );
    register_setting( 'options-section', 'facebook_url' );
    register_setting( 'options-section', 'linkedin_url' );
    register_setting( 'options-section', 'pinterest_url' );
    register_setting( 'options-section', 'phone_no' );
    register_setting( 'options-section', 'email_address' );
    register_setting( 'options-section', 'analytics' );
}

function add_theme_menu_item() {
    add_menu_page( 'Theme Panel', 'Theme Settings', 'manage_options', 'theme-panel', 'theme_settings_page', null, 99 );

    add_action( 'admin_init', 'register_sections_settings' );
}
add_action( 'admin_menu', 'add_theme_menu_item' );

?>
