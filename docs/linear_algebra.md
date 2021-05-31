---
layout: default
title: Linear Algebra
permalink: /linear_algebra/
description: Matrices
---


# Matrices
## What is a Matrix?

A matrix is a rectangular array of elements, usually numbers,In general, an matrix looks like:
<p class="small">
$$
\begin{equation}
A_{m,n} = 
\begin{bmatrix}
a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
\vdots  & \vdots  & \ddots & \vdots  \\
a_{m,1} & a_{m,2} & \cdots & a_{m,n} 
\end{bmatrix}
\end{equation}
$$
</p>
matrix is enclosed by [ ] or ( ) or | | | | Compact form the above matrix is represented by [aij]m x n or A = [aij]
- Element of a Matrix The numbers a11, a12 … etc., in the above matrix are known as the element of the matrix, generally represented as aij , which denotes element in ith row and jth column.
- Order of a Matrix In above matrix has m rows and n columns, then A is of order m x n.

## Why use Matrices?
With Matrix we can represent data, we can use matrices to work on multiple linear equations and mathematical equations, In many time-sensitive engineering applications, we can add, subtract or even multipy to get good approximations of much more complicated calculations.
We use matrices in mathematics because often we need to deal with several variables at once—eg the coordinates of a point in the plane are written (x, y) or in space as (x, y, z) and these are often written as column matrices in the following form:
<p class="small">
$$
\begin{equation} 
\begin{pmatrix}
x \\
y
\end{pmatrix}
and
\begin{pmatrix}
x \\
y \\
z
\end{pmatrix}
\end{equation}
$$
</p>

## Types of matrix

- Column Matrix: A Matrix with one column, where order is Mx1
<p class="small">
$$
\begin{equation}eg: 
\begin{bmatrix}
0 \\
-6 \\
4
\end{bmatrix} _{m,1}
\end{equation}
$$
</p>
- Row Matrix: A Matrix with one row, where order is 1xN
<p class="small">
$$
\begin{equation}eg: 
\begin{bmatrix}
0 & 19 &-2
\end{bmatrix} _{1,n}
\end{equation}
$$
</p>
- Square Matrix: A Matrix with equal row and column, where order is NxN
<p class="small">
$$
\begin{equation}eg: 
\begin{bmatrix}
0 & 19 & -2 \\
5 & -1 & 12 \\
4 & 8 & 0 
\end{bmatrix} _{n,n}
\end{equation}
$$
</p>
- Diagonal Matrix: A square matrix whose all the elements except the diagonal elements are zeroes, is called a diagonal matrix where  if aij = 0, when i ≠ j.
<p class="small">
$$
\begin{equation}eg: 
\begin{bmatrix}
3 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 5 
\end{bmatrix} _{m,m}
\end{equation}
$$
</p>
- Scalar Matrix: A diagonal matrix whose all diagonal elements are same (non-zero), is called a scalar matrix.

> **Note**: A scalar matrix is a diagonal matrix but a diagonal matrix may or may not be a scalar matrix
<p class="small">
$$
\begin{equation}eg: 
\begin{bmatrix}
3 & 0 & 0 \\
0 & 3 & 0 \\
0 & 0 & 3 
\end{bmatrix} _{m,m}
\end{equation}
$$
</p>
- Unit or Identity Matrix: A diagonal matrix in which all diagonal elements are ‘1’ and all non-diagonal elements are zero, is called an identity matrix. It is denoted by I, where aij = 1, when i = j and aij = 0, when i ≠ j.

<p class="small">
$$
\begin{equation}I = 
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 
\end{bmatrix} _{m,m}
\end{equation}
$$
</p>
- Zero or Null Matrix: A matrix is said to be a zero or null matrix, if its all elements are 0

<p class="small">
$$
\begin{equation}Eg 
\begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 
\end{bmatrix} _{m,m}
\end{equation}
$$
</p>
- Equality of Matrices: Two matrices A and B are said to be equal, if
    - order of A and B are same.
    - corresponding elements of A and B are same i.e. aij = bij, ∀ i and j.

<p class="small-1">
$$
\begin{equation}eg: 
\begin{bmatrix}
1 & 2 \\
0 & 3
\end{bmatrix} and 
\begin{bmatrix}
1 & 2 \\
0 & 3 
\end{bmatrix} are \enspace equal \enspace ,but 
\begin{bmatrix}
1 & 2 \\
0 & 3 
\end{bmatrix} and
\begin{bmatrix}
1 & 7 \\
4 & 3 
\end{bmatrix} are \enspace not  \enspace equal
\end{equation}
$$
</p>

## Opeartions on a single matrix

- Transpose of a matrix
  - The transpose of a matrix is a new matrix whose rows are the columns of the original matrix. Below is a matrix and its transpose:
  - The superscript "T" means "transpose".
<p class="small">
$$
\begin{equation}A = 
\begin{bmatrix}
5 & 4 & 3 \\
4 & 0 & 4 \\
7 & 10 & 3 
\end{bmatrix}^T \enspace = 
\begin{bmatrix}
5 & 4 & 7 \\
4 & 0 & 10 \\
3 & 4 & 3 
\end{bmatrix}
\end{equation}
$$
</p>

  
- Determinant of a matrix
  - The determinant of a matrix is a special number that can be calculated from a square matrix which helps us find the inverse of a matrix, tells us things about the matrix that are useful in systems of linear equations, calculus and many more.
  - To calculate the determinant first of all the matrix must be square (i.e. have the same number of rows as columns). Then it is just basic arithmetic.
  - The symbol for determinant is two vertical lines either side:
  - Formula to caluclate determinant is : |A| = a(ei − fh) − b(di − fg) + c(dh − eg)
<p class="small">
$$
\begin{equation}A = 
\begin{vmatrix}
a & b & c \\
d & e & f \\
g & g & i 
\end{vmatrix}
\end{equation}
$$
</p>
<p class="small">
$$
\begin{equation}
\begin{vmatrix}
A \\
\end{vmatrix} = \enspace a
\begin{vmatrix}
e & f \\
h & i \\
\end{vmatrix} - \enspace b 
\begin{vmatrix}
d & f \\
g & i \\
\end{vmatrix} + \enspace c  
\begin{vmatrix}
d & e \\
g & h \\
\end{vmatrix} 
\end{equation}
$$
</p>
<p class="small">
$$
\begin{equation}Example = 
\begin{vmatrix}
6 & 1 & 1 \\
4 & -2 & 5 \\
2 & 8 & 7 \\
\end{vmatrix} 
\end{equation}
$$
</p>

<p class="small-1">
$$ |A|	= 6×(−2×7 − 5×8) − 1×(4×7 − 5×2) + 1×(4×8 − (−2×2)) $$
$$  6×(−54) − 1×(18) + 1×(36) $$
$$  −306 $$
</p>



## How to use this tool for single matrix 
- This tool can be used for any order of single matrix where we can perform different operations such as Transpose of a matrix, determinant of matrix, minors and co-factors of a matrix, plus this tool  gives you the step by step notes at the same time, below is a demo
  
![Single Matrix](../public/gifs/Single_Matrix.gif){:#md-edit}


## Operations on multiple matrices
- Addition and Subtraction
  - Two matrices may be added or subtracted only if they have the same dimension; that is, they must have the same number of rows and columns.
  - Addition or subtraction is accomplished by adding or subtracting corresponding elements. For example, consider matrix A and matrix B.

<p class="small">
$$
\begin{equation}A = 
\begin{bmatrix}
1 & 2 & 3 \\
7 & 8 & 9 \\
\end{bmatrix} B\enspace =
\begin{bmatrix}  
5 & 6 & 7 \\
3 & 4 & 5 \\
\end{bmatrix} 
\end{equation}
$$
</p>
<p class="small">
$$
\begin{equation}A + B = 
\begin{bmatrix}
1+5 & 2+6 & 3+7 \\
7+3 & 8+4 & 9+5 \\
\end{bmatrix} =  
\begin{bmatrix}
6 & 8 & 10 \\
10 & 12 & 14 \\
\end{bmatrix} 
\end{equation}
$$
</p>.

  - Similary you can subtract two or may be more matrices like this
  - To understand matrix addition, subtraction and multiplication better,input any example and examine the solution.
  



## How to use this tool for Multiple matrix 
- This tool can only be used for two matrices for any order  where we can perform different operations such as addition, subtraction and multiplication, plus this tool  gives you the step by step notes at the same time, below is a demo
  
![Single Matrix](../public/gifs/Multiple_Matrix.gif){:#md-edit}


# Cayley Hamilton Theorem and Diagonalization
- every square matrix over a commutative ring (such as the real or complex field) satisfies its own characteristic equation.
- A square matrix can be written as |A- λI|=0 and the corresponding eqn is

<p>

$$ A^m + c_{m-1} A^{m-1} + ... + c_{0}I = 0 $$

</p>

- The cayley-hamilton theorem states that an nxn matrix A is ahhihilated by its characteristic polynomial det(A) , which is monic of degree n
- The Cayley–Hamilton theorem states that substituting the matrix A for x in polynomial, p(x) = det(xIn – A), results in the zero matrices, such as:
- p(A) = 0
- It states that a ‘n x n’ matrix A is demolished by its characteristic polynomial det(tI – A), which is monic polynomial of degree n. 
- The powers of A, found by substitution from powers of x, are defined by recurrent matrix multiplication; the constant term of p(x) provides a multiple of the power A0, where power is described as the identity matrix.
- The theorem allows An to be articulated as a linear combination of the lower matrix powers of A. 
- If the ring is a field, the Cayley–Hamilton theorem is equal to the declaration that the smallest polynomial of a square matrix divided by its characteristic polynomial.

# Diagonalization of Matrix
- Matrix diagonalization is the process of taking a square matrix and converting it into a special type of matrix--a so-called diagonal matrix--that shares the same fundamental properties of the underlying matrix. 
- Matrix diagonalization is equivalent to transforming the underlying system of equations into a special set of coordinate axes in which the matrix takes this canonical form. 
- Diagonalizing a matrix is also equivalent to findingthe matrix's eigenvalues, which turn out to be precisely the entries of the diagonalized matrix. 
- Similarly, the eigenvectors make up the new set of axes corresponding to the diagonal matrix.
- The remarkable relationship between a diagonalized matrix, eigenvalues, and eigenvectors follows from the beautiful mathematical identity (the eigen decomposition) that a square matrix A can be decomposed into the very special form
  
<p>

A = PDP^{-1}

</p>
            
- D is the diagonalized matrix and can be written as diagoanl matrix containing eigen values on the major diagonal


# Mean Calculator
- this tool have 4 calcualtors, following are the calculators

1. Arithmetic Mean

![Single Matrix](../public/images/meanc-1.png){:#md-edit}

2. Geometric  Mean

![Single Matrix](../public/images/meanc-2.png){:#md-edit}

3. Harmonic Mean

![Single Matrix](../public/images/meanc-3.png){:#md-edit}

4. Harmonic Mean using AM and GM

![Single Matrix](../public/images/meanc-4.png){:#md-edit}


# Sequence & Series

## Arithmetic Progression
-  A mathematical sequence in which the difference between  two consecutive terms is always a constant and it is abbreviated as AP.

- Notion in AP
  - In AP, we will come across three main terms,which is denoted as:
    - common difference (d)
    - nth term (an)
    - Sum of the first n terms $$ s_{n} $$

- Common Difference in AP
  - in this progression for a given series , the terms used are the first term, the commond differnence between the two terms and the nth term
  - suppose a1,a2,a3,.....,an is an AP, then the common difference is "d" can be obtained as d = a2-a1 = a3-a2 etc
  - Where 'd' is a common difference
  - it can be +ve,-ve or 0

- First term of AP
  - the AP can also be written in terms of common difference as follows; a,a+d,a+2d,a+3d,a+4d+....+a+(n-1)d
  - where 'a' is the first term of the progression

- nth term of an ap
  - $$ a_{n} = a+ (n-1) * d $$
  - where a = first term, d = common difference
  - n = number of terms and an = nth term

- sum of N terms of AP
  - For any progression the sum of n terms can be easily calculated
  - for AP, the sum of the first n terms can be calculated if the first term and the total terms are known
  - The formula for the arithmetic progression sum is explained below
  - conside an AP consisting of 'n' terms then
  - $$ s = \dfrac{n}{2} (2a + (n-1) x d) $$

- Sum Of AP when the last term is given
  - Formula to find the sum of AP when first and last term are given as follows
  - $$ S = \dfrac{n}{2} (first term + last term) $$

# Geometric Progression
- if in a sequence of terms , each succeeding term is generated by multiplying each preceding term with a constant value, then the sequence is called a geometric progression 
- GP, whereas the constant value is called the common ratio
- for example : 2,4,8,16,24,64... is a GP, where common ration is 1
- A sequence a1,a2,a3,...,an is a GP then
- $$ \dfrac{a_{k+1}}{a_{k}} =r where k > 1 $$

- Sum of Nth terms of GP
  - consider the $$ GP 1,ar,ar^2 ,..., ar_{n-1} $$
  - let sn,a,r be the sum of n terms, first term and common ratio of GP, respectively
  - then 
  - $$ S_{n} = \dfrac{a(n^{n-1}-1)}{r-1} $$

- Sum to infinity of GP
  - if the number of terms in a GP is not finite, then the GP is called infinite GP
  - The formula to find the sum of infinity of the given GP is::
  - $$ S_{\infty} = \sum_{n-1}^{infty} ar^{n-1} = \dfrac{a}{1-r}; -1<r<1 $$


