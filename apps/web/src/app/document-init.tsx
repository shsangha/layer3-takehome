import "@mantine/core/styles.css";

import React from "react";
import { ColorSchemeScript } from "@repo/ui/scripts";

// Define metadata for the application
// This includes the title and description, which can be used by search engines and browsers
export const metadata = {
    title: "Layer3 Takehome",
    description: "Takehome assignment for Layer3 engineering",
};

// DocumentSetup component
// This component wraps the entire application and sets up the basic HTML structure
// It includes:
//   - Language setting for accessibility
//   - ColorSchemeScript for theme handling. This script prevents a blip in the color scheme when content is hydrated client-side.
//   - Viewport meta tag for responsive design
//   - Title tag for the page title
//   - Canonical link for SEO
//   - Rendering of child components within the body
export default function DocumentSetup({ children }: { children: any }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <title>Layer3 Takehome</title>
                <link rel="canonical" href="https://takehome.layer3.xyz" />
            </head>
            <body>{children}</body>
        </html>
    );
}
