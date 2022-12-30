import React from 'react';

const WritingResources = () => {
  const RESOURCES = [
    {
      href: 'https://www.goodreads.com/book/show/19173266-write-publish-repeat',
      name: 'Write. Publish. Repeat by Sean Platt, Johnny B. Truant',
    },

    {
      href: 'https://www.goodreads.com/book/show/23562110-fiction-unboxed Building',
      name: 'Fiction Unboxed by Johnny B. Truant, Sean Platt',
    },

    {
      href: 'https://www.audible.com/pd/Building-Great-Sentences-Exploring-the-Writers-Craft-Audiobook/B00DB6PQWW',
      name: "Great Sentences: Exploring the Writer's Craft by Brooks Landon",
    },

    {
      href: 'https://www.audible.com/pd/How-to-Write-Best-Selling-Fiction-Audiobook/1629976954',
      name: 'How to Write Best-Selling Fiction by James Scott Bell',
    },

    {
      href: 'https://www.audible.com/pd/Writing-Great-Fiction-Storytelling-Tips-and-Techniques-Audiobook/B00P026PZC',
      name: 'Writing Great Fiction: Storytelling Tips and Techniques by James Hynes',
    },

    {
      href: 'https://www.goodreads.com/book/show/588138.The_Hero_With_a_Thousand_Faces',
      name: 'The Hero With a Thousand Faces by Joseph Campbell',
    },

    {
      href: 'https://www.goodreads.com/book/show/114823.The_Seven_Basic_Plots',
      name: 'The Seven Basic Plots: Why We Tell Stories by Christopher Booker',
    },

    {
      href: 'https://www.goodreads.com/book/show/129503.The_Origins_and_History_of_Consciousness',
      name: 'The Origins and History of Consciousness by Erich Neumann',
    },

    {
      href: 'https://www.goodreads.com/book/show/222117.Writing_Fiction',
      name: 'Writing Fiction: A Guide to Narrative Craft by Janet Burroway',
    },

    {
      href: 'https://www.goodreads.com/book/show/28627416-the-secrets-of-story',
      name: 'The Secrets of Story by Matt Bird',
    },

    {
      href: 'https://www.goodreads.com/book/show/54139548-worldbuilding-for-fantasy-fans-and-authors',
      name: 'Worldbuilding For Fantasy Fans And Authors by M.D. Presley',
    },

    {
      href: 'https://www.goodreads.com/book/show/44562151-on-writing-and-worldbuilding-volume-i',
      name: 'On Writing and Worldbuilding, Volume I by Timothy Hickson',
    },

    {
      href: 'https://www.goodreads.com/book/show/32805475-save-the-cat-writes-a-novel',
      name: 'Save the Cat! Writes a Novel by Jessica Brody',
    },

    {
      href: 'https://www.goodreads.com/book/show/48654.Story',
      name: 'Story by Robert McKee',
    },

    {
      href: 'https://www.goodreads.com/book/show/56472021-character',
      name: 'Character by Robert McKee',
    },

    {
      href: 'https://www.goodreads.com/book/show/27416067-dialogue',
      name: 'Dialogue by Robert McKee',
    },

    {
      href: 'https://www.goodreads.com/book/show/964299.The_Hero_s_2_Journeys',
      name: "The Hero's 2 Journeys by Michael Hauge, Christopher Vogler",
    },

    {
      href: 'https://www.youtube.com/watch?v=0cf-qdZ7GbA&list=PLSH_xM-KC3Zv-79sVZTTj-YA6IAqh8qeQ',
      name: "Brandon Sanderson's Creative Writing Lectures",
    },
  ];

  return (
    <div style={{textAlign: 'left'}} id="writing-resources">
      <ul
        style={{
          listStyleType: 'none',
          fontFamily: 'Montserrat',
          fontSize: '1rem',
        }}
      >
        {RESOURCES.map((e, i) => {
          return (
            <li key={i}>
              <a href={RESOURCES[i]?.href} target="_blank" rel="noopener noreferrer">
                {RESOURCES[i]?.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WritingResources;
