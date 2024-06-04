
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
// 
get_header();

if ( function_exists( 'elementor_theme_do_location' ) && elementor_theme_do_location( 'single' ) && woostify_elementor_has_location( 'single' ) ) {
	$frontend = new \Elementor\Frontend();
	echo $frontend->get_builder_content_for_display( get_the_ID(), true ); // phpcs:ignore
	wp_reset_postdata();
} else {
	?>
<!DOCTYPE html>

<html>

<head>
    <!-- Include Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="wp-content/themes/woostify/assets/css/custom.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>


<body>

    <!-- ------------------------------------------------------------------------------ -->
    <section class="hero-section">
        <div class="hero-header">
            <div class="container">
                <h1 class="hero-description"><?php the_field('hero_heading'); ?></h1>
                <h2 class="hero-sub-description"><?php the_field('hero_sub_heading');?></h2>
                <p class="shop-button"><a class="shop-now-button"
                        href="your-shop-link.html"><?php the_field('hero_shop_now_button');?></a></p>
            </div>
        </div>
    </section>

    <section class="shipping-section">
        <div class="container">
            <div class="row">
                <?php if( have_rows('shipping_time') ): ?>
                <?php while( have_rows('shipping_time') ): the_row(); 
                                    $image = get_sub_field('shipping_image');
                                    ?>
                <div class="col-md-4 column">
                    <a href="http://localhost/pernia/index.php/product-category/clothing/"><img
                            src="<?php the_sub_field('shipping_image'); ?>" alt="Image 1"></a>
                    <h3><?php the_sub_field('shipping_title'); ?></h3>
                </div>
                <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <!-- ----------------------------------------------------------------------------- -->
    <section class="wedding-tales">
        <div class="container">
            <h1><?php the_field('wedding_tale_heading'); ?></h1>
            <div class="row">
                <div class="col-sm-6">
                    <div class="custom-column wedding-tale-column">
                        <img src="<?php the_field('wedding_tale_image_one'); ?>" class="wedding-tale-image-1">
                        <h3><?php the_field('wedding_tale_heading_one'); ?></h3>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="custom-column wedding-tale-column">
                        <img src="<?php the_field('wedding_tale_image_two'); ?>" class="wedding-tale-image-2">
                        <h3><?php the_field('wedding_tale_heading_two'); ?></h3>
                    </div>
                    <div class="custom-column wedding-tale-column">
                        <img src="<?php the_field('wedding_tale_image_three'); ?>" class="wedding-tale-image-3">
                        <h3 class="custom-heading-tales"><?php the_field('wedding_tale_heading_three'); ?></h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ---------------------------------------------------------------------------- -->
    <section class="discount-section">
        <div class="container">
            <div class="col-md-12">
                <h1><?php the_field('offer_from_discount_heading'); ?></h1>
                <?php echo do_shortcode('[products limit="4" columns="4" visibility="visible"]'); ?>
                <!-- <?php echo do_shortcode('[wcpscwc_pdt_slider type="products" limit="4" columns="4"]'); ?> -->
            </div>
        </div>
    </section>
    <!-- ----------------------------------------------------------------------------- -->

    <section class="buzz-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1><?php the_field('in_the_buzz_heading'); ?></h1>
                </div>
                <div class="col-md-3 column">
                    <a href="http://localhost/pernia/index.php/product-category/whites/"><img
                            src="<?php the_field('summer_whites_image');?>" alt="Image 1"></a>
                    <h3><?php the_field('summer_white_title');?></h3>
                </div>
                <div class="col-md-3 column column-kaftan">
                    <img src="<?php the_field('kaftan_image'); ?>" alt="Image 2">
                    <h3><?php the_field('kaftan_title'); ?></h3>
                </div>
                <div class="col-md-3 column">
                    <img src="<?php the_field('pop_up_image'); ?>" alt="Image 3">
                </div>
                <div class="col-md-3 column">
                    <img src="<?php the_field('ditch_dupatta_image'); ?>" alt="Image 4">
                    <h3><?php the_field('ditch_duapatta_title'); ?></h3>
                </div>
            </div>
        </div>
    </section>
    <!-- ------------------------------------------------------------------------------ -->
    <section class="jewel-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1><?php the_field('jewel_cabinet_heading'); ?></h1>
                </div>
                <?php if( have_rows('jewel_tab') ): ?>
                <?php while( have_rows('jewel_tab') ): the_row(); 
                                    $image = get_sub_field('jewel_model_image');
                                    ?>
                <div class="col-md-6 column">
                    <img src="<?php the_sub_field('jewel_model_image'); ?>" alt="Image 1">
                    <h3><?php the_sub_field('jewel_category_title'); ?></h3>
                </div>
                <?php endwhile; ?>
                <?php endif; ?>
            </div>
            <div class="row">
                <?php if( have_rows('jewel_tab_2') ): ?>
                <?php while( have_rows('jewel_tab_2') ): the_row(); 
                                    $image = get_sub_field('jewel_model_image');
                                    ?>
                <div class="col-md-6 column">
                    <img src="<?php the_sub_field('jewel_model_image'); ?>" alt="Image 3">
                    <h3><?php the_sub_field('jewel_model_title'); ?></h3>
                </div>
                <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <!-- ------------------------------------------------------------------------------------ -->
    <section class="Gentlemen-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1><?php the_field('gentlemen_journal_heading'); ?></h1>
                </div>
                <div class="col-md-3 column">
                    <a href="http://localhost/pernia/index.php/product-category/mens/"><img
                            src="<?php the_field('country_made_image');?>" alt="Image 1"></a>
                    <h3><?php the_field('country_made_title');?></h3>
                </div>
                <div class="col-md-3 column ">
                    <img src="<?php the_field('jatin_silk_image'); ?>" alt="Image 2">
                    <h3><?php the_field('jatin_silk_title'); ?></h3>
                </div>
                <div class="col-md-3 column">
                    <img src="<?php the_field('dhruv_vaish_image'); ?>" alt="Image 3">
                    <h3><?php the_field('dhruv_vaish_title'); ?></h3>
                </div>
                <div class="col-md-3 column">
                    <img src="<?php the_field('diyarajvvir_men_image'); ?>" alt="Image 4">
                    <h3><?php the_field('diyarajvvir_men_title'); ?></h3>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------------- -->
    <section class="instagram-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 instagram-custom">
                    <div class="custom-column instagram-view">
                        <img class="instagram-image" src="<?php the_field('instagram_image'); ?>" alt="Instagram Image">
                        <h3><?php the_field('instagram_title'); ?></h3>
                       <a href="<?php the_field('view_shop_link'); ?>"> <button class="btn btn-primary"><?php the_field('view_shop_button'); ?></button></a>
                    </div>
                </div>
                <div class="col-sm-6 instagram-custom-slider">
                    <div class="custom-column instagram-tab">
                    <?php echo do_shortcode('[products limit="4" columns="4" visibility="visible"]'); ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- -------------------------------------------------------------------------- -->
    <section class="customer-section">
        <div class="container">
            <div class="row">
                <?php if( have_rows('customer_service') ): ?>
                <?php while( have_rows('customer_service') ): the_row(); 
                                    $image = get_sub_field('customer_service_image');
                                    ?>
                <div class="col-sm-3">
                    <div class="custom-customer-column">
                        <img src="<?php the_sub_field('customer_service_image'); ?>" alt="Image 1">
                        <h3><?php the_sub_field('customer_service_title'); ?></h3>
                    </div>
                </div>
                <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </section>

<div id="normal-user-form">
    <!-- Normal user registration form shortcode goes here -->
    [user_registration_form id="201"]
</div>

<div id="organizer-form" style="display: none;">
    <!-- Organizer registration form shortcode goes here -->
    [user_registration_form id="202"]
</div>
<label>
    <input type="radio" name="user-type" value="normal" checked> Normal User
</label>
<label>
    <input type="radio" name="user-type" value="organizer"> Organizer
</label>

<?php echo do_shortcode('[trustindex data-widget-id=8b7d6352710189499126ccde23f]');?>
<?php echo do_shortcode( '[grw id=232]' ); ?>
    
    <!-- ------------------------------------------------------------------------- -->
    <!-- Include Bootstrap JS (optional, for advanced functionality) -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js">

    </script>
</body>

</html>


<?php

	do_action( 'woostify_sidebar' );
}

get_footer();