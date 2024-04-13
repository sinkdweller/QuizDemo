const questions = [
    //page 1
    {
      question: "It's my first day at web development club! I'm here because...",
      image: "pictures/Q1.jpeg",
      choices: {        
        P: {                        //attribute attributed to the answer it contains. E: Extraversion
          answer: "for fun lol"     //rendered as a clickable button
        },
        J: {                        
          answer: "I am tremendously thrilled to acquire a novel expertise to add onto my evergrowing repetoir of skills"
        }
      }
    },
    //page 2... so on
    {
      question: "Oh dear...on your way to a table, you knocked over a waterbottle, and now everyone is staring at you",
      image: "https://placehold.co/400x300",
      choices: {
        F: {
          answer: "Oh no! I'm embarassed/Laugh it off and apologiz"
        },
        T: {
          answer: "Quickly clean it. I should be more mindful of my surroundings next time."
        }
      }
    },

    {
        question: "OH NO!!! that was Emma's waterbottle passed down from her ancestors, and she is LIVID ",
        image: "https://placehold.co/400x300",
        choices: {
          T: {
            answer: "Offer a piece of cheese as compensation"
          },
          F: {
            answer: "Get on your knees and start begging"
          },

        }
    },


    {
        question: "Emma is appeased, but her waterbottle is still angry. It wants more...but that was your last piece of cheese",
        image: "https://placehold.co/400x300",
        choices: {
          F: {
            answer: "Lie and say you'll bring some next time"
          },
          T: {
            answer: "Why is the waterbottle talking?"
          },

        }
    },

    {
        question: "The waterbottle is unpleased with your decision. It reveals its true form as the thing you fear most: ",
        image: "https://placehold.co/400x300",
        choices: {
          J: {
            answer: "A letter:'The program you chose received many applicants for a limited number of places. After careful consideration by the faculty admissions committee, we sincerely regret to inform you that we are unable to offer you admission at this time.' "
          },
          P: {
            answer: "Oversized worm"
          },

        }
    },
    {
        question: "The maker of this quiz got lazy and there are no more questions. Feel free to make the rest yourselves!",
        image: "https://placehold.co/400x300",
        choices: {
          J: {
            answer: "How can somebody so irresponsible be a president?"
          },
          P: {
            answer: "I was so invested, how can you do this to me?"
          },

        }
    },

  ];
const characterResults = {
    'TP': {
        name: "Gustav",
        image: "./pictures/gustav.png",
        description: "Your character is Gustav! You are laid back and logical. You see possibilities ine everything. You are a funny little creature, even if you don't realize it."
    }
    ,
    'TJ': {
        name: "Gilbert",
        image: "./pictures/Gilbert.png",
        description: "Your character is Gilbert! You are a driven individual and like to rely on your head. Although you might seem stiff to others, you are a great planner and reliable friend. "
    }
    ,

    'FJ': {
        name: "Ferg",
        image: "./pictures/carlos.png",
        description: "Your name is Ferg! You are charismatic, and many people enjoy your presence. You  may often find yourself as the mom or dad of your relationships. "
    }
    ,
    'FP': {
        name: "Bustav",
        image: "./pictures/Sunny.png",
        description: "Your name is Bustav, but everyone calls you Buh! You're a silly little guy, with a lot of silly little guy friends! You are spontaneous, and get along with everyone well."
    }
    ,

    
}
                                       
  
  //start program
  document.getElementById('start-button').addEventListener('click', () => {         
    document.getElementById('quiz-body').style.display = 'flex';
    document.getElementById("start-page").style.display='none';
    changePage();
  });

  let page = 0;
  const nextButton = document.getElementById('next');               
  const choicesContainer = document.getElementById('choices');  
  
  var userAnswers = { T: 0, F: 0, J:0, P:0};        //Total answers by user
  var choice;                                                  
  nextButton.addEventListener('click', changePage);             

  function changePage() {                                       
    nextButton.style.display="none";
    console.log(userAnswers);
    
    if (choice) {
        userAnswers[choice]++;
    }
  
    if (page < questions.length) {
        document.getElementById('question').textContent = questions[page].question;
        document.getElementById("quiz-image").setAttribute("src", questions[page].image);
      const choiceHTML = Object.keys(questions[page].choices).map((trait) =>
        `<button id="${trait}" class="choice" onclick="choose('${trait}')">${questions[page].choices[trait].answer}</button>`
      );
  
      choicesContainer.innerHTML = choiceHTML.join(''); 
      page++;
    } else {
      displayResults();

    }
  }
  function displayResults(){
        const result = calcResult();
        document.getElementById('quiz-body').style.display='none';
        document.getElementById('result-body').style.display='flex';
        document.getElementById('result-text').innerHTML = `Your result is: ` + result;
        document.getElementById('result-image').setAttribute("src", characterResults[result].image);
        document.getElementById('character-description').innerHTML = characterResults[result].description;

  }

  function choose(trait) {  
    const chosenElement = document.querySelector(".chosen");
  
    if (chosenElement) {
      chosenElement.classList.remove("chosen");
    }
  
    choice = trait;
    document.getElementById(`${trait}`).classList.add("chosen");
    nextButton.style.display="block";
  }

  function calcResult() {
    const traitOrder = [['T','F'], ['P', 'J']];
    let finalLetters = '';
  
    for (const trait of traitOrder) {
      if (userAnswers[trait[0]] > userAnswers[trait[1]]) {
        finalLetters += trait[0];
      }
      else{finalLetters += trait[1]}
    }
  
    return finalLetters;
  }


  document.getElementById("restart-button").addEventListener('click', () => {
    document.querySelector(".oops").style.display = "block";
  });