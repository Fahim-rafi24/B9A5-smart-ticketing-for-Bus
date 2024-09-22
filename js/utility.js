



// This function checks if the button has already been clicked
function canBtnIsFresh(value, arr) {
    if (arr.includes(value)) {
        // If value is already in the array, do nothing (button has been clicked before)
        console.log(arr);
    } else {
        // If value is not in the array, add it
        arr.push(value);
        console.log(arr);
    }
}

function makeBtnGreen(value){
    // change color
    const element = document.getElementById(value);
    element.classList.add("make-booked-ticket-green");
    // make the btn disable
    // element.appendChild('disable');
    element.disabled = true;
}

function totalSeatIndicator(){
    const value = document.getElementById('total-seat-indicator');
    // console.log(value);
    // console.log(value.innerHTML);
    // console.log(value.innerText);
    let seat = value.innerText;
    seat -= 1;
    // console.log(seat);
    // console.log(typeof seat);
    value.innerText = seat;
    // console.log(value);
}

function byeingSeatVolume(){
    const value = document.getElementById('byeing-seat-volume');
    let seat = value.innerText;
    let num = parseInt(seat);
    num = num + 1;
    value.innerText = num;
}

function showTicketInfo(value){
    let info = document.getElementById('show-ticket-info');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
        <div id='set-seat-name-div' class="flex justify-between py-5">
            <span id='set-seat-name'>C2</span>
            <span>Economoy</span>
            <span>550</span>
        </div>
    `
    info.appendChild(newDiv);
    const newSeat =  document.getElementById('set-seat-name');
    newSeat.innerText = value;
}

function calculateTicketCost(value){
    const totalPrice = document.getElementById('total-price');
    const grandTotal = document.getElementById('grand-total');
    const price = value.length * 550;
    totalPrice.innerText = price;
    grandTotal.innerText = totalPrice.innerText;
}


document.getElementById('coupon-apply').addEventListener('click' , function (){
    let coupon = document.getElementById('coupon-box');
    let cost = document.getElementById('total-price');
    let finalCost = document.getElementById('grand-total');
    if( coupon.value === 'NEW15' ){
        finalCost.innerText = ((cost.innerText / 100) * 85);
    }
    else if ( coupon.value === 'Couple 20' ) {
        finalCost.innerText = ((cost.innerText / 100) * 80);
    }
    else{
        finalCost.innerText = cost.innerText;
    }
})


// function checkCoupon(){
//     let coupon = document.getElementById('coupon-box');
//     let cost = document.getElementById('total-price');
//     let finalCost = document.getElementById('grand-total');
//     if( coupon.value === 'NEW15' ){
//         finalCost.innerText = ((cost.innerText / 100) * 85);
//     }
//     else if ( coupon.value === 'Couple 20' ) {
//         finalCost.innerText = ((cost.innerText / 100) * 80);
//     }
//     else{
//         finalCost.innerText = cost.innerText;
//     }
// }