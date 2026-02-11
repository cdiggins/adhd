#!/usr/bin/env node
/**
 * Generates a short, unique feature ID: YYMMDD-XXXX (date + 4-char alphanumeric).
 * Example: 250210-a3f9
 * Use: npm run generate-feature-id [slug]
 * If slug is provided, prints full folder name: work/feature/<id>-<slug>
 */

import { randomBytes } from "node:crypto";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

function randomSuffix(length: number): string {
  let s = "";
  const bytes = randomBytes(length);
  for (let i = 0; i < length; i++) {
    s += ALPHABET[bytes[i]! % ALPHABET.length];
  }
  return s;
}

function todayId(): string {
  const now = new Date();
  const y = now.getFullYear() % 100;
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

function generateFeatureId(): string {
  return `${todayId()}-${randomSuffix(4)}`;
}

const slug = process.argv[2];
const id = generateFeatureId();

if (slug) {
  const safeSlug = slug.replace(/\s+/g, "-").toLowerCase().replace(/[^a-z0-9-]/g, "");
  console.log(`work/feature/${id}-${safeSlug}`);
} else {
  console.log(id);
}
