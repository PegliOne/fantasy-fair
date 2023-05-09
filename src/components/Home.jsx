const Home = () => {
  const popularStories = [
    {
      title: 'Once in a Lifetime',
      author: 'Amanda Kissenger',
      year: '2013',
      category: 'Romance',
      blurb: 'A fun, sexy romantic comedy.'
    },
    {
      title: 'Stories from the War Zones',
      author: 'Belinda Kilmore',
      year: '1995',
      category: 'Action',
      blurb: 'A bloody action-filled military drama.'
    },
    {
      title: 'A Magical World',
      author: 'Charlie Sanderson',
      year: '2022',
      category: 'Fantasy',
      blurb: 'An enchanting high fantasy.'
    },
    {
      title: 'Sensual Magic',
      author: 'Dylan Spellman',
      year: '1986',
      category: 'Romance',
      blurb: 'A romance with some magic in it.'
    }
  ];

  return ( 
    <main>
      <h1>Welcome to Fantasy Fair!</h1>
      <h2>Check out these Popular Stories</h2>
      <section>
        { popularStories.map((story) => <div className="story">
          <a href="#">{ `${story.title} (${story.year}) by ${story.author}` }</a>: { story.blurb }
        </div>) }
      </section>
    </main>
  );
}
 
export default Home;