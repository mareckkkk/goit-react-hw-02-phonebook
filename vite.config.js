import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/GOIT-REACT-HW-01-COMPONENTS/",
  build: {
    outDir: "./dist",
  },
});
