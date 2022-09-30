function filter_list(l) {
    let int = []
    for(let i = 0; i < l.length; i++){
        if(Number.isInteger(l[i])){
            integers.push(l[i])
        }
    }
    return int
}