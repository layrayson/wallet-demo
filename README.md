# Setup Instructions

### For Android

1. Start Metro by running `npm start` or `yarn start` from the project root.
2. In a new terminal, run `npm run android` or `yarn android` to start the app.

### For iOS

1. Start Metro by running `npm start` or `yarn start` from the project root.
2. In a new terminal, run `npm run ios` or `yarn ios` to start the app.

# Implementation Overview

1. I used a bare React Native project (without Expo) to keep the build size minimal, since it was a small project

2. Global state management and persistent storage (e.g., Redux or AsyncStorage) were intentionally excluded since the project’s scope didn’t require them.

3. I named files based on their role—like auth.hook.ts for hooks, auth.service.ts for services, and format_text.helper.ts for helpers—to keep things clear and organized.

4. No authentication was implemented because the public API used didn’t support it.

# Opportunities for Improvement

1. Adding a skeleton loader as a placeholder when fetching data
