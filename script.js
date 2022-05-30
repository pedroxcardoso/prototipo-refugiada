
// CONST MENU SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');


// CONST SEARCH E POSTAGENS
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


// CONST THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const FontColor = document.querySelectorAll('.choose-bg');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// CONST LOGIN
const loginModal = document.querySelector('.log-button');
const log = document.querySelector('#log');

// SIDEBAR - POSTAGENS SELECTOR

const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
    })
})

// ======== BARRA DE PESQUISA LATERAL
const searchMessage = () => {
       const val = messageSearch.value.toLowerCase();
       console.log(val);
       message.forEach(chat => {
           let name = chat.querySelector('h5').textContent.toLowerCase
           ();
           if(name.indexOf(val) != -1){
               chat.style.display = 'flex';
               } else{
                   chat.style.display = 'none';
               }
       })
 }
messageSearch.addEventListener('keyup', searchMessage);

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messages.style.transition = 'all 500ms ease';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 3000);
    
})

// ============================================================================================================

//ABRIR LOGIN

const openLoginModal = () => {
    loginModal.style.display = 'grid';
}

//FECHAR O LOGIN CONST
const closeLoginModal = (e) =>{
    if(e.target.classList.contains('log-button')){
        loginModal.style.display = 'none';
    }
}

//FECHAR O PAINEL
loginModal.addEventListener('click', closeLoginModal);

log.addEventListener('click',  openLoginModal);


// =============================================================================================================

//ABRIR O MODAL
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//FECHAR O PAINEL CONST
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
//FECHAR O PAINEL
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


// ======== FONT SIZE ======= //

//Remover a bolinha do span
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size =>{
   
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

            // MUDAR O TAMANHO DA FONTE
             document.querySelector('html').style.fontSize = fontSize;

    })
    

    
})

//REMOVER ACTIVE DA BOLINHA DAS CORES

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}

// MUDAR AS CORES PRIMARÁRIAS
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 101;
        } else if(color.classList.contains('color-3')){
            primaryHue = 313;
        } else if(color.classList.contains('color-4')){
            primaryHue = 175;
        } else if(color.classList.contains('color-5')){
            primaryHue = 205;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
});

// BACKGROUND

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lighness', darkColorLightness);
}


Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    
    //remover active class
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
    //remover customização
    window.location.reload();
    
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    body.className = "light";

    // add active class
    Bg2.classList.add('active');
    //remover active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    body.className = "light";

    // add active class
    Bg3.classList.add('active');
    //remover active class
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

const body = document.querySelector('body');