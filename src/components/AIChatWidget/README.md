# AIChatWidget Component Structure

This folder contains the modular AI Chat Widget component, split into smaller, focused sub-components for better code organization and maintainability.

## 📁 File Structure

```
AIChatWidget/
├── index.jsx              # Main component with state & logic
├── ChatHeader.jsx         # Header with logo, title, and close button
├── MessageBubble.jsx      # Individual message display with WhatsApp button
├── TypingIndicator.jsx    # Animated typing indicator (3 dots)
├── QuickReplies.jsx       # Quick reply buttons grid
├── ChatInput.jsx          # Input field with send button
├── FloatingButton.jsx     # Main floating button to open/close chat
└── README.md              # This file
```

## 🎯 Component Responsibilities

### `index.jsx` (Main Component)
- Manages all state (messages, loading, visibility, etc.)
- Handles chat initialization and API calls
- Coordinates all sub-components
- **Lines: ~210** (down from 433!)

### `ChatHeader.jsx`
- Displays AI assistant branding
- Shows online status indicator
- Close button functionality
- **Lines: ~32**

### `MessageBubble.jsx`
- Renders user and assistant messages
- Supports Markdown formatting
- WhatsApp handoff button
- Timestamp display
- **Lines: ~66**

### `TypingIndicator.jsx`
- Animated dots for loading state
- **Lines: ~25**

### `QuickReplies.jsx`
- Grid of quick question buttons
- Animated appearance
- **Lines: ~28**

### `ChatInput.jsx`
- Text input field
- Send button with loading state
- Keyboard event handling
- Powered by Gemini footer
- **Lines: ~36**

### `FloatingButton.jsx`
- Circular floating action button
- Pulse animation when closed
- Rotate animation on open/close
- AI badge indicator
- **Lines: ~52**

## 🔄 Import Structure

```jsx
// In your App or parent component
import AIChatWidget from './components/AIChatWidget';

// Or explicitly
import AIChatWidget from './components/AIChatWidget/index';
```

## ✨ Benefits of This Structure

1. **Easy Navigation** - Find specific UI elements quickly
2. **Better Testing** - Test individual components in isolation
3. **Reusability** - Use sub-components elsewhere if needed
4. **Maintainability** - Smaller files are easier to understand and modify
5. **Performance** - Easier to optimize individual components
6. **Collaboration** - Multiple developers can work on different components

## 🛠️ Modifying Components

Each component is self-contained with:
- Its own PropTypes validation
- Clear prop interfaces
- Focused responsibilities

Example: To modify the header appearance, only edit `ChatHeader.jsx`

## 📦 Dependencies

All components use:
- `framer-motion` - For animations
- `@iconify/react` - For icons
- `react-markdown` - For message formatting (MessageBubble only)
- `../../utils/geminiAI` - AI utility functions
- `../../utils/analytics` - Tracking functions

## 🎨 Styling

All components use Tailwind CSS with custom CSS variables:
- `--color-primary-500`
- `--color-primary-600`
- Responsive classes (sm:, md:, lg:)

No external CSS files required - fully self-contained!

