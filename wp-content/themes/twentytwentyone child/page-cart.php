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


get_header();



	?>
<div class="container shop-page-container">
<?php echo do_shortcode('[woocommerce_cart]'); ?>
</div>
<?php get_footer(); ?>