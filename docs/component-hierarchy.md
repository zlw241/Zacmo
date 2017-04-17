## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**NotesContainer**
 - NotesHeader
  * NoteIndex

**FeedContainer**
 - FeedHeader
  + FeedFilter
 - Transaction
  + TransactionDetail
   - Comment

**HeaderContainer**
 - Search
 - Nav


**SearchResultsContainer**
 - Search
 - NoteIndex

**ProfileContainer**
 - Profile
  - ProfileDetail

**NewNoteContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**Search**
 - SearchResult

**New**
 - NewNotebook

**NewTag**
 - NewTag

**NotebookSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |
