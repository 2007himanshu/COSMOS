
import { useEffect, useMemo, useState } from 'react'
import './App.css'

const spaceTopics = [
  {
    title: 'Black Holes',
    category: 'Cosmology',
    status: 'Established science',
    description:
      'Explore regions of spacetime where gravity is so strong that nothing, not even light, can escape from within the event horizon.',
    facts: [
      'Black holes can form when massive stars collapse.',
      'The event horizon marks the boundary beyond which escape is impossible.',
      'Scientists study black holes using their effects on nearby matter and light.',
    ],
    keywords: 'gravity event horizon singularity astrophysics',
    source: 'https://science.nasa.gov/universe/black-holes/',
  },
  {
    title: 'Mars',
    category: 'Planetary Science',
    status: 'Established science',
    description:
      'Discover the Red Planet, its geology, ancient environments and ongoing robotic exploration.',
    facts: [
      'Mars has two small moons, Phobos and Deimos.',
      'Its surface contains volcanoes, valleys and ancient river-like features.',
      'Robotic missions investigate whether Mars once had conditions suitable for life.',
    ],
    keywords: 'red planet rover perseverance curiosity',
    source: 'https://science.nasa.gov/mars/',
  },
  {
    title: 'Milky Way Galaxy',
    category: 'Astronomy',
    status: 'Established science',
    description:
      'Our home galaxy contains stars, planetary systems, gas, dust and a central supermassive black hole.',
    facts: [
      'The Solar System is located in the Milky Way.',
      'The galaxy contains hundreds of billions of stars, according to estimates.',
      'The Milky Way is a barred spiral galaxy.',
    ],
    keywords: 'galaxy stars solar system sagittarius a',
    source: 'https://science.nasa.gov/universe/galaxies/',
  },
  {
    title: 'NASA Missions',
    category: 'Space Exploration',
    status: 'Ongoing exploration',
    description:
      'Explore robotic spacecraft, observatories and human spaceflight programs investigating our universe.',
    facts: [
      'Different missions study planets, stars, galaxies and Earth.',
      'Some spacecraft explore far beyond the Solar System.',
      'Mission objectives vary from collecting samples to observing distant galaxies.',
    ],
    keywords: 'spacecraft artemis telescope rover exploration',
    source: 'https://www.nasa.gov/missions/',
  },
  {
    title: 'Exoplanets',
    category: 'Astrobiology',
    status: 'Research ongoing',
    description:
      'Learn about planets orbiting stars beyond our Sun and how scientists investigate their atmospheres and environments.',
    facts: [
      'Thousands of exoplanets have been confirmed.',
      'Scientists use methods such as transits and radial velocity to find planets.',
      'Finding a potentially habitable planet does not prove life exists there.',
    ],
    keywords: 'alien worlds habitable zone atmosphere planets',
    source: 'https://science.nasa.gov/exoplanets/',
  },
  {
    title: 'Wormholes',
    category: 'Theoretical Physics',
    status: 'Hypothetical',
    description:
      'Explore theoretical spacetime structures that appear in some solutions to the equations of general relativity.',
    facts: [
      'Wormholes are theoretical, not confirmed astronomical objects.',
      'Traversable wormholes would require conditions not known to be physically achievable.',
      'Science-fiction depictions often go beyond what current science supports.',
    ],
    keywords: 'spacetime relativity theoretical physics time travel',
    source: 'https://science.nasa.gov/universe/black-holes/',
  },
  {
    title: 'Solar System',
    category: 'Planetary Science',
    status: 'Established science',
    description:
      'Explore the Sun, eight planets, dwarf planets, moons, asteroids and comets in our cosmic neighbourhood.',
    facts: [
      'The Sun contains most of the Solar System’s mass.',
      'The eight planets orbit the Sun.',
      'The Solar System also includes many smaller bodies.',
    ],
    keywords: 'sun earth jupiter saturn planets moons asteroids',
    source: 'https://science.nasa.gov/solar-system/',
  },
  {
    title: 'Dark Matter',
    category: 'Cosmology',
    status: 'Strong evidence; nature unknown',
    description:
      'Investigate the unseen matter inferred from gravitational effects on galaxies and the large-scale universe.',
    facts: [
      'Dark matter does not emit or reflect light in the way ordinary matter does.',
      'Its gravitational effects can be studied through galaxies and gravitational lensing.',
      'Its underlying physical nature remains unknown.',
    ],
    keywords: 'dark energy universe gravity cosmology',
    source: 'https://science.nasa.gov/universe/',
  },
]

const categories = [
  'All Topics',
  'Planetary Science',
  'Cosmology',
  'Astronomy',
  'Space Exploration',
  'Astrobiology',
  'Theoretical Physics',
]

const spaceMissions = [
  {
    name: 'Artemis',
    agency: 'NASA',
    type: 'Human Spaceflight',
    status: 'Program in progress',
    description:
      'A program to return humans to the Moon and help prepare for future crewed exploration.',
    url: 'https://www.nasa.gov/humans-in-space/artemis/',
  },
  {
    name: 'James Webb Space Telescope',
    agency: 'NASA / ESA / CSA',
    type: 'Space Telescope',
    status: 'Mission operating',
    description:
      'Observes distant galaxies, stars, exoplanets and the early universe using infrared astronomy.',
    url: 'https://science.nasa.gov/mission/webb/',
  },
  {
    name: 'Perseverance Rover',
    agency: 'NASA',
    type: 'Mars Exploration',
    status: 'Mission ongoing',
    description:
      'Studies Mars geology and ancient environments while collecting samples for future investigation.',
    url: 'https://science.nasa.gov/mission/mars-2020-perseverance/',
  },
  {
    name: 'Voyager',
    agency: 'NASA',
    type: 'Deep Space Exploration',
    status: 'Operating; power-limited',
    description:
      'The Voyager spacecraft investigate the outer Solar System and interstellar space.',
    url: 'https://science.nasa.gov/mission/voyager/',
  },
]


const topicLearning = {
  'Black Holes': {
    overview: 'A black hole is a region of spacetime whose gravity is strong enough that, once something crosses its event horizon, it cannot return to the outside. The event horizon is a boundary, not a solid surface.',
    how: 'Astronomers cannot see a black hole directly in ordinary light. They study hot gas around it, the motion of nearby stars, gravitational waves from black-hole mergers, and the way gravity bends light.',
    why: 'Black holes let scientists test gravity in extreme conditions and understand how galaxies and massive stars evolve.',
    related: ['Milky Way Galaxy', 'Dark Matter', 'Wormholes'],
  },
  Mars: {
    overview: 'Mars is a rocky planet with a thin atmosphere, seasons, polar ice and a surface shaped by impacts, volcanoes, wind and ancient flowing water. Its present surface is cold and dry.',
    how: 'Orbiters map the surface and atmosphere, while landers and rovers analyze rocks, soil and weather. These observations help reconstruct the planet’s geological history.',
    why: 'Mars preserves clues about how habitable environments can change over time and helps researchers plan future robotic and human exploration.',
    related: ['Solar System', 'NASA Missions', 'Exoplanets'],
  },
  'Milky Way Galaxy': {
    overview: 'The Milky Way is the barred spiral galaxy that contains our Solar System. Its stars, gas and dust form a vast rotating system, with a supermassive black hole at its centre.',
    how: 'Researchers combine observations across radio, infrared, visible, ultraviolet, X-ray and gamma-ray wavelengths. They also measure stellar positions and motions to map the galaxy.',
    why: 'Understanding our galaxy gives scientists a nearby example for studying how stars, planetary systems and galaxies form and change.',
    related: ['Black Holes', 'Dark Matter', 'Solar System'],
  },
  'NASA Missions': {
    overview: 'Space missions use spacecraft, landers, rovers and observatories to investigate Earth, the Solar System and the wider universe. Each mission is designed around specific scientific or exploration goals.',
    how: 'Mission teams plan instruments and flight paths, communicate with spacecraft, and analyze the data returned by cameras, spectrometers, radar and other instruments.',
    why: 'Space missions provide measurements that cannot always be collected from Earth and help answer questions about planets, stars, cosmic history and our own planet.',
    related: ['Mars', 'Exoplanets', 'Solar System'],
  },
  Exoplanets: {
    overview: 'An exoplanet is a planet orbiting a star beyond our Sun. These worlds range from small rocky planets to giant planets, and they can orbit their stars at many different distances.',
    how: 'The transit method looks for a small dip in a star’s brightness as a planet passes in front of it. The radial-velocity method measures a star’s motion caused by an orbiting planet. Spectroscopy can investigate some atmospheres.',
    why: 'Exoplanets help scientists understand how planetary systems form and how common different kinds of worlds may be. A potentially habitable environment is not evidence that life is present.',
    related: ['Solar System', 'NASA Missions', 'Astrobiology'],
  },
  Wormholes: {
    overview: 'A wormhole is a hypothetical connection between distant regions of spacetime that appears in some mathematical solutions to general relativity. No wormhole has been observed.',
    how: 'Researchers investigate wormholes using mathematical models and the equations of gravity. Whether a physically traversable wormhole can exist is unresolved.',
    why: 'Studying these ideas helps physicists explore the limits of general relativity and the relationship between gravity, spacetime and quantum theory.',
    related: ['Black Holes', 'Dark Matter', 'Milky Way Galaxy'],
  },
  'Solar System': {
    overview: 'Our Solar System consists of the Sun and the objects gravitationally bound to it, including eight planets, dwarf planets, moons, asteroids and comets.',
    how: 'Scientists use telescopes, spacecraft flybys, orbiters, landers and sample-return missions to measure the surfaces, interiors, atmospheres and orbits of Solar System objects.',
    why: 'The Solar System is our closest laboratory for understanding how planets form, how planetary environments evolve and how Earth fits into a wider family of worlds.',
    related: ['Mars', 'Exoplanets', 'NASA Missions'],
  },
  'Dark Matter': {
    overview: 'Dark matter is the name given to matter inferred from its gravitational effects. It does not interact with light in the way ordinary matter does, and its particle nature has not been identified.',
    how: 'Evidence comes from galaxy rotation, gravitational lensing, the motions of galaxy clusters and patterns in the cosmic microwave background. These observations trace gravity rather than directly imaging dark matter.',
    why: 'Dark matter is an important part of current models of how cosmic structure formed and how galaxies are distributed across the universe.',
    related: ['Milky Way Galaxy', 'Black Holes', 'Wormholes'],
  },
}

function App() {
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All Topics')
  const [apod, setApod] = useState(null)
  const [apodError, setApodError] = useState('')
  const [apodLoading, setApodLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadApod() {
      try {
        setApodLoading(true)
        setApodError('')

        const response = await fetch(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error('NASA picture service is temporarily unavailable.')
        }

        const data = await response.json()

        if (!data.title) {
          throw new Error('NASA did not return a picture today.')
        }

        setApod(data)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setApodError(
            error.message || 'Could not load the NASA picture. Try again later.',
          )
        }
      } finally {
        if (!controller.signal.aborted) {
          setApodLoading(false)
        }
      }
    }

    loadApod()
    return () => controller.abort()
  }, [])

  const searchResults = useMemo(() => {
    const term = query.trim().toLowerCase()

    if (!term) return []

    return spaceTopics.filter((topic) =>
      [
        topic.title,
        topic.category,
        topic.description,
        topic.keywords,
      ]
        .join(' ')
        .toLowerCase()
        .includes(term),
    )
  }, [query])

  const exploreResults = useMemo(() => {
    if (selectedCategory === 'All Topics') return spaceTopics

    return spaceTopics.filter(
      (topic) => topic.category === selectedCategory,
    )
  }, [selectedCategory])

  function handleSearch(event) {
    event.preventDefault()
    setSearched(true)
    setSelectedTopic(null)
    document.getElementById('search-results')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  function openTopic(topic) {
    setSelectedTopic(topic)
    setSearched(false)

    window.setTimeout(() => {
      document.getElementById('topic-detail')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 50)
  }

  function resetHome() {
    setQuery('')
    setSearched(false)
    setSelectedTopic(null)
    setSelectedCategory('All Topics')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="cosmos" id="home">
      <header className="navbar">
        <button className="brand-button" onClick={resetHome} aria-label="COSMOS home">
          ✦ COSMOS
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#explore">Explore Space</a>
          <a href="#missions">Missions</a>
          <a href="#apod">Space Image</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">YOUR JOURNEY THROUGH THE UNIVERSE</p>

          <h1>
            Explore the
            <span>Infinite Universe.</span>
          </h1>

          <p className="description">
            Discover planets, galaxies, black holes and the science behind
            the cosmos — all in one place.
          </p>

          <form className="search-box" onSubmit={handleSearch}>
            <label className="sr-only" htmlFor="space-search">
              Search space topics
            </label>
            <input
              id="space-search"
              type="search"
              placeholder="Search planets, galaxies, black holes..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">Search ↗</button>
          </form>

          <div className="hero-stats">
            <div>
              <strong>8</strong>
              <span>Starter topics</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Science categories</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Things to discover</span>
            </div>
          </div>
        </section>

        {searched && (
          <section className="search-results content-section" id="search-results">
            <div className="section-heading">
              <p className="eyebrow">SEARCH COSMOS</p>
              <h2>Search Results</h2>
              <p>
                {searchResults.length} result
                {searchResults.length === 1 ? '' : 's'} for “{query.trim()}”
              </p>
            </div>

            {searchResults.length > 0 ? (
              <div className="explore-grid">
                {searchResults.map((topic) => (
                  <article className="explore-card" key={topic.title}>
                    <p className="topic-category">{topic.category}</p>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <button
                      className="topic-button"
                      onClick={() => openTopic(topic)}
                    >
                      Explore Topic →
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span>🔭</span>
                <h3>No matching topics yet</h3>
                <p>
                  Try searching for Mars, planets, galaxies, black holes or
                  another topic in our starter collection.
                </p>
              </div>
            )}
          </section>
        )}

        {selectedTopic && (
          <section className="topic-detail" id="topic-detail">
            <button
              className="back-button"
              onClick={() => setSelectedTopic(null)}
            >
              ← Back to topics
            </button>

            <p className="eyebrow">{selectedTopic.category}</p>
            <h2>{selectedTopic.title}</h2>

            <span className="topic-status">{selectedTopic.status}</span>

            <p className="topic-intro">{selectedTopic.description}</p>

            <div className="topic-learning-grid">
              <article className="learning-card">
                <span className="learning-number">01</span>
                <h3>What is it?</h3>
                <p>{topicLearning[selectedTopic.title]?.overview}</p>
              </article>
              <article className="learning-card">
                <span className="learning-number">02</span>
                <h3>How do scientists study it?</h3>
                <p>{topicLearning[selectedTopic.title]?.how}</p>
              </article>
              <article className="learning-card">
                <span className="learning-number">03</span>
                <h3>Why does it matter?</h3>
                <p>{topicLearning[selectedTopic.title]?.why}</p>
              </article>
            </div>

            <h3>Key Facts</h3>
            <ul>
              {selectedTopic.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <div className="related-topics">
              <h3>Related Topics</h3>
              <div className="related-topic-list">
                {(topicLearning[selectedTopic.title]?.related || []).map((title) => {
                  const relatedTopic = spaceTopics.find((topic) => topic.title === title)
                  return relatedTopic ? (
                    <button
                      className="related-topic-button"
                      key={title}
                      onClick={() => openTopic(relatedTopic)}
                    >
                      {title} <span aria-hidden="true">↗</span>
                    </button>
                  ) : null
                })}
              </div>
            </div>

            <a
              className="text-link"
              href={selectedTopic.source}
              target="_blank"
              rel="noreferrer"
            >
              Read more from NASA ↗
            </a>

            <p className="science-note">
              Science note: established findings, active research and
              hypothetical ideas are labelled separately where relevant.
            </p>
          </section>
        )}

        <section className="content-section explore-section" id="explore">
          <div className="section-heading">
            <p className="eyebrow">DISCOVER THE UNIVERSE</p>
            <h2>Explore Space</h2>
            <p>
              Start with a subject that interests you and explore the science
              behind it.
            </p>
          </div>

          <div className="category-buttons" aria-label="Filter space topics">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? 'category-button active'
                    : 'category-button'
                }
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="explore-grid">
            {exploreResults.map((topic) => (
              <article className="explore-card" key={topic.title}>
                <p className="topic-category">{topic.category}</p>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <button
                  className="topic-button"
                  onClick={() => openTopic(topic)}
                >
                  Explore Topic →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section missions-section" id="missions">
          <div className="section-heading">
            <p className="eyebrow">HUMANITY BEYOND EARTH</p>
            <h2>Space Missions</h2>
            <p>
              Discover spacecraft and observatories expanding our understanding
              of space.
            </p>
          </div>

          <div className="missions-grid">
            {spaceMissions.map((mission) => (
              <article className="mission-card" key={mission.name}>
                <span className="mission-icon" aria-hidden="true">🚀</span>
                <p className="topic-category">{mission.type}</p>
                <h3>{mission.name}</h3>
                <p className="mission-agency">{mission.agency}</p>
                <span className="mission-status">{mission.status}</span>
                <p className="mission-description">{mission.description}</p>
                <a
                  className="mission-link"
                  href={mission.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Official Mission Details ↗
                </a>
              </article>
            ))}
          </div>

          <p className="data-note">
            Mission information is a starter directory. Status descriptions
            are not connected to a live mission-status feed.
          </p>
        </section>

        <section className="content-section apod-section" id="apod">
          <div className="section-heading">
            <p className="eyebrow">A WINDOW INTO SPACE</p>
            <h2>NASA Astronomy Picture of the Day</h2>
            <p>
              Explore a space image or video selected by NASA, with an
              explanation from astronomers.
            </p>
          </div>

          {apodLoading && (
            <div className="empty-state">
              <span className="loading-orbit">✦</span>
              <p>Loading today’s space feature...</p>
            </div>
          )}

          {!apodLoading && apodError && (
            <div className="empty-state">
              <span>🛰️</span>
              <h3>Space image unavailable right now</h3>
              <p>{apodError}</p>
              <p>
                The NASA demo key has usage limits. Check your connection or
                configure your own free key from api.nasa.gov.
              </p>
              <a
                className="text-link"
                href="https://apod.nasa.gov/apod/astropix.html"
                target="_blank"
                rel="noreferrer"
              >
                Visit NASA APOD directly ↗
              </a>
            </div>
          )}

          {!apodLoading && apod && (
            <article className="apod-card">
              {apod.media_type === 'image' ? (
                <a href={apod.hdurl || apod.url} target="_blank" rel="noreferrer">
                  <img
                    className="apod-image"
                    src={apod.url}
                    alt={apod.title}
                    loading="lazy"
                  />
                </a>
              ) : apod.media_type === 'video' ? (
                <div className="video-frame">
                  <iframe
                    src={apod.url}
                    title={apod.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <p className="data-note">
                  NASA returned a media type that this page cannot display.
                  <a href={apod.url} target="_blank" rel="noreferrer">
                    Open original media
                  </a>
                </p>
              )}

              <div className="apod-content">
                <p className="topic-category">
                  {apod.date}
                  {apod.copyright ? ` · © ${apod.copyright}` : ''}
                </p>
                <h3>{apod.title}</h3>
                <p>{apod.explanation}</p>
                <a
                  className="text-link"
                  href={apod.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open original on NASA ↗
                </a>
              </div>
            </article>
          )}
        </section>

        <section className="closing-section">
          <span aria-hidden="true">✦</span>
          <h2>The universe is waiting to be explored.</h2>
          <p>Stay curious. Keep questioning. Keep looking up.</p>
          <button className="primary-button" onClick={resetHome}>
            Back to the Beginning ↑
          </button>
        </section>
      </main>

      <footer className="cosmos-footer">
        <button className="brand-button" onClick={resetHome}>✦ COSMOS</button>
        <p>Everything About Space, in One Place.</p>
        <p>
          Educational starter project. NASA is an external source; COSMOS is
          not an official NASA product.
        </p>
      </footer>
    </div>
  )
}

export default App
