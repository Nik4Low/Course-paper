document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const body = document.body;
    const FT_title = document.getElementById('footer_title');
    const link = document.getElementById('custom_link');

    function applyMode(isNightMode) {
        if (body) {
            if (isNightMode) {
                body.classList.remove('day-mode');
                body.classList.add('night-mode');
                
            } else{
                body.classList.remove('night-mode');
                body.classList.add('day-mode');
            }
        }

        if (FT_title) {
            if (isNightMode) {
                FT_title.classList.remove('day-mode');
                FT_title.classList.add('night-mode');
            } else {
                FT_title.classList.remove('night-mode');
                FT_title.classList.add('day-mode');
            }
        }
        if (link) {
            if (isNightMode) {
                link.classList.remove('day-mode');
                link.classList.add('night-mode');
            } else {
                link.classList.remove('night-mode');
                link.classList.add('day-mode');
            }
        }
    }

    toggle.addEventListener('change', function() {
        const isNightMode = this.checked;
        applyMode(isNightMode);
        localStorage.setItem('mode', isNightMode ? 'night' : 'day');
    });

    // Проверяем, есть ли сохраненное состояние в localStorage
    const savedMode = localStorage.getItem('mode');
    const isNightMode = savedMode === 'night';
    toggle.checked = isNightMode;
    applyMode(isNightMode);
});