const form = document.querySelector('.create');
const formdele = document.querySelector('.dele');
const blog = document.querySelectorAll('.blog');
const category = document.querySelector('.category');
const categoryd = document.querySelector('.categoryd');
const aspect = document.querySelector('.aspect');
const aspectd = document.querySelector('.aspectd');
const asp = document.querySelectorAll('.asp');
const languages = document.querySelectorAll('.language');
const lang = document.querySelector('.lang');
const snippet = document.querySelector('.snippet');
const upload = document.querySelector('.upload');
const smallwriteup = document.querySelector('.smallwriteup');
const smallwriteup2 = document.querySelector('.smallwriteup2');
const smallwriteuph = document.querySelector('.smallwriteuph');
const smallwriteuph2 = document.querySelector('.smallwriteuph2');
const hardwareCategory = document.querySelectorAll('.random');
const hardwarecat = document.querySelector('.hardwarecat');
const hardwaresnippet = document.querySelector('.hardwaresnippet');
const hardwareupload = document.querySelector('.hardwareupload');
const loo = document.querySelector('.loo');
const submit = document.querySelector('.button');
const successmessage = document.querySelector('.successmessage');
const errormessage = document.querySelector('.errormessage');
const successmessageh = document.querySelector('.successmessageh');
const errormessageh = document.querySelector('.errormessageh');
const title = document.querySelector('.title');
const tit = document.querySelector('.tit');
const hardwaretitle = document.querySelector('.hardwaretitle');
const aspectinput = document.querySelector('.aspectinput');
const aspectinputd = document.getElementById('aspectinputd');
const softid = document.querySelector('.softid');
const submitdel = document.querySelector('.submitdel');
const ce = document.querySelector('.create');
const visit = document.querySelector('.visit');
const alltitle = document.querySelector('.title');
const allid = document.querySelector('.id');
const allblogs = document.querySelector('.allblogs');
const buttonrun = document.querySelector('.run');
const prommessage = document.querySelector('.prommessage');
const allprogrammingblogs = document.querySelector('.allprogrammingblogs');
const myfile = document.querySelector('.myfile');


formdele.addEventListener('submit', (e)=>{
    e.preventDefault();
    // buttonrun.setAttribute('disabled', 'true')
    console.log(aspectinputd.value);
    const formdata = new FormData(formdele);
    const tak = Object.fromEntries(formdata);

    fetch('/admind', {
        method : 'POST',
        headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(tak)
    // body : formdata
})
.then(response => response.json())
.then((data)=>{
    // console.log(data);
    data.forEach((document)=>{
        let arr = {
            title : document.body.title[0],
            id : document._id
        }
        // console.log(arr.id)
        
        allblogs.innerHTML += `
        <li><span class="id">Id : ${arr.id}</span><br>
        <span class="title">Title : ${arr.title} </span><br> 
        <span style="margin-bottom: 15px;"><button class="delete" data-doc = ${arr.id}>Delete</button></span><br></li>
        `
    })


    let deletebutton = document.querySelectorAll('.delete');
    let eachdelbutton = Array.from(deletebutton);
    eachdelbutton.forEach((e)=>{
        e.addEventListener('click', ()=>{
            let prom = prompt("If sure to delete, click Ok, else click Cancel", "Harry Potter");
            if (prom != null && prom == 'yes') {
                e.parentElement.parentElement.remove();
                const endpoint = `/programming/${e.dataset.doc}`;
                fetch(endpoint, {
                    method : 'DELETE'
                })
                .then(()=>{})
                .catch((err)=>{console.log(err)})
            }
        })
    })
})
.catch(err => {console.log(err)})
})




function go(a){
    const each_category = Array.from(a);
    for(i in each_category){
        const eachCat = a[i];
        // console.log(eachCat);
        eachCat.addEventListener('click', ()=>{
            const eachcatval = eachCat.value;
            switch(eachcatval){
                case 'cars':
                    hardwaresnippet.style.visibility= 'inherit';
                    hardwareupload.style.visibility= 'inherit';
                    aspectinput.style.visibility = 'inherit';
                    hardwaretitle.style.visibility = 'inherit';
                    smallwriteuph.innerHTML += `<p class="smallwriteuph">Write something on ${eachcatval} Below :</p>`
                    smallwriteuph2.innerHTML += `<p class="smallwriteuph2">Write something on ${eachcatval} 2 Below :</p>`
                    // for chrome
                    // hardwaresnippet.style.display= 'block';
                    // hardwareupload.style.display= 'block';
                    // aspectinput.style.display = 'block';
                    // hardwaretitle.style.display = 'block';
                    break;
                case 'computers':
                    hardwaresnippet.style.visibility= 'visible';
                    hardwareupload.style.visibility= 'visible';
                    aspectinput.style.visibility = 'visible';
                    hardwaretitle.style.visibility = 'visible';
                    smallwriteuph.innerHTML += `<p class="smallwriteuph">Write something on ${eachcatval} Below :</p>`
                    smallwriteuph2.innerHTML += `<p class="smallwriteuph2">Write something on ${eachcatval} 2 Below :</p>`
                    break;
                case 'robotics':
                    hardwaresnippet.style.visibility= 'visible';
                    hardwareupload.style.visibility= 'visible';
                    aspectinput.style.visibility = 'visible';
                    hardwaretitle.style.visibility = 'visible';
                    smallwriteuph.innerHTML += `<p class="smallwriteuph">Write something on ${eachcatval} Below :</p>`
                    smallwriteuph2.innerHTML += `<p class="smallwriteuph2">Write something on ${eachcatval} 2 Below :</p>`
                    break;
            }
        })
    }
}

function fun(element, following){
    element.addEventListener('click', (e)=>{
        following.style.visibility= 'visible';

        switch(element){
            case document.getElementById('soft'):
                hard.setAttribute('disabled', 'true');
                break;
            case document.getElementById('hard'):
                soft.setAttribute('disabled', 'true');
                go(hardwareCategory);
                loo.remove();
                break;
        }
    })
}

function nas(item, following){
    item.addEventListener('click', (e)=>{
        following.style.visibility= 'visible';
    })
}

let language;

function doings(a){
    const each_lang = Array.from(a);

    // console.log(eachvalue)
    for(i in each_lang){
        const eachlangval = a[i]
        eachlangval.addEventListener('click', ()=>{
            const eachval = eachlangval.value;
            switch(eachval){
                // for the category
                case 'create':
                    // making the category visible
                    category.style.visibility= 'visible';
                    fun(document.getElementById('soft'), aspect);
                    fun(document.getElementById('hard'), hardwarecat);
                    break;
                case 'delete':
                    ce.remove();
                    categoryd.style.visibility= 'visible';
                    nas(document.getElementById('softt'), aspectd);
                    nas(document.getElementById('hardd'), aspectd);
                    break;


                // for the aspect
                case 'programming':
                    // making the aspect visible
                    lang.style.visibility= 'visible';
                    aspectinput.style.visibility = 'visible';
                    tit.style.visibility= 'visible';
                    break;
                case 'gaming':
                    snippet.style.visibility= 'visible';
                    upload.style.visibility= 'visible';
                    aspectinput.style.visibility = 'visible';
                    tit.style.visibility= 'visible';
                    smallwriteup.innerHTML += `<p class="smallwriteup">Write something on ${eachval} Below :</p>`
                    smallwriteup2.innerHTML += `<p class="smallwriteup2">Write something on ${eachval} 2 Below :</p>`
                    break;
                case 'random':
                    snippet.style.visibility= 'visible';
                    upload.style.visibility= 'visible';
                    aspectinput.style.visibility = 'visible';
                    tit.style.visibility= 'visible';
                    smallwriteup.innerHTML += `<p class="smallwriteup">Write something on ${eachval} Below :</p>`
                    smallwriteup2.innerHTML += `<p class="smallwriteup2">Write something on ${eachval} 2 Below :</p>`
                    break;

                // for the languages
                case 'html':
                    // making the languages visible
                    snippet.style.visibility= 'visible';
                    smallwriteup.innerHTML += `<p class="smallwriteup">Write something on ${eachval} Below :</p>`
                    smallwriteup2.innerHTML += `<p class="smallwriteup2">Write something on ${eachval} 2 Below :</p>`
                    upload.style.visibility= 'visible';
                    language = eachval;
                    break;
                case 'css':
                    snippet.style.visibility= 'visible';
                    smallwriteup.innerHTML += `<p class="smallwriteup">Write something on ${eachval} Below :</p>`
                    smallwriteup2.innerHTML += `<p class="smallwriteup2">Write something on ${eachval} 2 Below :</p>`
                    upload.style.visibility= 'visible';
                    language = eachval;
                    break;
                case 'js':
                    snippet.style.visibility= 'visible';
                    smallwriteup.innerHTML += `<p class="smallwriteup">Write something on ${eachval} Below :</p>`
                    smallwriteup2.innerHTML += `<p class="smallwriteup2">Write something on ${eachval} 2 Below :</p>`
                    upload.style.visibility= 'visible';
                    language = eachval;
                    break;
                case 'python':
                    snippet.style.visibility= 'visible';
                    smallwriteup.innerHTML += `<p class="smallwriteup">Write something on ${eachval} Below :</p>`
                    smallwriteup2.innerHTML += `<p class="smallwriteup2">Write something on ${eachval} 2 Below :</p>`
                    upload.style.visibility= 'visible';
                    language = eachval;
                    break;
                case 'dart':
                    snippet.style.visibility= 'visible';
                    smallwriteup.innerHTML += `<p class="smallwriteup">Write something on ${eachval} Below :</p>`
                    smallwriteup2.innerHTML += `<p class="smallwriteup2">Write something on ${eachval} 2 Below :</p>`
                    upload.style.visibility= 'visible';
                    language = eachval;
                    break
                default : 'food';
            }
        });
    }
}
// for languages
doings(languages);
// for aspects
doings(asp);
// for category
doings(blog)

let array = [];

// program to get a random item from an array
function getRandomItem1(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function getRandomItem2(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function getRandomItem3(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}




let stats;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let ldate = new Date(document.lastModified);
    const formdata = new FormData(form);
    const file = document.querySelector('#myfile');
    const tak = Object.fromEntries(formdata);
    const selectedImage = file.files[0]
    const t = formdata.append('language', language);
    const title = formdata.append('title', successmessage);
    const aspectin = formdata.append('aspect', aspectinput);
    const hardwaretit = formdata.append('hardwaretitle', hardwaretitle.value);
    const date = formdata.append('date', dateFns.format(ldate, 'MMM D, YYYY'));


    fetch('/2woc', {
        method: 'POST',
        body : formdata
      })
      .then(response => response.json())
      .then(data => {
        let stats = data.status;
        successmessage.innerHTML += `<h3 class="successmessage" style="visibility: visible;">${stats}</h3>`;
        successmessageh.innerHTML += `<h3 class="successmessage" style="visibility: visible;">${stats}</h3>`;
        console.log(stats);
      })
      .catch(error => {
          errormessage.innerHTML += `<h3 class="errormessage" style="visibility: visible;">Error Uploading Files</h3>`
          errormessageh.innerHTML += `<h3 class="errormessage" style="visibility: visible;">Error Uploading Files</h3>`
          console.error(error);
      });
})