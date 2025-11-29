"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="w-full py-6 text-center text-sm text-foreground/40 border-t border-border/40">
            <p>
                &copy; {new Date().getFullYear()} Hensell Espinoza. All rights reserved.
            </p>
        </footer>
    );
}
