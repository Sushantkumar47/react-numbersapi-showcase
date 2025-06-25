# 📘 Learning Journey – Numberverse Project (Beginner Reflection)

This file documents my personal learning experience while building the **Numberverse** project. I am a developer with no prior professional experience, and this project helped me explore multiple real-world concepts in React, TypeScript, form validation, and API integration.

---

## 🛠️ Initial Approach

Since I’m still new to professional development, I started by breaking down the task into parts:

1. Create a login form  
2. Set up routing  
3. Connect to an external API (NumbersAPI)  
4. Show toast messages for feedback  
5. Build a visually appealing landing page  

I didn't know how to do most of these at the start, so I used these resources:

- React documentation  
- React Hook Form official site  
- YouTube tutorials on React Router and form validation  
- Stack Overflow for error-specific solutions  

---

## 🚧 Challenges Faced

### 1. Form Validation  
I struggled to validate both fields at once and display errors as toast instead of below each input. After some trial and error, I learned about `onError` in `handleSubmit()` and used it to show one error toast if both fields were empty.

### 2. React Router Navigation  
At first, I couldn’t figure out how to go from login to the landing page. I then learned about `useNavigate()` from `react-router-dom` and added a `setTimeout()` to delay redirect until after showing a success toast.

### 3. NumbersAPI Returns Plain Text  
I expected the Numbers API to return JSON but it gave plain text. This confused me initially, but I discovered that I needed to use `res.text()` instead of `res.json()`.

### 4. Styling Without Tailwind  
I didn’t use Tailwind or Bootstrap, which made styling harder. I manually wrote CSS using gradients, flexbox, media queries, and animations. This part was challenging but very satisfying.

---

## ✅ Key Learnings

- Learned how to use `react-hook-form` to manage forms and validation  
- Learned about toast notifications using `react-toastify`  
- Understood how to work with simple REST APIs (GET requests, fetch, etc.)  
- Gained experience using `react-router-dom` and programmatic navigation  
- Practiced writing responsive CSS with no frameworks  
- Got better at reading and learning from documentation  

---

## 🤔 Decision-Making Process

- I chose React Hook Form after trying Formik briefly and finding it more complex.  
- I used Toastify instead of manually displaying errors to keep the UI clean.  
- I stuck with basic fetch API instead of using Axios because this project was small.  
- I avoided global state and Redux because I didn’t need complex state sharing.  

---

## 🔁 Self-Correction and Improvements

If I had more time or did it again, I would:

- Store credentials more securely or simulate a backend using JSON server  
- Add loading indicators during API calls  
- Add unit tests to check form validation  
- Use environment variables for API links  
- Add more animation or transitions to the landing page  

---

## 🧠 Personal Notes

- “Getting stuck is part of the learning process.” I googled a lot and learned from errors.  
- `toast.error()` is really handy for keeping UI clean.  
- Don’t assume APIs return JSON — always check!  
- Writing raw CSS helped me remember how box model, borders, padding, and margins really work.  
- This was my first project combining form, API, routing, and feedback — and I’m proud of what I built!  

---

## 🙌 Final Thoughts

This project gave me the confidence that I can build a real, working app from scratch. Even though I’m just starting out, I now understand the flow of a basic React application, and I’m excited to build more!
