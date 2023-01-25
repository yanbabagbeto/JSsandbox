# Here is the pseudo code we will be using 👩‍🍳

~The most challenging part of writing code is to figure the algorithm and pseudocode. This should be done before we write a single line of code.

- [x] There is a random number stored as chosenNumber
- [x] We have a maximum number of guesses stored as maxNumberOfAttempts
- [x] We should keep track of the number of currentNumberOfAttempts

- [ ] Implement a new attempt as function attemptAGuess:

  - [x] We ask the player to choose a guess with an input
  - [x] When the player click on submit / We validate his input to make sure it is a valid number. Otherwise, the ask him to enter a valid number. Only when we receive a valid input we do the following
  - [x] We stored that input in a list
  - [x] We display : Previous guesses which includes the previous guesses and the currentGuess
  - [x] We compare it with the chosenNumber
  - [x] if the chosenNumber is equal to the currentGuess then:
    - [x] Display the message: Congratulations! You got it right!
  - [ ] else we give the feedback to the customer:

    - [ ] Display the message:
      - [ ] If the currentGuess is above the chosenNumber : MSG: "Last guess was too high!"
      - [ ] If the currentGuess is below the chosenNumber : MSG: "Last guess was too low!"
      - [ ] We increment by 1 the currentNumberOfAttempts
      - [ ] We validate if currentNumberOfAttempts is equal or above the maxNumberOfAttempts
        - [x] If it is equal or above:
          - [x] We do a gameOver
        - [ ] Else
          - [ ] We implement a newAttempt

  - [ ] We implement a gameOver
    - [ ] We disable the fields and submit button
    - [ ] We reset the score, currentNumberOfAttempts, previousGuessesArray, previousGuessesString
