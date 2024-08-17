document.addEventListener('DOMContentLoaded', function() {
    const _0xabc1 = document.getElementById('clickable-area');
    const _0xdef2 = document.getElementById('toggle-button');
    
    let _0x1234 = false;
    let _0x5678;

    function _0x9abc() {
        if (!_0x1234) return;

        const _0x4567 = Math.floor(Math.random() * 10) + 1;

        _0x5678 = setTimeout(() => {
            _0xabc1.click();
            _0x9abc();
        }, _0x4567 * 1000);
    }

    _0xdef2.addEventListener('click', function() {
        _0x1234 = !_0x1234;

        if (_0x1234) {
            _0xdef2.textContent = 'Stop Auto Clicker';
            _0xdef2.classList.remove('off');
            _0x9abc();
        } else {
            _0xdef2.textContent = 'Start Auto Clicker';
            _0xdef2.classList.add('off');
            clearTimeout(_0x5678);
        }
    });
});
