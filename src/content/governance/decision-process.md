---
title: "Decision-Making Process"
summary: "How technical and strategic decisions are made in the iTowns commons, from proposal to implementation."
category: "decision-making"
order: 10
audience: "executives"
status: "current"
approvedDate: 2025-06-15
approvedBy: "Governance Board"
lastUpdated: 2026-01-06
changeHistory:
  - date: 2026-01-01
    description: "Extended discussion period from 5 to 7 days"
  - date: 2025-06-15
    description: "Initial policy approved"
---

## Overview

iTowns uses a structured decision-making process that balances efficiency with community input. The process differs based on decision type and impact.

## Decision Categories

### 1. Technical Decisions

Changes to code, APIs, and architecture.

**Examples:**
- New features
- API changes
- Performance optimizations
- Dependency updates

**Process:**
1. **Proposal**: Submit issue or RFC on GitHub
2. **Discussion**: Minimum 7-day comment period
3. **Review**: Core maintainers assess feasibility
4. **Decision**: Consensus or maintainer vote
5. **Implementation**: Code review and merge

**Timeline**: 7-30 days depending on complexity

### 2. Strategic Decisions

Governance, partnerships, and organizational matters.

**Examples:**
- Governance policy changes
- Major partnerships
- Funding allocation
- Trademark usage

**Process:**
1. **Proposal**: Submit to Governance Board
2. **Community Consultation**: Minimum 14-day public discussion
3. **Board Review**: Assessment and recommendation
4. **Community Vote**: For major changes (>50% approval)
5. **Implementation**: Policy update and communication

**Timeline**: 21-60 days depending on impact

### 3. Emergency Decisions

Security issues or critical bugs.

**Examples:**
- Security vulnerabilities
- Critical production bugs
- Legal compliance issues

**Process:**
1. **Report**: Private disclosure to security team
2. **Assessment**: Core maintainer evaluation
3. **Fix**: Immediate patch development
4. **Release**: Emergency release if needed
5. **Disclosure**: Public announcement after fix

**Timeline**: Hours to days depending on severity

## Proposal Requirements

### For Technical Proposals

- Clear problem statement
- Proposed solution
- Alternatives considered
- Migration path (for breaking changes)
- Documentation updates

### For Strategic Proposals

- Business case or rationale
- Impact assessment
- Implementation plan
- Success criteria
- Risk analysis

## Voting Rules

When consensus cannot be reached:

| Decision Type | Quorum | Approval Threshold |
|---------------|--------|-------------------|
| Technical | 3 maintainers | Simple majority |
| Strategic | Board + 5 contributors | 2/3 majority |
| Governance | Board + 10 contributors | 3/4 majority |

## Appeal Process

Decisions can be appealed within 14 days:

1. Submit appeal with new information or arguments
2. Different reviewers assess the appeal
3. Final decision by Governance Board

## Transparency

All decisions are documented:

- GitHub issues for technical decisions
- Public decision records for strategic decisions
- Meeting notes for discussions
- Rationale included in all records

## Recent Decisions

| Date | Type | Decision | Outcome |
|------|------|----------|---------|
| 2026-01 | Technical | Extended discussion period | Approved |
| 2025-12 | Strategic | New contributor tier | Approved |
| 2025-11 | Technical | TypeScript migration | Approved |

## Questions?

- Open a [Discussion](https://github.com/iTowns/itowns/discussions)
- Contact the Governance Board
