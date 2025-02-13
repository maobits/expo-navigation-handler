/**
 * ====================================================
 *  Data sheet: HomeScreen.js
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
 * This code defines the ProfileScreen component, a React component likely used within a React Native application.
 * It displays a basic screen labeled "Home Screen" (mistake in the code) and potentially includes a Menu component.
 
 * Key Components:
 * - View: A basic layout component from React Native, used to structure the screen.
 * - Text: A component to display textual content on the screen.
 * - Menu: An external component likely imported from the components directory.
   - Its functionality is not defined here, but it likely provides some menu UI elements.
   - The ProfileScreen passes the navigation prop to the Menu component, suggesting potential navigation capabilities.
  
 * Functionality:
 * - The ProfileScreen component renders a main View container that takes up the entire screen (flex: 1).
 * - It includes a Menu component, potentially used for navigation or other actions.
 * - The screen displays the text "Home Screen" (text likely a mistake based on the file name) in a centered position within another View container.
 * - You can add more content to the screen below this text section.
 */

// Import the React library, which is necessary to create React components
import React from 'react';

// Import View and Text from react-native for layout and displaying text
import { View, Text } from 'react-native';

// Import the Menu component from the components directory
import Menu from '../components/Menu';

// Define the ProfileScreen component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>  
      <Menu navigation={navigation} /> 
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text> 
      </View>
    </View>
  );
};

// Export the ProfileScreen component as the default export
export default HomeScreen;
