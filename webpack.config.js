const path = require("path"); 

module.exports = {
   mode: "development",		
   devtool: "eval",	 
   entry: "./src/index.js",
   output: {
      filename: "main.js", 
      path: path.resolve(__dirname, "dist") 
   },	
   module: {
      rules: [
         {
            test: /\.scss$/i,
            use: [ "style-loader", "css-loader", "sass-loader" ]
         }
      ]		
   }
}