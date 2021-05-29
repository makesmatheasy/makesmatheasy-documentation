---
layout: default
title: Probablity
permalink: /probablity/
description: Empirical Probability, Joint Probablity, Binomial Distribution Calculator, Bayes Probablity Theorem

---

# Usefull Properties
## Genral Formula:

<p>

$$  P(E) = \dfrac{Number \enspace of \enspace favourable \enspace outcomes}{Total \enspace number \enspace of \enspace outcomes} $$

</p>

## Genral Form of Addition Theorem of probability

<p>

$$  P(A1 \cup A2 \cup ... \cup An) = \sum_{i-1}^{n} P(A_{i}) - \sum_{i<j} P(A_{i} \cap A_{j}) + \sum P(A_{i} \cap A_{j} \cap A_{k}) - ... + (-1)^{n-1}  P(A_{1} \cap A_{2} \cap ... \cap A_{n})  $$

</p>


## Conditional Probablity
- The probability of occurrence of an event E1, given that E2 has already occured is called the conditional probablity, it is denoted by $$ P \dfrac{E_{1}}{E_{2}} $$
  
<p>

$$ P(\dfrac{E_{1}}{E_{2}}) = \dfrac{P(E_{1} \cap E_{2})}{P(E_{2})} = \dfrac{n (E_{1} \cap E_{2})}{n(E_{2})} $$

</p>




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
    </table>

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


# Geometric Probability Distribution
- The geometric distribution is a special case of the negative binomial distribution. 
- It deals with the number of trials required for a single success. 
- Thus, the geometric distribution is a negative binomial distribution where the number of successes (r) is equal to 1.
- Formula is : 
  
<p>
$$ P(X=x) = p * Q^{x-1}  $$
$$ p = probability \enspace of \enspace success \enspace for \enspace single \enspace trial.  $$

$$ q = probability  \enspace of \enspace failure \enspace for \enspace a \enspace single \enspace trial \enspace (1-p) $$

$$ x = the \enspace number \enspace of \enspace failures \enspace before \enspace a  \enspace success. $$

$$ P(X−x) = Probability \enspace of \enspace x \enspace successes \enspace in  \enspace n  \enspace trials. $$
</p>

- use the foll tool to calculate geometric distribution
  
<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/geometric.png" >
</div>
</div>




# Conditional Probablity
- Conditional probability is defined as the likelihood of an event or outcome occurring, based on the occurrence of a previous event or outcome. 
- Conditional probability is calculated by multiplying the probability of the preceding event by the updated probability of the succeeding, or conditional, event. 
- For example:
    - Event A is that an individual applying for college will be accepted. 
    - There is an 80% chance that this individual will be accepted to college.
    - Event B is that this individual will be given dormitory housing. 
    - Dormitory housing will only be provided for 60% of all of the accepted students.
    - P (Accepted and dormitory housing) = P (Dormitory Housing | Accepted) P (Accepted) = (0.60)*(0.80) = 0.48.
- A conditional probability would look at these two events in relationship with one another, such as the probability that you are both accepted to college, and you are provided with dormitory housing.
- Conditional probability can be contrasted with unconditional probability. 
- Unconditional probability refers to the likelihood that an event will take place irrespective of whether any other events have taken place or any other conditions are present.
- Conditional probability refers to the chances that some outcome occurs given that another event has also occurred.
- It is often stated as the probability of B given A and is written as P(B|A), where the probability of B depends on that of A happening.
- Conditional probability can be contrasted with unconditional probability.
- Conditional Probablity Formula
  
<p>

$$ P(\dfrac{B}{A}) = P \dfrac{ (A and B)}{ P(A)} $$
$$ or $$
$$ P(\dfrac{B}{A}) = P\dfrac{(A ∩ B)}{ P(A) } $$

</p>

<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/condi.png" >
</div>
</div>

# Relative Risk Calculator
- The relative risk (also called the risk ratio) of something happening is where you compare the odds for two groups against each other.
- For example, you could have two groups of women: one group has a mother, sister or daughter who has had breast cancer. The other group does not have any close female relatives who have had the disease. 
- The group with close family members who have had the disease are more likely to develop breast cancer (National Cancer Institute). 
- Relative risk is usually reported as a percentage (i.e. 10% more likely) but you’ll also see it written as “x times more likely” (i.e. ten times more likely).
- Although relative risk does provide some information about risk, it doesn’t say anything about the actual odds of something happening; on the other hand, absolute risk does.
- Formula :

<p>

$$ \dfrac{\dfrac{a}{a+b}}{\dfrac{c}{c+d}} $$

</p>

-  Where "a" is the number of members of the exposed group who developed the disease
- "b" is the nuber of members of the exposed group who didn't developed the disease
- "c" is the number of members of the control group who developed the disease
- "d" is the number of the control group who didn't developed the disease
- Use following tool to calculate Relative Risk

<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/relative.png" >
</div>
</div>


# Joint Probablity
- Probability is a mathematical branch that deals with the occurrence of a random event. In layman's terms, it is the likelihood of a specific event occurring. Joint probability is a statistical measure that calculates the likelihood of two events occurring simultaneously and at the same point in time.
- Let A and B be the two events, and the joint probability is the likelihood of event B occurring at the same time as event A.
- The notation used to represent the joint probability can take several forms. The joint probability of events with intersection is represented by the formula below.
<p>
$$ P (A⋂B) = P(A) X P(B) $$
</p>

- in which, A, B denotes two events.
- P(A and B), P(AB)=the combined probability of A and B
- P (A) is the probability of event "A" occurring
- P (B) is the probability of event "B" occurring
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


# Independent And Dependent Probablity
## Dependent Probablity
- When two events are dependent events, one event influences the probability of another event. 
- A dependent event is an event that relies on another event to happen first. 
- Dependent events in probability are no different from dependent events in real life: If you want to attend a concert, it might depend on whether you get overtime at work; if you want to visit family out of the country next month, it depends on whether or not you can get a passport in time. More formally, we say that when two events are dependent, the occurrence of one event influences the probability of another event.

- Simple examples of dependent events:

  - Robbing a bank and going to jail.
  - Not paying your power bill on time and having your power cut off.
  - Boarding a plane first and finding a good seat.
  - Parking illegally and getting a parking ticket. Parking illegally increases your odds of getting a ticket.
  - Buying ten lottery tickets and winning the lottery. The more tickets you buy, the greater your odds of winning.
  - Driving a car and getting in a traffic accident
- Formula
<p>

$$ P(A \enspace and \enspace B) = P(A) X P(\dfrac{B}{A}) $$

</p>

## Independent Probablity
- An independent event is an event that has no connection to another event’s chances of happening (or not happening). 
- In other words, the event has no effect on the probability of another event occurring. 
- Independent events in probability are no different from independent events in real life. 
- Where you work has no effect on what color car you drive. Buying a lottery ticket has no effect on having a child with blue eyes.
- When two events are independent, one event does not influence the probability of another event.

- Simple examples of independent events:

  - Owning a dog and growing your own herb garden.
  - Paying off your mortgage early and owning a Chevy Cavalier.
  - Winning the lottery and running out of milk.
  - Buying a lottery ticket and finding a penny on the floor (your odds of finding a penny does not depend on you buying a lottery ticket).
  - Taking a cab home and finding your favorite movie on cable.
  - Getting a parking ticket and playing craps at the casino.
- Formula

<p>

$$ P(A \enspace and \enspace B) = P(A) X P(B) $$

</p>

- Use the following calculator to solve the problem on Independent and Dependent probability

<div class="container my-3 row">
<div class="col-md-6 pb-2" >
<img alt="Probablity" class="tools_screenshot img-fluid" src="../public/images/probablity/independent.png" >
</div>
</div>


# Binomial Distribution 

- A binomial distribution can be thought of as simply the probability of a SUCCESS or FAILURE outcome in an experiment or survey that is repeated multiple times. 
- The binomial is a type of distribution that has two possible outcomes (the prefix “bi” means two, or twice). 
- For example, a coin toss has only two possible outcomes: heads or tails and taking a test could have two possible outcomes: pass or fail.
- Binomial distributions must also meet the following three criteria:
  - The number of observations or trials is fixed. In other words, you can only figure out the probability of something happening if you do it a certain number of times. This is common sense—if you toss a coin once, your probability of getting a tails is 50%. If you toss a coin a 20 times, your probability of getting a tails is very, very close to 100%.
  - Each observation or trial is independent. In other words, none of your trials have an effect on the probability of the next trial.
  - The probability of success (tails, heads, fail or pass) is exactly the same from one trial to another.




## PMF of Binomial Distribution Calculator
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
