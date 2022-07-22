let footer = () => {
    return `<div id="Foot">
    <div id="f_part1">
        <div id="f_part1_logo">
            <a href=""><img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg" alt="Error"></a>
        </div>
        <div id="f_part1_playstore">
            <a href="https://apps.apple.com/us/app/calorie-counter-mynetdiary/id287529757"><img src="https://s3.amazonaws.com/img.mynetdiary.com/images/app-store-badge.svg" alt="Error"></a>
            <a href="https://play.google.com/store/apps/details?id=com.fourtechnologies.mynetdiary.ad&referrer=utm_source%3Dwebsite%26utm_campaign%3Dfooter_link"><img src="https://s3.amazonaws.com/img.mynetdiary.com/images/google-play-badge.svg" alt="Error"></a>
        </div>
        <div id="f_part1_rating">
            <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="">
            <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="">
            <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="">
            <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="">
            <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-4.7.png" alt="">
            <p>4.8 . 61,383 Ratings</p>
        </div>
        <div id="f_part1_social">
            <a href="https://www.instagram.com/mynetdiary/"><img src="data:image/jpeg;base64,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" alt="Error"></a>
            <a href="https://www.facebook.com/mynetdiary/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H-8bEJjT59upbNUlSNbWgu6itJ6SySaLRA&usqp=CAU" alt="Error"></a>
            <a href="https://twitter.com/mynetdiary/"><img src="data:image/png;base64,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" alt="Error"></a>
            <a href="https://www.youtube.com/user/MyNetDiary/"><img src="https://interfireagencies.com.au/wp-content/uploads/2015/04/best-quality-youtube-logo-download-png-format.png" alt="Error"></a>
            <a href="https://www.pinterest.com/mynetdiary/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxXvFedIcC5wW6nzBDAvKvAl3tFf7Z8pPOW_XopRuXgCQ8H-870fX4tE8r95oR9BbSEI&usqp=CAU" alt="Error"></a>
        </div>
    </div>

    <div id="f_li">
    <div id="f_part2">
        <h3>APP FEATURES</h3>
        <ul>
            <li>iPhone & iPad</li>
            <li>Android app</li>
            <li>Keto-diet</li>
            <li>Low-Carb Diet</li>
            <li>Premium Calorie Coutning</li>
            <li>MyNetDiary vs MyFitnessPal</li>
        </ul>
    </div>
    <div id="f_part3">
        <h3>WEIGHT LOSS SCIENCE</h3>

        <ul>
            <li>Weight Loss Blog</li>
            <li>Diet Library</li>
            <li>Dietitian Team</li>
        </ul>
    </div>
    <div id="f_part4">
        <h3>BUSINESS</h3>
        <ul>
            <li>Gift cards & Group discounts</li>
            <li>For trainers</li>
            <li>For healthcare professionals</li>
            <li>For families</li>
            <li>Food database licensing</li>
        </ul>
    </div>
    <div id="f_part5">
        <h3>COMPANY</h3>
        <ul>
            <li>About MyNetDiary</li>
            <li>In the News</li>
            <li>Press Releases</li>
            <li>Press Kit</li>
        </ul>
    </div>
    </div>
</div>
<div id="Foot_last">
    <div id="fl_part1">
        <p>Copyright © 2022 MyNetDiary Inc. All rights reserved.</p>
    </div>
    <div id="fl_part2">
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>Privacy</p>
        <p>Terms Of Use</p>
    </div>
</div>`
}

export {footer};