

 jQuery(document).ready(function($) {
        jQuery('input[name="user-type"]').on('change', function() {
            var userType = $('input[name="user-type"]:checked').val();

            if (userType === 'normal') {
                jQuery('#normal-user-form').show();
                jQuery('#organizer-form').hide();
            } else {
                jQuery('#normal-user-form').hide();
                jQuery('#organizer-form').show();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        var platform4 = document.getElementById('platform_4');
        var platform5 = document.getElementById('platform_5');
        var fundedNext = document.getElementById('FundedNext');
        var growthNext = document.getElementById('GrowthNext');
        var platformType = document.getElementById('platformType');
        var serverName = document.getElementById('serverName');
    
        // Set initial values
        platformType.innerHTML = '(mt4)';
        serverName.innerHTML = 'Fundednext';
        growthNext.parentNode.style.display = 'none';
    
        // Event listener for platform selection
        platform4.addEventListener('change', function() {
            if (platform4.checked) {
                platformType.innerHTML = '(mt4)';
                fundedNext.checked = true;
                growthNext.parentNode.style.display = 'none';
            }
        });
    
        platform5.addEventListener('change', function() {
            if (platform5.checked) {
                platformType.innerHTML = '(mt5)';
                growthNext.checked = true;
                fundedNext.checked = false;
                growthNext.parentNode.style.display = 'block';
            }
        });
    
        // Event listener for server selection
        growthNext.addEventListener('change', function() {
            if (growthNext.checked) {
                serverName.innerHTML = 'GrowthNext';
                fundedNext.checked = false;
            }
        });
    
        fundedNext.addEventListener('change', function() {
            if (fundedNext.checked) {
                serverName.innerHTML = 'Fundednext';
                growthNext.checked = false;
            }
        });
    });
 /////////////////////////////////////////////////////////////////////////////   

   
    ////////////////////////////////////////////////////////////////
    document.addEventListener('DOMContentLoaded', function() {
        var swap = document.getElementById('swap');
        var swapFree = document.getElementById('swap-free');
        var checkboxes = document.querySelectorAll('.addon-btn__single-button input[type="checkbox"]');
        var addonInfo = document.querySelectorAll('.outside-info__property.add-on');
        var priceElements = document.querySelectorAll('.outside-info__property.price span:last-child');
        var totalPriceElement = document.querySelector('.addon-outside-info__main-wrapper--main-title p:last-child');
    
        // Original price without swap-free and addons
        var originalPrice = 119;
    
        // Function to calculate the updated price based on selected addons
        function calculateUpdatedPrice() {
            var updatedPrice = originalPrice;
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    var addonText = checkbox.parentElement.querySelector('p').textContent;
                    if (addonText.includes('(Price +20%)')) {
                        updatedPrice *= 1.20; // Increase price by 20%
                    } else if (addonText.includes('(Price +15%)')) {
                        updatedPrice *= 1.15; // Increase price by 15%
                    } else if (addonText.includes('(Price +10%)')) {
                        updatedPrice *= 1.10; // Increase price by 10%
                    }
                }
            });
            return Math.round(updatedPrice); // Round the updated price to the nearest whole number
        }
    
        // Function to update the displayed addon information
        function updateAddonInfo() {
            var selectedAddon = '';
            checkboxes.forEach(function(checkbox, index) {
                if (checkbox.checked) {
                    addonInfo[index].style.display = 'block';
                    selectedAddon = checkbox.parentElement.querySelector('p').textContent;
                    addonInfo[index].querySelector('span:last-child').textContent = selectedAddon;
                } else {
                    addonInfo[index].style.display = 'none';
                }
            });
        }
    
        // Function to update the displayed price based on selected addons
        function updateDisplayedPrice() {
            var updatedPrice = calculateUpdatedPrice();
            priceElements.forEach(function(element) {
                element.textContent = '$' + updatedPrice; // Display the updated price as a whole number
            });
            totalPriceElement.textContent = '$' + updatedPrice; // Display the total price as a whole number
        }
    
        // Function to update the prices when swap-free is selected
        function updatePrices() {
            var price = calculateUpdatedPrice();
            if (swapFree.checked) {
                price *= 1.10; // Increase price by 10%
            }
            price = Math.round(price); // Round the price to the nearest whole number
            priceElements.forEach(function(element) {
                element.textContent = '$' + price; // Display the updated price as a whole number
            });
            totalPriceElement.textContent = '$' + price; // Display the total price as a whole number
        }
    
        // Add event listener to handle checkbox selection
        checkboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                updateAddonInfo();
                if (swapFree.checked) {
                    updatePrices();
                } else {
                    updateDisplayedPrice();
                }
            });
        });
    
        // Add event listener to handle swap selection
        swap.addEventListener('change', function() {
            if (swap.checked) {
                swapFree.checked = false;
                updateDisplayedPrice();
            }
        });
    
        // Add event listener to handle swap-free selection
        swapFree.addEventListener('change', function() {
            if (swapFree.checked) {
                swap.checked = false;
                updatePrices();
            }
        });
    
        // Ensure swap is initially checked
        swap.checked = true;
    
        // Initially hide addon information
        addonInfo.forEach(function(info) {
            info.style.display = 'none';
        });
    
        // Initially update displayed price
        updateDisplayedPrice();
    });
    
    
    ////////////////////////////////////////////////
    // order review js 
    
    document.addEventListener('DOMContentLoaded', function() {
        var platform4 = document.getElementById('platform_4');
        var platform5 = document.getElementById('platform_5');
        var fundedNext = document.getElementById('FundedNext');
        var growthNext = document.getElementById('GrowthNext');
        var platformType = document.querySelector('.product-platform .platform-type');
        var serverName = document.querySelector('.product-server .server-name');
    
        // Set initial values
        platformType.textContent = '(mt4)';
        serverName.textContent = 'Fundednext';
    
        // Event listener for platform selection
        platform4.addEventListener('change', function() {
            if (platform4.checked) {
                platformType.textContent = '(mt4)';
                serverName.textContent = 'Fundednext';
            }
        });
    
        platform5.addEventListener('change', function() {
            if (platform5.checked) {
                platformType.textContent = '(mt5)';
                serverName.textContent = 'GrowthNext';
            }
        });
    
        // Event listener for server selection
        growthNext.addEventListener('change', function() {
            if (growthNext.checked) {
                serverName.textContent = 'GrowthNext';
            }
        });
    
        fundedNext.addEventListener('change', function() {
            if (fundedNext.checked) {
                serverName.textContent = 'Fundednext';
            }
        });
    });
    
///////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    var nextButton = document.querySelector('.ant-btn-primary');
    var addonWrapper = document.querySelector('.addon-wrapper');
    var checkoutForm = document.querySelector('.checkout-form'); // Replace with the selector of your default checkout form

    // Add event listener to the "NEXT" button
    nextButton.addEventListener('click', function() {
        // Hide the addon selection form
        addonWrapper.style.display = 'none';

        // Display the default checkout form
        checkoutForm.style.display = 'block';
    });
});

/////////////////////////////////////////////////////////////////