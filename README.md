#Everything about React

# npm
- npm install -> install node packages

#Packages installed 
- npm install react
- npm install react-dom

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement (Refresh UI automatically)
- File Watching Algorithm
- Caching
- Image Optimization
- Minification
- Bundling
- Compression
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Tree Shaking - remove unused code that is not used

# Command
 - npx parcel index.html -> create **.parcel-cache** folder and create a **localhost server** to run the application
 - npx parcel build index.html -> create a production build inside **dist** folder.
 -  Now instead of writting npx parcel command repetedly, we can make changes with **scripts in package.json** .
  Ex - *npx parcel index.html* will be changes to *npm run start* or *npm start*


# Tasky Kitchn
 /**
 * * header
 *  - Logo
 *  - Nav Items
 * * Body
 *  - Search
 *  - Resturant Container
 *    - Resturant Card
 * * Footer
 *  -Copyright
 */
  
# Two types of Export/Import

- Defailt Export/Import
  
  export default componenent
  import component from "path"

- named Export/Import

  export const component
  import { Component } from "path"

# Hooks
 Normal JS utility function

 - **useState()** - state variables 
    
    * The useState Hook provides those two things:

    * A state variable to retain the data between renders.
    * A state setter function to update the variable and *trigger React to render the component again*.
  
    Example - const [index, setIndex] = useState(0);
              index is a state variable and setIndex is the setter function.

 - **useEffect()**
  
# Swiggy URL
https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING 

Menu URL
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=426730

# Github URL
https://api.github.com/users/surajpradhank

# Lazy Loading
Chunking
Code Spliting
Dynamic Bundling
On Demand loading
Dynamic import

This concept is used to split code into smaller chunks which cen be loaded on demand which will improve hte performance in large scale applications