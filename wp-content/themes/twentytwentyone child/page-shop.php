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
// Template Name: shop Page

get_header();



	?>
    <div class="container shop-page-container">
    <?php if (is_active_sidebar('woocommerce-sidebar')) : ?>
    <div class="woocommerce-sidebar">
        <?php dynamic_sidebar('woocommerce-sidebar'); ?>
    </div>
<?php endif; ?>

<?php echo do_shortcode('[products]'); ?>
</div>



<?php get_footer(); ?>