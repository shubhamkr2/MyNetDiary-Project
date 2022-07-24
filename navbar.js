let navbar = () => {
    return `<div id="NavBar" class="nav">
    <a id="navbarLogo" href="./index.html"><img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg"
            alt="Error"></a>
    <div id="nav_container">
        <div id="nav_option">
            <div class="option">
                <a class="nav_btn" id="feature" href="./features1.html">Features</a>
                <div class="dropdown_option">
                    <a href="./features1.html">iPhone & iPad app</a>
                    <a href="https://play.google.com/store/apps/details?id=com.fourtechnologies.mynetdiary.ad&referrer=utm_source%3Dwebsite%26utm_campaign%3Dsticky_header">Android app</a>
                    <a href="./features2.html">User Reviews</a>
                    <a href="./features3.html">MyNetDiary vs MyFitnessPal</a>
                </div>
            </div>
            <div class="option">
                <a class="nav_btn" id="diet" href="./Diet.html">Diets</a>
                <div class="dropdown_option">
                    <a href="#">Calorie Counting</a>
                    <a href="#">Low-Carb</a>
                    <a href="#">Keto</a>
                    <a href="#">High-Protein</a>
                    <a href="#">Low-Fat</a>
                    <a href="#">Mediterranean</a>
                    <a href="#">Vegetarian</a>
                    <a href="#">Vegan</a>
                </div>
            </div>
            <div class="option">
                <a class="nav_btn" id="libr" href="./library-page1.html">Library</a>
                <div class="dropdown_option">
                    <a href="./library-page1.html">Weight Loss Blog</a>
                    <a href="./Diet.html">Diet Library</a>
                    <a href="./library-page2.html">Dietitian team</a>
                </div>
            </div>
            <div class="option">
                <a class="nav_btn" id="food" href="./food_search.html">Food</a>
                <div class="dropdown_option">
                    <a href="./food_search.html">Food Search</a>
                    <a href="#">DataBase Licensing & API </a>
                </div>
            </div>
            <div class="option">
                <a class="nav_btn" id="buiss" href="">Business</a>
                <div class="dropdown_option">
                    <a href="#">Find HealthCare Professional</a>
                    <a href="#">For HealthCare Professionals</a>
                    <a href="#">For Trainers & Clubs</a>
                    <a href="#">MyNetDiary vs MyFitnessPal</a>
                    <a href="#">Food DataBase Licensing </a>
                </div>
            </div>
        </div>
        <div id="login_btn">
            <a id="who" class="signup_btn" href="./signup.html">SIGN UP</a>
            <a class="signin_btn" href="./login.html">SIGN IN</a>
        </div>
    </div>
</div>` ;
};

function changeBg() {
    let navBar = document.querySelector("#NavBar");
    let nav_opt1 = document.querySelector("#feature");
    let nav_opt2 = document.querySelector("#diet");
    let nav_opt3 = document.querySelector("#libr");
    let nav_opt4 = document.querySelector("#food");
    let nav_opt5 = document.querySelector("#buiss");
    let signup = document.querySelector(".signup_btn");
    let signin = document.querySelector(".signin_btn");

    let scrollValue = window.pageYOffset;
    if (scrollValue < 35) {
        navBar.classList.remove("f_Navbar");
        nav_opt1.classList.remove("f_nav_Opt");
        nav_opt2.classList.remove("f_nav_Opt");
        nav_opt3.classList.remove("f_nav_Opt");
        nav_opt4.classList.remove("f_nav_Opt");
        nav_opt5.classList.remove("f_nav_Opt");
        signup.classList.remove("f_signup");
        signin.classList.remove("f_signin");
    }

    else {
        navBar.classList.add("f_Navbar");
        nav_opt1.classList.add("f_nav_Opt");
        nav_opt2.classList.add("f_nav_Opt");
        nav_opt3.classList.add("f_nav_Opt");
        nav_opt4.classList.add("f_nav_Opt");
        nav_opt5.classList.add("f_nav_Opt");
        signup.classList.add("f_signup");
        signin.classList.add("f_signin");
    }

    // console.log(scrollValue);
}
export { navbar, changeBg };
