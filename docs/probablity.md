---
layout: default
title: Probablity
permalink: /probablity/
description: Empirical Probability, Joint Probablity, Binomial Distribution Calculator, Bayes Probablity Theorem

---


# Empirical Probablity
- An objective probability is empirical probability. It's also known as an experimental chance or a relative frequency.
- Empirical Probability is defined as the ratio of the number of outcomes in which a specific event occurs to the total number of trials.
- On a few key points, empirical probability differs from theoretical probability. That is, in theoretical probability, the likelihood of an outcome is used to calculate the probability. In Empirical Probability, on the other hand, the probability is dependent on how the occurrence actually happened during trials. The Empirical Probability Formula differs from the theoretical Probability Formula.
- If n trials are carried out in a random experiment and the favourable outcome for the event appears f times, the ratio $$ \dfrac{f}{n} $$ approaches a specific value p and n becomes very large. The empirical probability is denoted by the number p.
- Allow a coin to be tossed a few times. The number of times the head appears in each of the 20 trials is listed cumulatively in the table below:
  
    <table style="width:100%" border="2"  bordercolor="white" >
        <tr>
            <th>Number Of Trials (n)</th>
            <th>Total Number of Heads (f)</th>
            <th> $$ \dfrac{f}{n} $$ </th>
        </tr>
        <tr>
            <td>20</td>
            <td>13</td>
            <td>0.65</td>
        </tr>
        <tr>
            <td>40</td>
            <td>24</td>
            <td>0.60</td>
        </tr>
        <tr>
            <td>60</td>
            <td>35</td>
            <td>0.58</td>
        </tr>
        <tr>
            <td>80</td>
            <td>44</td>
            <td>0.55</td>
        </tr>
        <tr>
            <td>100</td>
            <td>51</td>
            <td>0.51</td>
        </tr>

- As a result, as the number of trials increases, the value of the fraction f/n, also known as relative frequency, approaches 0.5, i.e., 1/2. Similarly, we find that as the number of trials increases, the relative frequency of the appearance of a particular score approaches the fraction 1/6.
- As a result of the preceding experimental results, empirical probability can be defined as follows:
- Probability of an event E, denoted symbolically by P (E)
<p>
$$ P(E) = \dfrac{Number \enspace of \enspace time \enspace event \enspace occurs}{Total \enspace number \enspace of \enspace times \enspace experiments \enspace performed} $$
$$ P(E) = \dfrac{f}{n} $$
</p>

 - Use MakesMathEasy tool for solving empirical probablity questions.You can find this tool under probablity section
<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/Emprical_probablity.png" >
</div>
</div>


# Joint Probablity
- Probability is a mathematical branch that deals with the occurrence of a random event. In layman's terms, it is the likelihood of a specific event occurring. Joint probability is a statistical measure that calculates the likelihood of two events occurring simultaneously and at the same point in time.
- Let A and B be the two events, and the joint probability is the likelihood of event B occurring at the same time as event A.
- The notation used to represent the joint probability can take several forms. The joint probability of events with intersection is represented by the formula below.
<p>
$$ P (A⋂B) $$
</p>

- in which, A, B denotes two events.
- P(A and B), P(AB)=the combined probability of A and B
- An intersection is the symbol "" in a joint probability. The probability of events A and B occurring is the same as the point at which A and B intersect. As a result, the joint probability is also referred to as the intersection of two or more events. This relationship can be represented using a Venn diagram, as shown below.
<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/joint-probablity-venn.png" >
</div>
</div>

- Use MakesMathEasy tool for solving joint probablity questions.You can find this tool under probablity section
<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/joint.png" >
</div>
</div>

# PMF of Binomial Distribution Calculator
- Full form of PMF is Probablity Mass Function
- The Probability Mass Function (PMF), also known as a probability function or frequency function, is a statistical function that describes the distribution of a discrete random variable. If X is a discrete random variable of a function, then the probability mass function of X is given by
- $$ Px (x) = P( X=x ) $$, where x belongs to the X range.
- It should be noted that the probability function should fall under the condition:
<p>
$$ P_x (X) \gtreqqless 0 $$
$$ \sum_{xe \enspace range (x) } P_x (X) = 1 $$
</p>

- The PMF has several applications in the case of the binomial distribution, including:
  - To calculate the number of successful sales calls
  - To determine the number of defective products in a production run
  - Counting the number of heads and tails in a coin flip
  - Counting the number of male and female employees in a business
  - determining the vote totals for two different candidates in an election
- Consider the following scenario: an exam contains ten multiple-choice questions, each with four possible answers, one of which is the correct answer. The probability mass function is used to calculate the likelihood of receiving correct or incorrect answers.
- PMF formula is given by : 
<p>
$$ \dfrac{n!}{(n-r)! * r!} * p^x (1-p)^y $$
$$ Where $$
$$ n = number \enspace of \enspace trails $$
$$ r = number \enspace of \enspace succesful \enspace events $$
$$ x = probablity \enspace of \enspace sucess $$
$$ y = probablity of not being sucessfull $$
</p>

- Use MakesMathEasy tool for PMF questions.You can find this tool under probablity section
<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/PMF.png" >
</div>
</div>

# Bayes Theorem
- The probability of an event occurring in relation to any condition is described by Bayes' theorem. It is also taken into account in the case of conditional probability. The Bayes theorem is also known as the probability formula for "causes." For example, suppose we need to calculate the probability of selecting a blue ball from the second bag of three different bags of balls, each of which contains three different colour balls, namely red, blue, and black. The probability of an event occurring based on other conditions is known as conditional probability in this case.
- Conditional probablity 
<p>
$$ P(\dfrac{A}{B}) = \dfrac{P(A∩B)}{P(B)}) $$
$$ Where \enspace P(A|B) \enspace is \enspace the \enspace probability \enspace of \enspace condition \enspace when \enspace event \enspace A \enspace is \enspace occurring \enspace while \enspace event \enspace B \enspace has \enspace already \enspace occurred. $$
$$ P(A ∩ B) \enspace is \enspace the \enspace probability \enspace of \enspace event \enspace A \enspace and \enspace event \enspace B $$
$$ P(B) \enspace  is \enspace  the \enspace probability \enspace of \enspace event \enspace B $$
- Use MakesMathEasy tool to solve Bayes Theorem questions.You can find this tool under probablity section
<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/Bayes-1.png" >
</div>
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/Bayes-2.png" >
</div>
</div>
