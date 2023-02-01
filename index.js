const thumbnail = document.querySelector('.thumbnail')
let jumbo = document.querySelector('.jumbo')

thumbnail.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        jumbo.src = e.target.src
    }
}
)