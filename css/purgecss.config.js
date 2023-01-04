module.exports = {
  content: ['index.html'],
  css: ['style.css']
}

const purgecss = await new PurgeCSS().purge('./purgecss.config.js')
import { PurgeCSS } from "purgecss";
const purgeCSSResults = await new PurgeCSS().purge({
  content: ["**/*.html"],
  css: ["**/*.css"],
});
