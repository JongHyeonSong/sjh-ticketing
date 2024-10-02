import "./app.css";
import App from "./App.svelte";

console.log("🚀 ~ import.meta.env:", import.meta.env);

console.log("🚀 ~ import.meta.env:", import.meta.env);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
