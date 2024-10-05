# 💳 Paytm Clone

## 📝 Overview

This project is a Paytm clone built using **Next.js**, **Express.js**, and **TurboRepo** in a monorepo architecture. It includes the `user-app` and `bank-webhook` as key applications, along with shared packages such as `db`, `ui`, and `store` (Recoil). The application opens up on port **3001** and requires multiple environment files for configuration.

## ✨ Features

- 🔐 **User Authentication**: Secure user sign-up and login functionality.
- 💼 **Wallet Management**: Manage user wallets for storing funds.
- 💸 **Transaction Processing**: Facilitate seamless transactions between users.
- 🛠️ **Monorepo Architecture**: Utilize TurboRepo for managing multiple apps and shared packages.
- 📦 **Shared Packages**: Includes shared `db`, `ui` components, and global state management using Recoil (`store`).
- 🌐 **Responsive UI**: Built with Next.js for a responsive and modern frontend experience.

## 🛠️ Tech Stack

- 🖥️ **Frontend**: Next.js
- ⚙️ **Backend**: Express.js
- 🧰 **Monorepo Management**: TurboRepo
- 🗃️ **State Management**: Recoil (in `store` package)

## 🚀 Getting Started

### ⚙️ Prerequisites

- 🟢 **Node.js** (v14 or higher)
- 📦 **npm** or **yarn**
- 🏎️ **TurboRepo CLI**

### 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jenil-Desai/Paytm-Clone
   cd Paytm-Clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment files for various apps and packages (see [Environment Variables](#environment-variables)).

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3001` to see the application running.

## 🗂️ Folder Structure

- **apps/**

  - **user-app/**: The main frontend application built with Next.js.
  - **bank-webhook/**: The backend webhook service built with Express.js.

- **packages/**
  - **db/**: Shared database configurations and Prisma setup.
  - **ui/**: Shared UI components.
  - **store/**: Global state management using Recoil.

## 🔑 Environment Variables

This project requires different environment files for the apps and packages. Create the following `.env` files with the required variables:

1. **user-app/.env**

   ```bash
   JWT_SECRET="test"
   NEXTAUTH_URL=http://localhost:3001
   ```

2. **packages/db/.env**

   ```bash
   DATABASE_URL=<your_database_url>
   ```

## 🏃 Running the Application

- Run all apps simultaneously using TurboRepo:

  ```bash
  npm run dev
  ```

- The application will be available on `http://localhost:3001`.

## 🤝 Contributing

Contributions are welcome! Fork the repository and submit a pull request with your changes.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- Built using Next.js, Express.js, TurboRepo, and Recoil.
- Inspired by the functionality of Paytm.

## 📧 Contact

For questions or support, contact [Your Name](mailto:jenildev91@gmail.com).
