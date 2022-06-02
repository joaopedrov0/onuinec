const menu = document.querySelector('.menu-mobile')
const menuItems = document.querySelectorAll('.menu-item-mobile')

// async function toggleMenu() {
//     if(!menuItems[0].classList.contains('opened') || menuItems[0].classList.contains('closening')){//will open
//         await menu.classList.add('display-visible')
//         console.log('display visivel')
//     }
//     // for(item of menuItems){
//     //     if(item.classList.contains('opened')){
//     //         item.classList.remove('opened')
//     //         item.classList.add('closening')
//     //     } else {
//     //         if (item.classList.contains('closening')) item.classList.remove('closening')
//     //         item.classList.add('opened')
//     //     }
//     // }
//     for(item of menuItems){
//         if (!item.classList.contains('opened') && !item.classList.contains('closening')) {
//             //first use
//             item.classList.add('opened')
//             console.log('abrindo - condicional 1')

//         } else if (!item.classList.contains('opened')) {
//             //opening
//             item.classList.remove('closening')
//             item.classList.add('opened')
//             console.log('abrindo - condicional 2')

//         } else if (item.classList.contains('opened') && !item.classList.contains('closening')){
//             //closing
//             item.classList.remove('opened')
//             item.classList.add('closening')
//             console.log('fechando - condicional 3')

//         }
//     }
//     setTimeout(() => {
//         if(menuItems[0].classList.contains('closening')) {
//             menu.classList.remove('display-visible')
//             console.log('display-invisible')
//         }
//     }, 500)
    

// }

function toggleMenu(){
    for(item of menuItems){
        item.classList.toggle('opened')
    }
}