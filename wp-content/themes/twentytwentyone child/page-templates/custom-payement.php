<?php
/*
 * Template Name: Custom Subscription Page
 */
get_header();
?>
<style>
.outside-info {
    padding: 0 12px;
    margin-top: 140px;
    width: 100%;
    z-index: 10;
}

.form-wrapper {
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 30px;
    width: 100%;
    z-index: 10;
}

.checkout-wrapper {
    display: flex;
    flex: 1 1;
    /* flex-wrap: wrap; */
    z-index: 1;
    flex-direction: row-reverse;
    /* width: 65.666667vw; */
    padding: 0 1.125rem;
}

.addon-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 120px;
    width: 100%;
    position: relative;
}

.addon-wrapper__container {
    flex-direction: row-reverse;
    justify-content: center;
    width: 75%;
    display: flex;
}

.addon-outside-info {
    width: 50%;
    padding: 0 12px;
}

.addon-card {
    box-shadow: 0 4px 14px 0 rgba(217, 225, 255, .47);
    border: 1px solid #d6d6d6;
    border-radius: 10px;
    background-color: #fff;
    width: 100%;
    min-height: 400px;
    padding: 20px;
}

.addon-outside-info__main-wrapper {
    color: #fff;
    padding: 30px 13px 40px;
    border-radius: 10px;
    background: linear-gradient(180deg, #6d63f6, #9851ff);
    background-image: url(https://fundednext.fra1.cdn.digitaloceanspaces.com/dashboard/bradiend-bg.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    margin-bottom: 30px;
}

.addon-btn {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    padding-top: 1.75rem;
    padding-bottom: 14px;
    gap: 10px;
}
</style>
<!-- /////////////////////////////// -->

<!-- ////////////////////////////// -->

<div class="feature-header planType">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 5.25H11L6.5 13.25H10L9 18.5L17.25 10.25H13.0484L16 5.25Z" stroke="#03271F" stroke-width="1.5">
        </path>
    </svg>
    Challenge Type
</div>

<div id="planType" class="feature-container">
    <div id="planType10" class="feature-wrap selected" value="10"
        onclick="purchaseChallengePage.selectplanType('10', 'planType')">
        <div class="feature-item">
            <i class="fa-sharp fa-solid fa-circle-check"></i>
        </div>
        <div class="feature-item-value">
            <span>One-Phase</span>
        </div>
    </div>

    <div id="planType9" class="feature-wrap " value="9" onclick="purchaseChallengePage.selectplanType('9', 'planType')">
        <div class="feature-item">
            <i class="fa-sharp fa-solid fa-circle-check"></i>
        </div>
        <div class="feature-item-value">
            <span>Two-Phase</span>
        </div>
    </div>
</div>




<div id="second-form" style="display: none;">
    <!-- WooCommerce checkout form -->
    <?php echo do_shortcode('[woocommerce_checkout]'); ?>
</div>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Get the next button and the second form
    var nextButton = document.getElementById('nextButton');
    var secondForm = document.getElementById('second-form');

    // Add click event listener to the next button
    nextButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        // Hide the first form
        document.getElementById('first-form').style.display = 'none';
        // Show the second form
        secondForm.style.display = 'block';
    });
});
</script>

<?php
get_footer();
?>