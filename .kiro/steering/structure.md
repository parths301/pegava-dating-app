# Project Structure

## Root Directory
- `src/` - Main source code
- `patches/` - NPM package patches
- `.expo-shared/` - Expo configuration
- Configuration files: `package.json`, `tsconfig.json`, `babel.config.js`, `metro.config.js`

## Source Structure (`src/`)

### Core Files
- `index.tsx` - App entry point with providers and theme setup
- `themes.ts` - Theme definitions (light/dark) and typography
- `constants.ts` - App-wide constants (dimensions, animations)

### Components (`src/components/`)
- Reusable UI components with co-located styles
- Each component has its own folder with `index.tsx` and `styles.ts`
- Barrel exports in `index.ts` for clean imports
- Examples: Button, Input, MainCard, FeedbackCard

### Views (`src/views/`)
- Screen-level components representing app pages
- Each view has its own folder with components, styles, and utilities
- Major views: Authentication, Swipe, Chat, Messages, UserProfile
- `index.routes.tsx` - Navigation configuration

### State Management (`src/store/`)
- `index.ts` - Store configuration with Redux Toolkit
- `reducers/` - Redux reducers organized by feature
- `sagas/` - Redux Saga side effects organized by feature
- `selectors.ts` - Reselect memoized selectors

### Services (`src/services/`)
- `api.ts` - API client configuration
- `navigation.ts` - Navigation utilities
- `utils.ts` - Common utility functions
- `reactotron.ts` - Development debugging setup

### Assets (`src/assets/`)
- `fonts/` - Gilroy font family files
- `images/` - SVG and PNG images with @2x/@3x variants
- `animations/` - Lottie JSON animation files

### Types (`src/@types/`)
- TypeScript type definitions
- Module declarations for third-party libraries
- Custom type definitions for app entities

## Naming Conventions
- **Components**: PascalCase folders and files
- **Files**: camelCase for utilities, PascalCase for components
- **Styled Components**: PascalCase (Container, ButtonText, etc.)
- **Path Aliases**: Use `~` prefix for clean imports

## Architecture Patterns
- **Component Structure**: Each component folder contains `index.tsx` and `styles.ts`
- **Redux Pattern**: Feature-based organization with reducers, sagas, and selectors
- **Styled Components**: Co-located styles with TypeScript interfaces
- **Theme System**: Centralized theming with light/dark mode support
- **Navigation**: Stack-based navigation with typed route parameters