"use client";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    // Create a .env.local file in your root directory and add:
    // NEXT_PUBLIC_PRIVY_APP_ID=your_app_id_here
    
    const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID
    if (!privyAppId) {
      throw new Error('NEXT_PUBLIC_PRIVY_APP_ID is not defined in .env.local')
    }

    return (
        <PrivyProvider appId={privyAppId}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                <div className="flex min-h-screen flex-col bg-[#0F0F0F] text-white">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </ThemeProvider>
        </PrivyProvider>
    );
} 