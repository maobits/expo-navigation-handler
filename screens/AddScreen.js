/**
 * ====================================================
 *  Data sheet: AddScreen.js
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
 * This code defines the AddScreen component, a React component likely used within a React Native application.
 * It displays a simple screen with the label "Add Screen." and potentially includes a Menu component.
 
 * Key Components:
 * - View: A basic layout component from React Native, used to structure the screen.
 * - Text: A component to display textual content on the screen.
 * - Menu: An external component likely imported from the components directory.
   - Its functionality is not defined here, but it likely provides some menu UI elements.
   - The AddScreen passes the navigation prop to the Menu component, suggesting potential navigation capabilities.
  
 * Functionality:
 * - The AddScreen component renders a main View container that takes up the entire screen (flex: 1).
 * - It includes a Menu component, potentially used for navigation or other actions.
 * - The screen displays the text "Add Screen." in a centered position within another View container.
 * - You can add more content to the screen below this text section.
 */

// Import the React library, which is necessary to create React components
import React from 'react';

// Import View and Text from react-native for layout and displaying text
import { View, Text } from 'react-native';

// Import the Menu component from the components directory
import Menu from '../components/Menu';

// Define the AddScreen component
const AddScreen = ({ navigation }) => {
  return (
    // Main container view for the AddScreen component
    <View style={{ flex: 1 }}>
      {/* Render the Menu component and pass the navigation prop */}
      <Menu navigation={navigation} />
      
      {/* Container for the screen text */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Display the text "Add Screen." */}
        <Text>Add Screen.</Text>
        {/* You can add more content here if desired */}
      </View>
    </View>
  );
};

// Export the AddScreen component as the default export
export default AddScreen;
