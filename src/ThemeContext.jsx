import { createContext } from "react";

const ThemeContext = createContext(["green", function () {}]); // should give a default value
/**
 * Here we are passing a default value that looks like a hook [var, func] -- just provide a default value
 */

export default ThemeContext;
