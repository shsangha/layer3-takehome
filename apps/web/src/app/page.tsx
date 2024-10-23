import HomePageComponent from "@/modules/home-page";

/**
 * This file structure is designed to abstract Next.js framework details,
 * specifically those related to the App Router. By using the app directory
 * for thin wrappers and maintaining the rest of the application in a
 * framework-agnostic structure, we achieve greater flexibility for the future.
 *
 * Benefits of this approach:
 * 1. Separation of concerns: Framework-specific code is isolated from business logic.
 * 2. Easier migration: If needed, switching to a different framework becomes less challenging.
 * 3. Improved testability: Components can be tested independently of Next.js.
 * 4. Better code organization: Clear distinction between routing/framework and application logic.
 */
export default function HomePage() {
  return <HomePageComponent />;
}
