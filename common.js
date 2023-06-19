const burger = document.querySelector('.Hamburger')
const Links = document.querySelector('.Header_Links_Mob');
const SkillSetsInner = document.querySelector('.SkillSet_Container_inner')
const allImages = document.querySelectorAll('.SkillSet_Container_inner img')
const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')
const button = document.querySelectorAll('button')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    Links.classList.toggle('active')
})





// -----------------------------Slider----------------------------------

const Slider = document.querySelector('.Slider')
const ArrowLeft = document.querySelector ('.ArrowLeft')
const ArrowRight = document.querySelector ('.ArrowRight')
const SliderOuter = document.querySelector('.SliderOuter')


console.log(SliderOuter.clientWidth)
console.log(Slider.clientWidth)



let values = 0;
let pusher = SliderOuter.clientWidth ;
let screenWidth = screen.width

ArrowLeft.addEventListener('click', () => {      
    console.log(screen.width)  
    // if( values < 0){
    //     values = values + pusher;
    //     Slider.style.transform = `translateX(${values}px)`
    // }
    if(screenWidth > )    
})

ArrowRight.addEventListener('click', () => { 
    console.log(pusher)       
    // if( values > values * 3 ) {
    //     values = 0
    //     pusher = 1550
    // }    
    // values = values - pusher;     
    // Slider.style.transform = `translateX(${values}px)`    
})


// ----------------------------------------------------FooterSubmit-------------------------------------------------------------------------------------




// const handleSubmit = async(e) => {    
//     console.log(e);
//     e.preventDefault()        
//     const email = FooterEmail.value
//     if(email === '') {
//         alert('please enter your email')
//         return;
//     }
//     try {
//         const final = await axios.post(`${BASE_URL}/email`,{email})   
//         localStorage.setItem('datas',JSON.stringify(final.data))
//         console.log(final.data)             
//     } catch (error) {
//         console.log(error.message)
//         alert(error.message)
//     }   
      
// }

// footerSubmit.forEach(item => 
//     item.addEventListener('click',handleSubmit)
// )







