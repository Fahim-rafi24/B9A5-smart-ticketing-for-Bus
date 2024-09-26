// Buy Tickets button click function
document.getElementById('buyTickets').addEventListener('click', function() {
    const target = document.getElementById('mainSection');
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500; // 1.5 seconds
    let startTime = null;
    function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
    }
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(scrollAnimation);
});





// book Ticket Seat section
const checkSeatArr = [];
function bookThisTicket(seat){

    // can't bye more than 4 seat
    if (checkSeatArr.length >= 4) {
        return;
    }
    else{

        // check this Seat can already exsited in checkSeatArr arr
        if (checkSeatArr.includes(seat)) {
            // Exit the function without doing anything
            return ;
        } else {
            checkSeatArr.push(seat);
        }

        // Make Btn bg-color
        let seatButton = document.getElementById(seat);
        seatButton.style.backgroundColor = '#1DD100';

        // dicress 40 Seats left btn
        const dicressBtn =  document.getElementById('total-seat-indicator');
        dicressBtn.innerText = dicressBtn.innerText - 1 ;

        // Incress Seat Volume
        const incressBtn = document.getElementById('byeing-seat-volume');
        let num = parseInt(incressBtn.innerText, 10);
        num += 1;
        incressBtn.innerText = num;

        // Add seat info
        const parentElement  = document.getElementById('show-ticket-info');
        const newElement = document.createElement('div');
        newElement.innerHTML = `
        <div class="flex justify-between py-5">
            <span>${seat}</span>
            <span>Economoy</span>
            <span>550</span>
        </div>
        `;
        parentElement.appendChild(newElement);

        // set Total Price
        const totalPrice = document.getElementById('total-price');
        let currentPrice = parseInt(totalPrice.innerText, 10);
        const additionalCost = 550;
        let totalCost = currentPrice + additionalCost;
        totalPrice.innerText = totalCost;
        
        // Set Grand Total
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPrice.innerText;

    }
}





// get discount Coupon code Use
function getCouponCode(){
    const grandTotalPrice = document.getElementById('grand-total');
    let currentTotal = parseFloat(grandTotalPrice.innerText);
    const inputCoupon = document.getElementById('coupon-box');
    const inputValue = inputCoupon.value;
    // Coupun 20% offers & 15% offers
    if (checkSeatArr.length > 3) {
        if (inputValue === "Couple 20") {
            // Apply 20% discount
            const discount = currentTotal * 0.20;
            currentTotal = currentTotal - discount;
            grandTotalPrice.innerText = currentTotal.toFixed(0);
        }
        else if (inputValue === "NEW15") {
            // Apply 15% discount
            const discount = currentTotal * 0.15;
            currentTotal = currentTotal - discount;
            grandTotalPrice.innerText = currentTotal.toFixed(0);
        }
        else{
            return;
        }
    }
    // Coupun 20% offers
    else if (checkSeatArr.length > 0) {
        // console.log(inputValue);
        if (inputValue === "NEW15") {
            // Apply 15% discount
            const discount = currentTotal * 0.15;
            currentTotal = currentTotal - discount;
            grandTotalPrice.innerText = currentTotal.toFixed(0);
        }
        else{
            return;
        }
    }
    else{
        return;
    }
}





function nextPageBtn(){

    const passenger = document.getElementById("passenger-name");
    const passengerValue = passenger.value;

    const number = document.getElementById("phone-number");
    const numberValue =number.value;
    
    const email = document.getElementById("email-id");
    const emailValue = email.value;
    
    if (checkSeatArr.length > 0 && !passengerValue == "" && !numberValue == '' && !emailValue == '') {
        window.location.href = "success.html";
    }
    else{
        alert("Make Sure All All Personal Data Input..");
    }
}