// 네비게이션 (햄버거 버튼)
window.addEventListener("load", function () {
  const navBar = document.querySelector("#menu-nav");
  const navMenu = document.querySelector("#nav-open-btn");
  const closeMenu = document.querySelector(".nav-close-btn");
  const allMenuButton = document.querySelector(".all-menu");

  navMenu.addEventListener("click", function () {
    navBar.style.left = "0";
    navBar.style.transition = "0.3s";
    document.querySelector("body").style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", function () {
    navBar.style.left = "100%";
    document.querySelector("body").style.overflowY = "scroll";
  });

  allMenuButton.addEventListener("click", function () {
    navBar.style.left = "0";
    navBar.style.transition = "0.3s";
    document.querySelector("body").style.overflow = "hidden";
  });
})


// 네비게이션 버튼 호버
window.addEventListener("load", function () {
  const navCateButtons = document.querySelectorAll(".navCateButton");

  for (let i = 0; i < navCateButtons.length; i++) {
    navCateButtons[i].addEventListener("mouseover", function () {
      clearNavCateButton();

      this.style.color = "white";
      this.style.backgroundColor = "rgb(69, 145, 189)";
      this.firstElementChild.style.filter = "brightness(100)";
      this.style.transition = "0.3s";
    });
    function clearNavCateButton() {
      navCateButtons[i].addEventListener("mouseout", function () {

        navCateButtons[i].style.color = "black";
        navCateButtons[i].style.backgroundColor = "transparent";
        navCateButtons[i].firstElementChild.style.filter = "none";
      });
    };
  }
});


window.addEventListener("load", function () {
  // 언어 선택
  const languageOptions = document.querySelector(".lan-options");
  const searchPopup = document.querySelector(".search-pop");
  const lanButton = document.querySelector(".language-btn");

  lanButton.addEventListener("click", function () {
    if (languageOptions.style.opacity === '0' || languageOptions.style.opacity === '') {
      languageOptions.style.opacity = "1";
      searchPopup.style.opacity = "0";
    } else {
      languageOptions.style.opacity = "0";
    }
  });

  // 검색 (밖으로 빼면 안되고 언어선택이랑 넣으면 메인만 됨)
  const searchButton = document.querySelector(".search-btn");

  searchButton.addEventListener("click", function () {
    if (searchPopup.style.opacity === "0" || searchPopup.style.opacity === "") {
      searchPopup.style.opacity = "1";
      languageOptions.style.opacity = "0";
      searchPopup.style.top = "70px";
      searchPopup.style.visibility = "unset";
    }
  });
  document.querySelector(".close-search").addEventListener("click", function () {
    searchPopup.style.opacity = "0";
    searchPopup.style.top = "50px";
    searchPopup.style.visibility = "hidden";
  });
}
);


// select 스타일 (푸터 패밀리 사이트)
window.addEventListener("load", function () {
  const optionMenu = document.querySelector("footer .select-menu");
  const options = document.querySelectorAll(".option");
  const sBtn_text = document.querySelector(".sBtn-text");

  document.querySelector("#site-select-button").addEventListener("click", function () {
    optionMenu.classList.toggle("site-select-active");
  });

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      const selectedOption = this.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;

      optionMenu.classList.remove("site-select-active");
    })
  }
});


// 네비 준비중, 로그인 필요한 서비스
$(document).ready(function () {
  $("#cate-btn3").off().on('click', function () {
    alert('준비중입니다.');
  });

  $("#cate-btn4").off().on('click', function () {
    alert('준비중입니다.');
  });

  $("#members-btn").off().on('click', function () {
    alert('로그인이 필요한 서비스입니다.');
  });

  $("#driving-btn").off().on('click', function () {
    alert('로그인이 필요한 서비스입니다.');
  });
})


//네비 팝업창 (견적내기)
window.addEventListener("load", function () {
  const navCalculator = document.querySelector("#nav-calculator");
  const navCalPop = document.querySelector(".calculator");
  navCalculator.addEventListener("click", function () {
    navCalPop.style.display = "block";
  });

  const navCalculatorClose = document.querySelector(".close-calculator");
  navCalculatorClose.addEventListener("click", function () {
    navCalPop.style.display = "none";
  });

  // 네비 계산기
  const navModel = document.querySelector("#nav-model");
  const navModelPop = document.querySelector(".model");
  const closeModelPop = document.querySelector(".close-model");

  navModel.addEventListener("click", function () {
    navModelPop.style.display = "block";
  });
  closeModelPop.addEventListener("click", function () {
    navModelPop.style.display = "none";
  });
})


window.addEventListener("load", function () {
  // 할부 계산기 스크롤 게이지 색상
  document.querySelector('.sliderRange').addEventListener('input', function (event) {

    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #262846 0%, #262846 ' + gradient_value * event.target.value + '%, #eee ' + gradient_value * event.target.value + '%, #eee';
  });

  document.querySelector('.sliderRange2').addEventListener('input', function (event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #262846 0%, #262846 ' + gradient_value * event.target.value + '%, #eee ' + gradient_value * event.target.value + '%, #eee';
  });


  // 할부 계산기
  const rangeSlider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = rangeSlider.value;

  rangeSlider.oninput = function () {
    output.innerHTML = this.value;
  }

  const pst = document.getElementById("myRange1");
  const value = document.getElementById("value");
  value.textContent = pst.value;
  pst.oninput = function () {
    value.textContent = this.value;
  }


  // 할부계산기 리스트
  const calculatorList = document.querySelectorAll("#cal-listtap > li");

  for (let i = 0; i < calculatorList.length; i++) {
    calculatorList[i].addEventListener("click", function () {
      clearCalculatorTap();
      this.classList.add("tapsee");
    });
  }
  function clearCalculatorTap() {
    for (let i = 0; i < calculatorList.length; i++) {
      calculatorList[i].classList.remove("tapsee");
    }
  }


  // 모델비교 리스트
  const modelList = document.querySelectorAll("#model-listtap > li");

  for (let i = 0; i < modelList.length; i++) {
    modelList[i].addEventListener("click", function () {

      clearModelTap();

      this.classList.add("tapsee");

      if (i == 0) {
        document.querySelector(".model1").style.display = "block";
        document.querySelector(".model2").style.display = "none";
        document.querySelector(".model3").style.display = "none";
      }
      else if (i == 1) {
        document.querySelector(".model1").style.display = "none";
        document.querySelector(".model2").style.display = "block";
        document.querySelector(".model3").style.display = "none";
      }
      else if (i == 2) {
        document.querySelector(".model1").style.display = "none";
        document.querySelector(".model2").style.display = "none";
        document.querySelector(".model3").style.display = "block";
      }
    });
  }
  function clearModelTap() {
    for (let i = 0; i < modelList.length; i++) {
      modelList[i].classList.remove("tapsee");
    }
  }
})