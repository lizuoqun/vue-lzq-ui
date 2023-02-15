let obj1 = {
    name: '陈伟霆',
    gender: '男',
    nationality: ''
};
let obj2 = {
    name: '',
    gender: '',
    hobby: '',
    nationality: '中国'
};


for (const key2 in obj2) {
    if (obj2[key2] !== '') {
        obj1[key2] = obj2[key2]
    }
}
console.log(obj1)