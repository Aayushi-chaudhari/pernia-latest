<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */
        
?>
<!DOCTYPE html>

<head>
    <title>Bootstrap Columns with Headings</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="wp-content/themes/woostify.2.2.3/woostify/assets/css/admin/style.css">
</head>

<body>

    <section class=footer-section>
        <div class="container">
            <div class="row footer-main">
                <div class="col-sm-2">
                    <div class="custom-column">
                        <h3 class="custom-heading"><?php the_field('about_us_heading', 'options'); ?></h3>
                        <?php if( have_rows('about_information_description', 'options') ): ?>
                        <?php while( have_rows('about_information_description', 'options') ): the_row(); 
                                   
                                    ?>
                        <?php 
                            $link = get_sub_field('about_information_links', 'options');
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
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="custom-column">
                        <h3 class="custom-heading"><?php the_field('quick_link_heading', 'options'); ?></h3>
                        <?php if( have_rows('quick_link_information', 'options') ): ?>
                        <?php while( have_rows('quick_link_information', 'options') ): the_row(); 
                                   
                                    ?>
                        <?php 
                            $link = get_sub_field('quick_links_detail', 'options');
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
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="custom-column">
                        <h3 class="custom-heading"><?php the_field('customer_heading', 'options'); ?></h3>
                        <?php if( have_rows('customer_links_information', 'options') ): ?>
                        <?php while( have_rows('customer_links_information', 'options') ): the_row(); 
                                   
                                    ?>
                        <?php 
                            $link = get_sub_field('customer_links', 'options');
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
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="custom-column">
                        <h3 class="custom-heading"><?php the_field('contact_us_heading', 'options'); ?></h3>
                        <div class="contact-details">
                            <?php if( have_rows('contact_info', 'options') ): ?>
                            <?php while( have_rows('contact_info', 'options') ): the_row(); 
                                   $contact_image = get_sub_field('contact_info_image', 'options'); 
                                   ?>
                            <div class="footer-contact-deatils">
                                <img src="<?php the_sub_field('contact_info_image', 'options'); ?>">
                                <p><?php the_sub_field('contact_info_details', 'options'); ?></p>
                            </div>
                            <?php endwhile;?>
                            <?php endif;?>
                        </div>

                        <div class="footer-description-social">
                            <h3 class="custom-heading"><?php the_field('footer_social_heading', 'options'); ?></h3>
                            <div class="contact-details">
                                <?php if( have_rows('footer_social_links', 'options') ): ?>
                                <?php while( have_rows('footer_social_links', 'options') ): the_row(); 
                                   $contact_image = get_sub_field('contact_info_image', 'options'); 
                                   ?>

                                <a href="<?php the_sub_field('footer_social_image_link'); ?>"> <img
                                        src="<?php the_sub_field('footer_social_images', 'options'); ?>"> </a>

                                <?php endwhile;?>
                                <?php endif;?>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="custom-column last-column">
                        <h3 class="custom-heading"><?php the_field('shop_app_title', 'options'); ?></h3>
                        <p><?php the_field('shop_app_details', 'options'); ?></p>
                        <div class="app-button">
                            <input type="text" placeholder="Enter number or email address">
                            <button onclick="openApp()">App Link</button>
                        </div>

                        <div class="app-store-button">
                            <a href="<?php the_field('app_store_link', 'options'); ?>" target="_blank" class="store-button">
                                <img src="<?php the_field('app_store_image', 'options'); ?>" alt="App Store" width="150" height="50">
                                <span><?php the_field('app_store_text', 'options'); ?></b></span>
                            </a>
                            <a href="<?php the_field('play_store_link', 'options'); ?>" target="_blank" class="store-button">
                                <img src="<?php the_field('play_store_image', 'options'); ?>" alt="Google Play Store" width="150" height="50">
                                <span><?php the_field('play_store_text', 'options'); ?></b></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <?php wp_footer(); ?>
</body>

</html>