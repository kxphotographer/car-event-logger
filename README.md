# Car Event Logger

A monorepo project that serves two purposes:

1. **Car event management** — Store and manage vehicle data: odometer readings, fueling, maintenance, services, and related events.
2. **Architecture and patterns** — Explore and share software development architecture and patterns (layered architecture, Domain-Driven Design) through a concrete codebase.

---

## Purpose 1: Car Event Management

### Background

I own a **Subaru Sambar**, which was discontinued as an in-house model by Fuji Heavy Industries (now Subaru Corporation) in 2012. I had wanted this car since getting my driver’s license in 2015 because of its unique characteristics compared to other Kei cars at the time—and that still holds today.

To keep this car on the road as long as possible, I want to manage all relevant information about it. This project exists primarily for that purpose.

### Data the application records and manages

- **Vehicle information**
- **Odometer readings**
- **Events**
  - Fueling
  - Checks (parts replacement history can be linked)
  - Maintenance and services (parts replacement history can be linked)
  - Parts and chemicals: part numbers (genuine or third-party), standard replacement intervals, etc.
  - Parts and chemicals replacements and their intervals (by distance or time since last replacement)
  - Notes
  - Other

### Features (planned or in progress)

Based on the data above, the application aims to provide:

- **Fuel efficiency calculation**
- **Check and parts replacement reminders**
- **Shareable service history** — e.g. issue URLs for sharing service records

---

## Purpose 2: Architecture and Patterns

In addition to the main goal above, this project is used to explore how to apply architecture and patterns in software development.

### Layered architecture

The codebase is organized into the following layers:

| Layer           | Role |
|----------------|------|
| **Domain**     | Core business logic: data definitions, rules, and domain models. |
| **Application**| Application services and use cases; orchestrates the domain and infrastructure layers. |
| **Infrastructure** | Data access and integrations with external services. |
| **Presentation**   | User interface and presentation logic. |

### Domain-Driven Design

The following DDD patterns are applied:

- **Entity** — Objects with identity that persist over time.
- **Value Object** — Immutable objects defined by their attributes.
- **Aggregate** — Clusters of entities and value objects with a single root and consistency boundaries.

---

## Project structure

This repository is a **pnpm monorepo**:

- **`apps/`** — Applications (e.g. CLI, example apps).
- **`packages/`** — Shared packages (e.g. `domain`, `config-base`).

### Prerequisites

- **Node.js** 22 (or compatible)
- **pnpm** 10.x (see `packageManager` in root `package.json`)

### Scripts (root)

| Command       | Description |
|---------------|-------------|
| `pnpm install`| Install dependencies for the whole monorepo. |
| `pnpm build`  | Build all packages and apps. |
| `pnpm test`   | Run tests (Vitest). |
| `pnpm check`  | Run lint, spell-check, and package-level checks. |
| `pnpm clean`  | Clean build artifacts (reverse order). |

### Development

1. Clone the repository and run `pnpm install`.
2. Use `pnpm build` to verify the build, and `pnpm test` to run tests.
3. CI runs on push (see `.github/workflows/check.yml`) for build, check, and test.

---

## License

MIT
