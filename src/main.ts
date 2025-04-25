import "./style.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("count", () => ({ count: 0 }));

Alpine.start();
