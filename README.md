# npm-matrix

npm-matrix is a front-end module designed to create matrices with ease.

## Installation

```
npm install npm-matrix
```
## import
```
import matrix from "./nodemodule/npm-matrix/matrix.js";
```

## Usage

### methods
```matrix.create(shape , value) ``` - create matrix with filled with values   
```matrix.random(shape , k) ``` - create matrix with filled with random values  
```matrix.transpose(matrix) ``` - retrun transpose of given matrix  
```matrix.dotOne(value , matrix) ``` - return matrix + value   
```matrix.dot(matrix_1 , matrix_2) ``` - return matrix_1 x matrix_2   
```matrix.sum(matrix_1 , matrix_2) ``` - return matrix_1 + matrix_2   
```matrix.shape(matrix_1) ``` - return shape of given matrix   
```matrix.reshape(shape , matrix) ``` - return reshaped matrix

## _create matrix_

matrix.create(shape , value)
Create a matrix with the specified shape and an optional value for filling the matrix.  
example:
```
  const matrixs_filled_with_10 = matrix.create([2,3], 10)
```

#### Parameters
shape (Array): An array specifying the shape of the matrix, e.g., [rows, columns].
value (optional): The value to fill the matrix with. If not provided, the matrix will be filled with ones.

## _create random matrix_

matrix.random(shape , k )
Create a matrix with the specified shape and an optional value for filling the matrix and if you provide value for k, 
then create random array filled with random values mulitipy with 'k'  
example:
```
  const randomMatrix = matrix.random([2,3], 0.1)
```

#### Parameters
shape (Array): An array specifying the shape of the matrix, e.g., [rows, columns].
value (optional): The value to fill the matrix with. If not provided, the k will be 0.001

## _Tanspose a matrix_

matrix.transpose(matrix)
Create a matrix with the specified shape and an optional value for filling the matrix and if you provide value for k, 
then create random array filled with random values mulitipy with 'k'  
example:
```
  const not_transposed_matrix = matrix.create([2,3],1)
  const tranposed_matrixs = matrix.random(not_transposed_matrix)
```

#### Parameters
matrix (matrix): a matrix for transpose  

## _Get shape_

matrix.shape(matrix)
retrun shape of given Matrix
example:
```
  const m = matrix.create([2,3],1)
  const shape_of_m = matrix.shape(m) // [2,3]
```

#### Parameters
matrix (matrix): a matrix for get shape

## _Get sum of matrixs_

matrix.sum(matrix_1, matrix_2)
retrun sum of given Matrix
example:
```
  const m1 = matrix.create([2,3],1)
  const m2 = matrix.create([2,3],1)
  const sum = matrix.sum(m1,m2)
```

#### Parameters
matrix_1 (matrix): get a matrix as matrix_1
matrix_2 (matrix): get a matrix as matrix_2

## _Get dot product of matrixs_

matrix.dot(matrix_1, matrix_2)
retrun matrix_1 * matrix_2
example:
```
  const m1 = matrix.create([2,3],1)
  const m2 = matrix.create([2,3],1)
  const dot = matrix.dot(m1,m2)
```

#### Parameters
matrix_1 (matrix): get a matrix as matrix_1
matrix_2 (matrix): get a matrix as matrix_2


## _multiply a matrix with one value_

matrix.dotOne(value, matrix)
retrun value * matrix
example:
```
  const m = matrix.create([2,3],1)
  const dotOne = matrix.dotOne(5,m)
```

#### Parameters
value (Number): get a value for multiply given matrix
matrix (matrix): get a matrix

## _Reshape a Matrixs_

matrix.reshape(shape , matrix )
reshape a given matrix  
example:
```
  const m = matrix.create([6,2],0)
  const reshaped = matrix.reshape([4,3], m)
```

#### Parameters
shape (Array): An array specifying the shape of the matrix, e.g., [rows, columns].
matrix (Matrix): get matrix for reshaping
