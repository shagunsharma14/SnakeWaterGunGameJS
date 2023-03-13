//take input s w g and conver to lwercase
const user_choose = () => {
    user_input = prompt("Enter you choice (S for Snake, W for Water and G for Gun: ")
    return user_input.toLowerCase()
  }
  
  //computer generate random s w g
  const pc_choose = () => {
    let num = Math.floor(Math.random() * 3)
    console.log(num)
    if (num == 0) {
      console.log('s')
      return 's'
    }
    else if (num == 1) {
      console.log('w')
      return 'w'
    }
    else if (num == 2) {
      console.log('g')
      return 'g'
    }
  }
  
  //declare win or lose and count score
  const win_or_lose = (user_input, pc_input) => {
    /*s&s=d
      s&w=s
      s&g=g
      w&s=s
      w&w=d
      w&g=w
      g&s=g
      g&w=w
      g&g=g*/
    if (user_input != "s" && user_input != "w" && user_input != 'g') {
      alert("Please enter a valid input!!")
    }
    else if (user_input == 's' && pc_input == 's') {
      draw_count += 1;
      alert("DRAW")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
  
    }
    else if (user_input == 's' && pc_input == 'w') {
      pc_count += 1;
      alert("PC WON")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
  
    }
    else if (user_input == 's' && pc_input == 'g') {
      pc_count += 1;
      alert("PC WON")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
    }
    else if (user_input == 'w' && pc_input == 's') {
      user_count += 1;
      alert("YOU WON")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
    }
    else if (user_input == 'w' && pc_input == 'w') {
      draw_count += 1;
      alert("DRAW")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
    }
    else if (user_input == 'w' && pc_input == 'g') {
      user_count += 1;
      alert("YOU WON")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
    }
    else if (user_input == 'g' && pc_input == 's') {
      user_count += 1;
      alert("YOU WON")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
    }
    else if (user_input == 'g' && pc_input == 'w') {
      pc_count += 1;
      alert("PC WON")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
    }
    else if (user_input == 'g' && pc_input == 'g') {
      draw_count += 1;
      alert("DRAW")
      score_is(user_count, pc_count, draw_count, user_input, pc_input)
    }
  
  
  }
  
  //tell score
  const score_is = (user_count, pc_count, draw_count, uesr_input, pc_input) => {
    alert(`\nYou choose: ${user_input}\nPC choose: ${pc_input}\n-------------------------------\nscore is:\nyou: ${user_count}\npc: ${pc_count}\ndraw: ${draw_count}`)
  }
  
  //use prompt and confirm according
  const play_again = () => {
    let play = confirm("Do ou want to play again?")
    if (play) {
      return true
    }
    else {
      return false
    }
  }
  
  //main
  let play = true
  
  let user_count = 0
  let pc_count = 0
  let draw_count = 0
  while (play)
  {
  
    let user_input = user_choose()
    let pc_input = pc_choose()
  
    win_or_lose(user_input, pc_input)
    play = play_again()
}