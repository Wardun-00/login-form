document.addEventListener("DOMContentLoaded", function () {
  // target date (উদাহরণ: আজ থেকে 10 দিনের পর)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10); // এখন থেকে 10 দিন পর

  // Element গুলো select করা
  const daysEl = document.querySelector('[aria-label="15"]');
  const hoursEl = document.querySelector('[aria-label="10"]');
  const minutesEl = document.querySelector('[aria-label="24"]');
  const secondsEl = document.querySelector('[aria-label="59"]');

  function updateCountdown() {
    const now = new Date();
    const distance = targetDate - now;

    if (distance < 0) {
      // countdown শেষ হলে
      daysEl.textContent = 0;
      hoursEl.textContent = 0;
      minutesEl.textContent = 0;
      secondsEl.textContent = 0;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    daysEl.style.setProperty("--value", days);

    hoursEl.textContent = hours;
    hoursEl.style.setProperty("--value", hours);

    minutesEl.textContent = minutes;
    minutesEl.style.setProperty("--value", minutes);

    secondsEl.textContent = seconds;
    secondsEl.style.setProperty("--value", seconds);
  }

  updateCountdown();
 
  setInterval(updateCountdown, 1000);
});


// next button click and then next part opening
document.getElementById('next-btn').addEventListener('click', function(e){
  e.preventDefault()
  window.location.href='./payment.html';
})


// back button 
document.getElementById('back-btn2').addEventListener('click', function(){
  window.location.href='./index.html';
})