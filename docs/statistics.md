---
layout: default
title: Statistics
permalink: /statistics/
description: 
---


## AB Test
- An AB test is a statistical significance test in which two populations are compared to see if they differ significantly on a single characteristic. A sample size of 30 or more is recommended


![ab_test](../public/images/statistics/ab_test.png){:#calc-edit}

<br>

## T Test
- The t-test is any statistical hypothesis test in which th etest statistic foloows a students t-distribution under the null hyptothesis
- it canbe used to determine if two sets of data are significantly different from each other , and is most commonly when the test statistic would follow a normal distribution if the value of a scaling term in the test statistic were known.
- Also number of values in each set should not exceed 30.
- T - test uses means and standard deviations of two samples to make a comparison. 
<p>

$$ t = \dfrac{m - \mu}{\dfrac{s}{\sqrt n}} $$

<p>


## F test
- A astatistical F test uses an F statistic to compare two variance s1, and s2 by dividing them.
- the Result is always a positive number (becuase variances are always positive).
- the equation for comparing two variances with the f-test is : $$ F = \dfrac{s1^2}{s2^2} $$ (if $$ s1^2 > s2^2  $$ )
- Any Statistical test taht uses F - distribution can be called an F - test 
- It is used when the samples size is small i.e n < 30
- Formula : 

<p>

$$ \dfrac{Larger \enspace Sample }{Smaller \enspace Sample \enspace Variance} $$

</p>





## Z test
- A z-test is a statistical test used to determine whether two population means are different when the variances are known and the sample size is large.
- The test statistic is assumed to have a normal distribution, and nuisance parameters such as standard deviation should be known in order for an accurate z-test to be performed.
- Z-test is a statistical test to determine whether two population means are different when the variances are known and the sample size is large.
- Z-test is a hypothesis test in which the z-statistic follows a normal distribution. 
- A z-statistic, or z-score, is a number representing the result from the z-test.
- Z-tests are closely related to t-tests, but t-tests are best performed when an experiment has a small sample size.
- Z-tests assume the standard deviation is known, while t-tests assume it is unknown.







## Z Score Calculator
- A Z-score is a numerical measurement that describes a value's relationship to the mean of a group of values. 
- Z-score is measured in terms of standard deviations from the mean. 
- If a Z-score is 0, it indicates that the data point's score is identical to the mean score. 
- A Z-score of 1.0 would indicate a value that is one standard deviation from the mean. 
- Z-scores may be positive or negative, with a positive value indicating the score is above the mean and a negative score indicating it is below the mean.


- In finance, Z-scores are measures of an observation's variability and can be used by traders to help determine market volatility. 
- The Z-score is also sometimes known as the Altman Z-score.
- 
- A Z-Score is a statistical measurement of a score's relationship to the mean in a group of scores.
- A Z-score can reveal to a trader if a value is typical for a specified data set or if it is atypical.
- In general, a Z-score below 1.8 suggests a company might be headed for bankruptcy, while a score closer to 3 suggests a company is in solid financial positioning.





## Negative Binomial Distribution 
- A negative binomial distribution (also called the Pascal Distribution) is a discrete probability distribution for random variables in a negative binomial experiment.

- The random variable is the number of repeated trials, X, that produce a certain number of successes, r. 
- In other words, it’s the number of failures before a success. This is the main difference from the binomial distribution: with a regular binomial distribution, you’re looking at the number of successes. With a negative binomial distribution, it’s the number of failures that counts.

<p>
$$  P(Y=n) = C_{r-1}^{n-1}*pr*(1-p)(n-r) $$
$$  Where \\ n \enspace is \enspace the \enspace total \enspace number \enspace of \enspace trials \\ r \enspace is \enspace the \enspace number \enspace of \enspace successes \\ p \enspace is \enspace the \enspace probablity \enspace of \enspace one \enspace success \\ C_{r-1}^{n-1} is \enspace the \enspace number  \enspace of \enspace combinations \\ P(Y = n) \enspace is \enspace the \enspace probablity \enspace of \enspace the \enspace exact  \enspace number \enspace of \enspace trials \enspace n \enspace needed \enspace to \enspace achieve \enspace r \enspace successes. $$
<p>























































