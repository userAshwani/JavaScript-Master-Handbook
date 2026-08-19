







<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" width="100" />

# JavaScript Master Handbook

**A live "proof of work" tracking daily algorithmic practice, core engine fundamentals, and hands-on JavaScript projects.**

<!-- DO NOT REMOVE THE COMMENTS BELOW. THEY ARE USED BY GITHUB ACTIONS TO AUTO-UPDATE THE COUNTS -->

<!-- QUESTIONS_COUNT:START -->
<img src="https://img.shields.io/badge/Questions_Created-20-blue?style=for-the-badge" alt="Questions Count" />
<!-- QUESTIONS_COUNT:END -->
&nbsp;
<!-- PROJECTS_COUNT:START -->
<img src="https://img.shields.io/badge/Main_Projects-1-success?style=for-the-badge" alt="Projects Count" />
<!-- PROJECTS_COUNT:END -->

<br/>

</div>

---

## About This Repo

This is a multi-project JavaScript learning repo. Each **main project** is a real, production-grade system built step-by-step from isolated practice questions. Finish all questions → build each module → wire them into the final runnable app. Complete one main project, then move to the next.

**Current progress:** &nbsp; 🔨 Project 1 — NodeBiz Dashboard API &nbsp;|&nbsp; Questions 1–20 &nbsp;|&nbsp; 5 modules

| # | Main Project | Questions | Status |
|:---:|:---|:---:|:---:|
| 1 | **[NodeBiz Dashboard API](./projects/pro-final-nodebiz/about.txt)** — multi-source payment pipeline | ques 1–20 | 🔨 In Progress |
| 2 | _(coming after Project 1 completes)_ | — | ⬜ |

**How to use:**
1. Expand a project row below.
2. Solve every question in the left column.
3. Build every function in the right column.
4. Complete all modules → run the final project.
5. Start the next main project.

---

## 🗺️ The Road to NodeBiz

```
 ques 1–6          ques 7–10         ques 11–13        ques 14–18        ques 19–20
    │                  │                  │                  │                 │
    ▼                  ▼                  ▼                  ▼                 ▼
[pro-1]            [pro-2]            [pro-3]            [pro-4]         [pro-final]
Data Utils  →  Data Normalizer  →  RBAC Engine  →  Analytics Engine  →  NodeBiz API
```

---

<table width="100%" border="1">
<tr>
<td align="center"><br/>

## 🚀 Project 1 &nbsp;—&nbsp; NodeBiz Dashboard API &nbsp;·&nbsp; `pro-final-nodebiz`

**What you'll achieve:** Build a complete enterprise-grade data pipeline from scratch. Raw payment data from 3 providers (Razorpay, Bank Transfer, UPI) enters the system, gets normalized to one unified schema, passes through a role-based security layer that masks sensitive fields per user role, flows into an analytics engine generating pivot tables and running reports, and streams out as a live terminal dashboard. You finish by running one command — `node projects/pro-final-nodebiz/index.js` — that executes the entire pipeline end-to-end. A real, demonstrable portfolio piece.

**Build path:** &nbsp; `1.1 Utility Belt` &nbsp;→&nbsp; `1.2 Data Normalizer` &nbsp;→&nbsp; `1.3 RBAC Engine` &nbsp;→&nbsp; `1.4 Analytics Engine` &nbsp;→&nbsp; `1.Final NodeBiz API`

<br/>

</td>
</tr>
<tr>
<td>

<details>
<summary><strong>📦 1.1 &nbsp;—&nbsp; Data Utility Belt &nbsp;·&nbsp; <code>pro-1-data-utils</code></strong> &nbsp;&nbsp;┆&nbsp;&nbsp; ques 1–6 &nbsp;&nbsp;┆&nbsp;&nbsp; 🔽 click to open</summary>

<br/>

**What you will gain:** You build the utility functions every real JS codebase relies on — deep cloning, flattening nested data, grouping records, chaining transforms, caching results. After this module you will understand how `lodash` works internally, and every module you build after this will import from here.

<br/>

<table>
<tr>
<th>📝 Questions &nbsp;— solve all 6 first</th>
<th>🔨 Functions to Build &nbsp;·&nbsp; <a href="./projects/pro-1-data-utils/about.txt">open project guide →</a></th>
</tr>
<tr>
<td valign="top">

| # | File | What to Learn |
|:---:|:---|:---|
| 1 | [ques-1-deep-clone](./question-practice/ques-1-deep-clone.js) | Recursive deep copy |
| 2 | [ques-2-flatten](./question-practice/ques-2-flatten.js) | Dot-notation flattening |
| 3 | [ques-3-groupby](./question-practice/ques-3-groupby.js) | Multi-key grouping |
| 4 | [ques-4-pipe-compose](./question-practice/ques-4-pipe-compose.js) | Function composition |
| 5 | [ques-5-memoize](./question-practice/ques-5-memoize.js) | TTL result caching |
| 6 | [ques-6-curry](./question-practice/ques-6-curry.js) | Curry & partial application |

</td>
<td valign="top">

| Function to Build | Needs |
|:---|:---:|
| `deepClone(value)` | ques-1 |
| `flattenObject(obj, prefix)` | ques-2 |
| `flattenArray(arr)` | ques-2 |
| `groupBy(arr, ...keys)` | ques-3 |
| `pipe(...fns)` | ques-4 |
| `compose(...fns)` | ques-4 |
| `memoize(fn, ttlMs)` | ques-5 |
| `curry(fn)` | ques-6 |
| `partial(fn, ...args)` | ques-6 |

</td>
</tr>
</table>

</details>

</td>
</tr>
<tr>
<td>

<details>
<summary><strong>📦 1.2 &nbsp;—&nbsp; Data Normalizer &nbsp;·&nbsp; <code>pro-2-data-normalizer</code></strong> &nbsp;&nbsp;┆&nbsp;&nbsp; ques 7–10 &nbsp;&nbsp;┆&nbsp;&nbsp; 🔽 click to open</summary>

<br/>

**What you will gain:** You learn to accept raw, inconsistent API data from 3 different payment providers and convert all of it into one clean unified shape. After this module you will understand the Adapter design pattern, recursive data structures, and async batching with concurrency control — skills used in every backend data pipeline at companies like Razorpay, Stripe, and Zerodha.

<br/>

<table>
<tr>
<th>📝 Questions &nbsp;— solve all 4 first</th>
<th>🔨 Functions to Build &nbsp;·&nbsp; <a href="./projects/pro-2-data-normalizer/about.txt">open project guide →</a></th>
</tr>
<tr>
<td valign="top">

| # | File | What to Learn |
|:---:|:---|:---|
| 7 | [ques-7-normalize-adapter](./question-practice/ques-7-normalize-adapter.js) | Adapter pattern, multi-source mapping |
| 8 | [ques-8-permission-tree](./question-practice/ques-8-permission-tree.js) | Recursive role inheritance |
| 9 | [ques-9-deep-diff](./question-practice/ques-9-deep-diff.js) | Object change detection |
| 10 | [ques-10-promise-limit](./question-practice/ques-10-promise-limit.js) | Concurrent async task pool |

</td>
<td valign="top">

| Function to Build | Needs |
|:---|:---:|
| `razorpayAdapter(raw)` | ques-7 |
| `bankTransferAdapter(raw)` | ques-7 |
| `upiAdapter(raw)` | ques-7 |
| `normalizeSchema(raw, source)` | ques-7 |
| `normalizeBatch(arr, source)` | ques-7, ques-10 |
| `resolvePermissions(tree, role)` | ques-8 |
| `validateRecord(record)` | ques-9 |

</td>
</tr>
</table>

</details>

</td>
</tr>
<tr>
<td>

<details>
<summary><strong>📦 1.3 &nbsp;—&nbsp; RBAC Engine &nbsp;·&nbsp; <code>pro-3-rbac-engine</code></strong> &nbsp;&nbsp;┆&nbsp;&nbsp; ques 11–13 &nbsp;&nbsp;┆&nbsp;&nbsp; 🔽 click to open</summary>

<br/>

**What you will gain:** You build a security layer that controls exactly what data each user is allowed to see. After this module you will understand how an LRU Cache works (used in every OS, database and CDN), how a Trie powers search autocomplete (used in VS Code and Google Search), and how field-level data masking works under GDPR and India's DPDP Act — a required feature in every regulated platform.

<br/>

<table>
<tr>
<th>📝 Questions &nbsp;— solve all 3 first</th>
<th>🔨 Functions to Build &nbsp;·&nbsp; <a href="./projects/pro-3-rbac-engine/about.txt">open project guide →</a></th>
</tr>
<tr>
<td valign="top">

| # | File | What to Learn |
|:---:|:---|:---|
| 11 | [ques-11-lru-cache](./question-practice/ques-11-lru-cache.js) | LRU eviction policy |
| 12 | [ques-12-trie](./question-practice/ques-12-trie.js) | Prefix tree / autocomplete |
| 13 | [ques-13-field-masking](./question-practice/ques-13-field-masking.js) | Role-based field masking |

</td>
<td valign="top">

| Function to Build | Needs |
|:---|:---:|
| `resolvePermissions(role)` | ques-8 (from 1.2) |
| `hasPermission(role, perm)` | ques-8 (from 1.2) |
| `LRUCache` — permission cache | ques-11 |
| `Trie` — transaction ID search | ques-12 |
| `maskEmail(email)` | ques-13 |
| `maskPhone(phone)` | ques-13 |
| `applyRBAC(record, role)` | ques-8, ques-13 |
| `maskBatch(records, role)` | ques-13 |

</td>
</tr>
</table>

</details>

</td>
</tr>
<tr>
<td>

<details>
<summary><strong>📦 1.4 &nbsp;—&nbsp; Analytics Engine &nbsp;·&nbsp; <code>pro-4-analytics-engine</code></strong> &nbsp;&nbsp;┆&nbsp;&nbsp; ques 14–18 &nbsp;&nbsp;┆&nbsp;&nbsp; 🔽 click to open</summary>

<br/>

**What you will gain:** You turn raw transaction records into real business intelligence — pivot tables, running totals, moving averages, and sorted reports. You also build an Event Emitter (the core of Node.js itself) and a Rate Limiter (used in every API gateway like AWS, Cloudflare and Nginx). After this module you will be able to power any analytics dashboard with live, reactive data.

<br/>

<table>
<tr>
<th>📝 Questions &nbsp;— solve all 5 first</th>
<th>🔨 Functions to Build &nbsp;·&nbsp; <a href="./projects/pro-4-analytics-engine/about.txt">open project guide →</a></th>
</tr>
<tr>
<td valign="top">

| # | File | What to Learn |
|:---:|:---|:---|
| 14 | [ques-14-event-emitter](./question-practice/ques-14-event-emitter.js) | Pub/Sub event system |
| 15 | [ques-15-rate-limiter](./question-practice/ques-15-rate-limiter.js) | Token bucket algorithm |
| 16 | [ques-16-pivot-table](./question-practice/ques-16-pivot-table.js) | 2D aggregation pivot table |
| 17 | [ques-17-running-totals](./question-practice/ques-17-running-totals.js) | Running totals & moving averages |
| 18 | [ques-18-multi-sort](./question-practice/ques-18-multi-sort.js) | Priority multi-key sort |

</td>
<td valign="top">

| Function to Build | Needs |
|:---|:---:|
| `groupBy(arr, ...keys)` | ques-3 (from 1.1) |
| `EventEmitter` class | ques-14 |
| `RateLimiter` class | ques-15 |
| `pivotTable(records, row, col, val)` | ques-16 |
| `aggregators` (sum/count/avg/min/max) | ques-16 |
| `runningTotal(records, key)` | ques-17 |
| `slidingWindowAvg(records, key, n)` | ques-17 |
| `dailyAggregate(records, date, val)` | ques-17 |
| `summarize(records, key)` | ques-17 |
| `multiKeySort(records, config)` | ques-18 |

</td>
</tr>
</table>

</details>

</td>
</tr>
<tr>
<td>

<details>
<summary><strong>⭐ 1.Final &nbsp;—&nbsp; NodeBiz Dashboard API &nbsp;·&nbsp; <code>pro-final-nodebiz</code></strong> &nbsp;&nbsp;┆&nbsp;&nbsp; ques 19–20 + all above &nbsp;&nbsp;┆&nbsp;&nbsp; 🔽 click to open</summary>

<br/>

**What you will gain:** You wire all 4 modules into one running application. Run `node index.js` and watch raw payment data flow through normalization → RBAC masking → analytics, producing a live report in the terminal. After this you will have a complete, demonstrable data pipeline architecture — a real portfolio piece that shows you can design and build production-grade JavaScript systems end-to-end.

<br/>

<table>
<tr>
<th>📝 Questions &nbsp;— final 2 concepts + all previous</th>
<th>🔨 Pipeline Steps to Build &nbsp;·&nbsp; <a href="./projects/pro-final-nodebiz/about.txt">open project guide →</a></th>
</tr>
<tr>
<td valign="top">

| # | File | What to Learn |
|:---:|:---|:---|
| 19 | [ques-19-generators](./question-practice/ques-19-generators.js) | Lazy streaming with generators |
| 20 | [ques-20-safe-json](./question-practice/ques-20-safe-json.js) | Safe JSON (circular refs, Dates) |

**Also requires:** all ques 1–18 (modules 1.1–1.4 complete)

</td>
<td valign="top">

| Pipeline Step | Needs |
|:---|:---:|
| `step1_normalize(batch, source)` | 1.2 complete |
| `step2_applyRBAC(records, role)` | 1.3 complete |
| `step3_generateReport(records)` | 1.4 complete |
| `step4_auditTrail(before, after)` | ques-9, ques-20 |
| `streamTransactions*(batches)` | ques-19 |
| `createPipeline(role)` | 1.1 `pipe()` + all above |

**Run:** `node projects/pro-final-nodebiz/index.js`

</td>
</tr>
</table>

</details>

</td>
</tr>
</table>

---

## 📋 Quick Reference

### [🚀 Project 1 — NodeBiz Dashboard API](./projects/pro-final-nodebiz/about.txt) &nbsp;·&nbsp; `pro-final-nodebiz`
