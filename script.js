const colors = [
    { hex: "#FF5733", name: "1 Vibrant Red-Orange" },
    { hex: "#33C1FF", name: "2 Bright Sky Blue" },
    { hex: "#75FF33", name: "3 Lime Green" },
    { hex: "#FF33EC", name: "4 Pink Magenta" },
    { hex: "#FFD133", name: "5 Golden Yellow" },
    { hex: "#8D33FF", name: "6 Violet Purple" },
    { hex: "#33FFBD", name: "7 Aqua Mint" },
    { hex: "#FF3333", name: "8 Strong Red" },
    { hex: "#3380FF", name: "9 Medium Blue" },
    { hex: "#33FF57", name: "10 Fresh Green" },
    { hex: "#FFB347", name: "11 Soft Orange" },
    { hex: "#B0E0E6", name: "12 Powder Blue" },
    { hex: "#FF6F61", name: "13 Coral Red" },
    { hex: "#6A5ACD", name: "14 Slate Blue" },
    { hex: "#ADFF2F", name: "15 Green Yellow" },
    { hex: "#20B2AA", name: "16 Light Sea Green" },
    { hex: "#FF1493", name: "17 Deep Pink" },
    { hex: "#DAA520", name: "18 Goldenrod" },
    { hex: "#87CEFA", name: "19 Light Sky Blue" },
    { hex: "#DC143C", name: "20 Crimson" }
  ];
  
  

  
  let btnColorChanger = document.getElementById('changeBackgroundColor');
  const buttonColor = document.getElementById('buttonColor');
  const bodyColor = document.getElementById('bodyColor');
  let indexOfColor = 0;
  let colorDirection = true;


// 0 to last for button 
// lat to 0 for body
 btnColorChanger.addEventListener('click', function(){
     confetti({});

    let reverseColor = colors.length - 1 - indexOfColor;

    console.log(colors.length);

    buttonColor.innerText = colors[indexOfColor].name;
    btnColorChanger.style.backgroundColor = colors[indexOfColor].hex;

console.log(reverseColor);

bodyColor.innerText = colors[reverseColor].name;;
    document.body.style.backgroundColor = colors[reverseColor].hex;

    if(colorDirection){
        indexOfColor++;
        if(indexOfColor === colors.length - 1){
            colorDirection = false;
        }
    }else{
        indexOfColor--;
        if(indexOfColor === 0){
            colorDirection = true
        }
    }
  }
  );
 document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'Enter') {
      btnColorChanger.click(); // Triggers the same color change logic
    }
  });

//   Random color Generator 

/*  const warmColors = [
    { hex: "#FF5733", name: "Vibrant Red-Orange" },
    { hex: "#FF8D33", name: "Bright Orange" },
    { hex: "#FFD133", name: "Golden Yellow" },
    { hex: "#FF3333", name: "Strong Red" },
    { hex: "#FF69B4", name: "Hot Pink" }
  ];
  
  const coolColors = [
    { hex: "#33C1FF", name: "Bright Sky Blue" },
    { hex: "#3380FF", name: "Medium Blue" },
    { hex: "#33FFBD", name: "Aqua Mint" },
    { hex: "#8D33FF", name: "Violet Purple" },
    { hex: "#33FF57", name: "Fresh Green" }
  ];
  

let warmColor;
let coolColor;

function randomColors(colours){
    let randomIndex = Math.floor(colours.length * Math.random());
    return colours[randomIndex];
}

  btnColorChanger.addEventListener('click', function(){
    confetti({});
    warmColor = randomColors(warmColors);
    buttonColor.innerText = warmColor.hex;
    btnColorChanger.style.backgroundColor = warmColor.hex;

    coolColor = randomColors(coolColors);
    bodyColor.innerText = coolColor.hex;
    document.body.style.backgroundColor = coolColor.hex;
  }
  );

 */

