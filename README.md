# How to Generate and Use authToken for GitHub Packages

GitHub Packages requires authentication to install private or scoped packages. This guide explains how to generate a Personal Access Token (PAT) and use it in npm.

## 1️⃣ Generate a Personal Access Token (PAT)

### Steps to Generate Token:
1. Go to GitHub and navigate to:
   **Settings → Developer settings → Personal access tokens**
2. Click **"Generate new token (classic)"**.
3. Select the required permissions:

   - ✅ `read:packages` → To download packages.
   - ✅ `write:packages` → (Required for publishing packages)
   - ✅ `delete:packages` → (If you need to delete packages)

4. Click **"Generate token"** and save it securely. *(You won’t see it again!)*

---

## 2️⃣ Using authToken in npm

### 🔹 Method 1: Store Token in `.npmrc` (Permanent Usage)
For persistent authentication, run:

```sh
npm set //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

Or manually edit the `~/.npmrc` file and add:

```sh
@mirzaeeWork:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

📌 **Replace:**
- `YOUR_PERSONAL_ACCESS_TOKEN` → Your GitHub token.
- `@mirzaeeWork` → Your GitHub username or organization.

✅ With this setup, npm won’t ask for authentication when installing packages.

---

### 🔹 Method 2: Temporary Token Usage (Without `.npmrc` Storage)
For one-time use, provide the token directly:

```sh
npm install @mirzaeework/uikit-test --registry=https://npm.pkg.github.com --//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

---

## 3️⃣ Installing a Package from GitHub Packages

Use the following command to install the package:

```sh
npm install @mirzaeework/uikit-test --registry=https://npm.pkg.github.com
```

✅ This ensures the package is fetched directly from GitHub Packages.

---

## 4️⃣ Example Usage in a React Project

After installing the package, follow these steps to use it in your React project.

### 1️⃣ Create a CSS File (`app.css`)
Define a custom style for the button:

```css
/* app.css */
.bgColor {
  border-radius: 10px;
  display: block;
  color: white;
  padding: 5px 10px;
  margin-left: 10px;
}
```

---

### 2️⃣ Create a React Component (`App.jsx`)
Import the package and apply the custom style:

```jsx
// app.jsx
import "./app.css";
import { useState } from "react";
import { ButtonUiKit } from "@mirzaeework/uikit-test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonUiKit
        className="bgColor"
        style={{ backgroundColor: "red" }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count Click: {count}
      </ButtonUiKit>
    </>
  );
}

export default App;
```

✅ This example demonstrates how to style and use the `ButtonUiKit` component from the `@mirzaeework/uikit-test` package in a React project.