
const liInitial = {
    scale: 1
}  
  
const transition = { duration: 0.4 }

const liHover = {
    scale: 1.03,
    boxShadow: '0.3em 0.3em 0.6em #8a8a8a',
    transition: transition
}

const divInitial = {
    opacity: 0, 
    display: 'none'
}

const divHover = {
    opacity: 1,
    display: 'block',
    transition: transition
}



export { liInitial, liHover, divHover, divInitial }