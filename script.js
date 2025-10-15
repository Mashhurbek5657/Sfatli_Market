const inpon = document.querySelector('.inpon');
const boxcon = document.querySelector('.boxcon');

inpon.addEventListener('focus', () => {
    boxcon.classList.add('hidden');
});

inpon.addEventListener('blur', () => {
    boxcon.classList.remove('hidden');
});


document.getElementById("openBtn").onclick = function () {
    document.getElementById("overlay").style.display = "flex";
}

document.getElementById("closeBtn").onclick = function () {
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("openBtn").onclick = function () {
    document.getElementById("overlay").style.display = "flex";
}

document.getElementById("closeBtn").onclick = function () {
    document.getElementById("overlay").style.display = "none";
}




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



const btn1 = document.querySelectorAll(".btn1"),
    btn2 = document.querySelectorAll(".btn2"),
    btn3 = document.querySelectorAll(".btn3");

const space = document.querySelector("#HOME");
const moon = document.querySelector("#DESTINATION");
const CREW = document.querySelector("#Karzinka");

btn1.forEach(li => {
    li.addEventListener("click", () => {
        space.style.display = "block";
        moon.style.display = "none";
        CREW.style.display = "none";
    });
});

btn2.forEach(li => {
    li.addEventListener("click", () => {
        moon.style.display = "block";
        space.style.display = "none";
        CREW.style.display = "none";
    });
});

btn3.forEach(li => {
    li.addEventListener("click", () => {
        CREW.style.display = "block";
        space.style.display = "none";
        moon.style.display = "none";
    });
});

const btn = document.getElementById('theme-toggle');
const circle = btn.querySelector('.circle');
let dark = false;

btn.addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('dark', dark);
    circle.textContent = dark ? '☀️' : '🌙';
});


const toggle2 = document.getElementById('theme-toggle2');
const circle2 = btn.querySelector('.circle2');
let dark2 = false;

toggle2.addEventListener('click', () => {
    dark2 = !dark2;
    document.body.classList.toggle('dark', dark2);
    circle2.textContent = dark2 ? '☀️' : '🌙';
});


///////////////////////////////////////////////Home//////////////////////////

let api = './code.json';
let allData = [];
async function fetchData2() {
    let req = await fetch(api);
    let res = await req.json();
    allData = res;

    displayData2(res);

}
const wrapper = document.querySelector('.kings1')

function displayData2(data) {

    wrapper.innerHTML = "";
    data.forEach(item => {
        let card2 = document.createElement('div');
        card2.setAttribute('class', 'card')
        card2.innerHTML += `
        <div class="card1">
<div class="imgs">
    <div class="lin">
                <div class="vin">
                    <div class="cons">
                    <div class="kil1">
                        <h4>Sale</h4>
                    </div>
                    </div>
                </div>
                <br>
        <div class="kil">
            <svg class="nis2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#013389" d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528zM336 142.4C322.7 142.4 312 153.1 312 166.4L312 200L278.4 200C265.1 200 254.4 210.7 254.4 224C254.4 237.3 265.1 248 278.4 248L312 248L312 281.6C312 294.9 322.7 305.6 336 305.6C349.3 305.6 360 294.9 360 281.6L360 248L393.6 248C406.9 248 417.6 237.3 417.6 224C417.6 210.7 406.9 200 393.6 200L360 200L360 166.4C360 153.1 349.3 142.4 336 142.4z"/></svg>
        </div>
        <div class="kil">
            <svg class="nis2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#00348f" d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"/></svg>
        </div>
        <div class="kil">
            <svg class="nis2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#002f80" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 176C258.7 176 248 186.7 248 200L248 248L200 248C186.7 248 176 258.7 176 272C176 285.3 186.7 296 200 296L248 296L248 344C248 357.3 258.7 368 272 368C285.3 368 296 357.3 296 344L296 296L344 296C357.3 296 368 285.3 368 272C368 258.7 357.3 248 344 248L296 248L296 200C296 186.7 285.3 176 272 176z"/></svg>
        </div>
    </div>
    <img src=${item.img} alt="" class="">
</div>
<div class="disn">
    <h3>${item.title}</h3>
    <p>$${item.price}</p>
</div>
</div>
        `;

        wrapper.append(card2);


    })
}


let inp = document.querySelector('#inp');

inp.addEventListener("input", (e) => {
    console.log(e.target.value);
    let value = e.target.value.toLowerCase();
    let filterData = allData.filter((item) => item.title.toLowerCase().includes(value));
    displayData2(filterData);
    console.log(filterData);
})



fetchData2();


///////////////////////////////////////////////Shop Grid Default//////////////////////////

let apis = './base.json';
let allData2 = [];
let cart = [];

async function fetchData() {
    let req = await fetch(apis);
    let res = await req.json();
    allData2 = res;
    displayData(res);
}


const wrapper2 = document.querySelector('.wrappr1');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('#modal-img');
const modalTitle = document.querySelector('#modal-title');
const modalPrice = document.querySelector('#modal-price');
const description = document.querySelector('#modal-description');
const closeBtn = document.querySelector('.close');
const cartBox = document.querySelector('.cart-box');
const totalInfo = document.querySelector('.total-info');

let currentItem = null;

function displayData(data) {
    wrapper2.innerHTML = "";
    data.forEach(item => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card2">
                    <div class="imgf">
                        <div class="olds">
                            <div class="kil2">
                                <svg class="nis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path fill="#013389"
                                        d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528zM336 142.4C322.7 142.4 312 153.1 312 166.4L312 200L278.4 200C265.1 200 254.4 210.7 254.4 224C254.4 237.3 265.1 248 278.4 248L312 248L312 281.6C312 294.9 322.7 305.6 336 305.6C349.3 305.6 360 294.9 360 281.6L360 248L393.6 248C406.9 248 417.6 237.3 417.6 224C417.6 210.7 406.9 200 393.6 200L360 200L360 166.4C360 153.1 349.3 142.4 336 142.4z" />
                                </svg>
                            </div>
                            <div class="kil2">
                                <svg class="nis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path fill="#00348f"
                                        d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                                </svg>
                            </div>
                            <div class="kil2">
                                <svg class="nis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path fill="#002f80"
                                        d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 176C258.7 176 248 186.7 248 200L248 248L200 248C186.7 248 176 258.7 176 272C176 285.3 186.7 296 200 296L248 296L248 344C248 357.3 258.7 368 272 368C285.3 368 296 357.3 296 344L296 296L344 296C357.3 296 368 285.3 368 272C368 258.7 357.3 248 344 248L296 248L296 200C296 186.7 285.3 176 272 176z" />
                                </svg>
                            </div>
                        </div>
                        <img class="ons" src="${item.images[0]}" alt="">
                    </div>
                    <h2>${item.title}</h2>
                    <div class="blar">
                        <div class="red" style="background: #DE9034;"></div>
                        <div class="red" style="background: #EC42A2;"></div>
                        <div class="red" style="background: #8568FF;"></div>
                    </div>
                    <h3>$${item.price}</h3>
                </div>
        `;

        card.addEventListener('click', () => {
            currentItem = item;
            modalImg.src = item.images[0];
            modalTitle.textContent = item.title;
            modalPrice.textContent = `$${item.price}`;
            description.textContent = `${item.description}`;
            modal.classList.remove('hidden');

            const modalBtnBox = document.querySelector('.modal-btn-box');
            modalBtnBox.innerHTML = `
                <button id="addToCartBtn" class="add-cart-btn">Add To cart</button>
            `;

            document.querySelector('#addToCartBtn').addEventListener('click', () => {
                addToCart(item);
            });
        });

        wrapper2.append(card);
    });
}

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
});


function addToCart(item) {
    cart.push(item);
    updateCart();
    modal.classList.add('hidden');
}


function updateCart() {
    cartBox.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;

        let div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
    <div class="cardns">
                <img src="${item.images[0]}" alt="">
                <div class="dis55">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <p>$${item.price}</p>
                </div>
            <h4 class="delete-btn">dalete...</h4>
    </div>
        `;
        cartBox.append(div);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let idx = e.target.dataset.index;
            cart.splice(idx, 1);
            updateCart();
        });
    });

    totalInfo.innerHTML = `
        <h4>Subtotals: .................£${totalPrice.toFixed(2)}</h4>
    `;
}



function handleSelect(event) {
    let value = event.target.value;
    filterData(value);
}
function filterData(category) {
    if (category === "all") {
        displayData(allData2);
    } else {
        const filtered = allData2.filter((item) => item.category === category);
        displayData(filtered);
    }
}

fetchData();