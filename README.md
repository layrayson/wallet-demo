# Setup Instructions

Before proceeding, ensure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions for both Android and iOS.

# Running the App

To run the app, follow these steps:

### For Android

1. Start Metro by running `npm start` or `yarn start` from the project root.
2. In a new terminal, run `npm run android` or `yarn android` to start the app.

### For iOS

1. Start Metro by running `npm start` or `yarn start` from the project root.
2. In a new terminal, run `npm run ios` or `yarn ios` to start the app.

### For iOS

Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app.

# Congratulations! :tada:

### Implementation Overview

Used a bare React Native project (without Expo) to keep the build size minimal, since it was a small project
Global state management and persistent storage (e.g., Redux or AsyncStorage) were intentionally excluded since the project’s scope didn’t require them.
No authentication was implemented because the public API used didn’t support it.

### Opportunities for Improvement

Adding a skeleton loader as a placeholder when fetching data
