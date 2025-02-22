# PetSoft

PetSoft is a comprehensive platform designed to streamline pet care services by providing seamless pet management, user authentication, and integrated payments. 

![image](https://github.com/user-attachments/assets/a40ec7e6-fafe-44f4-a72c-a8a61e1b0151)

## 🚀 Quick Start Credentials
To experience PetSoft firsthand, use the following demo credentials:

- **Email:** example@gmail.com  
- **Password:** example  
- **Test Card for Stripe Payments:** 4242 4242 4242 4242  

## 🎯 Business Requirements
PetSoft is built to optimize pet service management with the following features:

### ✅ Pet Listing
- Browse all registered pets with a flexible search function.
- Filter pets based on various attributes.

  ![image](https://github.com/user-attachments/assets/baf5ca21-7523-4444-a960-0f938b3694f1)

### ✅ Pet Management
- Easily create, edit, and manage pet details.
- Maintain pet records.

  ![image](https://github.com/user-attachments/assets/39ae29ce-e1b0-453d-ab05-a482c4720594)

  ![image](https://github.com/user-attachments/assets/fcdaaf93-ed7f-475b-b8f2-fe0570448dd8)

### ✅ User Authentication
- Secure signup, login, and logout functionalities.
- account verification.
  
  ![image](https://github.com/user-attachments/assets/48330d2c-2a5c-4953-bf48-1d6eeebbe61d)

### ✅ Stripe Payments Integration
- Integrated with Stripe (test mode) for seamless transactions.
- Secure checkout experience.

  ![image](https://github.com/user-attachments/assets/df11aa60-d989-43ca-8667-5cab0392e591)

## 📄 Pages Overview
PetSoft includes various pages for a smooth and intuitive user experience:

- **Homepage:** A dynamic marketing page highlighting key features.
- **Login/Signup Pages:** Secure and simple user onboarding.
- **Dashboard:** A centralized hub for managing pet care tasks.
- **Account Management:** Allows users to manage personal details and settings.

## 🛠️ Technology Stack
PetSoft is powered by modern web technologies for optimal performance:

### Frontend
- **Next.js 14** with **Server Components** and **Server Actions** for improved rendering and efficiency.
- **Shadcn-ui** for beautiful and accessible UI components.

### Form Management
- **React Hook Form** for efficient form handling.
- **useOptimistic** and **useFormStatus** hooks to manage form states.

### Validation
- **Zod** for robust data validation and schema definition.

### Database
- **Prisma** for managing **Neon Postgres DB** in production.
- **SQLite** for development ease.

### Authentication
- **NextAuth.js** for secure and scalable user authentication.

### Payments
- **Stripe** for seamless payment processing.
- **Stripe CLI** for local webhook testing with Stripe.

## 🏗️ Installation & Setup
Follow these steps to set up PetSoft locally:

### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/yourusername/PetSoft.git
 cd PetSoft
```

### 2️⃣ Install Dependencies
```bash
npm install  
# or
yarn install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file and add the required environment variables:
```
DATABASE_URL=postgresql://user:password@neon.tech/petsoft
NEXTAUTH_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 4️⃣ Run the Application
```bash
npm run dev  
# or
yarn dev
```
The application should now be running at `http://localhost:3000`.

## 🛠️ Running Migrations
Before starting, ensure Prisma migrations are applied:
```bash
npx prisma migrate dev
```

## 🔥 Testing Stripe Webhooks Locally
To test Stripe webhooks locally:
```bash
stripe listen --forward-to localhost:3000/api/stripe
```

## 🏆 Contribution Guidelines
We welcome contributions! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 📞 Contact
For any inquiries, feel free to reach out:
- **Email:** daniyalahmed21@gmail.com
- **GitHub Issues:** [Open an Issue](https://github.com/daniyalahmed21/PetSoft/issues)

Happy coding! 🚀

