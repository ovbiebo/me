import "./style.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("posts", () => ({
  posts: [
    {
      name: "Logical Clocks - Beyond Lamport Clocks",
      date: "02/07/2024",
      url: "https://chidubemovbiebo.substack.com/p/logical-clocks-beyond-lamport-clocks",
    },
    {
      name: "Logical Clocks - Ordering Distributed Events Without Timekeeping",
      date: "03/10/2024",
      url: "https://chidubemovbiebo.substack.com/p/logical-clocks-introduction",
    },
    {
      name: "The Consistency Spectrum",
      date: "03/09/2024",
      url: "https://chidubemovbiebo.substack.com/p/the-consistency-spectrum",
    },
  ],
}));

Alpine.start();
