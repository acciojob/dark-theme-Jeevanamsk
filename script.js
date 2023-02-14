function swapTheme(){
            const button=document.getElementById("swap");
            const targetElement = document.getElementById('app');
            button.addEventListener('click', function() {
                targetElement.style.backgroundColor = 'black';
            })
        }

