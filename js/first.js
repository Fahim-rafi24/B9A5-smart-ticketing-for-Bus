// scroll top to bottom in main ticket section
document.getElementById('buyTickets').addEventListener('click', function() {
    const target = document.getElementById('mainSection');
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2500; // 2.5 seconds
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

let arr = [];



function bookThisTicket(seat){
    // Check if the button has already been clicked
    canBtnIsFresh(seat , arr);
    // If the seat is new (not already in arr), proceed with actions
    if (arr.includes(seat)) {
        // Make this button's background green
        makeBtnGreen(seat);
        // Adjust the total seat count
        totalSeatIndicator();
        // set byeing seat volume
        byeingSeatVolume();
        // show-ticket-info
        showTicketInfo(seat);
        // calculate cost of ticket
        calculateTicketCost(arr);
    }
    else{
        console.log('seat has already booked');
    }
}




