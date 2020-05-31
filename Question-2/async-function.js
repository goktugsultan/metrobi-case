let showArrayItems = async function(arr){
    for (let i=0 ; i < arr.length; i++){
        await new Promise(resolve=>setTimeout(resolve,((Math.pow(2000,i)) / Math.pow(1000,i))*1000))
        console.log('Elapsed time',((Math.pow(2000,i)) / Math.pow(1000,i))*1000)
        console.log(arr[i])
    }
}
var array = ["a","b","c"]
var array1 = ["a","b","c","d","e","f"]


showArrayItems(array)