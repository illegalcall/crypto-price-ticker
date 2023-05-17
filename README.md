# React Native Expo Project with TypeScript, Redux Toolkit

<div style="display:flex;align-items:center;gap:10px">
<img src="https://img.icons8.com/color/48/000000/react-native.png" height="40px" width="40px">
<img src="assets/logo-type-a-light.png" height="30px" width="30px"/>
<img src="https://img.icons8.com/color/48/000000/typescript.png" height="40px"/>
<img src="https://img.icons8.com/color/48/000000/redux.png" height="40px"/>
</div>
<br/>
This repository contains a React Native Expo project built with TypeScript, Redux Toolkit. It serves as a starting point for developing mobile applications with real-time communication capabilities using WebSockets.

## Prerequisites

Before getting started, ensure that you have the following software installed:

- Node.js (version 14 or later)
- npm (Node Package Manager)


## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/illegalcall/crypto-price-ticker.git
```

2. Navigate to the project's root directory:
```bash
cd crypto-price-ticker
```

3. Install the dependencies using npm:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Expo DevTools will open in a browser. You can either use the provided QR code to open the app in the Expo Go app on your mobile device or run the app in an emulator/simulator.

## Project Structure
```css
├── .expo
├── .expo-shared
├── assets
├── src
│   ├── components
│   ├── containers
│   ├── hooks
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── store
│   │   ├── actions
│   │   ├── reducers
│   │   └── store.ts
│   ├── utils
│   └── App.tsx
├── App.tsx
├── package.json
└── tsconfig.json
```

- `.expo` and `.expo-shared` directories contain configuration files for Expo.
- `assets` directory is used for storing images, fonts, and other static assets.
- `src` directory contains the main source code of the application.
- `containers` directory stores container components which encapsulate an entire page component.
- `components` directory stores reusable UI components.
- `hooks` directory contains reusable logic.
- `navigators` directory stores imports all screens and implements navigation.
- `screens` directory contains the application's screens.
- `services` contains api class which is responsible for calling the external coin cap api
- `store` directory contains Redux Toolkit-related files, including actions, reducers, and the store configuration.
- `utils` directory holds utility functions and helper classes.
- `App.tsx` is the entry point of the application.
- `package.json` contains the project's dependencies and scripts.
- `tsconfig.json` is the TypeScript configuration file.


## Development Workflow

- Define your screens in the `screens` directory.
- Create reusable components in the `components` directory.
- Page/Screen components in the `container` directory.
- Add Redux actions in the `store/coins/actions` directory.
- Reusable component logic in the `hooks` directory.
- Implement the corresponding reducers in the `store/coins/reducers` directory.
- Use the Redux Toolkit store located in `store/index.ts` to manage application state.
- Utilize the `utils` directory for any utility functions or helper classes.
- Modify the `App.tsx` file to define your app's navigation and layout.


## App Screenshots
<div style="display:flex;flex-wrap:wrap;gap:20px">
<img src="https://github.com/illegalcall/crypto-price-ticker/assets/44542765/b2ebc722-ade6-4d54-9f37-87e3cd953487" height="600px" />
<img src="https://github.com/illegalcall/crypto-price-ticker/assets/44542765/7d82fe52-327c-4e1e-9b56-3575fe7bd561" height="600px" />
<img src="https://github.com/illegalcall/crypto-price-ticker/assets/44542765/e9c14f87-b075-4c1f-952a-c8aecee9d268" height="600px" />
<img src="https://github.com/illegalcall/crypto-price-ticker/assets/44542765/f5eea6ff-6007-4779-82b2-b2ecc15245b2" height="600px" />
</div>