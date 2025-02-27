import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [{
  files: ["**/*.js"], languageOptions: {sourceType: "script"}, rules: {"no-unused-vars":"off",}
},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];