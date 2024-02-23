
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('start-button').addEventListener('click', function () {
        setTimeout(function () {
            document.getElementById('first').style.display = 'none';
        }, 1000);
    });
    document.getElementById('suprise-button').addEventListener('click', function () {
        setTimeout(function () {
            document.getElementById('second').style.display = 'none';
        }, 1000);
    });
    document.getElementById('yesBtn').addEventListener('click', function () {
        document.getElementById('headerGallery').classList.add('typewriter');
        setTimeout(function () {
            document.getElementById('suprise-section').style.display = 'none';
        }, 1000);
    });
    document.getElementById('continue').addEventListener('click', function () {
        setTimeout(() => {
            document.getElementById('gallery').style.display = 'none';
        }, 1000);
    });
    document.getElementById('hideBtn').addEventListener('click', function () {
        document.body.style.overflowY = 'visible';
        document.getElementById('end').style.display = 'none';
        document.getElementById('first').style.display = 'none';
        document.getElementById('second').style.display = 'none';
        document.getElementById('suprise-section').style.display = 'none';
        document.getElementById('gallery').style.display = 'none';
    });
    document.getElementById('nextSection').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.getElementById('end').style.display = 'block';
    });
    const noBtn = document.getElementById('noBtn');
    noBtn.addEventListener('mouseover', function () {
        const randomX = Math.random() * 50;
        const randomY = Math.random() * 50;
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}%`;
        noBtn.style.top = `${randomY}%`;
    });
    // show Gallery
    const showGallery = document.getElementById('showGallery');
    const textTyping = document.getElementById('text-typing');
    const headerTyping = document.getElementById('headerGallery');
    const headerTyping2 = document.getElementById('headerGallery2');
    let altText = '2024, chúng ta sẽ cùng nhau đi mãi mãi, em nhé? Anh sẽ luôn nhìn ở phía sau để em luôn tiếp bước trên con đường của em và anh sẽ luôn cố gắng để cả hai đứa về đích ở tương lai.';
    showGallery.addEventListener('click', function () {
        document.getElementById('journey').style.height = '50%';
        showGallery.style.opacity = '0';
        textTyping.style.opacity = '0';
        headerTyping.classList.add('reversed');
        headerTyping.style.opacity = '0';
        setTimeout(function () {
            showGallery.style.display = 'none';
            document.getElementById('show').style.display = 'flex';
            textTyping.innerHTML = altText;
            textTyping.style.opacity = '1';
            document.getElementById('continue').style.display = 'inline-block';
        }, 700);
        setTimeout(() => {
            headerTyping.style.display = 'none';
            headerTyping2.style.display = 'block'
            headerTyping2.classList.add('typewriter2');
        }, 2500);
        setTimeout(() => {
            document.getElementById('continue').style.opacity = '1';
            headerTyping2.style.width = 'fit-content';
        }, 4500);
        setTimeout(() => {
        }, 7000);
        setTimeout(() => {
            animateGallery();
        }, 200);
        // func animate show gallery
        let animateGallery = () => {
            let images = document.querySelectorAll('.img-items');
            let time = 500;

            for (let i = 0; i < images.length; i++) {
                time += 1000;
                setTimeout(function () {
                    images[i].style.opacity = '1';
                }, time);
            }
            console.log(time);
        }
    });
    let descriptionItems = document.querySelectorAll('.description-items');
    let zoomItem = () => {
        for (let i = 0; i < descriptionItems.length; i++) {
            descriptionItems[i].style.cursor = 'pointer';
            descriptionItems[i].addEventListener('mouseover', function () {
                descriptionItems[i].style.transform = 'scale(1.1)';
                descriptionItems[i].style.transition = '0.5s ease-in-out';
            });
            descriptionItems[i].addEventListener('mouseout', function () {
                descriptionItems[i].style.transform = '';
                descriptionItems[i].style.transition = '0.5s ease-in-out';
            });
        }
    }
    // form submit
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // get messege 
        const message = document.getElementById('message').value;
        console.log(message);
        // get OBJ
        const formData = {
            message: message
        }
        const jsonData = JSON.stringify(formData);
        localStorage.setItem('MESSEGE', jsonData);
        if (jsonData) {
            document.getElementById('message').value = '';
            alert('Messege had been sent !!!');
        }
    });


    zoomItem();
});