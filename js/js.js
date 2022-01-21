    function scrollTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    let passwordInput = document.querySelector(".togglePassword input");
    document.querySelector(".togglePassword i").addEventListener('click', function(e) {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('bi-eye');
    });
    document.querySelector(".canvas_data_wrap button").addEventListener("click", scrollTop);
    document.querySelector('.registration').onclick = function function_name() {
        document.querySelector('.modal_wrap').classList.toggle('active');
    }