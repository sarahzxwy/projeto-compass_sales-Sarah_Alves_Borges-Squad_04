
# Compass-Sales App - React Native

This is a React Native application project called Compass-Sales, developed using Expo. The app integrates authentication functionalities using Firebase and Firestore. It includes pages for user registration (SignUp), login (Login), password recovery (Forgot Password), and a home page (HomePage). Additionally, the project utilizes React Navigation and Google Fonts (Reboto) libraries to enhance the user experience. TypeScript and JavaScript was used for the development of this project.

## Setup

Ensure you have Expo CLI installed globally. If not, you can install it using the following command:


npm install -g expo-cli


Clone the repository and navigate to the project directory:


git clone https://sarahzxwy/projeto-compass_sales-Sarah_Alves_Borges-Squad_04.git
cd Compass-Sales


Install the project dependencies:


npm install


## Running the Project

To start the application, use the following command:


expo start


This will start the Expo development server. You can run the app on an emulator or on your physical device using the Expo app.

## Features

## Languages

- TypeScript
- JavaScript

### Authentication with Firebase and Firestore

- This app utilizes Firebase and Firestore for user authentication.

### Pages

#### Sign Up

- Page for users to register for the application. Located at `./screens/SignUp/index.tsx`.

#### Login

- Page for users to log into their accounts. Located at `./screens/Login/index.tsx`.

#### Forget Password

- Page for users to recover their passwords. Located at `./screens/ForgotPassword/index.tsx`.

#### Home Page

- Initial page of the application after login or registration. Located at `./screens/HomePage/index.tsx`.

## Key Libraries

### React Navigation

- Library for routing and navigation in React Native.

### Google Fonts (Reboto)

- Library to use the Reboto font from Google Fonts in your app.

## Project Structure

- `App.tsx`: Entry point of the application.
- `screens/SignUp/index.tsx`: Registration page.
- `screens/Login/index.tsx`: Login page.
- `screens/ForgotPassword/index.tsx`: Password recovery page.
- `screens/HomePage/index.tsx`: Initial page after login.

