/*
  HOW TO PUBLISH A POST (2 steps, ~30 seconds of admin):

  1. Copy posts/post-template.html → posts/your-slug.html and write your post in it.
  2. Add an entry at the TOP of this array. Newest first. Done.

  Fields:
    title   — post title
    hook    — one-line teaser shown on the card
    date    — e.g. 'JUN 2026'
    minutes — read time
    tag     — e.g. 'CASE STUDY', 'DEBUGGING', 'HOT TAKE'
    href    — 'posts/your-slug.html'
*/
window.POSTS = [
  // { title: 'My first post', hook: 'One line that makes people click.', date: 'JUN 2026', minutes: 8, tag: 'CASE STUDY', href: 'posts/my-first-post.html' },
  { title: 'Production RAG, the field notes', hook: 'A RAG demo takes an afternoon. One that survives real users takes chunking discipline, hybrid retrieval, reranking, RAGAS, and the security holes nobody ships with.', date: 'JUN 2026', minutes: 9, tag: 'PRODUCTION AI', href: 'posts/production-rag-field-notes.html' },
];
