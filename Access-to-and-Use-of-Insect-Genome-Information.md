# Building NCA CZ's Access to and Use of Insect Genome Information: A Low-to-High Resource Ladder — Workshop Talking Points

## TL;DR
- **NCA CZ can move from being a one-off commissioner of isolated genetic studies to a cumulative capability without waiting for new money: the single highest-leverage low-cost step is to change contract/grant conditions so every commissioned study must deposit data, sequences and vouchers under FAIR/open terms using standard identifiers (BOLD process IDs/BINs, ENA/INSDC accessions), and to link those identifiers from NDOP rather than build a sequence repository.** This mirrors exactly what Norway, Sweden and Switzerland did to escape the "isolated reports" trap.
- **The three strands of "insect genome information" have very different cost/maturity/use profiles**: (1) reference genomes & DNA barcode libraries are largely built by others (ERGA/BGE/iBOL) and NCA can free-ride and contribute samples cheaply; (2) population-level genetic-diversity monitoring (Ne 500 / Populations-Maintained indicators under KMGBF Target 4) is now mandatory to report and can be started with existing occurrence/Red List data at almost no cost; (3) eDNA/metabarcoding of Malaise and automated-trap bycatch is the natural bridge to NCA's ABMS pilot but needs an operational bioinformatics pipeline and reference-library coverage.
- **The concrete next move is a 2027 sampling pilot in which NCA does only what NCA can do**: mobilise its field experts to collect a nationally stratified, protocol-consistent baseline sample series during monitoring visits that already happen, and trade that series — which no Czech laboratory can assemble alone — for analysis capacity in a partner-led proposal. A 2027 baseline cannot be collected in 2032; analysis can wait for money, sampling cannot.
- **Durability is the real design problem, not technology**: framework agreements, standing agency–science working groups, a named internal focal point and secured programme funding lines are what separate Norway's/Sweden's lasting schemes from projects that collapse when the grant ends. NCA's Biodiversa+ role (ABMS pilot; co-led automated-monitoring hub proposal) and the incoming EBOCC give it ready-made structures to plug into now.

## Key Findings

**1. The current NCA pattern is the exact "trap" other agencies have named and escaped.** Commissioning one-off studies (mainly from BC AV ČR) that yield isolated reports, and otherwise consuming project outputs, produces no cumulative asset: samples are not archived comparably, data are not deposited under common identifiers, and nothing is repeatable six years later. Sweden's own agency report on the long-running brown-trout genetic time series found it "has no long-term secured funding and has been funded primarily via research grants" (Naturvårdsverket Report 6959, 2021) — a warning that even world-class data series stay precarious without a standing programme line.

**2. Reference genomes and barcode libraries are being built at European scale — NCA's cheapest wins are here.** ERGA (European Reference Genome Atlas, the European node of the Earth BioGenome Project) and Biodiversity Genomics Europe (BGE, Horizon Europe, 2023–26, 33 partners) unite ERGA (genomes) and iBOL Europe (barcoding). The ERGA pilot tested its decentralised infrastructure "on 98 eukaryotic species from 33 European countries" (17 of them EU "Widening" countries), per Mc Cartney, Formenti, Mouton et al., *npj Biodiversity*, 17 September 2024 — the Earlham Institute reports Czech species were among the pilot genomes. The successor **BGE+** (€12 million, EU-funded, coordinated by Naturalis Biodiversity Center, uniting ERGA, iBOL Europe and CETAF; selected for funding announced 16 February 2026) has the explicit long-term ambition of making biodiversity genomics "a routine part of how Europe studies, monitors, manages, and restores nature." Czech institutions already appear in ERGA (e.g. Institute of Microbiology CAS). A Czech butterfly DNA-barcode library was published (2024, bioRxiv) drawing on BOLD; Germany's GBOL sets the gold standard: **GBOL III "Dark Taxa"** launched 1 July 2020 with a €5.3M grant and 12 PhD students at ZFMK Bonn, ZSM Munich and SMNS Stuttgart, targeting Diptera and parasitoid Hymenoptera; more than 25,000 German animal species have been barcoded, though ZFMK notes "only about half of the approximately 33,000 insect species of Germany are included in the reference library." Central-European insect faunas thus still have major reference-library gaps, especially in hyperdiverse dark taxa.

**3. Population-genetic monitoring is now a reporting obligation, and can start with data NCA-adjacent bodies already hold.** The Kunming–Montreal GBF adopted two genetic-diversity indicators for Goal A / Target 4: the headline **Ne 500 indicator** (proportion of populations within a species with effective population size > 500, mandatory) and the complementary **Populations Maintained (PM) indicator**. Crucially these "can be applied … without DNA sequences," using census sizes, Red List and occurrence data — a key innovation for lower-capacity countries. The multinational proof-of-concept (Mastretta-Yanes et al., *Ecology Letters*, published 2 July 2024, doi:10.1111/ele.14461) assessed 919 taxa representing 5,271 populations across nine countries (Australia, Belgium, Colombia, France, Japan, Mexico, South Africa, Sweden, USA) and found 58% of species have populations too small to maintain genetic diversity (Ne 500 = 0), while 41% (211 of 518) have lost at least one in every ten of their populations. The Biodiversa+ project **GINAMO** (2024–2027, coordinated by INRAE; co-creation with stakeholders in France, Italy, Norway, Sweden and Belgium) is operationalising exactly these indicators with agencies — an open door for NCA to join as an observer/user.

**4. eDNA/metabarcoding is the bridge to NCA's ABMS pilot — but needs a pipeline and reference coverage.** Norway's national insect monitoring (NINA, on behalf of the Norwegian Environment Agency, since 2020) runs Malaise/window traps, and per NINA's own GBIF dataset "Identification of insects is mainly done through metabarcoding after a soft lysis of the material. Caution should be exercised when interpreting occurrences of single species, as the metabarcoding and bioinformatics may contain errors." Biodiversa+'s new **MetaBug** pilot (launching 2026) standardises Malaise-trap + DNA-metabarcoding across Europe and links to the EU pollinator monitoring scheme (EU-PoMS); **BiodivPond** adds eDNA. The EU Nature Restoration Regulation (2024/1991) makes pollinator monitoring binding, with a science-based method set by Commission Delegated Regulation (EU) 2025/2188.

**5. The "pointer/identifier" model lets NDOP link to genetics without becoming a sequence repository.** GBIF's *Publishing DNA-derived data* guidance and the DarwinCore **DNA-derived data extension** (built on MIxS + GGBN standards) let occurrence records carry sequence identifiers — BOLD BINs, ENA/INSDC accessions — while the sequences themselves live in INSDC/ENA and BOLD. GBIF's backbone taxonomy already indexes BOLD BINs and UNITE Species Hypotheses. Switzerland's SwissBOL explicitly aims to "ensure unambiguous links between … occurrences; specimens in collection; stored genetic material." This is a direct, low-cost template for NDOP: store sample IDs and accessions, link out, don't host.

**6. Czechia has the research infrastructure; what is missing is the agency-side interface.** ELIXIR CZ (national node for biological data; compute via CESNET/e-INFRA CZ; members incl. Biology Centre CAS, University of South Bohemia in České Budějovice, Masaryk University) provides bioinformatics, storage and data-stewardship tools (e.g. Data Stewardship Wizard, Life Science AAI). BC AV ČR's Institute of Entomology (České Budějovice) has DNA sequencing core facilities and deep taxonomic capacity. The gap is not scientific capacity but a durable structural interface: no NCA post for genome information, few colleagues with genetics background, no genetic-data infrastructure.

## Details

### The scope, disaggregated (very different cost/maturity/use profiles)

| Strand | Maturity | Who pays / builds | NCA's realistic role | Relative cost to NCA |
|---|---|---|---|---|
| Reference genomes (ERGA/BGE+/EBP) | Scaling up; decentralised | EU/Horizon, research institutes | Contribute samples/vouchers; name priority species; free-ride on outputs | Very low |
| DNA barcode reference libraries (iBOL/BOLD; GBOL model) | Partial for Central-EU insects; big dark-taxa gaps | iBOL Europe/BGE+; national initiatives | Co-fund completion for Czech fauna; use libraries to ID ABMS/Malaise bycatch | Low → medium |
| Population genetic-diversity monitoring (Ne 500 / PM indicators) | Indicators ready; reporting mandatory | Agencies + research (GINAMO model) | Report indicators from existing data; commission sentinel-species monitoring | Low (indicators) → high (DNA time series) |
| eDNA & metabarcoding | Operational in NO/SE; standardising via MetaBug | Agencies + labs | Operational pipeline for ABMS/Malaise; aquatic eDNA | Medium → high |

### Comparators — what other European agencies actually do

- **Sweden (Naturvårdsverket/SEPA + SwAM; Stockholm University/Laikre group, Gothenburg/Johannesson, SLU, Uppsala).** SEPA commissioned the roadmap (Report 6959, "Mapping and monitoring genetic diversity in Sweden," Posledovich, Ekblom & Laikre 2021, by government decision). SEPA prioritised species and initiated work on several; the Swedish Agency for Marine and Water Management (SwAM) ran a science–management collaboration to develop a pilot programme using three DNA-based indicators — ΔH (within-population diversity), ΔF_ST (between-population differentiation) and Ne (effective population size). Species with ongoing or piloted genetic monitoring include brown trout, arctic fox, wolf, wolverine and brown bear (terrestrial/freshwater); the aquatic pilot added herring and cod; moose was recently added by SEPA. **Governance lesson**: the long-running brown-trout series remained precarious because it was grant-funded, not programme-funded. Status is best described as a pilot/scaling-up phase led by Stockholm University's group, not yet a permanently funded national programme.
- **Norway (Miljødirektoratet; NINA/NINAGEN; NIBIO Svanhovd; Rovdata).** NINAGEN — Centre for Biodiversity Genetics (opened in Trondheim in 2022, inaugurated by a State Secretary from the Ministry of Climate and Environment) is a national DNA-monitoring service centre. Operational species-level DNA monitoring covers brown bear (annual noninvasive genetic monitoring for ~15 years), wolverine (national programme since 2001), wolf, golden eagle; plus salmonid genetic integrity (wild vs farmed salmon) and Arctic fox. Data live in the shared Norway–Sweden **Rovbase** database; the NIBIO Svanhovd biobank holds more than 16,000 samples from more than 3,500 bears. **Durability** rests on Rovdata being a permanent unit under NINA, recurring Miljødirektoratet funding, and a bilateral SEPA–NEA (Naturvårdsverket–Miljødirektoratet) expert working group with harmonised microsatellite/SNP markers, in place since 2013.
- **Switzerland (FOEN/BAFU; InfoSpecies; SwissBOL; BDM).** FOEN funds SwissBOL and the long-term Biodiversity Monitoring Switzerland (BDM) programme. SwissBOL's butterfly project (launched 2013) produced a national DNA barcode reference library of 868 sequences representing 217 of 224 resident species (96.9% of Swiss fauna; Litman et al., *PLOS ONE* 2018). FOEN also financially and logistically supported a nationwide Orthoptera genetic-diversity assessment of 645 specimens covering all 105 Swiss species, sampled during the 2018–2022 Red List update (*Molecular Ecology* 2025). InfoSpecies is the umbrella federating national data/information centres — a model for coordinating dispersed taxonomic expertise. SwissBOL explicitly links occurrences ↔ specimens ↔ stored genetic material.
- **Germany (BfN; GBOL).** GBOL I–III (BMBF/research-ministry funded, led by ZFMK Bonn) built the reference library; GBOL III "Dark Taxa" tackles Diptera/parasitoid Hymenoptera and trains a new generation of taxonomists. BfN is the Nagoya/ABS competent authority. Note: GBOL is research-ministry funded, not conservation-agency funded — a caution about who owns durability.
- **EU-level structures NCA can plug into.** Biodiversa+ (NCA is a partner via the ABMS pilot 2024–2025 — ~200 sensors, 70 sites, 12 Member States — and a co-led hub proposal). GINAMO (genetic indicators). EuropaBON → the proposed **EBOCC** (European Biodiversity Observation Coordination Centre), a permanent infrastructure "based on national biodiversity monitoring hubs"; its roadmap identifies 84 EBVs including genetic-composition EBVs, and the European Parliament has approved a preparatory action to begin implementation. COST Action **GENOA** (Genetic Nature Observation and Action, 2024–2028, 34+ countries) is a free knowledge hub tightly linked to GINAMO and G-BiKE.

### Policy drivers creating the mandate
- **KMGBF Goal A / Target 4**: Czechia (a CBD Party) must report the Ne 500 indicator (headline, mandatory) and is encouraged to report PM; 7th National Reports were due early 2026, next global stocktake 2029.
- **EU Nature Restoration Regulation (2024/1991)**: binding pollinator-diversity monitoring; national restoration plans due 2026; monitoring method via Delegated Regulation (EU) 2025/2188.
- **Habitats Directive Article 17**: 6-yearly conservation-status reporting. Genetics is **not** a formal Article 17 parameter (range, population, habitat of species, future prospects) but guidance recognises the "Importance of Genetics in the Interpretation of Favourable Conservation Status" — a hook, not an obligation.
- **Czech NBSAP**: the new Strategie ochrany biologické rozmanitosti ČR 2026–2050 + Action Plan 2026–2030 stresses systematic, coordinated, long-term cross-sector cooperation — the domestic policy peg for a durable research–practice interface.

### Governance and ABS
- **EU ABS Regulation 511/2014** (implementing the Nagoya Protocol) applies in Czechia. Utilisation of genetic resources triggers due-diligence obligations; recipients of research funding submit due-diligence declarations. Registered collections (Art. 5) reduce user compliance risk. Non-commercial research is in scope; penalties in some Member States are severe (in Germany, personal fines of ≥€50,000 per violation). NCA should require ABS/permit-compliance clauses in all sampling contracts.
- **Sensitive-species localities**: Article 17 and GBIF both operate "public versions without sensitive species." NDOP's identifier-linking must preserve locality-masking for protected insects while still allowing FAIR sequence linkage.

## Recommendations (staged)

### LOW resource — no new money, no new posts
1. **Rewrite contract/grant conditions** so all commissioned genetic/genomic work must: deposit sequences in INSDC/ENA and barcodes in BOLD; archive vouchers in a named museum (National Museum Prague / BC AV ČR); return standard identifiers (BINs, accessions) to NCA; publish under FAIR/open terms with ABS compliance. *This single step converts one-off reports into cumulative assets.*
2. **Add identifier fields / links to NDOP** (sample ID, BOLD process ID, ENA accession) using the GBIF DNA-derived data extension model — link out, do not host sequences. Preserve sensitive-locality masking.
3. **Name a part-time internal focal point** ("boundary spanner") for genome information and Biodiversa+ genetics liaison.
4. **Join existing networks as observer/user**: GINAMO stakeholder process, GENOA COST Action, iBOL Europe/BGE+ national contacts, and the EBOCC preparatory action.
5. **Report the Ne 500 / PM indicators now** from existing Red List and occurrence data (the indicators need no DNA), for KMGBF and NBSAP — collaborating with BC AV ČR / Charles University.
6. **Use existing barcode libraries** (BOLD, the Czech butterfly library, GBOL) to identify ABMS/Malaise bycatch; sign MoUs with BC AV ČR and museums.
7. **Embed genetic requirements in species action plans and tenders** for saproxylic beetles, butterflies and dragonflies.

*Threshold to escalate:* once ≥1 reporting cycle shows the identifier/deposit rules working and indicator reporting is routine, move to MEDIUM.

### MEDIUM resource
8. **Fund one dedicated post** (conservation-genomics/data officer) plus a small standing NCA–BC AV ČR–museums working group (model: the SEPA–NEA carnivore working group).
9. **A long-term framework contract** with BC AV ČR replacing project-by-project commissioning (model: durable programme funding vs grants).
10. **Co-fund completion of a Czech insect barcode reference library** for priority groups (pollinators, saproxylic beetles, dragonflies) via iBOL Europe/BGE+.
11. **Stand up an operational metabarcoding pipeline** for ABMS/Malaise streams using ELIXIR CZ compute and published open pipelines; publish to GBIF with explicit error caveats (Norway model).
12. **Establish a voucher/tissue-archive arrangement** with the National Museum / BC AV ČR (as an ABS-registered collection).

*Threshold to escalate:* if ABMS scales nationally and NRR/pollinator obligations bite, move to HIGH.

### HIGH resource — long-term ambition
13. **A small conservation-genomics unit** or a co-funded joint laboratory with BC AV ČR, with a secured programme funding line (not grants).
14. **A national insect genetic-monitoring scheme** with defined sentinel species (e.g. a saproxylic beetle, a threatened butterfly, a dragonfly), repeat sampling, and Ne/ΔH/ΔF_ST indicators (Swedish model).
15. **A national biobank / tissue / DNA archive** with a legal mandate (NINAGEN / NIBIO Svanhovd model).
16. **A Czech node of the EBOCC** national-hub architecture, integrating NDOP, ELIXIR CZ and monitoring streams.

## Roadmap to a 2027 Pilot — a national insect genetic sampling scheme built on existing monitoring

### The design principle: NCA contributes samples and coordination, not laboratories

The pilot is deliberately built around what NCA actually is: a network of tens of field experts, a national coordination function, and a set of long-running mapping and monitoring programmes feeding NDOP. NCA will **not** analyse, will **not** lead lab or bioinformatics standardisation, and will **not** be a permanent vault. It will instead assemble the one asset no Czech laboratory can assemble alone — **a nationally representative, protocol-consistent, precisely georeferenced 2027 baseline sample series with clean metadata and clean permits** — and use that asset as its entry ticket into partner-led proposals.

Two arguments follow from this framing, and they are the core of the pitch:

- **A 2027 baseline cannot be collected in 2032.** Sampling is the only step that is irreversible in time. Analysis can wait for money; the T₀ time point cannot. Even in a zero-funding scenario, banked samples with FAIR metadata are a real, appreciating asset (the Svanhovd biobank logic).
- **Whoever owns the samples writes the conditions.** Every material transfer agreement can require deposition in INSDC/ENA and BOLD, return of BINs and accessions to NDOP, and voucher archiving. Sample ownership is how the LOW-resource recommendation #1 becomes enforceable in practice rather than aspirational.

### Two tracks, one field season

| | **Track A — action-plan species** | **Track B — widespread species** |
|---|---|---|
| Sampling logic | Opportunistic, exhaustive within known populations | Stratified, design-based |
| Piggybacks on | ZP/RAP monitoring visits, N2K species monitoring | Grid mapping, transects, ABMS/Malaise stations, future EU-PoMS |
| Question answered | Are the last populations genetically depleted or isolated? Do reinforcements/translocations make sense, and from where? | Is genetic diversity in common insects tracking landscape fragmentation and climate gradients? What is the national baseline? |
| Policy hook | ZP/RAP revision, Koncepce 2023–2032 prioritisation, Red List, ZCHD list revision | KMGBF Target 4 (Ne 500 / PM), NRR pollinator obligations, Article 17 interpretation |
| Field cost | Near zero — experts are already at these sites | Low — sites are already visited |

### Track A: species that already have a rescue programme or a regional action plan

Czech active species-protection instruments already concentrate on insects, and almost entirely on butterflies. That is a gift: **one taxonomic group means one sampling protocol, one preservation protocol, one reference library, one lab pipeline.**

*Adopted rescue programmes (ZP):* **bourovec trnkový** *Eriogaster catax*, **hnědásek osikový** *Euphydryas maturna*, **krasec dubový** *Eurythyrea quercus* (the only beetle, and the only saproxylic case).
*ZP in preparation:* **okáč jílkový** *Lopinga achine* (two areas left), **okáč skalní** *Chazara briseis*.
*Regional action plans (RAP):* **hnědásek chrastavcový** *Euphydryas aurinia* (Karlovarský kraj), **jasoň červenooký** *Parnassius apollo* (Bílé Karpaty / Štramberk), **modrásek černoskvrnný** *Phengaris arion* (východní Čechy), **modrásek komonicový** *Polyommatus dorylas* (Bílé Karpaty), **modrásek ligrusový** *Polyommatus damon* (České středohoří), **okáč menší** *Erebia sudetica* (Jeseníky), **okáč metlicový** *Hipparchia semele* (Český kras), **okáč skalní** *Chazara briseis* (České středohoří).

Suggested pilot shortlist of 4–5, chosen so that each one answers a different management question rather than simply being rare:

1. ***Parnassius apollo*** — a single reintroduced population from a Slovak source. Founder effect, inbreeding and source-population choice are live management questions; the genetic answer directly shapes the RAP.
2. ***Phengaris arion*** — connected metapopulation systems in Beskydy versus isolated remnants elsewhere: a natural contrast for testing whether isolation is already visible genetically.
3. ***Euphydryas aurinia*** — a single-region survivor with continuing losses of small populations; also an Annex II species, so results feed Article 17 interpretation.
4. ***Erebia sudetica*** — nominotypical subspecies, one mountain range, an adjacent population already extinct: the strongest case for defining a conservation unit.
5. ***Eurythyrea quercus*** — the saproxylic outlier; hardest to sample, but the only chance to test whether the same scheme works outside Lepidoptera before it is scaled.

Sampling here is exhaustive rather than designed: every known occupied locality, target 15–30 individuals per population where the population can bear it, non-lethal wing or leg sampling for all critically endangered taxa, and a documented floor below which no sampling occurs. Where populations are too small, the pilot samples **larvae or wing-clips of a subsample only**, and records the shortfall rather than pretending to a target.

### Track B: widespread species — how the stratification actually works

The instinct is to design a new spatial frame. Do not. **Inherit the frames NCA already reports on**, so that the sample series is analysable within the geometry the results must eventually feed.

**Stratification axes (Stage 1 — which cells).** Use the existing mapping grid (KFME faunistic quadrats, or the 10 × 10 km EEA reference grid where alignment with EU reporting matters) and cross-classify it by three axes:

| Axis | Classes | Source layer | Why this axis |
|---|---|---|---|
| Biogeographical region | Continental / Pannonian | Article 17 reporting units | Results land directly in the reporting geometry |
| Elevation–climate band | < 400 m / 400–700 m / > 700 m | DMR + climate normals | The gradient along which diversity loss under warming is expected |
| Habitat availability within 5 km | high / medium / low tercile | VMB + Consolidated Layer of Ecosystems | The fragmentation gradient that actually drives Nₑ and F_ST |

That is nominally 18 strata; roughly 12 are occupied in Czechia (there is no Pannonian high-elevation stratum). Allocate **2 cells per occupied stratum → ~24 cells**, which yields 15–20 usable sites per species once actual occurrence is taken into account. Protection status (inside vs outside Natura 2000 / ZCHÚ) is handled **not as a fourth axis but as a balanced covariate**: aim for roughly half the sites inside protected areas, which answers "does the protected-area network conserve genetic diversity?" at no extra design cost.

**Site selection (Stage 2 — which point in the cell).** Within a selected cell, the site is, in priority order: an existing ABMS station → an existing butterfly/pollinator transect or future EU-PoMS site → an N2K species monitoring plot → an expert-chosen occupied locality. This is honestly a **stratified design with expert-chosen sites**: the strata are objective and reproducible, the point within the stratum is not. That bias toward well-occupied habitat is acceptable for a baseline provided it is documented and — critically — provided **the same fixed coordinates are resampled at T₁**.

**Species shortlist for Track B.** Choose by contrasting dispersal ability, not by charisma: the whole point is that the same landscape should produce different genetic signals in a strong flier and a flightless walker. If the design cannot detect that contrast, it will not detect anything.

- ***Maniola jurtina*** (okáč luční) — ubiquitous grassland butterfly, high dispersal, already on transects, well-resourced genomically.
- A common ***Bombus*** species (e.g. *B. lapidarius* or *B. pascuorum*) — the pollinator-policy hook into NRR / EU-PoMS, non-lethal tarsal clipping with release, good comparative literature on Nₑ.
- A flightless ***Carabus*** (e.g. *C. violaceus*) — the low-dispersal contrast, obtainable as pitfall bycatch from work already happening.
- Optional aquatic: ***Calopteryx splendens*** — dendritic river connectivity, non-lethal leg sampling, and a natural bridge to BiodivPond.

**Sample sizes and what they can and cannot deliver.** 20–30 individuals per site per species supports within-population diversity (H_e, allelic richness) and among-population differentiation (F_ST) with reduced-representation SNPs. It does **not** reliably support per-site LD-based Nₑ, which wants ≥ 50 individuals and dense markers. So the honest statement to the workshop is: the pilot delivers a **ΔH/ΔF_ST baseline plus census-based Ne 500 / PM reporting** (which needs no DNA at all and can start immediately from NDOP and Red List data), with **genetic Nₑ as a stretch goal at 2–3 deliberately over-sampled sites**. A nested sub-design — two sites 1–5 km apart in three or four cells — adds fine-scale structure for the low-dispersal species at trivial cost.

Total order of magnitude: roughly **1,200–1,500 tubes for Track B** (3–4 species × ~18 sites × 20–25 individuals) and **800–1,500 for Track A**. Call it **~2,500–3,000 individually labelled samples** — the number to put in front of any prospective analysis partner.

### What NCA must actually produce: the protocol set

Eight short SOPs, drafted once in 2026 and reused indefinitely. This is the standardisation NCA *can* lead, because it is field standardisation, not lab standardisation.

1. **Sampling design & site register** — strata, fixed site coordinates, permanent site IDs, resampling rules for T₁.
2. **Non-lethal tissue sampling** — butterflies: one mid-leg or hind-leg tarsus, or a standard wing clip for the rarest taxa; bumblebees: mid-leg tarsal clip and release; carabids: one tarsus, or whole specimens from pitfall bycatch; odonates: one leg. Photograph every non-lethally sampled individual as a digital voucher.
3. **Preservation** — one individual per 2 ml screw-cap tube with O-ring, ≥ 96 % molecular-grade (non-denatured) ethanol; ethanol exchanged within 24–48 h for whole specimens; silica-gel desiccation as the cheap barcode-only fallback; never formalin.
4. **Labelling & metadata** — sample IDs generated centrally and pre-printed as DataMatrix labels before the season. One tube = one NDOP occurrence record. Fields follow the GBIF DNA-derived data extension (`materialSampleID`, and later `associatedSequences`, BIN, ENA accession).
5. **Cold chain & interim storage** — field cool box → regional office freezer at −20 °C within a defined window; annual inventory reconciliation; a hard five-year clock after which samples must move to the partner collection.
6. **Permits & ABS** — derogation permits under §56 of Act 114/1992 for specially protected species, landowner and site-manager consent, Nagoya due-diligence documentation from the first day of collection (retrofitting provenance is not possible).
7. **Chain of custody & transfer** — a standard MTA that requires the analysing lab to deposit sequences in ENA/BOLD, return identifiers to NCA, and archive vouchers in a named ABS-registered collection.
8. **Field QC** — forceps sterilised between individuals, negative field controls, minimum-metadata completeness check before a batch is accepted into storage.

Training: one day, delivered regionally plus online, in early 2027 to ~30–40 field experts, with a dry-run batch collected in autumn 2026 to break the protocol before it matters.

### Analysis and archiving: what has to be negotiated, not built

Three named gaps, three named counterparties:

- **Analysis** — Biology Centre CAS (Institute of Entomology, České Budějovice) as the primary candidate; Charles University and Masaryk University/CEITEC as alternatives or co-partners; ELIXIR CZ for compute, data stewardship and Life Science AAI. NCA's contribution is the sample series, the coordination and the permits, offered as in-kind co-funding in a **partner-led** proposal.
- **Long-term archiving** — National Museum Prague and/or BC AV ČR as an ABS-registered collection under Art. 5 of Regulation 511/2014, secured by MoU **before** the first sample is taken, with a defined transfer point at ≤ 5 years.
- **Method alignment** — GINAMO for the indicator methodology, GENOA (COST) for training and short-term missions, iBOL Europe / BGE+ for barcode-library completion, MetaBug for Malaise/metabarcoding alignment. These are free or near-free to join and give the pilot external methodological legitimacy it cannot generate internally.

Funding is genuinely uncertain, so the pilot is scoped in three tiers that degrade gracefully rather than fail:

| Tier | Trigger | What happens | NCA cost |
|---|---|---|---|
| **0 — Bank only** | No external funding | Full sampling, full metadata, archive only. Ne 500 / PM reported from census data. | Kits, freezers, coordination, training |
| **1 — Barcode** | Small in-kind or BGE+/iBOL slot | DNA barcoding of a subset; BINs returned to NDOP; identifier plumbing tested end to end | Tier 0 + modest lab contribution |
| **2 — Population genomics** | Partner-led grant succeeds | ddRAD or target capture for Track B species and priority ZP/RAP taxa; ΔH/F_ST baseline; Nₑ at oversampled sites | Tier 0 + in-kind samples/coordination |

Candidate funding routes to name explicitly: TA ČR Prostředí pro život, GA ČR (for the academic partner), the next Biodiversa+ call, LIFE, Norway Grants/EEA, MŽP departmental research, and association with BGE+.

### From a pilot to a system: designing the uptake before the results exist

The failure mode is not a bad pilot; it is a good pilot whose results arrive as a PDF nobody is obliged to act on. Four mechanisms, all of which must be agreed in 2026, before any data exist:

1. **Pre-agreed decision rules.** Write into each ZP/RAP, in advance, what a given result changes — for example: evidence of isolation triggers a connectivity measure in the action plan; evidence of severe depletion triggers a formal assessment of genetic reinforcement and a defined source population; a distinct conservation unit triggers separate management. Without pre-registered triggers, results become interesting rather than binding.
2. **A "genetic annex" template** inserted into the standard ZP/RAP structure and into monitoring tenders, so every new action plan from 2027 onward arrives with sampling, deposition and identifier obligations already in it. This is what makes the scheme reproduce itself without a new post.
3. **Fixed reporting hooks.** Ne 500 / PM to CBD; interpretive genetic text in the 2031 Article 17 cycle; input to Red List and to the ZCHD list revision; a named task in the NBSAP Action Plan 2026–2030. Each hook creates a recurring reason to recompute, and therefore a recurring reason to resample.
4. **Standing governance.** A named part-time focal point plus an NCA–BC AV ČR–museum working group meeting twice a year (the SEPA–NEA carnivore working group model), owning the site register, the SOPs and the MTA template.

And the systemic step that costs almost nothing: **T₁ is scheduled now.** Resampling of the same fixed sites in 2032–2033 goes into the pilot document as a commitment, not an aspiration. Note honestly that five annual generations detect drift reliably only in small populations; large populations will need a longer interval, so the site register should carry species-specific resampling intervals from the outset.

### Timeline

| Period | Milestone |
|---|---|
| 2026 Q1–Q2 | Design workshop; species shortlist fixed; stratification computed in GIS; site register drafted; analysis partner and archiving collection identified |
| 2026 Q2–Q3 | MoU with archiving collection; MTA template; SOPs 1–8 drafted and reviewed; NDOP identifier fields specified; NCA written into partner proposals |
| 2026 Q3 | Kit procurement (tubes, ethanol, pre-printed DataMatrix labels, freezers); permit applications submitted |
| 2026 Q4 | Training of ~30–40 field experts; autumn dry-run batch; protocol revision |
| 2027 Apr–Sep | **Pilot field season.** Track A during ZP/RAP and N2K monitoring visits; Track B during grid mapping, transects and ABMS servicing |
| 2027 Q4 | Inventory, QC, metadata reconciliation; subset released for barcoding; first sample-series report |
| 2028 | Analysis, funding-dependent (Tier 1 or 2); identifiers written back to NDOP; results published to GBIF with error caveats |
| 2028–2029 | Ne 500 / PM reporting; genetic annex adopted in ZP/RAP template; decision rules triggered where thresholds met |
| 2032–2033 | **T₁ resampling** at fixed sites → first genuine ΔH / ΔF_ST time series |

### Risks and how the design absorbs them

| Risk | Mitigation built into the design |
|---|---|
| No analysis funding materialises | Tier 0 still produces the irreplaceable T₀ archive; nothing is wasted |
| Permits delay the season | Applications submitted in 2026 Q3; Track B species are largely unprotected and can proceed regardless |
| Sampling harms tiny populations | Non-lethal protocols; documented minimum-population floor; sample-size shortfalls recorded, not hidden |
| Field-expert workload resistance | Sampling is bolted onto visits that already happen; kits pre-labelled; ≤ 15 minutes per site |
| Samples degrade in five years of −20 °C storage | Ethanol exchange protocol; annual inventory; hard transfer deadline to the partner collection |
| Partner dependency / staff turnover | MTA obligations plus MoU with the collection outlive individuals; site register held by NCA |
| Results never used | Decision rules and reporting hooks agreed before data exist |

### Decisions needed from this workshop

1. Track A shortlist: which 4–5 of the 13 ZP/RAP insect taxa, and on what criterion — rarity, or the presence of a real management question the genetics could settle?
2. Track B shortlist: is the dispersal-contrast logic (strong flier / pollinator / flightless / aquatic) the right selection principle, and which exact species?
3. Is the three-axis stratification (biogeographical region × elevation × habitat availability, with protection status balanced as a covariate) sufficient, or is a fourth axis worth the extra sites?
4. Who signs first — the analysing partner or the archiving collection? (The archive is the harder constraint and the cheaper commitment.)
5. Does NCA accept the "Tier 0 is still a success" framing, i.e. will the 2027 season proceed even if no analysis funding is secured?

## The metadata problem — one insect, eight identifiers, and who binds them together

### The problem stated precisely

The obstacle is not that sequence data and occurrence data live in different places. That is normal and correct: INSDC/ENA and BOLD are built for sequences, GBIF and NDOP are built for occurrences, museums are built for physical objects. The obstacle is that **a single Czech insect acquires a series of identifiers, minted at different moments by different actors, and nothing in the default workflow obliges anyone to bind them.**

| Stage | Identifier | Minted by | Typically carries coordinates? |
|---|---|---|---|
| Field observation | NDOP record ID | NCA / the recorder | Yes, full precision |
| Tube in the field | sample ID (if one exists at all) | whoever is holding the forceps | — |
| Voucher deposition | museum catalogue number | collection | Sometimes |
| Barcoding | BOLD Sample ID → Process ID → BIN | the lab | Often coarse or absent |
| Sequencing submission | BioSample accession (SAMEA…) | ENA/EBI, usually via a broker | Depends on the checklist used |
| Raw data & assembly | ENA run / experiment / assembly accessions | the lab | No |
| Publication to GBIF | occurrenceID / gbifID | the publishing institution | Yes, possibly generalised |
| Digital specimen | DiSSCo Digital Specimen DOI | the collection (emerging) | Inherited from the CMS |

Four consequences follow, and they are worth naming separately because they have different fixes:

1. **Loss of the "where and when."** Sequences deposited in the nucleotide archives routinely arrive without usable coordinates or dates, so they cannot answer the questions conservation actually asks. This is the specific gap the biodiversity platforms were extended to close.
2. **Conceptual mismatch between the two standards families.** Darwin Core (biodiversity) and GSC MIxS (genomics) do not carve up the world identically: the 2024 BGE standards hackathon found subtle but consequential differences in how a sampling event, a specimen and a derived sample are each conceptualised. Alignment is negotiated, not automatic.
3. **Taxonomy does not reconcile itself.** ENA taxonomy, the GBIF backbone and the Czech national checklist behind NDOP are three different name authorities. For dark taxa there may be a BIN and no Linnean name at all — which is a feature (occurrences of undescribed species become storable and later retro-linkable when a name arrives), but only if the placeholder identifier is carried through.
4. **The retrofit is unaffordable.** Binding identifiers costs almost nothing at the moment of collection and becomes manual detective work afterwards. This is the single strongest argument for settling the metadata question **before** the 2027 field season rather than after it.

### The linking efforts already exist — NCA does not need to invent any of this

This is the encouraging half of the slide. The infrastructure question has been actively worked on for five years, mostly inside the same projects NCA is already adjacent to.

| Layer | What it does | Why it matters to NCA |
|---|---|---|
| **GBIF DNA-derived data extension** (DwC extension incorporating MIxS, with additions from GGBN and MIQE), supported by the guide *Publishing DNA-derived data through biodiversity data platforms* | Lets an occurrence record carry sequence metadata and identifiers; joined via `occurrenceID` and/or `eventID`; usable with Occurrence core or with Event core plus Occurrence extension | The exact mechanism by which NDOP records can point at sequences without hosting them |
| **TDWG Genomic Biodiversity Working Group + GSC**, DwC–MIxS interoperability task group | Semantic mapping between the two vocabularies and harmonised identifier use | Means NCA can adopt a field schema that will still be valid in five years |
| **COPO** (Collaborative OPen Omics), the metadata broker used by ERGA | Validates a submitted sample manifest against the ERGA checklist, then brokers mandatory fields to **BioSamples**, giving every sample a permanent unique identifier that automatically links to the sequence data later deposited in ENA. It also accepts permit documentation as part of the submission flow | This is a working, free, agency-usable answer to "who binds the identifiers" — and it handles the ABS paperwork in the same motion |
| **ERGA sample manifest** (SOP, currently v2.5.x) | A published, field-by-field specification of what must be recorded per specimen, based on the GSC MIxS-derived DToL/ENA checklist | Ready-made schema for NCA's 2027 field form — adopt it wholesale rather than designing one |
| **ERGA Genome Tracking Console** | Central coordination hub functioning like a LIMS across sample metadata, BioSamples, ENA and the ERGA data portal | The model for how a national coordinator tracks samples it does not itself analyse |
| **European BOLD instance** (established under BGE) | Barcode processing plus repository, with validation, QC and exchange with GBIF, UNITE and ENA | The route by which a Czech barcode becomes a GBIF-visible occurrence |
| **DiSSCo** — openDS specification, Digital Specimen DOIs; **BGE Task 8.3** (DiSSCo–BOLD linkage with EMBL-EBI); **BiCIKL** | Bi-directional linkage between voucher specimens and sequence data, specimens as FAIR Digital Objects with DOIs, linking out to ENA, GBIF and others | This is what makes the physical voucher in Prague addressable from the sequence record — the missing half of the chain |
| **WorkflowHub / RO-Crate** provenance packaging used by BGE/ERGA | Records which pipeline version produced which result | Relevant once metabarcoding of ABMS material starts producing occurrences |

The direction of travel is explicit: biodiversity genomics is converging from separately-evolved barcoding and genome-sequencing workflows into a single digital ecosystem held together by transparent provenance, persistent identifiers and interoperable repositories.

### The uncomfortable Czech-specific gap

The pointer model assumes a national publishing pathway. Czechia does not currently have a strong one. **The country has been at observer status in GBIF since 2006**; only a handful of Czech institutions are registered as GBIF data publishers, and the largest Czech publisher is a university department, not a state agency. NDOP — by far the richest occurrence resource in the country — is not part of that flow.

That means the metadata question for NCA is not only technical. It is: *through which door do Czech genetic occurrence records reach the international layer at all?* Three options, and they are not mutually exclusive:

- **NCA becomes a GBIF data publisher itself** (endorsement is required; with no national node, GBIF can endorse directly), publishing a curated, sensitivity-filtered subset of NDOP with the DNA-derived data extension attached.
- **NCA publishes through a partner** that is already an endorsed publisher — fastest route, but the data then carry someone else's institutional identity.
- **NCA raises national GBIF participation with MŽP** as a systemic item — slower, but it is the step that makes everything downstream, including EBOCC national-hub alignment, structurally easier.

### The minimum viable identifier spine for the 2027 pilot

Concretely, six decisions that cost nothing but must be taken before the first tube is filled:

1. **Mint the sample ID in the field, centrally, in advance.** Pre-printed DataMatrix labels. One tube = one NDOP record = one `materialSampleID`. This single ID is the join key for everything that follows, and it is the one thing only NCA can create, because only NCA is standing in the field.
2. **Adopt the ERGA manifest field set as NCA's field-form schema** — including for samples that will never be sequenced. It is free, validated, checklist-backed, and it turns any future submission into a mapping exercise instead of a reconstruction.
3. **Add three columns to NDOP**: `materialSampleID`, sequence accession / `associatedSequences`, and BIN or BioSample identifier. Link out; host nothing.
4. **Make bidirectionality an MTA obligation.** The analysing lab must write NCA's sample ID into the BOLD record and into the BioSample as an external identifier, and return the resulting BINs and accessions. Without the reverse pointer, the link only works in one direction and breaks the moment anyone starts from the sequence.
5. **Settle the sensitivity policy before deposition, not after.** GBIF and Article 17 reporting both operate with generalised public versions, but BOLD and ENA are poor at locality masking. The workable rule: full precision retained in NDOP, deliberately generalised coordinates in whatever is deposited abroad, and the generalisation documented so users know it is deliberate rather than sloppy.
6. **Record permit and ABS provenance in the same record from day one.** COPO demonstrates that permit documentation can travel with the submission; provenance that is not captured at collection cannot be reconstructed later, and under Regulation 511/2014 its absence is a compliance problem, not just an inconvenience.

### Questions for the room

1. Is the identifier spine (field-minted sample ID → NDOP → BOLD/BioSample → ENA, with reverse pointers required contractually) the right minimal commitment, or is NCA expected to do more?
2. Should NCA pursue GBIF publisher status directly, publish through a partner, or push national participation upward to MŽP — and on what timescale?
3. Who mints the persistent identifier for a Czech insect voucher: the museum via a DiSSCo Digital Specimen DOI, NDOP, or BOLD? If nobody decides, all three will, differently.
4. Are we prepared to publish deliberately generalised coordinates internationally while retaining precision domestically — and who signs off on that policy?
5. Should adoption of the ERGA manifest schema simply become the default annex to every NCA sampling contract, alongside the deposition clause?

## Asks

**To the research community (BC AV ČR, Charles University, Masaryk/RECETOX, National Museum Prague, ELIXIR CZ):**
- Co-design a sentinel-species genetic-monitoring scheme and a shared metabarcoding pipeline; accept standard-identifier deposition and voucher archiving as default; host a joint/embedded post or co-funded PhD/postdoc.

**On data and identifiers (GBIF, DiSSCo, ERGA/BGE, ELIXIR CZ, MŽP):**
- Confirm a publishing route for Czech DNA-derived occurrence records; align NDOP with the DwC DNA-derived data extension; settle who mints the persistent identifier for a Czech insect voucher.

**To Biodiversa+/EU level:**
- Treat NCA's ABMS pilot as a genetics test-bed (link to MetaBug); include Czechia in the GINAMO co-creation process; make EBOCC national-hub support and BGE+ barcode-library completion available to lower-capacity Member States.

## Discussion questions to open the floor
1. If we could change only ONE contract clause tomorrow, is "mandatory deposition + standard identifiers + voucher archiving" the right first move — and who enforces it?
2. Which 3–5 insect sentinel species would give us the most policy-relevant, repeatable genetic signal for the least cost?
3. Should NDOP become the national "pointer" that links occurrences to BOLD/ENA — and what governance protects sensitive localities?
4. Framework contract with BC AV ČR vs. an in-house unit: which gives more durable capability for the same money?
5. What would make a Czech genetic-monitoring scheme survive the end of any single project — a funding line, a working group, a legal mandate, or all three?

## Caveats
- Sweden's national genetic-diversity programme is best described as a **pilot/scaling-up phase** (SwAM aquatic; SEPA terrestrial), not a permanently funded programme with a confirmed launch year/budget. Norway has operational species-level DNA monitoring and a service centre (NINAGEN) rather than a single branded genetic-diversity indicator programme.
- Genetics is **not** a formal Habitats Directive Article 17 parameter; its role is interpretive only.
- Specific Czech participation in ERGA/BGE/iBOL is confirmed at institute level (e.g. Institute of Microbiology CAS in ERGA; Czech species in the ERGA pilot) but a comprehensive list of Czech ERGA/iBOL partners and exact Czech insect barcode coverage was not fully verified — flagged as thin evidence.
- Some cited items (MetaBug, BiodivPond, EBOCC, BGE+) are **planned/emerging** (2026 launches; EBOCC a proposal advancing via a European Parliament preparatory action), not yet fully operational — treat as forward-looking.
- The **2027 pilot roadmap is a proposal for discussion, not an adopted plan**. The ZP/RAP species list is taken from AOPK ČR's published rescue-programme and regional-action-plan pages (status as of 2026) and should be re-verified against the Koncepce 2023–2032 annexes before use; the Track B species shortlist, stratum thresholds, sample sizes and cost tiers are illustrative starting values for expert review, not validated design parameters. Statistical power has not been formally computed — a power analysis for the chosen markers and species is itself a 2026 task.
- On the metadata section: the linking infrastructure described (COPO, BioSamples brokering, ERGA manifest versions, the European BOLD instance, DiSSCo Digital Specimen DOIs, BGE Task 8.3) is **actively evolving**; the GBIF DNA-derived data extension is itself flagged by GBIF as subject to change and recommended for early adopters who accept possible remapping. Czechia's GBIF status (national observer since 2006, few active publishers) should be re-verified with GBIF and MŽP before being asserted in a decision document.
- Recommendations at MEDIUM/HIGH are **reasoned proposals** modelled on observed practice elsewhere, not observed NCA practice.