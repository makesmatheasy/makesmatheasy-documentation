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


# Types of Relations
- Sets and relation are interconnected with each other. The relation defines the relation between two given sets. If there are two sets available, then to check if there is any connection between the two sets,we use relations For example, An empty relation denotes none of the elements in the two sets is same.
- There are 8 main types of relations which include:
  - Empty Relation
    - An empty relation (or void relation) is one in which there is no relation between any elements of a set. For example, if set A = {1, 2, 3} then, one of the void relations can be R = {x, y} where, |x – y| = 8. For empty relation, R = φ ⊂ A × A
  - Universal Relation
    - A universal (or full relation) is a type of relation in which every element of a set is related to each other. Consider set A = {a, b, c}. Now one of the universal relations will be R = {x, y} where, |x – y| ≥ 0. For universal relation, R = A × A
  - Identity Relation
    - In an identity relation, every element of a set is related to itself only. For example,in a set A = {a, b, c}, the identity relation will be I = {a, a}, {b, b}, {c, c}. For identity relation,I = {(a, a), a ∈ A}
  - Inverse Rwaltion
    - Inverse relation is seen when a set has elements which are inverse pairs of another set. For example if set A = {(a, b), (c, d)}, then inverse relation will be R inverse  = {(b, a), (d, c)}. So, for an inverse relation,
  - Reflexive Realtion
    - In a reflexive relation, every element maps to itself. For example, consider a set A = {1, 2,}. Now an example of reflexive relation will be R = {(1, 1), (2, 2), (1, 2), (2, 1)}. The reflexive relation is given by- (a, a) ∈ R
  - Symmetric Realtion
    - In a symmetric relation, if a=b is true then b=a is also true. In other words,a relation R is symmetric only if (b, a) ∈ R is true when (a,b) ∈ R. An example of symmetric relation will be R = {(1, 2), (2, 1)} for a set A = {1, 2}. So, for a symmetric relation, aRb ⇒ bRa, ∀ a, b ∈ A
  - Transitive Relation
    - For transitive relation, if (x, y) ∈ R, (y, z) ∈ R, then (x, z) ∈ R. For a transitive relation, aRb and bRc ⇒ aRc ∀ a, b, c ∈ A
  - Equivalence Relation
    - If a relation is reflexive, symmetric and transitive at the same time it is known as an equivalence relation.


# Sets Formulas

<p>

$$ if \enspace A \enspace and \enspace B \enspace are \enspace overlapping \enspace sets \enspace n(A\cup B) = n(A) + n(B) - n(A \cap B) $$
$$ If A \enspace and \enspace B \enspace are \enspace disjoint \enspace sets \enspace n (A\cup B) = n(A) + n(B)   $$
$$ n(A) = n(A\cup B) + n(A\cap B) - n(B)  $$
$$ n(A\cap B) = n(A) + n(B) -n(A\cup B)  $$
$$ n(B) = n(A\cup B) + n(A\cap B) -n(A)  $$
$$ n(U) = n(A) + n(B) - n(A\cap B) + n((A\cup B)^c)   $$
$$ n((A\cup B)^c) = n(U) + n(A\cap B) - n(A)- n(B)   $$
$$ n(A\cup B) = n(A-B) + n(B-A) + n(A\cap B)   $$
$$ n(A-B) = n(A \cup B) - n(B)   $$
$$ n(A-B) = n(A) - n(A\cap B)   $$


# Sigma Notaion
- $$ \sum  $$ is a letter of greek alphabets and it is called sigma. the symbol sigma represents the sum of similar term.
- properties of sigma notation
  
<p>

$$ \sum_{r=1}^{n} T_{r} + T1 + T2 + T3 + ....+ Tn , where \enspace T_{n} \enspaceis \enspace the \enspace general \enspace term \enspace of \enspace the \enspace series $$
$$ \sum_{r=1}^{n} T_{r} \plusmn T_{r}^' = \sum_{r=1}^{n} T_{r} T_{r} \plusmn \sum_{r=1}^{n} T_{r}^'  $$
$$ \sum_{r=1}^{n} T_{r} T_{r}^'  = (\sum_{r=1}^{n} T_{r})(\sum_{r=1}^{n} T_{r}^')  $$
$$ \sum_{r=1}^{n} \dfrac{T_{r}}{T_{r}^'} ! = \dfrac{\sum_{r=1}^{n} T_{r}}{\sum_{r=1}^{n} T_{r}^'}    $$
$$ \sum_{r=1}^{n} aT_{r} = a \sum_{r=1}^{n} aT_{r} $$

</p>

</p>
                        

# Creamers Rule
- In linear algebra, Cramer's rule is an explicit formula for the solution of a system of linear equations with as many equations as unknowns, valid whenever the system has a unique solution. 
- It expresses the solution in terms of the determinants of the (square) coefficient matrix and of matrices obtained from it by replacing one column by the column vector of right-hand-sides of the equations.                        
                    
![Single Matrix](../public/images/cramer-1.png){:#md-edit}
![Single Matrix](../public/images/cramer-2.png){:#md-edit}

                    
                    
                    
                    
                    
                    
                    
                    
                    
                
                    
                    
                
                    
                    
                        
                         
                        
                        
                        