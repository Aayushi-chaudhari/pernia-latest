<?php
/**
 * The header for our theme.
 *
 * @package woostify
 */

?>

<head>
    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="wp-content/themes/twentytwentyone child/assets/css/custom.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head><?php wp_head(); ?></head>

<body <?php body_class(); ?>>
    <?php
		wp_body_open();

		do_action( 'woostify_theme_header' );?>
    <div class="top-header">
        <div class="container">
            <div class="column">
                <div class="title">
                    <a href="http://localhost/pernia-latest/">
                        <h1><?php the_field('page_title', 'options'); ?></h1>
                    </a>
                </div>
            </div>
            <div class="column">
                <div class="menu">
                    <?php wp_nav_menu(array('menu' => 'Header Menu'));?>
                </div>
            </div>
            <div class="column tools">
                <div class="cart-icon">
                    <a href="<?php echo wc_get_cart_url(); ?>">
                        <span class="cart-count"><?php echo WC()->cart->get_cart_contents_count(); ?></span>
                        <span class="cart-icon-image">
                            <img src="<?php the_field('svg_cart_icon', 'options'); ?>">
                        </span>
                    </a>
                </div>
                <div class="account">
                    <?php
    if (is_user_logged_in()) {
        $user_id = get_current_user_id();
        $avatar_url = get_avatar_url($user_id, ['size' => 32]); // Adjust the avatar size as needed
        echo '<div class="account-image">';
        echo '<img src="' . esc_url($avatar_url) . '" alt="User Avatar" />';
        echo '</div>';
    } else {
        echo '<div class="account-image account-default-image">';
        echo '<img src="path_to_default_image.jpg" alt="Default Avatar" />';
        echo '</div>';
    }
    ?>
                </div>
                <div class="search">
                    <?php echo get_search_form(); ?>
                </div>


            </div>
        </div>
    </div>


    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <ul class="list-group">
                    <?php if( have_rows('list_item', 'options') ): ?>
                    <?php while( have_rows('list_item', 'options') ): the_row(); 
                                   
                                    ?>
                    <?php 
                            $link = get_sub_field('list_item_links', 'options');
                            if( $link ): 
                              $link_url = $link['url'];
                              $link_title = $link['title'];
                                $link_target = $link['target'] ? $link['target'] : '_self';
                                ?>
                    <a class="button footer-links" href="<?php echo esc_url( $link_url ); ?>"
                        target="<?php echo esc_attr( $link_target ); ?>">
                        <p><?php echo esc_html( $link_title ); ?></p>
                    </a>
                    <?php endif; ?>
                    <?php endwhile;?>
                    <?php endif;?>
                </ul>
            </div>
        </div>
    </div>

    <?php wp_head(); ?>
    <div id="content" class="site-content">
        <div id="primary" class="content-area">
            <main id="main" class="site-main">