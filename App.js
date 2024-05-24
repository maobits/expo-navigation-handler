/**
 * ====================================================
 *  Data sheet: App.js
 * ====================================================
 *  Company Name: Maobits LLC.
 *  Department: Mobile Application Development
 *  Department Head: Mauricio Chara Hurtado (@maurollc)
 *  Version: 1.0.0
 *  Creation Date: May 23, 2024
 *  Last Update Date: May 23, 2024
 *  License: 
 *  Support: code@maobits.com
 *  Last commit message: Basic menu style.
 *  Last commit date: May 23, 2024
 *  Full SHA: 
 *  
 * ====================================================
 */

/**
 * This code defines the main application component (App) 
 * for a React Native application that uses React Navigation.
 * It creates a stack navigator to manage transitions between screens.
 * 
 * Key Components:
 * - NavigationContainer: The main container for navigation,
 *   managing the navigation state across the app.
 * - Stack.Navigator: A component that creates a stack-based navigation system.
 *   Screens are pushed on top of each other, with transitions between them.
 * - Stack.Screen: A component that defines a single screen within the stack navigator.
 *   It takes a name (route identifier) and a React component to render for that screen.
 * - HomeScreen, SettingsScreen, AddScreen: Individual screens (components) 
 *   used within the stack navigator. They likely handle specific functionalities
 *   or display particular content within the app.
  
 * Functionality:
 * - The App component wraps the entire navigation structure using NavigationContainer.
 * - The Stack.Navigator defines the navigation hierarchy, containing three Stack.Screen elements.
 *   - Each Stack.Screen maps a route name ("Home", "Settings", "Add") to a corresponding React component.
 * - Users can navigate between these screens by interacting with the navigation UI
 *   provided by React Navigation (e.g., buttons, gestures).
 */

// Import the React library, which is necessary to create React components
import React from 'react';

// Import NavigationContainer from @react-navigation/native, which is the main container for navigation
import { NavigationContainer } from '@react-navigation/native';

// Import createStackNavigator from @react-navigation/stack, which is used to create a stack navigator
import { createStackNavigator } from '@react-navigation/stack';

// Import the screens that will be used in the navigation
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AddScreen from './screens/AddScreen';

// Create an instance of the stack navigator
const Stack = createStackNavigator();

// Define the main component of the application
const App = () => {
  return (
    // NavigationContainer is the main container for navigation, which manages the navigation state
    <NavigationContainer>
      {/* Stack.Navigator contains the screens that can be navigated */}
      <Stack.Navigator>
        {/* Define a screen within the stack navigator 
            name: the name of the route
            component: the component that is rendered when this route is active */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* Another screen within the stack navigator */}
        <Stack.Screen name="Settings" component={SettingsScreen} />
        
        {/* Another screen within the stack navigator */}
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the App component as the default export
export default App;
