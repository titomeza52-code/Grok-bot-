# BOHENECK BUILDS — COMPLETE WEBSITE REBUILD PLAN + FULL CONTEXT

Prepared for GrokBot execution. Dynamic hero effect TBD — pick with owner before build. Voice + cookies included.

---

## PART A — BUSINESS CONTEXT

**Company:** Boheneck Builds (Jake & Jade Boheneck), Mesa AZ. Kitchen/bath/drywall/painting/cabinets/countertops/exterior remodeling. Licensed, bonded, active LLC since 2024. ROC #364862.
Phone: 480-204-9703. Website: boeheneckbuilds.com (current). Instagram: ~380 followers.
Google: 8 reviews, 5 stars.

**Owner works as a cop on shifts** — cannot answer calls all day. Missed-call math: home services miss 27-38% of calls; 85% of those callers dial the next company. One recovered job/month at $400 avg covers a $49/mo receptionist several times over.

### The Backstory (Why This Matters)

Previous developer charged $4,000, wanted more, and hid 250 customer email leads behind a paywall. Jake lost an estimated $100-200K last year from those trapped leads. The rebuild is not just a website — it is restitution. Every section below exists to make sure that never happens again: no paywalls, no placeholder copy, no buried contact info, no dead links.

### Current Site Audit (boeheneckbuilds.com)

- 2019-era WordPress on Victor Themes Exertion template
- 5 pages: home, services, about, reviews, contact
- llms.txt exists but dumps raw WPBakery shortcode markup — whoever built it didn't know what they were doing
- 2 service descriptions are literal placeholder Wikipedia-style text
- Every "Read More" link points to the same services page
- No forms, no lead capture — phone links only
- No schema markup, no before-after galleries, stock-ish images only
- ROC number buried (compliance gap under A.R.S. 32-1124)
- 250 leads behind a paywall (the betrayal)

---

## PART B — THE SPEC (12 SECTIONS)

### 1. FOUNDATION

Kill WordPress entirely. Static or Next.js. 301 redirect map: every old URL to its closest new equivalent. No chains. No batch-redirecting retired pages to homepage (Google treats as soft 404). Query-string permalinks (/?p=123) get individual 301s. Resubmit sitemap in Search Console after cutover.

**DO NOT port the phone number to Twilio or xAI. FORWARD it.** If the AI stack dies, one forwarding rule flips and Jake's phone rings again in minutes. Porting makes reversal a project.

### 2. BRAND SYSTEM

Palette from the logo image: electric blue #1080F0 (brand moments), deep teal #002030 (interactive depth, hover states, nav on scroll, footer), warm wood ~#605040 (surfaces, card borders), clean white #F0F0F0 (negative space, text). Blue appears ~10% of any viewport — scarcity is what makes it land.

Hero: actual kitchen photo from logo, BOHENECK in white, "Renovation and Construction" in lighter greige, phone below. CTA button electric blue + white text. Nav: deep teal on scroll, logo inverted white. Service cards: warm wood borders, blue underline on hover. Footer: deep teal.

**LOGO: use as-is. Do not let GrokBot "improve" it.** House-outline B reads at favicon size.

### 3. TRUST-BEFORE-ASK

ROC number, insurance, 5-star count ABOVE the fold. Measured conversion: 8-15% vs 1-2% for sites that jump to a quote button.

ROC number: own clean strip directly under hero or in top nav. NEVER on the photo, NEVER in footer, ~12pt+, not obstructed by graphics. A.R.S. 32-1124 requires homepage prominence. Hyperlink to roc.az.gov in footer or trust bar.

### 4. THE FORM (THE ENTIRE BUSINESS)

Two steps. Step 1: project type, timeline, rough budget. Step 2: name + phone. SMS ping to Jake within 5 minutes (21x conversion lift over 30-min contact). Optional SMS consent checkbox on step 2 with full TCPA disclosure. If Jake texts leads later: prior express written consent + 10DLC registration first. Form posts to email + SMS so Jake sees it on his phone instantly. No 20-field quote wizards — homeowners abandon those.

### 5. SERVICES PAGE

Real project photos per service (kitchen, bath, drywall, painting, cabinets, countertops, exterior). Homeowner language: "we handle permits," "we protect your floors," "we clean up daily." Price-range anchors where Jake shares them (even "kitchens start around $X" filters tire-kickers). Gallery page: room type + city, filterable tags, fed from Instagram.

### 6. SEO + AI VISIBILITY

LocalBusiness schema: geo, areaServed, sameAs → Google profile, ROC number. Service-area pages: Gilbert, Mesa, Chandler, Tempe, Scottsdale — unique copy, never spun duplicates. llms.txt: 1-sentence summary + curated links, NO shortcode dumps. 30-minute hedge for agent retrieval only — Google says it doesn't move rankings. Review generation = parallel workstream (8 reviews < 150 AI-citation floor). FAQ rich results RETIRED May 7 2026 — don't build around them. Avg contractor visible to ~8% of AI platforms pre-optimization; full schema ≈ 3.2x more AI Overview citations.

### 7. SPEED

LCP < 2.5s. WebP/AVIF, height attributes, preload hero. 53% of mobile visits abandon past 3s.

**TIGHTENED:** critical CSS inlined, non-critical deferred, one preloaded font max (no render-blocking font stacks), service worker for repeat-visit shell caching (same homeowners return).

### 8. DYNAMIC FEATURE (PLACEHOLDER — TBD WITH OWNER)

Pick ONE:
- **(a) Particle hero** — kitchen photo as drifting electric-blue specks parting around cursor. Ref: github.com/dannystuart/particle-hero (18KB, zero libs, has export button).
- **(b) Liquid-glass cursor** — pointer becomes refracting pane bending the hero image. Ref: sliderrevolution.com/templates/liquid-glass-cursor-effect-hero.
- **(c) Image-displacement ripple** — click ripples the photo like water on tile. Ref: freefrontend.com (JavaScript hero effects).

Ranking for Jake: particles > glass > ripple. Desktop-first; mobile falls back to static photo + reduced-motion support.

### 9. OLD-SITE FAILURE ANALYSIS

Placeholder Wikipedia-style copy, dead Read More links, buried ROC number, 250 leads behind a paywall, no forms, no schema, no before-after galleries, llms.txt = shortcode garbage.

### 10. BUILD NOTES

GrokBot executes section-by-section with review checkpoints. Cursor/Claude Code as fallback. Version-control everything.

**DOMAIN CHECKLIST (verify at Jake's house):**
- Registrar identity — if the old developer registered it, that's leverage
- Renewal date — don't lose it mid-build
- Auto-renew card validity
- If clean and in Jake's name: point nameservers at host, 301 map handles the rest

### 11. VOICE INTEGRATION (SEPARATE TRACK, PHASED)

**Context:** Jake is a cop on shifts. One public number. Jake rings first; agent catches overflow.

**Phase 1 — Voice Agent Builder (xAI no-code console):** Free number, $0.08/min model + $0.01 telephony. Rex = business voice. Test real calls in days, tune before infrastructure.

**Phase 2 — SIP direct:** Register his existing number as a byo_trunk via origin, point Twilio at sip:NUMBER@sip.voice.x.ai. Gain number ownership, DTMF passthrough, warm transfer to cell via SIP REFER. Migration is mostly config.

**Phase 3 — Twilio Media Streams bridge** (xai-cookbook repo: github.com/xai-org/xai-cookbook/examples/voice-agent-phone): Only if volume or custom barge-in logic demands it. Probably never earns its keep for a solo contractor. Explicitly marked not production-ready.

**Call routing:** Twilio `<Dial timeout="5">` (Twilio adds its own ~5s buffer → ~10s ring) with action URL returning TwiML connecting caller to Grok Voice session. Same call leg, no redial, caller ID preserved. If Jake picks up inside the window, the action never fires.

**Zero-code start:** Carrier conditional forwarding — *61* for no-answer, *67 for busy, ring delay in 5-second steps. Five minutes of setup. Migrate to Twilio pattern once mid-call actions needed (calendar check, texted booking link).

**Arizona AI disclosure:** Voice Agent API force_message feature — guarantees the not-human line is spoken, not left to model discretion.

**EVA-Bench (Oct 14, 2026):** ElevenAgents cascade scored 67% task accuracy / 13% conversational experience. Grok Voice 3.0 speech-to-speech scored 74% accuracy / 71% experience. Voice quality isn't the bottleneck — workflow is.

**Optional hosted alt (ask owner first):** Rosie $49/mo (250 min, trade-specific spam filtering on 2.4M trade calls, bilingual EN/ES, SMS summaries, emergency triage) vs ElevenAgents Reception $29/mo (best voices, calendar booking, no trade spam filter, no bilingual, LLM + number billed separately) vs Goodcall $79/mo (unlimited min, 100 unique callers) vs Smith.ai $95-150/mo (human backup). Self-hosted Pipecat/LiveKit break-even ~100K min/mo — irrelevant for Jake.

### 12. COOKIES + CONSENT (IF ANALYTICS ADDED)

**Cookiebot** — free on a single domain under 50 subpages. Automatic scanner classifies every cookie and tracker, blocks scripts until consent, logs every choice for audit trail, native Consent Mode v2 module. Runner-up: CookieScript at €6/mo. Skip Osano hosted plans — $99/mo, 275ms interaction delay.

**Implementation order matters:** CMP snippet goes in `<head>` FIRST and sets all four Consent Mode signals to denied before gtag.js loads. When visitor accepts, it fires the update call and re-sends the GA4 config. If that order flips, GA4 starts collecting before the banner can block it — that's the exact misconfiguration plaintiffs' lawyers screenshot.

**Three non-negotiables:**
1. Reject must actually kill the scripts, not just dismiss the banner — CIPA wiretap section, $5,000 per violation, SB 690 didn't touch it.
2. Banner copy must match the privacy policy word for word on what gets collected and who receives it.
3. Honor the Global Privacy Control signal automatically in the 12 states that require it — no click needed; a lightweight consent script that checks for GPC and suppresses non-essential cookies covers it.

Arizona has no privacy law; CIPA suits target California traffic. But if the site pulls any California visitors through Google Ads or organic search, the banner is cheap insurance against a $5,000 demand letter.

**Lean:** Skip third-party trackers on launch if possible — the form and phone number are the conversion path. Analytics can wait until there's traffic worth measuring. But if analytics are wanted, this section is the compliant path.

---

## PART C — LEGAL CHECKLIST (OUTSIDE SPEC SECTIONS)

- [ ] ROC strip: clean strip under hero or in top nav, 12pt+, never on photo, never footer, not obstructed by graphics
- [ ] Hyperlink to roc.az.gov
- [ ] SMS consent checkbox with full TCPA disclosure on form step 2 (automated messages, not a condition of service, message rates may apply)
- [ ] Privacy policy with CTIA language (mobile numbers not shared for third-party marketing)
- [ ] Written-contract template under A.R.S. 32-1158: contracts over $1,000 must be written, include ROC number, deposit amount, progress-payment schedule, and 10-point-bold notice of owner's right to complain to ROC. Arizona has no general deposit cap except 15% for pools/spas.
- [ ] WCAG 2.1 AA target (no federal mandate for private sites, but serial plaintiffs file constantly; reduced-motion fallback + semantic HTML gets most of the way)
- [ ] Cookie consent per Part B §12 if analytics added
- [ ] AI-caller disclosure via force_message (Part B §11)

---

## PART D — NEXT STEPS

1. Visit Jake. Verify domain registrar/renewal/ownership.
2. Pick dynamic hero effect (particles / liquid-glass cursor / ripple).
3. Slot effect spec into §8.
4. Voice: carrier forwarding first (zero-code), Twilio Dial-with-timeout second, SIP direct third.
5. Analytics: skip on launch or implement §12.
6. GrokBot executes §§1-10 with review checkpoints. Voice = separate track.
7. Legal checklist cleared before cutover.

---

*Prepared by Leo (CoS) for Miguel. Drop into GrokBot and execute.*