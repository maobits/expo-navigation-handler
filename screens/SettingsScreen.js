/**
 * ====================================================
 *  Data sheet: SettingsScreen.js
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
 * This code defines the SettingsScreen component, a React component likely used within a React Native application.
 * It displays a simple screen labeled "Settings Screen" and potentially includes a Menu component.
 
 * Key Components:
 * - View: A basic layout component from React Native, used to structure the screen.
 * - Text: A component to display textual content on the screen.
 * - Menu: An external component likely imported from the components directory.
   - Its functionality is not defined here, but it likely provides some menu UI elements.
   - The SettingsScreen passes the navigation prop to the Menu component, suggesting potential navigation capabilities.
  
 * Functionality:
 * - The SettingsScreen component renders a main View container that takes up the entire screen (flex: 1).
 * - It includes a Menu component, potentially used for navigation or other actions.
 * - The screen displays the text "Settings Screen" in a centered position within another View container.
 */

// Import the React library, which is necessary to create React components
import React from 'react';

// Import View and Text from react-native for layout and displaying text
import { View, Text } from 'react-native';

// Import the Menu component from the components directory
import Menu from '../components/Menu';

// Define the SettingsScreen component
const SettingsScreen = ({ navigation }) => {
  // Return the JSX for the SettingsScreen component
  return (
    <View style={{ flex: 1 }}>  {/* Main container view for the screen (takes all available space) */}
      <Menu navigation={navigation} />  {/* Render the Menu component, passing the navigation prop */}
      {/* Text container for the screen content */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>  
      </View>
    </View>
  );
};

// Export the SettingsScreen component as the default export
export default SettingsScreen;
