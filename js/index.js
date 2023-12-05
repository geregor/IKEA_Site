window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let item = document.getElementsByClassName("header-main__holder")[0]
    // sessionStorage.setItem("lastYOffset",document.body.scrollTop)
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        item.classList.add('is_active');
    } else {
        item.classList.remove('is_active');
    }
}

window.onload = () => {
    var header = document.querySelector('header');
    var headerMoving = function(direction){
    if (direction === "up"){
        header.className = '';
    } else if (direction === "down"){
        header.className = 'scrollDown';
    }
    };
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
        if (window.screen.width > 992) {
            var nextScrollTop = window.pageYOffset || 0; 
            if (nextScrollTop > prevScrollTop){
                headerMoving("down");
            } else if (nextScrollTop < prevScrollTop){
                headerMoving("up");
            }
            prevScrollTop = nextScrollTop;
        }
    });    

    let video_buttons = document.getElementsByClassName("video-container__pause")
    for (let i = 0; i < video_buttons.length; i++) {
        video_buttons[i].addEventListener("click", function() {
            if (!document.getElementById("video"+i).paused) {
                document.getElementById("video"+i).pause()
                video_buttons[i].childNodes[1].style = "color: #ffffff";
                video_buttons[i].childNodes[0].style = "color: #ffffff; display:none;";
            } else {
                document.getElementById("video"+i).play()
                video_buttons[i].childNodes[1].style = "color: #ffffff; display:none;";
                video_buttons[i].childNodes[0].style = "color: #ffffff";
            }
        })
    }
    document.getElementsByClassName("bi-2")[0].addEventListener("click", function() {
        if (window.screen.width < 992) {
            if (!document.getElementById("video0").paused) {
                document.getElementById("video0").pause()
            } else {
                document.getElementById("video0").play()
            }
        }
    })

    document.getElementsByClassName("vc-rectangle")[0].addEventListener("click", function() {
        if (window.screen.width < 992) {
            if (!document.getElementById("video1").paused) {
                document.getElementById("video1").pause()
            } else {
                document.getElementById("video1").play()
            }
        }
    })

    let el = document.getElementsByClassName("item-container")[0];
    let gap = 25;
    document.getElementsByClassName("s-left")[0].addEventListener("click", function() {
        if (el.style.cssText == `--m-left: -${el.offsetWidth+gap}px;`) {
            el.style.cssText = `--m-left: 0px;`
        } else if (el.style.cssText == `--m-left: -${(el.offsetWidth+gap)*2}px;`) {
            el.style.cssText = `--m-left: -${el.offsetWidth+gap}px;`
        }
    })

    document.getElementsByClassName("s-right")[0].addEventListener("click", function() {
        if (el.style.cssText == `--m-left: -${el.offsetWidth+gap}px;`) {
            el.style.cssText = `--m-left: -${(el.offsetWidth+gap)*2}px;`
        } else if (el.style.cssText == `--m-left: 0px;` || el.style.cssText == ``) {
            el.style.cssText = `--m-left: -${el.offsetWidth+gap}px;`
        }
    })

    function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('el-show-anime');
        }
    });
    }

    let options = {
        rootMargin: "200px",
        threshold: 0.01,
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.block__1, .block__2, .block__3, .block__4, .block__5, .holder');

    let windowH = window.screen.height;
    let windowOffsetY = window.pageYOffset;
    for (let elm of elements) {
        let elh = elm.clientHeight;
        if (((elm.offsetTop < windowOffsetY+windowH) && (elm.offsetTop > windowOffsetY)) || (elm.offsetTop <= windowOffsetY)) {
           
        } else {
            elm.classList.add("translateY200");
            observer.observe(elm);
        };
    }
    console.log("script loaded")
}