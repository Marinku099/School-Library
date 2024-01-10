let GENRE = {
    'computer': 'วิทยาการคอมพิวเตอร์ สารสนเทศ และงานทั่วไป',
    'philosophy': 'ปรัชญาและจิตวิทยา',
    'religion': 'ศาสนา',
    'social': 'สังคมศาสตร์',
    'language': 'ภาษา',
    'science':'วิทยาศาสตร์',
    'technology':'เทคโนโลยี',
    'art':'ศิลปะและนันทนาการ',
    'literature':'วรรณกรรม',
    'history':'ประวัติศาสตร์และภูมิศาสตร์',
    'novel':'นวนิยาย',
    'shortstory':'เรื่องสั้น'
}

let toggleGenre = false;

const body = document.body
const genre = document.getElementById("genre");
const content = document.getElementById("genre-content");

function toggleFilterGenre() {
    if (content.style.display == "" || content.style.display == "none") {
        toggleGenre = true
        genre.style.backgroundColor = "#1782FF";
        content.style.display = "block";
    }else{
        toggleGenre = false;

        genre.style.backgroundColor = "#363636";
        content.style.display = "none";
    }
}

let currentGenre;
function genreSelect(currentGenre) {
    console.log(currentGenre);
    content.style.display = "none";
    /*
    let outGenre = GENRE[currentGenre];
    let filterBar = document.getElementsByClassName("filters")

    if (outGenre.length * 7.8 + 10 > filterBar.clientWidth) {
        let maxLen = Math.floor((filterBar.clientWidth) / 7.8);

        outGenre = outGenre.slice(0, maxLen + 1) + '...';
        console.log(outGenre)
    }*/
    genre.innerHTML = GENRE[currentGenre];
}

let toggleAvail = true
function toggleFilterAvail() {
    let avail = document.getElementById("avail");
    if (toggleAvail) {
        toggleAvail = false
        avail.style.backgroundColor = "#1782FF";
    }else{
        toggleAvail = true;
        avail.style.backgroundColor = "#363636";
    }
}

/*
//create genre
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const para = document.createElement("button");
    para.onclick = "genreSelect('" + element + "')";
    para.innerHTML = element;
    
    document.getElementsById("genre-content").appendChild(para);
}
<button onclick="genreSelect('math')">คณิตศาสตร์</button>
*/

