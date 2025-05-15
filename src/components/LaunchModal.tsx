// src/components/LaunchModal.tsx
"use client";

import { useState, useEffect } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function LaunchModal() {
	const isTest = import.meta.env.MODE === "test";
	const [open, setOpen] = useState(false);

	// On mount, check localStorage to see if we've shown it before
	useEffect(() => {
		if (isTest) {
			return;
		}
		const seen = localStorage.getItem("bdone_seen_launch_modal");
		if (!seen) {
			setOpen(true);
		}
	}, []);

	// When the user closes, mark as seen
	function handleClose() {
		localStorage.setItem("bdone_seen_launch_modal", "true");
		setOpen(false);
	}

	if (isTest) { return null; }

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="sm:max-w-lg">
				<DialogHeader>
					<DialogTitle>Welcome to BDone!</DialogTitle>
					<DialogDescription>
						This is our initial release! Your lists only live on your current browser for now. We’re hard at work on cloud sync and collaboration features. Enjoy, and keep an eye out for updates!
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button onClick={handleClose}>Let’s Go</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
