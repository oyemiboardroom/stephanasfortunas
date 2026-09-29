import React from 'react';

// Renders trusted, site-authored HTML strings (from src/data/*.js) with the
// site's article typography. Content is not user-supplied.
export default function Prose({ html, light }) {
  return (
    <div
      className={`max-w-prose [&>h2]:font-heading [&>h2]:text-[clamp(1.5rem,2.8vw,1.9rem)] [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-5 [&>p]:text-base [&>ul]:mb-5 [&>ul]:pl-5 [&>ul]:list-disc [&>li]:mb-2 [&>ol]:mb-5 [&>blockquote]:font-heading [&>blockquote]:italic [&>blockquote]:text-gold [&>blockquote]:border-l-2 [&>blockquote]:border-gold-soft [&>blockquote]:pl-5 [&>blockquote]:my-8 [&>blockquote]:text-xl ${
        light ? '[&>h2]:text-obsidian [&>p]:text-obsidian/65 [&>ul]:text-obsidian/65' : '[&>h2]:text-ivory [&>p]:text-ivory-soft [&>ul]:text-ivory-soft'
      }`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
