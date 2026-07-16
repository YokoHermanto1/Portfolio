# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
# 🛠️ Full-Stack Portfolio Architecture & Connection Flow

This documentation explains how data dynamically flows from the Cloud Database down to the React Frontend UI, alongside the key configurations applied during the development process.

---

## 🏗️ Data Flow Overview

The portfolio data shifts through 4 core structural layers:
1. **Neon.tech (Cloud Database)** ➔ Where data is permanently stored.
2. **Laravel Eloquent (Model & Migration)** ➔ The representation of the table schema on the Backend side.
3. **Laravel API Route & Controller** ➔ Exposes JSON URL endpoints accessible by external clients.
4. **React Frontend (Fetch API)** ➔ Requests data from the endpoint and renders it to the screen using TypeScript.

---

## 📝 Step-by-Step Breakdown & Technical Concepts

### 1. Linking Backend Laravel to Neon Cloud DB (`.env`)
To allow communication between Laravel and the cloud-hosted PostgreSQL database on Neon, matching environmental credentials must be specified in the `.env` file at the backend root:
* **`DB_CONNECTION=pgsql`**: Tells Laravel to load the PostgreSQL database driver.
* **`DB_HOST / DB_PORT / DB_DATABASE / DB_USERNAME / DB_PASSWORD`**: Unique security credentials provided by the Neon dashboard so Laravel knows exactly which remote server to query.

### 2. Schema Blueprinting & Initial Data Setup (Migration & Seeder)
* **Migration**: Acts as version control for the database. Instead of manually drawing tables inside a GUI application, PHP scripts (`create_projects_table`) are written to define columns like `title`, `description`, `tech` (JSON/Array data type), and `image`. Executing `php artisan migrate` spins these up automatically in Neon.
* **Seeder**: A backend script (`ProjectSeeder`) utilized to populate the table with placeholder/initial records during development so the table isn't empty when first created. Triggered using: `php artisan db:seed`.

### 3. API Provisioning & CORS Handling
Running the `php artisan install:api` command provisions the API structures and automatically sets up the configuration for **CORS (Cross-Origin Resource Sharing)**.

> **What is CORS?**
> CORS is a crucial browser security layer. By default, a browser restricts a Frontend application running on one origin (React at `http://localhost:5173`) from pulling data from a different Backend domain (Laravel at `http://127.0.0.1:8000`). 
> 
> Laravel's native CORS configuration explicitly safelists the frontend origin, allowing the React app to request and parse API data successfully without getting blocked by the browser.

### 4. Creating API Endpoints (Controller & Route)
* **Route (`routes/api.php`)**: Registers a dedicated web address, in this case, `Route::get('/projects', ...)`. This makes the URL `http://127.0.0.1:8000/api/projects` accessible.
* **Controller (`ProjectController.php`)**: Acts as the coordinator that fetches records from the database using the Model (`Projects::all()`) and exports them into **JSON (JavaScript Object Notation)**—the universal standard format for exchanging web data.

### 5. Consuming the API Data in Frontend (React + TypeScript)
* **`fetch()` API**: JavaScript's native asynchronous web method used in React to query the Laravel API endpoint behind the scenes.
* **`useState` & `useEffect`**: The `useEffect` hook triggers the network request as soon as the component loads. Once successfully loaded, the dataset is assigned into the local state via `useState`.
* **TypeScript Interface (`ProjectType`)**: Because the file uses TypeScript (`.tsx`), specifying a strict data object contract (`id`, `title`, `tech: string[]`, etc.) is required. This avoids the `property does not exist on type 'never'` compiler error, keeping the codebase type-safe.
* **`.map()` Rendering**: A dynamic loop that replicates the UI card layout for every single project object fetched from the remote database.

---

## 🖼️ Local Asset Pipeline Strategy

To maximize efficiency and eliminate network disruptions—such as `net::ERR_CONNECTION_TIMED_OUT` caused by slow or broken external image hosting links—all media management has been shifted locally:

1. **Storage Path:** Project mockup graphics are stored directly within the React client directory at `frontend/public/project_images/`.
2. **Database Reference:** Inside the Neon cloud database (whether populated via a Laravel Seeder or updated directly via the Neon Dashboard), the `image` column simply holds a relative path string. For example: `/project_images/ulas-katering.png`.
3. **Performance Benefit:** The client browser loads these images instantly from the local frontend public pipeline, reducing external HTTP requests and protecting page load speeds.
---

### 🚀 Running the Development Servers

To get the full-stack application up and running locally, execute the following commands in their respective project directories:

#### 🔹 Backend (Laravel)
Instead of using CodeIgniter's `php spark serve`, Laravel uses its own integrated development server wrapper: "php artisan serve" to run

#### 🔹 Frontend (React)
React using "npm run dev" to run 
