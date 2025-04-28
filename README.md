Awesome! Let’s move **fast and clean** — I'll solve **Q18, Q19, Q20, and Q21** in **the same clear style** as Q16. 🚀  
(Let's go one by one.)

---

# 📄 Q18: Comparing Two Medications

**Question:**  
- Medication A:  
  - n₁ = 50, \( \bar{x}_1 = 15 \), \( s₁ = 3 \)
- Medication B:  
  - n₂ = 60, \( \bar{x}_2 = 13 \), \( s₂ = 4 \)
- Significance level \( \alpha = 0.01 \)

---

# Step 1: Decide the Test

✅ Comparing **two independent groups**  
✅ Population standard deviation **not given** → use **sample standard deviation**

→ So **use Independent Two-Sample T-Test**.

And since it says "difference," not greater or less,  
→ **Two-tailed test**.

---

# Step 2: Hypotheses

- **H₀:** μ₁ = μ₂ (no difference between medications)
- **H₁:** μ₁ ≠ μ₂ (there is a difference)

---

# Step 3: Apply Two-Sample T-Test Formula

Formula:
\[
t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{ \frac{s_1^2}{n_1} + \frac{s_2^2}{n_2} }}
\]

Substituting:
\[
t = \frac{15 - 13}{\sqrt{ \frac{3^2}{50} + \frac{4^2}{60} }}
\]
\[
t = \frac{2}{\sqrt{ \frac{9}{50} + \frac{16}{60} }}
\]
\[
t = \frac{2}{\sqrt{0.18 + 0.2667}}
\]
\[
t = \frac{2}{\sqrt{0.4467}}
\]
\[
t = \frac{2}{0.6684}
\]
\[
t \approx 2.99
\]

---

# Step 4: Find Critical Value

Degrees of freedom (approximate method):
\[
df = n_1 + n_2 - 2 = 50 + 60 - 2 = 108
\]

From **T-Table** 📖 for df ~100 at α=0.01 (two-tailed),  
Critical value ≈ **±2.626**.

---

# Step 5: Compare and Decide

- Calculated t = 2.99
- Critical values = ±2.626

Since **2.99 > 2.626**, we **Reject the Null Hypothesis** ✅.

---

# Final Answer for Q18:

> There **is a significant difference** between the two medications.

---

# 📄 Q19: Weight of Mangoes

**Question:**  
- Sample size n = 20
- Population mean μ = 70 grams
- Sample mean \( \bar{x} = 70.55 \)
- Sample standard deviation s = 2.82
- Use **One-Sample T-Test**

---

# Step 1: Decide the Test

✅ Sample size small (n = 20)  
✅ Population σ unknown → Use **One-Sample T-Test**.

Also, just checking for "difference,"  
→ **Two-tailed test**.

---

# Step 2: Hypotheses

- **H₀:** μ = 70
- **H₁:** μ ≠ 70

---

# Step 3: Apply T-Test Formula

Formula:
\[
t = \frac{\bar{x} - \mu}{s / \sqrt{n}}
\]

Substituting:
\[
t = \frac{70.55 - 70}{2.82 / \sqrt{20}}
\]
\[
t = \frac{0.55}{2.82/4.472}
\]
\[
t = \frac{0.55}{0.6305}
\]
\[
t \approx 0.872
\]

---

# Step 4: Find Critical Value

df = n - 1 = 19

From **T-table** 📖 at df=19, α=0.05 (two-tailed),  
Critical value ≈ **±2.093**.

---

# Step 5: Compare and Decide

- Calculated t ≈ 0.872
- Critical values = ±2.093

Since **0.872 < 2.093**, we **Fail to Reject the Null Hypothesis** ❌.

---

# Final Answer for Q19:

> There **is no significant difference** in mango weights.

---

# 📄 Q20: (Same as Q16!)

This question is **exactly same as Q16** that we already solved:

- Use **Z-Test**  
- Two-tailed  
- Calculated Z = -4
- Critical values = ±1.96

Result: **Reject the Null Hypothesis** ✅.

**Final Answer:**  
> There **is evidence** to refute the company’s claim.

---

# 📄 Q21: Comparing Two Teams' Scores

**Question:**  
Team A Scores: 65, 68, 70, 63, 67  
Team B Scores: 62, 66, 69, 64, 68

---

# Step 1: Decide the Test

✅ Two groups  
✅ Small sample sizes (n=5 each)  
✅ σ unknown

→ **Use Independent Two-Sample T-Test**.

Also, no direction given (greater/lesser),  
→ **Two-tailed test**.

---

# Step 2: Hypotheses

- **H₀:** μ₁ = μ₂ (no difference)
- **H₁:** μ₁ ≠ μ₂ (there is a difference)

---

# Step 3: Calculate Mean and Standard Deviation

For Team A:
- Mean \( \bar{x}_1 = \frac{65+68+70+63+67}{5} = 66.6 \)
- Variance calculation (I'll skip long steps, final value):  
  s₁² ≈ 7.3

For Team B:
- Mean \( \bar{x}_2 = \frac{62+66+69+64+68}{5} = 65.8 \)
- Variance calculation:  
  s₂² ≈ 7.2

---

# Step 4: Apply Formula

Formula:
\[
t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{ \frac{s_1^2}{n_1} + \frac{s_2^2}{n_2} }}
\]

Substituting:
\[
t = \frac{66.6 - 65.8}{\sqrt{ \frac{7.3}{5} + \frac{7.2}{5} }}
\]
\[
t = \frac{0.8}{\sqrt{1.46 + 1.44}}
\]
\[
t = \frac{0.8}{\sqrt{2.9}}
\]
\[
t = \frac{0.8}{1.7029}
\]
\[
t \approx 0.47
\]

---

# Step 5: Find Critical Value

df = n₁ + n₂ - 2 = 5 + 5 - 2 = 8

From **T-table** 📖 at df=8, α=0.05 (two-tailed),  
Critical value ≈ **±2.306**.

---

# Step 6: Compare and Decide

- Calculated t ≈ 0.47
- Critical values = ±2.306

Since **0.47 < 2.306**, we **Fail to Reject the Null Hypothesis** ❌.

---

# Final Answer for Q21:

> There **is no significant difference** in the average scores between the two teams.

---

# ✅ All Questions Done!

Would you like me to give you a **one-page super summary/cheat sheet** of all these rules and shortcuts for last-minute exam revision too? 📖✨  
(It will help a lot!)  
Just say "yes"! 🚀
