class Matrix{
    /**
     * This function haddle all 2d matrix oparations ana this class created for only 2 depth shapes matrixs
     * @example
     * import matrix from 'matrix.js'
     * const matrix_1 = matrix.create([2,3] , 0) // crete a matrixs shape = [2,3] and set all values = 0
     * 
     *
     */
    constructor(){
    }

    #randomNum(k=1){
        return Math.random()*k;

    }

    /**
     * 
     * @param {Array} shape  Get shape of matrix must be a array \n example = [2,3]
     * @param {Number | Function} [func] = This is optional and this params get number or function.. if it's fucntion its must return number ,    
     * @param {*} k 
     * @returns {Array} matrix
     */

    create(shape , func=1, k=1){
        const arr = []
        let mul= this.mul(shape);
        if(typeof(func) != "function"){
            const value = func;
          func = (k)=> value;
        }    
        for(let i =0 ; i < mul; i++) arr.push( func(k) );
        shape.splice(0,1)
        shape.reverse().forEach(value=>{
            for(let i = 1 ; i <= mul/value ; i++) arr.push(arr.splice(0,value));
            mul/=value;
        })
        return arr;
    }

    mul(arr){
        let mul=1
        arr.forEach(value=> mul *= value);
        return mul;
    }

    /**
     * 
     * @param {Matrix} arr get matrix for transpose 
     * @returns transposed Matrix
     */

    transpose(arr){
        const shape = this.shape(arr);
        const transposedArray =[];
        if(shape.length>2) return new Error('this function transpose only 2 dimentional arrays');

        for(let i=0; i< shape[1];i++){
            const row = [];
            for(let j=0 ; j<shape[0]; j++)[
                row.push(arr[j][i])
            ]
            transposedArray.push(row)
        }
        

        return transposedArray;

    }

    /**
     * 
     * @param {Matrix} arr get Matrix for calculate Shape 
     * @returns Shape of Matrix
     */

    shape(arr){
        const shape = [];
        let array = arr;
        while(typeof(array[0])=="object"){

            shape.push(array.length)
            array = array[0];
        }
        shape.push(array.length)
        return shape
    }

    /**
     * 
     * @param {Number[]} shape get shape of random matrix : example= [2,3]
     * @param {Number} [k] get boundary of random matrix @default k = 0.001
     * @example
     * const random_matrix = matrix.random([2,3] , 1);
     * 
     * random(shape , k=0.001 ){
     *   const arr =  this.create(shape , this.#randomNum, k )
     *   return arr;
     *}
     * 
     * @returns random matrix according to given shape
     */

    random(shape , k=0.001 ){
        const arr =  this.create(shape , this.#randomNum, k )
        return arr;
    }

    /**
     * 
     * @param {Array} shape get shape to convert 
     * @param {Matrix} array get matrix for convert
     * @example
     * const reshapedMatrix = matrix.reshape([1,5] , [1,2,3,4,5])
     * // return [[1],[2],[3],[4],[5]] 
     * @returns reshaped Matrix
     */

    reshape(shape , array){
        const curr_shape = this.shape(array)
        const mulOfCurr_shape = curr_shape.reduce((acc , curr )=> acc*curr, 1)
        const mulOfGiven_shape = shape.reduce((acc , curr )=> acc*curr, 1)
        if (mulOfCurr_shape != mulOfGiven_shape) return new Error(`Shape Error plase check shapes , given matrix shape is ${curr_shape} and reshaped matrix shape is ${shape} ,they are not compatible please correct shapes`)


        array = array.flat();
        const lastValue = shape.reverse()[0];
        for(let i = 0 ; i < this.mul(shape)/lastValue;i++){
            array.push(array.splice(0, lastValue))
        }
        return array;
    }

    /**
     * 
     * @param { Matrix} fMatrix get matrix 1 
     * @param { Matrix} sMatrix get matrix 2
     * @throws when matrixs shapes are not equal , throw an Error (shape Error)
     * @returns sum of given Matrixs
     */

    sum(fMatrix , sMatrix){
        const fMatrixShape = this.shape(fMatrix);
        const sMatrixShape = this.shape(sMatrix);
        if(fMatrixShape.toString() != sMatrixShape.toString())return new Error(`can't calculate sum : Shape Error [${fMatrixShape}],[${sMatrixShape}]`);

        fMatrix = fMatrix.flat(1);
        sMatrix = sMatrix.flat(1);
        const lenOfMatrix = fMatrix.length;

        const array = []
        for(let i=0 ; i < lenOfMatrix; i++){
            array.push(fMatrix[i]+sMatrix[i]);
        }

        const sumOfArray = this.reshape(fMatrixShape , array)
        return sumOfArray
        


    }

    /**
     * 
     * @param {Number} value get Number  
     * @param {Matrix} arr get Matrix 
     * @returns Number * Matrix
     */

    dotOne(value, arr ){
        const arrayShape = this.shape(arr);    
        if(arrayShape.length > 2) return new Error(`can't do this calculation : shape Error , this array exceed to maximum calculations limit `);
        const array = arr.flat();

        const multiplyiedArray = matrix.reshape(arrayShape,array.map(arrValue=>arrValue*value))
        return multiplyiedArray;


    }

    /**
     * 
     * @param {Matrix} fMatrix get matrix as matrix one
     * @param {Matrix} sMatrix get matrix as matrix two
     * @throws throw an Error when shapes are not compatible
     * @returns Matrix one * Matrix two
     */

    dot(fMatrix , sMatrix){
        const fMatrixShape = this.shape(fMatrix); 
        const sMatrixShape = this.shape(sMatrix); 
        if( fMatrixShape[1] != sMatrixShape[0]  ) return new Error(`Shape error [${fMatrixShape}] don't match to [${sMatrixShape}]`);

        const dotProduct = [];

        for(let i=0 ; i< fMatrixShape[0];i++){
            const row = []
            for(let j=0; j < sMatrixShape[1] ; j++){
                let sum = 0;
                for(let index = 0; index< fMatrixShape[1];index++ ){
                    sum+=(fMatrix[i][index]* sMatrix[index][j]);
                }
                row.push(sum);
            }
            dotProduct.push(row);
        }
        return dotProduct;
    }
}


const matrix = new Matrix() 

export default  matrix;