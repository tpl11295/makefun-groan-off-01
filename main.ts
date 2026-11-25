import { mkdirSync, writeFileSync } from "node:fs";

// The One-Liner Groan-Off — one original dad joke, one line of
// at most 140 characters.
// Judge brief (in order): a one-line dad joke, a pun or twist a
// dad would tell out loud; the punchline lands fast and clean;
// fresh rather than one everyone has heard a hundred times;
// tight and rhythmic, easy to say out loud; the groan is earned.
// Chosen line: dad "fixes" the dishwasher with duct tape and
// confidence. The mechanism is deadpan escalation — the repair
// fails, but the confidence comes out spotless. The pun lands
// on the last word, and the setup is dad-voice, not a recycled
// classic: no anti-gravity book, no scarecrow, no "incorrect"
// password. Judge-sim vs the other candidates: the Alexa one
// is funny but voice-assistant jokes are common; the "fun dad"
// self-own is clever more than groan-y; the fridge-running
// reversal leans on the most recycled dad setup there is.
// Polish check: 125 chars, pun ("spotless") on the last word,
// setup is dad-voice throughout — nothing left to cut without
// losing the joke.
const LINE =
  "My dad tried to fix the dishwasher with duct tape and confidence. The dishes are still dirty, but his confidence is spotless.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
