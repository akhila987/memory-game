// document.addEventListener('DOMContentLoaded', () => {
//     debugger
//     const emojisArray = [
//         '😀', '😀', '😄', '😄', 
//         '😊', '😊', '😎', '😎', 
//         '😍', '😍', '😂', '😂', 
//         '🥰', '🥰', '😇', '😇'
//     ];
//     let gameBoard = document.getElementById('game-board');
//     let resetButton = document.getElementById('reset-game');
//     let shuffledEmojis = shuffle(emojisArray);
//     let firstCard = null;
//     let secondCard = null;
   
//     let lockBoard = false;
//     function shuffle(array) {
//         let currentIndex = array.length, randomIndex;

//         while (currentIndex !== 0) {
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex--;

//             [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//         }

//         return array;
//     }

//     shuffledEmojis.forEach(emoji => {
//         let cardElement = document.createElement('div');
       
        
        
//         cardElement.classList.add('card');
//         cardElement.dataset.value = emoji;
//         cardElement.addEventListener('click', function flipCard() {
//             if (lockBoard) return;
//             if (this === firstCard) return;
    

//         this.classList.add('flipped');
//         this.textContent = this.dataset.value;
    
//           if (!firstCard) {
//                 firstCard = this;
//                 return;
//             }
    
//             secondCard = this;
//             lockBoard = true;
    
//             checkForMatch();
//         }
//     );
//         gameBoard.appendChild(cardElement);
       
//     });

//     resetButton.addEventListener('click', 
//         function resetGame() {
//             lockBoard = false;
//             shuffledEmojis = shuffle(emojisArray);
//             gameBoard.innerHTML = '';
//             shuffledEmojis.forEach(emoji => {
//                 let cardElement = document.createElement('div');
//                 cardElement.classList.add('card');
//                 cardElement.dataset.value = emoji;
//                 cardElement.addEventListener('click', flipCard);
//                 gameBoard.appendChild(cardElement);
//             });
//             firstCard = null;
//             secondCard = null;
//         });


    
//     function checkForMatch() {
//         if (firstCard.dataset.value === secondCard.dataset.value) {
//             disableCards();
//         } else {
//             unflipCards();
//         }
//     }
    
//     function disableCards() {
//         firstCard.classList.add('matched');
//         secondCard.classList.add('matched');
//         resetBoard();
           
//         if(unflipCards==0){
//             var h1=document.createElement("h1")
//             h1.innerHTML="you won the match "
//             document.body.append(h1)
        
//         }
//     }
//     function unflipCards() {
//         setTimeout(() => {
//             firstCard.classList.remove('flipped');
//             secondCard.classList.remove('flipped');
//             firstCard.textContent = '';
//             secondCard.textContent = '';
//             resetBoard();
//         }, 1000);
       
//     }

//     function resetBoard() {
//         [firstCard, secondCard] = [null, null];
//         lockBoard = false;
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    debugger
    const emojisArray = [
        '😀', '😀', '😄', '😄', 
        '😊', '😊', '😎', '😎', 
        '😍', '😍', '😂', '😂', 
        '🥰', '🥰', '😇', '😇'
    ];
    let gameBoard = document.getElementById('game-board');
    let resetButton = document.getElementById('reset-game');
    let shuffledEmojis = shuffle(emojisArray);
    let firstCard = null;
    let secondCard = null;
    
    let lockBoard = false;
    let matchedPairs = 0; // Track matched pairs
    const totalPairs = emojisArray.length / 2; // Total pairs to match

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    shuffledEmojis.forEach(emoji => {
        let cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = emoji;
        cardElement.addEventListener('click', function flipCard() {
            if (lockBoard) return;
            if (this === firstCard) return;

            this.classList.add('flipped');
            this.textContent = this.dataset.value;

            if (!firstCard) {
                firstCard = this;
                return;
            }

            secondCard = this;
            lockBoard = true;

            checkForMatch();
        });
        gameBoard.appendChild(cardElement);
    });

    resetButton.addEventListener('click', function resetGame() {
        lockBoard = false;
        matchedPairs = 0; // Reset matched pairs
        shuffledEmojis = shuffle(emojisArray);
        gameBoard.innerHTML = '';
        shuffledEmojis.forEach(emoji => {
            let cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.value = emoji;
            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });
        firstCard = null;
        secondCard = null;
    });

    function checkForMatch() {
        if (firstCard.dataset.value === secondCard.dataset.value) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedPairs++; // Increment matched pairs
        resetBoard();

        if (matchedPairs === totalPairs) { // Check if all pairs are matched
            showWinningMessage();
        }
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard] = [null, null];
        lockBoard = false;
    }

    function showWinningMessage() {
        const h1 = document.createElement("h1");
        h1.innerHTML = "You won the match!  😀 ";
        document.body.append(h1);
        h1.style.backgroundColor="pink"
        
    }
});



