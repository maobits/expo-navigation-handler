/**
 * ====================================================
 *  Data sheet: Menu.js
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
 * This code defines the Menu component, a reusable component likely used within a React Native application.
 * It displays a bottom navigation menu with icons for navigating between different screens.
 
 * Key Components:
 * - View: A basic layout component from React Native, used to structure the menu.
 * - TouchableOpacity: A component that responds to user touches and executes an action.
 * - Ionicons: A library from Expo providing vector icons used for navigation within the menu.
 * - StyleSheet: A utility for defining styles in React Native.
  
 * Functionality:
 * - The Menu component renders a main View container positioned absolutely at the bottom of the screen.
 * - It utilizes a nested View structure with styles to create the menu background.
 * - Three TouchableOpacity components are used as menu buttons, each with an Ionicons icon.
 *   - Pressing a button triggers the `navigation.navigate` function to navigate to a specific screen ('Home', 'Add', or 'Settings').
 * - Styles defined using StyleSheet provide visual design for the menu, including layout, spacing, colors, and shadows.
 */

// Import the React library, which is necessary to create React components
import React from 'react';

// Import View, TouchableOpacity, and StyleSheet from react-native for layout and styling
import { View, TouchableOpacity, StyleSheet } from 'react-native';

// Import Ionicons from @expo/vector-icons to use Ionicons icons
import { Ionicons } from '@expo/vector-icons';

const Menu = ({ navigation }) => {
  return (
    // Main container view for the menu
    <View style={styles.container}>
      <View style={styles.menuBackground}>
        {/* TouchableOpacity for the Home icon, navigates to 'Home' screen when pressed */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconButton}>
          <Ionicons name="home-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.floatingButtonContainer}>
          {/* TouchableOpacity for the Add icon, navigates to 'Add' screen when pressed */}
          <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Add')}>
            <Ionicons name="add-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
        {/* TouchableOpacity for the Settings icon, navigates to 'Settings' screen when pressed */}
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.iconButton}>
          <Ionicons name="settings-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define the styles using StyleSheet
const styles = StyleSheet.create({
  // Style for the main container
  container: {
    position: 'absolute', // Positioned absolutely within its parent
    bottom: 20, // Positioned 20 units from the bottom
    width: '100%', // Takes full width of the parent
    alignItems: 'center', // Centers children horizontally
  },
  // Style for the menu background
  menuBackground: {
    flexDirection: 'row', // Layout children in a row
    justifyContent: 'space-between', // Space out children evenly
    alignItems: 'center', // Center children vertically
    backgroundColor: 'white', // White background color
    paddingHorizontal: 40, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 30, // Rounded corners
    elevation: 10, // Shadow for Android
    shadowColor: 'black', // Shadow color for iOS
    shadowOffset: { width: 0, height: 5 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
  },
  // Style for the icon buttons
  iconButton: {
    marginHorizontal: 20, // Space between icons
  },
  // Style for the floating button container
  floatingButtonContainer: {
    justifyContent: 'center', // Center children vertically
    alignItems: 'center', // Center children horizontally
    marginTop: -30, // Raise the central button
  },
  // Style for the floating button
  floatingButton: {
    backgroundColor: 'white', // White background color
    borderRadius: 30, // Rounded corners
    width: 60, // Width of the button
    height: 60, // Height of the button
    justifyContent: 'center', // Center children vertically
    alignItems: 'center', // Center children horizontally
    elevation: 5, // Shadow for Android
    shadowColor: 'black', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 2, // Shadow radius for iOS
  },
});

// Export the Menu component as the default export
export default Menu;
