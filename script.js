function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1text = h1.textContent;

  var splittedText = h1text.split("");
  // console.log(splittedText)

  var halfValue = splittedText.length / 2;
  // console.log(halfValue)

  clutter = "";

  splittedText.forEach(function (elem, idx) {
    //    console.log(elem,idx)

    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 80,
  duration: 0.4,
  opacity: 0,
  delay: 0.4,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 80,
  duration: 0.6,
  opacity: 0,
  delay: 0.5,
  stagger: -0.15,
});
