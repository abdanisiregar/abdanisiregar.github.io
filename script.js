document.querySelector('.back-button').addEventListener('click', function() {
    window.history.back();
});

var tableRows = document.querySelectorAll('tbody tr');

tableRows.forEach(function(row) {
    row.addEventListener('click', function() {
        var link = this.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});