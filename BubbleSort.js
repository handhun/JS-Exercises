let testArray = [1, 2, 6, 4, 3];

function bubblesort(array){
    console.log('original array is', array);

    let doneIterating;
    do {
        doneIterating = baseCompare(array);
    } while (doneIterating!= true);

    console.log('sorted array is', array);
}

function baseCompare(array){
    let counter = 0;
    for(let i = 0; i < array.length - 1; i++){
        let a = array[i];
        let b = array[i+1];

        if(a > b){
            //console.log('swap', a, b, 'counter is', counter); //debug statement
            array[i+1] = a;
            array[i] = b;
        }
        else{
            //console.log('counter else is', counter); //debug statement
            counter++;
        }
    }//end i for array

    if(counter == (array.length - 1)){
        return true;
    }
    else{
        //console.log('iterate again') //debug statement
        return false;
    }
}//end function

bubblesort(testArray);
