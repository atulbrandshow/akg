# AKG University — Data Flow & Page Keys Reference

## 📌 How Data Comes From the Database

### Architecture Overview

```
Database (Backend API)
    ↓
API Endpoint:  https://akge-backend.onrender.com/api/slug?path=/<page-path>
    ↓
[...slug].js  (Catch-all route — getServerSideProps fetches data)
    ↓
data.data.ComponentType → Dynamically imports the matching component from /pages/main/<ComponentType>.js
    ↓
<Component data={data.data} />  → Page receives all data as `data` prop
```

### Step-by-Step Flow

1. **User visits** a URL like `/school-of-engineering-and-technology`
2. **`src/pages/[...slug].js`** catches the route via Next.js catch-all routing
3. **`getServerSideProps()`** runs server-side and calls:
   ```
   GET https://akge-backend.onrender.com/api/slug?path=/school-of-engineering-and-technology
   ```
4. The API returns a JSON response:
   ```json
   {
     "status": true,
     "data": {
       "ComponentType": "school-details",
       "pageData": { ... },
       "breadCrumb": [...],
       "faculties": [...],
       "studentReviews": [...],
       "testimonials": [...],
       "faq": [...]
     }
   }
   ```
5. **`ComponentType`** (e.g. `"school-details"`) is used to dynamically import the component:
   ```js
   const mod = await import(`./main/school-details`);
   ```
6. The component renders with `<Component data={data.data} />`
7. Inside each component, the **page-specific data** is accessed via:
   - `data?.pageData` — key-value pairs set in the admin panel
   - `data?.breadCrumb` — breadcrumb navigation
   - `data?.faculties` — faculty list
   - `data?.studentReviews` — student reviews
   - `data?.testimonials` — testimonials
   - `data?.faq` — FAQ items
   - `data?.stream` — stream identifier (for highlight banners)

### Config
- **API Base URL**: `src/configs/config.js` → `API_NODE_URL`
- **Image CDN**: `src/configs/config.js` → `IMAGE_PATH`
- **Home Data**: Also fetched via `AppDataContext.js` for the homepage (`path=/`)

### Admin Panel
- Pages are created/edited in `src/pages/admin/Components/`:
  - `CreateDynamicPages.js` — Create generic pages
  - `CreateDynamicDepartment.js` — Create department pages
  - `CreateDynamicProgram.js` — Create program pages
  - `CreateSchoolPages.js` — Create school pages
  - `EditDynamicPages.js` / `EditDepartmentPage.js` / `EditProgramPage.js` / `EditSchoolPage.js` — Edit pages
  - Each page gets a **ComponentType** assigned, which maps to the frontend component filename

---

## 📋 Page Component Keys Reference

### 1. `specialization-details.js`
**ComponentType**: `specialization-details`
**Data Source**: `data?.pageData || data`

| Key | Description | Section |
|-----|-------------|---------|
| `Hero-Title` | Page hero/header title | Header |
| `Overview-Title` | Overview section subtitle | Program Overview |
| `Overview-Des` | Overview description (HTML) | Program Overview |
| `Fee-Structure-Title` | Fee section subtitle | Fee Structure |
| `FNS_<Year>` | Fee for National Students (e.g. `FNS_1st_Year`, `FNS_2nd_Year`) | Fee Structure — National |
| `FFS_<Year>` | Fee for Foreign Students (e.g. `FFS_1st_Year`, `FFS_2nd_Year`) | Fee Structure — Foreign |
| `INS_<N>` | Indian/National Student eligibility criteria (e.g. `INS_1`, `INS_2`) | Eligibility — National |
| `IFS_<N>` | International/Foreign Student eligibility criteria (e.g. `IFS_1`, `IFS_2`) | Eligibility — Foreign |
| `HTA_Des` | How to Apply description (HTML) | How to Apply |
| `CP-Title` | Career Path title | Career Path |
| `CP-Des` | Career Path description (HTML) | Career Path |

---

### 2. `school-details.js`
**ComponentType**: `school-details`
**Data Source**: `data?.pageData || data?.pageDataOpened`

| Key | Description | Section |
|-----|-------------|---------|
| `Hero_Title` | Hero section title | Header |
| `Hero_Desc` | Hero section description | Header |
| `Overview_Title` | Overview section title | Overview |
| `Overview_Description_` | Overview description (HTML) | Overview |
| `Brochure_Pdf` | Brochure PDF path (appended to IMAGE_PATH) | Download Brochure |
| `Objective_Title` | Objective card title | Objective Card |
| `Objective_Desc` | Objective description (HTML) | Objective Card |
| `Highlight_Title` | Highlight card title | Highlight Card |
| `Highlight_Desc` | Highlight description (HTML) | Highlight Card |
| `ST_<N>` | Specialized Program title (e.g. `ST_1`, `ST_2` ... `ST_20`) | Specialized Programs |
| `SD_<N>` | Specialized Program description (e.g. `SD_1`, `SD_2` ... `SD_20`) | Specialized Programs |
| `Academic_Title` | Academics section title | Academics |
| `Academic_Desc` | Academics section description | Academics |
| `Academic_Banner` | Academic banner image path | Academics |
| `School_Title` | Schools tab button text | Academics Toggle |
| `Programme_Title` | Programmes tab button text | Academics Toggle |
| `School-Name-<N>` | School/Department name (e.g. `School-Name-1` ... `School-Name-10`) | Schools List |
| `School-Link-<N>` | School/Department link (e.g. `School-Link-1` ... `School-Link-10`) | Schools List |
| `Program-Title-<N>` | Programme type name (e.g. `Program-Title-1` ... `Program-Title-10`) | Programmes List |
| `<ProgramType>-<N>` | Course name under programme (e.g. `Graduate-1`, `Post-Graduate-1`) | Courses |
| `<ProgramType>-Link-<N>` | Course link (e.g. `Graduate-Link-1`, `Post-Graduate-Link-1`) | Courses |

**Additional data arrays from API**: `faculties`, `studentReviews`, `testimonials`, `faq`, `stream`

---

### 3. `department-details.js`
**ComponentType**: `department-details`
**Data Source**: `data?.pageData`

| Key | Description | Section |
|-----|-------------|---------|
| `Hero_Title` | Hero section title | Hero Banner |
| `Hero_Sub_Title` | Hero section subtitle | Hero Banner |
| `Hero_Image` | Hero images array (appended to IMAGE_PATH) | Hero Banner |
| `Overview_Title` | Department overview title | Overview |
| `Overview_Desc` | Department overview description (HTML) | Overview |
| `OVT-<N>` | Overview feature title (e.g. `OVT-1` ... `OVT-10`) | Overview Features |
| `Scope_Title` | Scope section title | Scope |
| `Scope_Desc` | Scope section description (HTML) | Scope |
| `ST-<N>` | Scope stat title (e.g. `ST-1` ... `ST-10`) | Scope Stats |
| `SD-<N>` | Scope stat description (e.g. `SD-1` ... `SD-10`) | Scope Stats |
| `Program_Title` | Program highlight title | Program Section |
| `Program_Sub_Title` | Program highlight subtitle | Program Section |
| `Program_Highlight_Title` | Yellow highlight text | Program Section |
| `Program_Highlight_Image` | Program highlight image path | Program Section |
| `PCT_1` | Program card 1 title | Program Cards |
| `PCD_1` | Program card 1 description (HTML) | Program Cards |
| `PCT_2` | Program card 2 title | Program Cards |
| `PCD_2` | Program card 2 description (HTML) | Program Cards |
| `PCT_3` | Program card 3 title | Program Cards |
| `PCD_3` | Program card 3 data (JSON array parsed from string) | Program Cards |
| `Admission_Title` | Admission/Eligibility title | Admission |
| `Admission_Description_` | Admission description (HTML) | Admission |
| `AET-<N>` | Admission eligibility tag (e.g. `AET-1`, `AET-2`, `AET-3`) | Admission |
| `AED-<N>` | Admission eligibility detail (e.g. `AED-1`, `AED-2`, `AED-3`) | Admission |
| `Apply_Image` | Sidebar apply image path | Sidebar |
| `Apply_Image_Title` | Sidebar image title | Sidebar |
| `Apply_Image_Name` | Sidebar image name | Sidebar |
| `Apply_Title` | CTA card title | Sidebar CTA |
| `Apply_Description_` | CTA card description | Sidebar CTA |
| `Placement_Title` | Placement section title | Placements |
| `Placement_Logo-<N>` | Placement company logo (e.g. `Placement_Logo-1` ... `Placement_Logo-10`) | Placements |
| `Placement_Count-<N>` | Placement LPA count (e.g. `Placement_Count-1` ... `Placement_Count-10`) | Placements |
| `Placement_Banner` | Placement highlight banner image | Placement Highlight |
| `Placement_Company_Logo` | Placement featured company logo | Placement Highlight |
| `Placement_Student_Name` | Featured student name | Placement Highlight |
| `Placement_Company_Name` | Featured company name | Placement Highlight |
| `Placement_Hightlight_Title` | Placement highlight section title | Placement Highlight |
| `Placement_Highlight_Desc` | Placement highlight description | Placement Highlight |
| `PDT-<N>` | Placement data title/value (e.g. `PDT-1` ... `PDT-10`) | Placement Stats |
| `PDD-<N>` | Placement data description (e.g. `PDD-1` ... `PDD-10`) | Placement Stats |
| `Career_Title` | Career section title (HTML) | Career |
| `Career_Short_Desc` | Career section subtitle | Career |
| `Career_Description` | Career section description | Career |
| `Career_Title-2` | Recruiters section title | Career |
| `Career_Short_Desc-2` | Recruiters section description | Career |
| `Career_Company-<N>` | Recruiter company name (e.g. `Career_Company-1` ... `Career_Company-10`) | Career |
| `Credit_Program_Title` | Credit program title (HTML) | Credit Program |
| `Credit_Program_Desc` | Credit program description (HTML) | Credit Program |
| `Credit_highlight_Title` | Credit features title | Credit Program |
| `Credit_list-<N>` | Credit feature item (e.g. `Credit_list-1` ... `Credit_list-10`) | Credit Program |
| `International_TieUps_Title` | International tieups title | Industry Partners |
| `International_TieUps_Desc` | International tieups description | Industry Partners |
| `Industry_Logos` | Array of industry logo paths | Industry Partners |
| `Industry_Bottom_Description` | Bottom description for industry section | Industry Partners |
| `Review_Title_` | Student reviews section title | Reviews |
| `HD-<N>` | Slide description (e.g. `HD-1` ... `HD-10`) | Highlights Slider |
| `HT-<N>` | Slide title (e.g. `HT-1` ... `HT-10`) | Highlights Slider |
| `H_Image-<N>` | Slide image path (e.g. `H_Image-1` ... `H_Image-10`) | Highlights Slider |
| `Application_Title` | How to apply section title | How to Apply |
| `Application_Short_Desc` | How to apply subtitle | How to Apply |
| `AS-<N>` | Application step title (e.g. `AS-1`, `AS-2`, `AS-3`) | How to Apply Steps |
| `Application_Desc_Step-<N>` | Application step description | How to Apply Steps |
| `Application_Title-2` | Apply CTA title | How to Apply CTA |
| `Application_Desc-2` | Apply CTA description | How to Apply CTA |
| `AT-<N>` | Application stat title (e.g. `AT-1`, `AT-2`) | How to Apply Stats |
| `AD-<N>` | Application stat description (e.g. `AD-1`, `AD-2`) | How to Apply Stats |

**Additional data arrays from API**: `studentReviews`, `faq`

---

### 4. `skill-foundation-details.js`
**ComponentType**: `skill-foundation-details`
**Data Source**: Hardcoded `kukaData` object (NOT from database)

> ⚠️ This page currently uses **hardcoded static data** defined directly in the component file. It does NOT use `data?.pageData` from the API.

---

### 5. `DefaultPage.js`
**ComponentType**: Various (default page template)
**Data Source**: `data` prop directly

| Key | Description | Section |
|-----|-------------|---------|
| `name` | Page title | Header |
| `banner_img` | Banner image URL | Header |
| `shortdesc` | Short description | Header |
| `breadCrumb` | Breadcrumb navigation data | Breadcrumb |
| `description` | Page description (HTML) | Description |
| `extraComponentData.holder<N>` | Dynamic holder components (1-5, 11-30) | Content Holders |

---

### 6. `about.js`
**ComponentType**: `about`
**Data Source**: Hardcoded + static JSON imports

> Uses static data from `@/Json/OverviewData` (programFeatures, recruitmentPartners, sectionData). Does NOT use `data?.pageData` from the API.

---

### 7. `news.js`, `events.js`, `articles.js`, `circulars.js` — List-Detail Pages
**ComponentType**: `news`, `events`, `articles`, `circulars`
**Data Source**: Database via `list-detail-page/all` API endpoint

> These pages fetch data from the database, but use a **different API endpoint** than `pageData`. The pattern is:
> - **Page shell** (banner image, breadcrumbs) comes from the normal slug API via `data` prop
> - **Listing data** (actual news/events/articles/circulars) is fetched **client-side** from the database via a separate API:

```
GET ${API_NODE_URL}list-detail-page/all?page=1&limit=9&search=&type=<Type>
```

| Page File | `type` Param | Description |
|-----------|-------------|-------------|
| `news.js` | `News` | News articles listing |
| `events.js` | `Event` | Events listing |
| `articles.js` | `Article` | Articles listing |
| `circulars.js` | `Circular` | Circulars listing |

**Keys from slug API (page shell only)**:

| Key | Description | Section |
|-----|-------------|---------|
| `banner_img` | Banner image for header | Header |
| `breadCrumb` | Breadcrumb navigation | Breadcrumb |

**Keys from `list-detail-page` API response** (each item in `data.data[]`):

| Key | Description | Usage |
|-----|-------------|-------|
| `_id` | Unique item ID | Key for list rendering |
| `name` | Title of news/event/article | Card title |
| `description` | HTML content | Card description (stripped to plain text) |
| `banner_img` | Image path (prepend IMAGE_PATH) | Card thumbnail |
| `date` | Publication date | Time ago / date formatting |
| `category` | Category label | Category filter |
| `path` | URL slug for detail page | "Read More" link |
| `pagination.totalPages` | Total pages count | Pagination controls |

---

## 🔑 Key Naming Conventions

| Pattern | Example | Usage |
|---------|---------|-------|
| `<Section>_Title` | `Overview_Title` | Section heading |
| `<Section>_Desc` / `<Section>_Description_` | `Overview_Desc` | Section description (often HTML) |
| `<Prefix>-<N>` | `OVT-1`, `ST-3` | Sequential numbered items |
| `<Prefix>_<N>` | `INS_1`, `FNS_1st_Year` | Sequential numbered items (underscore variant) |
| `<Section>-<SubField>-<N>` | `School-Name-1` | Nested sequential items |
| `Hero_*` | `Hero_Title`, `Hero_Image` | Hero/banner section fields |
| `*_Banner` | `Academic_Banner` | Image paths (prepend IMAGE_PATH) |
| `*_Logo*` | `Placement_Logo-1` | Logo paths (prepend IMAGE_PATH) |
| `*_Image*` | `Apply_Image` | Image paths (prepend IMAGE_PATH) |
