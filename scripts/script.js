'use strict';

function otherCheck(e) {
    if (e.value == "other"|| e.value == "magic") {
        document.getElementById("ifOther").style.display = "block";
    } else {
        document.getElementById("ifOther").style.display = "none";
    }
}