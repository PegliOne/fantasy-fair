const StoryList = ({stories}) => {
  return ( 
    <section>
      { stories.map((story) => <div className="story">
        <a href="#">{ `${story.title} (${story.year}) by ${story.author}` }</a>: { story.blurb }
      </div>) }
    </section>
  );
}
 
export default StoryList;