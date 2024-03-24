Full-Stack Finance Management System

Introduction
Welcome to the documentation for the Full-Stack Finance Management System, a comprehensive web-based application designed to help users manage their finances effectively. This documentation offers an insightful overview of the system's functionalities, installation instructions, technologies utilized, and avenues for support and enhancement.

Installation
To install and run the Finance Management System, follow these 5 simple steps:

1. Open your code editor and clone the GitHub repository to your local machine
   GitHub Repository: git clone https://github.com/EmilijaPaleckyte/Finance

2. Use terminal to navigate to the project directory:
   cd Finance

3. Install dependencies:
   npm install or npm i

4. Set up a MongoDB database and configure the connection string in the .env file.

5. Start the application:
   both cd backend & cd frontend, npm start - on separate terminals.

If the application doesn't open automatically consider pasting this in your search: http://localhost:3000

Use the application to manage your finances by adding income, expenses, and viewing financial reports on the dashboard.

Technologies Used:
The Finance Management System - a full-stack program utilizes the following technologies:

Frontend:
Axios
Chart.js
react-chartjs2
Google Fonts
React
React Router
Styled Components
Datepicker

Backend:
Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Tokens)
joi
bcrypt
private.pem

API Endpoints:
The backend provides the following API endpoints:

GET /api/expenses: Retrieve all expenses.
POST /api/expenses: Add a new expense.
DELETE /api/expenses/:id: Delete an expense by ID.

User Authentication and Security
To ensure secure user authentication and data integrity, the Full-Stack Finance Management System incorporates Joi for request validation and bcrypt for password hashing within the sign-up, sign-out, and login functionalities.

Sign-Up
During the sign-up process, user-provided data undergoes validation through Joi to ensure it meets specified criteria. Additionally, passwords are securely hashed using bcrypt before storage in the database, enhancing data security.

Sign-Out
Upon sign-out, it's essential to clear the user's session and invalidate any existing tokens to ensure their session is terminated securely.

Log-In
Upon login attempts, the provided credentials are verified against the stored hashed password using bcrypt. This ensures secure authentication, mitigating the risk of unauthorized access.

Support and Further Improvement
For support or further improvement of the Finance Management System:

Support
If you encounter any issues or need assistance, feel free to open an issue on the GitHub repository.

Improvement
Contributions to the project are welcome! You can fork the repository, make your changes, and submit a pull request. It will be up for review.

Future Enhancement Ideas
Here are some potential areas for further improvement of the Finance Management System:

Enhanced reporting: Add more advanced reporting features, such as more representations of financial data.
Automated categorization: Implement functionality to automatically categorize expenses based on predefined rules.

Goal Setting: Allow users to set financial goals, such as saving targets or debt reduction goals, and track their progress over time.

Transaction Attachments: Enable users to attach receipts or other relevant documents to transactions for better record-keeping and auditing purposes.

Reminder and Alerts: Implement reminders and alerts for upcoming bill payments, budget thresholds, or financial milestones to help users stay on track.

Integration with Financial Institutions: Provide integration with bank accounts or financial institutions to automatically import transactions and reconcile accounts.

Multi-User Support: Allow multiple users to collaborate on financial management, with features for sharing and syncing data securely.

Localization and Currency Conversion: Support multiple languages and currencies to cater to users from different regions, with built-in currency conversion functionality.

Investment Tracking: Extend the system to include tracking of investment portfolios, including stocks, bonds, and other assets, with performance analysis and reporting.

Machine Learning and Predictive Analytics: Utilize machine learning algorithms to analyze spending patterns, predict future expenses, and provide personalized financial recommendations.

Expense Splitting: Enable users to split expenses with others, such as friends or family members, and track shared expenses for group activities or shared bills.

Tax Planning and Reporting: Provide tools for tax planning, including tax deduction tracking, tax filing reminders, and generation of tax reports for easier tax preparation.

The Finance Management System is a powerful tool for managing finances effectively. By following the installation instructions and utilizing the program's features, users can gain better control over their financial activities. Additionally, contributions and improvements to the program are encouraged to enhance its functionality and usability further.

Additional Resources:
For more information about the technologies used in the project, refer to the following resources:

React Documentation
Node.js Documentation
Express.js Documentation
MongoDB Documentation
JWT Documentation
