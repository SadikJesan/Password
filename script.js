function getpass(n) {
    if (n > 35) {
        return 0;
    }
    let arr = ""
    for (let i = 0; i < n; i++) {
        let pass = Math.floor(33 + Math.random() * (126 - 33 + 1))
        arr += String.fromCharCode(pass)
    }
    return arr;
}

function gethide(n) {
    if (n > 35) {
        return "please stay in limit";
    }
    let arr = ""
    for (let i = 0; i <= n; i++) {
        arr += "*"
    }
    return arr;
}


function unchake() {
    document.querySelector(".chnum").value = "";
    document.querySelector(".box").checked = false;
    let path = document.querySelector(".box").checked;
    if (path == true) {
        document.querySelector(".input").style.display = "flex"
    }
    else {
        document.querySelector(".input").style.display = "none"
    }
}


function eventon() {
    document.querySelector(".btn").addEventListener("click", e => {

        document.querySelector(".hide").style.zIndex = "-1"
        document.querySelector(".img3").src = "hide.svg";

        let path = document.querySelector(".box").checked;
        let num = document.querySelector(".chnum").value;
        let pass;
        let zero;
        if (path == true) {
            if (num == "") {
                num = 8;
                pass = getpass(num);
                zero = gethide(num);
                unchake()

            }
            else {
                pass = getpass(num);
                zero = gethide(num);
                unchake();
            }
        }
        else {
            pass = getpass(8);
            zero = gethide(8)
        }
        if (pass == 0) {
            pass = "You cross the limit"
        }
        let output = document.querySelector(".pass")
        let output1 = document.querySelector(".hide")
        output1.innerHTML = zero
        output.innerHTML = pass;
    })


    document.querySelector(".img2").addEventListener("click", e => {
        let textToCopy = document.querySelector(".pass").innerHTML;
        navigator.clipboard.writeText(textToCopy);
    })

    document.querySelector(".box").addEventListener("click", e => {
        let path = document.querySelector(".box").checked;
        if (path == true) {
            document.querySelector(".input").style.display = "flex"
        }
        else {
            document.querySelector(".input").style.display = "none"
        }
    })

    document.querySelector(".img3").addEventListener("click", e => {
        let path = getComputedStyle(document.querySelector(".hide")).zIndex;

        if (path == "1") {
            document.querySelector(".hide").style.zIndex = "-1"
        }
        else {
            document.querySelector(".hide").style.zIndex = "1"

        }


    })

    document.querySelector(".img3").addEventListener("click", e => {
        let path = document.querySelector(".img3").src;
        if (path.includes('hide.svg')) {
            document.querySelector(".img3").src = "view.svg";
        }
        else {
            document.querySelector(".img3").src = "hide.svg";
        }


    })


}



async function main() {
    eventon();


}
main()