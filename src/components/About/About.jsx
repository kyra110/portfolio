
const About = () => {
  return (
    <section className="a-propos">
      <h1>A-propos</h1>
      <div className="video-presentation">
      <h2>Présentation en vidéo !</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j0zuYReZyhE"
        title="Vidéo de présentation"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </div>
      <div className="video-code">
      <h2>Voici une vidéo ou je code</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xep1qYUswOQ"
        title="Vidéo de présentation"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </div>
    </section>
  );
};

export default About;