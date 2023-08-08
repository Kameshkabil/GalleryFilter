const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');


const previewBox = document.querySelector(".preview-box");
categoryName = previewBox.querySelector(".title p");
previewImg = previewBox.querySelector("img");
closeIcon = previewBox.querySelector(".icon");
shadow = document.querySelector(".shadow");


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        setActiveBtn(e);
        const btnFilter = e.target.dataset.filter;

        boxes.forEach(function (box) {
            if (btnFilter == 'all') {
                box.style.display = 'block';
            } else {
                const boxFilter = box.dataset.item;
                if (btnFilter == boxFilter) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            }
        })
    })
})

function setActiveBtn(e) {
    buttons.forEach(function (button) {
        button.classList.remove('btn-clicked')
    })
    e.target.classList.add('btn-clicked');
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].setAttribute("onclick", "preview(this)");
}

function preview(element) {
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-item");
    previewImg.src = selectedPrevImg;
    categoryName.textContent = selectedImgCategory;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = () => {
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "auto";
    }
}