# 📘 TypeScript Basics Project

This project is part of the Holberton School curriculum and aims to help you master essential TypeScript features such as basic types, interfaces, classes, DOM manipulation, namespaces, advanced typing, and build configuration with Webpack and tsc.

## 📂 Project Structure

Each task is contained in its own directory:

```

TypeScript/
├── task\_0/   # Interface and DOM table rendering
├── task\_1/   # Interfaces, extension, class typing
├── task\_2/   # Advanced interfaces, classes, type guards
├── task\_3/   # Ambient namespaces and external JS module declaration
├── task\_4/   # Namespaces and declaration merging
├── task\_5/   # Nominal typing with branded interfaces

````

## 🛠️ Installation & Setup

Install required dev dependencies per task (example for any `task_x/` folder):

```bash
npm install
````

Make sure you have:

* `typescript`
* `webpack` (v4.47.0)
* `webpack-cli` (v3.3.12)
* `ts-loader` (v6.2.1)

## 🔧 Compilation Instructions

There are two build methods depending on the task:

### 🟩 Tasks using **Webpack** (tasks 0, 1, 2, 5):

```bash
npx webpack
```

Then open the HTML file:

```bash
open index.html
```

### 🟦 Tasks using **TypeScript namespaces** (tasks 3 and 4):

These tasks require a custom `tsconfig.json` with `outFile`:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "none",
    "outFile": "./dist/bundle.js",
    "strict": true
  },
  "include": ["js/**/*"]
}
```

Compile with:

```bash
npx tsc
```

Then open the HTML page:

```bash
open index.html
```

## 🧪 Expected Output Examples

### ✅ `task_0`: Table with student first names and locations

![Table Output](https://via.placeholder.com/600x100?text=Student+Table+Rendered+in+Browser)

### ✅ `task_3`: CRUD operations (console output)

```
Insert row { firstName: 'Guillaume', lastName: 'Salva' }
Update row 123 { firstName: 'Guillaume', lastName: 'Salva', age: 23 }
Delete row id 123
```

### ✅ `task_4`: Namespace-based subject handling

```
Cpp:
Here is the list of requirements for Cpp
Available Teacher: Guillaume
```

### ✅ `task_5`: Branded types (console output)

```
Total major: { credits: 7, __brand: 'MajorCredits' }
Total minor: { credits: 3, __brand: 'MinorCredits' }
```

## 📚 Topics Covered

* TypeScript interfaces & classes
* Optional and read-only properties
* Declaration merging
* Function typing and type guards
* Nominal typing via branding
* DOM manipulation with TypeScript
* Configuring and using Webpack
* Ambient type declarations (`*.d.ts`)
* Namespaces vs ES Modules

## 📦 Author

**Nicolas Lassouane**
*Full-stack Developer in training at Holberton School*

---

## 🧠 License

This project is part of the Holberton School curriculum and is for educational purposes only.

```

---
