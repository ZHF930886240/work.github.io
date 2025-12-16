document.addEventListener('DOMContentLoaded', function () {
    // 1. Quantity Interaction
    const decreaseBtn = document.querySelector('.num-btn-sub');
    const increaseBtn = document.querySelector('.num-btn-add');
    const quantityInput = document.querySelector('.num-input');

    if (decreaseBtn && increaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        increaseBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value) || 1;
            quantityInput.value = currentValue + 1;
        });
    }

    // 2. Specification Selection (Color & Size)
    const specContainers = document.querySelectorAll('.spec-items');
    specContainers.forEach(container => {
        const options = container.querySelectorAll('.img-option, .text-option');
        options.forEach(option => {
            option.addEventListener('click', function () {
                // Remove active class from siblings
                options.forEach(opt => opt.classList.remove('active'));
                // Add active class to clicked element
                this.classList.add('active');
            });
        });
    });

    // 3. Image Gallery Interaction
    const mainImg = document.querySelector('.main-img img');
    const thumbnails = document.querySelectorAll('.goods-list li');

    if (mainImg && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('mouseenter', function () { // Changed to mouseenter for smoother preview
                // Remove active class from all
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add active class to current
                this.classList.add('active');

                // Update main image src
                const img = this.querySelector('img');
                if (img) {
                    mainImg.src = img.src;
                }
            });
        });
    }
});
