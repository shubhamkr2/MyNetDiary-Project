let header_nav = () => {
    return `<div id="Header_nav">
    <div id="h_logo">
        <div id="logo_calender">
            <div id="c_logo">
                <a href=""><img src="../Header/logo2.PNG" alt="Error"></a>
            </div>
            <div id="h_calender">
                <a href=""><img src="https://www.mynetdiary.com/img/icon/date_range.png" alt="Error"></a>
                <a class="h_arrow" href=""><img src="https://s3.amazonaws.com/img.mynetdiary.com/left.png"
                        alt="Error"></a>
                <h2>Today</h2>
                <a class="h_arrow" href=""><img src="https://s3.amazonaws.com/img.mynetdiary.com/right.png"
                        alt="Error"></a>
            </div>
        </div>
        <div id="h_topRight">
            <div id="h_plan">
                <a href=""><img src="https://www.mynetdiary.com/img/Premium_planning_x2.png" alt="Error"></a>
            </div>
            <div class="dropdownlList">
                <a class="drop_btn" href="#"></a>
                <div class="dropdownlList-content" id="mydropdownlList">
                    <a href="">Calendar</a>
                    <a href="">Blog</a>
                    <a href="">Library</a>
                    <a href="">Help</a>
                    <a href="">Go To Homepage</a>
                    <a href="">Sign Off</a>
                </div>
            </div>
        </div>
    </div>
    <div id="h_nav">
        <div><a href="">DASHBOARD</a></div>
        <div><a href="">PLAN</a></div>
        <div><a href="">FOOD</a></div>
        <div><a href="">EXERCISE</a></div>
        <div><a href="">ANALYSIS</a></div>
        <div><a href="">COMMUNITY</a></div>
        <div><a href="">SETTINGS</a></div>
    </div>
</div>`
};

function MyFun() {
    document.getElementById("mydropdownlList").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.drop_btn')) {
        var dropdownlLists = document.getElementsByClassName("dropdownlList-content");
        var i;
        for (i = 0; i < dropdownlLists.length; i++) {
            var opendropdownlList = dropdownlLists[i];
            if (opendropdownlList.classList.contains('show')) {
                opendropdownlList.classList.remove('show');
            }
        }
    }
}


export {header_nav, MyFun};

