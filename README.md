# React Offline Support

React Offline Support is a library designed to help developers add offline support to React.js/Next.js applications seamlessly. It provides features such as data synchronization, offline caching, and conflict resolution, enabling users to continue using the application even when they're not connected to the internet.

## Installation

You can install the package via npm:

```bash
npm install react-offline-support
```

Usage

1. Offline Support Toolkit
   The Offline Support Toolkit provides Redux store configuration and action creators for managing the offline queue.

React Usage:

```jsx

// Import the store and action creators
import { store, addToQueue, removeFromQueue } from "react-offline-support";

// Example usage
store.dispatch(addToQueue({ type: "ADD_TODO", payload: "Test todo" }));
store.dispatch(removeFromQueue());

```


2. Higher-Order Component (HOC)

   The WithOfflineSupport Higher-Order Component (HOC) adds offline support to React components, enabling them to synchronize data when the network connection is restored.

React Usage:
```jsx
// Import the HOC
import withOfflineSupport from "react-offline-support";

// Wrap your component with the HOC
const OfflineComponent = withOfflineSupport(MyComponent);
```
Example

Here's a basic example of using the package:

React.js Usage:
```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "react-offline-support";
import withOfflineSupport from "react-offline-support";

// Define your functional component
const MyApp = () => {
return <div>My App</div>;
};

// Add offline support to your functional component
const OfflineApp = withOfflineSupport(MyApp);

// Render the app with Redux provider
ReactDOM.render(
<Provider store={store}>
<OfflineApp />
</Provider>,
document.getElementById("root")
);
```
