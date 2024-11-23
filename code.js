var qoute = document.getElementById("qoute");
var num = 0;
var temp = 0;

function randomNum() {
  return Math.ceil(Math.random() * 10);
}

function newQoute() {
  num = randomNum();
  
  if(temp === num) {
    num = randomNum();
  }



    console.log(num);

    switch (num) {
      case 1:
        qoute.innerHTML =
          "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.";
        break;
  
      case 2:
        qoute.innerHTML =
          "You only live once, but if you do it right, once is enough.";
        break;
  
      case 3:
        qoute.innerHTML = "Be yourself; everyone else is already taken.";
        break;
  
      case 4:
        qoute.innerHTML =
          "In three words I can sum up everything I have learned about life: it goes on.";
        break;
  
      case 5:
        qoute.innerHTML =
          "Do not take life too seriously you will never get out alive.";
        break;
  
      case 6:
        qoute.innerHTML =
          "Always forgive your enemies; nothing annoys them so much.";
        break;
  
      case 7:
        qoute.innerHTML =
          "It is better to be hated for what you are than to be loved for what you are not.";
        break;
  
      case 8:
        qoute.innerHTML =
          "Waste no more time arguing about what a good man should be. Be one.";
        break;
  
      case 9:
        qoute.innerHTML =
          "Life is like riding a bicycle. To keep your balance, you must keep moving.";
        break;
  
      case 10:
        qoute.innerHTML = "The only thing we have to fear is fear itself.";
        break;
    }

  


  temp = num;
}
