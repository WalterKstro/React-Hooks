const process = loops => {

    for(let i=0; i<loops; i++) {
        console.log('In process: '+ i)
    }
    return loops
}

export default process