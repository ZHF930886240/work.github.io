document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.order-header .tabs a');
    const orderItems = document.querySelectorAll('.order-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // 1. Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // 2. Add active class to clicked tab
            this.classList.add('active');

            const selectedStatus = this.textContent.trim();

            // 3. Filter orders
            orderItems.forEach(item => {
                const statusElement = item.querySelector('.state');
                const statusText = statusElement ? statusElement.textContent.trim() : '';

                if (selectedStatus === '全部订单') {
                    item.style.display = 'block';
                } else {
                    if (statusText === selectedStatus) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});
