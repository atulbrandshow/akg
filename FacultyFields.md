# Faculty Form Field Mappings

This document explains how the user-friendly form fields map to the backend database fields.

## Field Mappings

### Personal Information Section

| User-Friendly Field | Backend Field | Purpose |
|---------------------|---------------|---------|
| First Name | Combined in `name` field | Stores faculty's first name |
| Last Name | Combined in `name` field | Stores faculty's last name |
| Email Address | Stored in `param5` (combined) | Stores faculty's email |
| Designation | Stored in `param5` (combined) | Stores faculty's job title/position |

### Academic Information Section

| User-Friendly Field | Backend Field | Purpose |
|---------------------|---------------|---------|
| Select School | `tag1`, `parent_id`, `parentPage` | Links faculty to their school (required) |
| Select Department | `tag2` | Links faculty to their department (optional) |
| Select Program | `tag3` | Links faculty to their program (optional) |
| Subjects Taught | `param4` | Stores comma-separated subjects |
| Qualification | qualification  |Stores up to 3 social media links |

### Additional Information Section

| User-Friendly Field | Backend Field | Purpose |
|---------------------|---------------|---------|
| Profile Picture | `banner_img`, `featured_img`, `mainReportImage` | Stores faculty photo (replicated across image fields) |
| Social Links | `param1`, `param2`, `param3` | Stores up to 3 social media links |
| Bio | `shortdesc`, `description` | Stores faculty biography/description |

### Auto-Generated Fields

| Backend Field | Auto-Generated Value | Purpose |
|---------------|---------------------|---------|
| `name` | `firstName + " " + lastName` | Full name for display |
| `pageTitle` | `firstName + " " + lastName` | Page title |
| `metatitle` | `firstName + " " + lastName + " - " + designation` | SEO meta title |
| `metadesc` | Faculty info summary | SEO meta description |
| `keywords_tag` | Name, designation, school, subjects | SEO keywords |
| `date` | Current date | Creation date |
| `featured_status` | "Yes" | Mark as featured content |
| `languageId` | 1 | Default language |
| `param5` | `firstName|lastName|emailAddress|designation` | Combined basic info (pipe-separated) |

## Tag Usage

### Tags are used for Academic Affiliations:
- `tag1`: School name (required) - also sets parent_id for hierarchy
- `tag2`: Department name (optional)
- `tag3`: Program name (optional)

### Param Usage (Limited to 5 params):
- `param1`: Social Media Link 1
- `param2`: Social Media Link 2  
- `param3`: Social Media Link 3
- `param4`: Subjects Taught
- `param5`: Combined basic info (firstName|lastName|emailAddress|designation)

## API Calls

### First API Call: `/slug/add`
Creates the basic page structure with:
- `parent_id`: Selected school ID (from tag1 selection)
- `name`: Full name
- `type`: Content type (Faculty)
- `ComponentType`: Component type

### Second API Call: `/slug/update`
Updates the page with detailed information including all the mapped fields above.

## Academic Information Implementation

The form now has three separate dropdowns:

1. **School Selection (Required)**:
   - Fetches pages with type: "School"
   - Selected school name goes to `tag1`
   - Selected school ID becomes `parent_id` (establishes hierarchy)
   - Required field for form submission

2. **Department Selection (Optional)**:
   - Fetches pages with type: "Department"
   - Selected department name goes to `tag2`
   - Optional field

3. **Program Selection (Optional)**:
   - Fetches pages with type: "Program"
   - Selected program name goes to `tag3`
   - Optional field

## Social Links Implementation

Social links are now stored in param fields instead of tags:
- Users can add multiple social media URLs
- First 3 links are stored in `param1`, `param2`, `param3`
- Links are displayed as removable tags in the UI
- Users can add links by typing and pressing Enter or clicking Add button

## Image Handling

Profile pictures are uploaded immediately when selected and stored in multiple image fields for compatibility:
- `banner_img`: Main banner image
- `featured_img`: Featured/thumbnail image  
- `mainReportImage`: Additional image field

## Validation Rules

- First Name: Required
- Last Name: Required
- Email Address: Required, must be valid email format
- Designation: Required
- School: Required, must select from dropdown
- Department: Optional
- Program: Optional
- Subjects Taught: Required
- Profile Picture: Optional
- Social Links: Optional (max 3)
- Bio: Optional

## Form Behavior

1. **Single Form**: All fields are presented in one form with three sections
2. **Two API Calls**: Form makes two sequential API calls but appears as single submission to user
3. **Progress Indicator**: Shows upload progress during submission
4. **Real-time Upload**: Images upload immediately when selected
5. **Separate Dropdowns**: Three separate searchable dropdowns for School, Department, and Program
6. **Tag Management**: Social links work as addable/removable tags (max 3)
7. **Hierarchical Structure**: School selection establishes the parent-child relationship in the system
