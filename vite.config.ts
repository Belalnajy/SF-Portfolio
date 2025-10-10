import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "lucide-react@0.487.0": "lucide-react",
      "input-otp@1.4.2": "input-otp",
      "figma:asset/f4bc0a99a225b642da732b15102840e34f051eb8.png": path.resolve(
        __dirname,
        "./src/assets/f4bc0a99a225b642da732b15102840e34f051eb8.png"
      ),
      "figma:asset/ebedd9fe6a018150783571226bd6236fd8379b55.png": path.resolve(
        __dirname,
        "./src/assets/ebedd9fe6a018150783571226bd6236fd8379b55.png"
      ),
      "figma:asset/dc7e5be8c153863312961ea55dab4516187a989d.png": path.resolve(
        __dirname,
        "./src/assets/dc7e5be8c153863312961ea55dab4516187a989d.png"
      ),
      "figma:asset/64caa0576e1ebb14fc1c97f988edbcf7d77f5b72.png": path.resolve(
        __dirname,
        "./src/assets/64caa0576e1ebb14fc1c97f988edbcf7d77f5b72.png"
      ),
      "figma:asset/5ddb1e048fff231b3db7fdd94267f588d7a437a1.png": path.resolve(
        __dirname,
        "./src/assets/5ddb1e048fff231b3db7fdd94267f588d7a437a1.png"
      ),
      "figma:asset/4f411eceffdc89a423169a0f7ad08aefd77585d4.png": path.resolve(
        __dirname,
        "./src/assets/4f411eceffdc89a423169a0f7ad08aefd77585d4.png"
      ),
      "figma:asset/20391402ba98fab0a9c3f28fe246d3f111e50b6d.png": path.resolve(
        __dirname,
        "./src/assets/20391402ba98fab0a9c3f28fe246d3f111e50b6d.png"
      ),
      "figma:asset/0f75e5c048d2eed987cadf0acd4ddd41be5d0881.png": path.resolve(
        __dirname,
        "./src/assets/0f75e5c048d2eed987cadf0acd4ddd41be5d0881.png"
      ),
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.1": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5":
        "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    target: "esnext",
    outDir: "dist"
  },
  server: {
    port: 3000,
    open: true
  }
});
