let galleryShortcuts = document.querySelectorAll(".gallery-shortcuts");
let windowWidth = window.innerWidth;

if (galleryShortcuts) {
  //CREATING ONCLICK EVENT TO OPEN FULL IMAGES

  galleryShortcuts.forEach(function (img, index) {
    img.onclick = function () {
      // COUNTING THE INDEX TO FIND A RELEVANT IMAGE
      let getLatestOpenedImg = index + 1;
      let setNewImgUrl =
        "../images/full images/img" + getLatestOpenedImg + ".jpg";

      // CREATING A WINDOW FOR THE FULL IMAGE
      let body = document.body;
      let fullImgWindow = document.createElement("div");
      body.appendChild(fullImgWindow);
      fullImgWindow.classList.add("full-img-window");

      // INSERTING FULL IMAGE TO THE NEW WINDOW
      let newFullImg = document.createElement("img");
      fullImgWindow.appendChild(newFullImg);
      newFullImg.setAttribute("src", setNewImgUrl);
      newFullImg.setAttribute("id", "current-img");

      // CREATING CLOSE BUTTON
      let closeBtn = document.createElement("a");
      closeBtn.classList.add("close-btn");
      closeBtn.setAttribute("onclick", "closeImg()");
      let closeBtnText = document.createTextNode("X");
      closeBtn.appendChild(closeBtnText);
      fullImgWindow.appendChild(closeBtn);
    };
  });
}

function closeImg() {
  document.querySelector(".full-img-window").remove();
}
