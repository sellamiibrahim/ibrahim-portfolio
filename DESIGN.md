---
name: Terminal Obsidian
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#c0c1ff'
  on-tertiary: '#1000a9'
  tertiary-container: '#9699ff'
  on-tertiary-container: '#1d17b2'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-code:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style
The design system manifests a brutalist-futuristic technical layout engineered specifically for elite engineering portfolios, technical showcases, and high-velocity developer products. It marries the razor-sharp precision of high-performance IDE consoles with sophisticated architectural brutalism. 

Visual execution relies on uncompromising zero-radius geometry, high-contrast structural containment, and kinetic typography. Deep obsidian and void-tinted canvas backdrops establish absolute focus, while neon emerald highlights signal system readiness, live deployments, and active statuses. Supplementary cyan and indigo tones serve as auxiliary telemetry indicators.

The emotional signature is uncompromising, authoritative, and deeply technical. It communicates to prospective engineering clients and technical leaders that every layer of the product is built with meticulous architectural intention, mathematical rigidity, and performance-grade precision.

## Colors
The palette leverages high-contrast luminescence against void-level dark substrates. The core background is rooted in deep obsidian (`#0b0f17`), layered with subtle elevation surfaces in dark slate and zinc derivatives (`#0f172a`, `#111827`, and `#1e293b`).

- **Primary (`#10b981` / Emerald):** Signifies live execution, operational status, terminal prompts, primary actions, and deployment states. Used sparingly for peak intentional impact.
- **Secondary (`#38bdf8` / Electric Cyan):** Delivers auxiliary technical highlights, telemetry metrics, syntax nodes, and interactive hover vectors.
- **Tertiary (`#6366f1` / Indigo Pulse):** Applied to secondary badges, deep code tokenization, and architecture system borders.
- **Neutral (`#0b0f17` / Dark Obsidian):** The foundational substrate across all viewports.
- **Surface Hierarchy:** Layered from Base Void (`#0b0f17`), Surface Low (`#0f172a`), Surface Container (`#111827`), to Surface Stroke (`#1e293b` / `rgba(255, 255, 255, 0.08)`). Text colors scale from high-visibility crisp white (`#f8fafc`) to technical muted slate (`#94a3b8` and `#64748b`).

## Typography
Typographic rhythm balances brutalist technical structure with readable contemporary density:

- **Headlines (`Space Grotesk`):** Delivers aggressive geometric proportion, algorithmic angles, and mechanical authority. Display and headline scales apply tight negative tracking to maintain maximum optical mass.
- **Body Text (`Hanken Grotesk`):** Provides exceptional clarity and micro-legibility for engineering bios, case study narratives, and architecture descriptions across extended reading lengths.
- **Labels, Telemetry, & Badges (`Space Grotesk`):** Standardized on uppercase micro-tracking (`label-caps`) to echo compiler output, index markers, and telemetry status lines.

## Layout & Spacing
The layout adheres to a rigid 12-column engineering grid bounded by clear structural margins. Content sections are visibly demarcated using structural hairline boundary lines rather than floating empty space.

- **Desktop (1024px+):** 12-column grid, 1.5rem gutters, and 3rem boundary margins. Max system containment caps at 1440px with modular sub-panels.
- **Tablet (768px - 1023px):** 8-column layout with 1.25rem gutters and 2rem outer margins. Multi-column cards collapse from 3-up to 2-up configurations.
- **Mobile (<768px):** 4-column layout, 1rem gutters, and 1.25rem outer margins. Grid panels snap to single-column vertical stacks.
- **Modular Cadence:** Interior component gaps strictly use the base-4 structural scale (`space-xs` through `space-2xl`).

## Elevation & Depth
In line with brutalist-futuristic principles, traditional fuzzy drop shadows are discarded. Spatial hierarchy is engineered entirely through calibrated tonal surfaces, optical glass overlays, and luminous edge highlights:

1. **Flat Structural Base (Level 0):** Canvas void at `#0b0f17` overlaid with an optional low-contrast 32px technical dot matrix or coordinate grid.
2. **Surface Containers (Level 1):** Solid `#0f172a` or tinted `#111827` enclosed by a 1px solid stroke of `#1e293b` (or `rgba(255, 255, 255, 0.07)`).
3. **Glassmorphism Panels (Level 2):** Translucent obsidian (`rgba(15, 23, 42, 0.75)`) backed by `backdrop-filter: blur(12px)`. Enclosed with a 1px border of `rgba(255, 255, 255, 0.12)`.
4. **Luminous Activation (Interactive / Hover):** When focused or hovered, surface borders swap to `rgba(56, 189, 248, 0.6)` or `#10b981`, paired with a razor-thin directional edge wash (`box-shadow: 0 0 16px -2px rgba(16, 185, 129, 0.25)`).

## Shapes
The shape language is strictly sharp (`roundedness: 0`). Every boundary, card, input, button, and indicator is configured with 0px corner radii. 

This absolute zero-radius mandate evokes physical hardware panels, CRT glass boundaries, and terminal output frames. Elements are clipped with raw, mathematically precise edges, occasionally featuring angled 45-degree chamfers on corner accents to emphasize technical craftsmanship.

## Components

### Buttons
- **Primary Action:** Sharp-cornered block. Background `#10b981`, text `#0b0f17`, font `Space Grotesk` (600 weight, uppercase, tracking +0.05em). Hover swaps background to `#38bdf8` with zero transition lag for instant tactile feedback.
- **Secondary / Ghost:** 1px border in `#1e293b` with `#0f172a` backdrop. Text `#f8fafc`. Hover triggers `border-color: #10b981` and text `#10b981`.
- **Terminal Keycap Button:** Flat dark container featuring a bracket prefix indicator (`[ EXECUTE ]`).

### Status Badges & Chips
- **Live Status Chip:** 0px radius, 1px solid `rgba(16, 185, 129, 0.3)` border over `rgba(16, 185, 129, 0.1)` background. Contains a 6px square emerald status indicator with a CSS blink or pulse animation. Font `Space Grotesk` at 11px uppercase.
- **Tech Stack Chips:** Crisp monochrome blocks (`#111827`), 1px border in `rgba(255, 255, 255, 0.08)`, text in `#94a3b8`. On hover: border tints to `#38bdf8` and text to `#ffffff`.

### Cards & Code Enclosures
- **Project & Architecture Cards:** Sharp glass panels (`backdrop-blur-md`, `rgba(15, 23, 42, 0.8)`). 1px stroke border. Header bar features simulated window metadata or file paths (`src/modules/core.ts`) delimited by 1px bottom divider lines.
- **Code Snippet Blocks:** Deep obsidian surface (`#070a10`) bordered by `#1e293b`. Top bar displaying language identifier and copy button. Syntax highlighted using `#10b981` (strings/success), `#38bdf8` (methods/keys), and `#6366f1` (types/keywords).

### Form Inputs & Terminal Inputs
- **Input Fields:** 0px radius, dark slate fill (`#0f172a`), 1px border (`#1e293b`). Typography in `Hanken Grotesk`. Focus state immediately applies a 1px border of `#10b981` along with a sharp cyan terminal caret indicator.
- **Checkboxes & Radios:** Sharp square boxes (0px radius). Checked state displays a solid `#10b981` fill with an inset `#0b0f17` glyph or solid square dot.

### Lists & Technical Metrics
- **Metric Row Items:** Key-value pairs separated by leader dots (`........`) or hairline horizontal separators. Values rendered in `Space Grotesk` 600 weight with secondary cyan accents.