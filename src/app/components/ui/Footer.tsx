"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="w-full py-8 text-center text-sm text-muted-foreground border-t border-border/30 bg-secondary-background/20">
            <p className="font-sans">
                &copy; {new Date().getFullYear()} Hensell Espinoza. Built with{" "}
                <span className="text-primary font-semibold">Next.js</span>
            </p>
        </footer>
    );
}
