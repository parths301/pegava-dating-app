# Tech Stack

## Core Technologies
- **React Native**: 0.71.3 - Cross-platform mobile development
- **Expo**: ^48.0.0 - Development platform and build system
- **TypeScript**: ^4.9.4 - Type safety and developer experience
- **React**: 18.2.0 - UI library

## State Management
- **Redux Toolkit**: ^1.8.2 - State management with modern Redux patterns
- **Redux Saga**: ^1.1.3 - Side effect management for async operations
- **Redux Persist**: ^6.0.0 - State persistence across app sessions
- **Reselect**: ^4.0.0 - Memoized state selectors

## UI & Styling
- **Styled Components**: ^5.3.5 - CSS-in-JS styling solution
- **React Native Reanimated**: ~2.14.4 - High-performance animations
- **Expo Linear Gradient**: ~12.1.2 - Gradient backgrounds
- **Expo Blur**: ~12.2.2 - Glassmorphism blur effects
- **Lottie React Native**: 5.1.4 - Complex animations

## Navigation
- **React Navigation**: ^6.0.10 - Navigation library
- **Stack Navigator**: ^6.2.1 - Screen stack management
- **Material Top Tabs**: ^6.2.1 - Tab navigation

## Development Tools
- **Reactotron**: ^5.0.0 - Debugging and development tool
- **Patch Package**: ^6.4.7 - NPM package patching

## Common Commands

### Development
```bash
# Start development server
yarn start

# Start on specific platform
yarn android
yarn ios

# Apply patches after install
yarn prepare
```

### Build & Deploy
```bash
# Build for production (Expo)
expo build:android
expo build:ios

# Publish updates (Expo)
expo publish
```

## Path Aliases
The project uses extensive path aliases configured in both TypeScript and Babel:
- `~components` → `src/components`
- `~views` → `src/views`
- `~store` → `src/store`
- `~services` → `src/services`
- `~assets` → `src/assets`
- `~themes` → `src/themes`