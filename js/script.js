//paralex 
$(function() {
    $('.parallax-window').parallax({
        imageSrc: '../img/1.jpg'
    });
    $('.parallax-window-two').parallax({
        imageSrc: '../img/w.jpg'
    });
});
const team = [{
        name: 'Bert',
        link: '',
        extension: 'png'
    },
    {
        name: 'Lucia',
        link: '',
        extension: 'png'
    },
    {
        name: 'Joyce',
        link: '',
        extension: 'jpg'
    },
    {
        name: 'Christophe',
        link: '',
        extension: 'png'
    },
    {
        name: 'Casimir',
        link: '',
        extension: 'jpeg'
    },
    {
        name: 'Ilia',
        link: '',
        extension: 'jpg'
    },
    {
        name: 'Joeri',
        link: '',
        extension: 'jpg'
    },
    {
        name: 'Panithi',
        link: '',
        extension: 'png'
    },
    {
        name: 'Heloise',
        link: '',
        extension: ''
    },
    {
        name: 'Tommy',
        link: '',
        extension: 'png'
    },
    {
        name: 'Thomas',
        link: '',
        extension: 'jpg'
    },
    {
        name: 'Karel',
        link: '',
        extension: ''
    },
    {
        name: 'Indy',
        link: '',
        extension: ''
    },
    {
        name: 'Evgeniia',
        link: '',
        extension: ''
    },
    {
        name: 'Roger',
        link: '',
        extension: 'jpg'
    },
    {
        name: 'Frederik',
        link: '',
        extension: ''
    },
    {
        name: 'Ekatherina',
        link: '',
        extension: 'jpg'
    }
];

let mozaiek = document.getElementById('mozaiek');
let breakpoint = 7;
let extension = 'jpg';

for (let i = 0; i < team.length; i++) {
    if (i === breakpoint) {
        mozaiek.innerHTML += '<div class="single-content col-sm-6 col-md-4 col-lg-2 my-2">\n' +
            '                                <div class="plate-gradient h-100 p-2">' +
            '                                    <a class="plate-link" href="https://www.linkedin.com/company/creative-code-vision/" target="_blank">\n' +
            '                                        <p class="plate-text text-white font-weight-bold uppercase text-left">check <br>us <br>out</p>\n' +
            '                                    </a>\n' +
            '                                </div>\n' +
            '                        </div>';
    } else if (team[i].extension !== '') {
        mozaiek.innerHTML += '<div class="single-content col-sm-6 col-md-4 col-lg-2 my-2">\n' +
            '                            <img class="pfp img-fluid" src="img/profile_pictures/' + team[i].name + '.' + team[i].extension + '" alt="">\n' +
            '                            <div class="text-content d-flex flex-column justify-content-between">\n' +
            '                                <div class="d-flex flex-row-reverse">\n' +
            '                                    <a class="pfp-link font-weight-bold uppercase p-1" href="' + team[i].link + '">info</a>\n' +
            '                                </div>\n' +
            '                                <div class="d-flex">\n' +
            '                                    <p class="pfp-name font-weight-bold uppercase">' + team[i].name + '</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>';
    } else {
        mozaiek.innerHTML += '<div class="single-content col-sm-6 col-md-4 col-lg-2 my-2">\n' +
            '                            <img class="pfp img-fluid" src="img/profile_pictures/' + team[i].name + '.' + extension + '" alt="">\n' +
            '                            <div class="text-content d-flex flex-column justify-content-between">\n' +
            '                                <div class="d-flex flex-row-reverse">\n' +
            '                                    <a class="pfp-link font-weight-bold uppercase p-1" href="' + team[i].link + '">info</a>\n' +
            '                                </div>\n' +
            '                                <div class="d-flex">\n' +
            '                                    <p class="pfp-name font-weight-bold uppercase">' + team[i].name + '</p>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>';
    }
}