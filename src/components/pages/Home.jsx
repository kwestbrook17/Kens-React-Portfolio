import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Portfolio</h1>

      {/* Project 1 */}
      <div>
        <img
          src="public\ocean.invaders.png"
          alt="Ocean Invaders"
        />
        <h2>Ocean Invaders</h2>
        <p>As a player, I want to control a Manta Ray in "Ocean Invaders," defending the ocean from descending aliens. I aim to shoot projectiles, destroy invaders, and reach the final boss while progressing through challenging levels. If an enemy reaches the bottom, I lose. After the game, I can restart for more thrilling gameplay.</p>
        <p>
          <a href="https://kwestbrook17.github.io/Ocean-Invaders/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>{' '}
          |{' '}
          <a href="https://github.com/kwestbrook17/Ocean-Invaders" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
      </div>

      {/* Project 2 */}
      <div>
        <img
          src="public\fitness.tracker.png"
          alt="Fitness Tracker"
        />
        <h2>Fitness Tracker</h2>
        <p>Fitness Tracker offers personalized user profiles, weight tracking, and comprehensive workout input capabilities. Access tailored workout and meal suggestions powered by AI for an optimized fitness journey.</p>
        <p>
          <a href="https://g3fitness-tracker-54a2e145f48e.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
            View Project
          </a>{' '}
          |{' '}
          <a href="https://github.com/NickUCLA/G3-Fitness-Tracker" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
      </div>

      {/* Project 3 */}
      <div>
        <img
          src="public\VA.png"
          alt="Project 3"
        />
        <h2>Visuaerial Website</h2>
        <p>Promotional and functional website for Visuaerial Drone Imaging Services</p>
        <p>
          <a href="https://kwestbrook17.github.io/VA/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>{' '}
          |{' '}
          <a href="https://kwestbrook17.github.io/VA/" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
      </div>

      {/* Project 4 */}
      <div>
        <img
          src="public\Screenshot 2023-09-18 200803.png"
          alt="Project 4"
        />
        <h2>National Parks Itinerary Generator</h2>
        <p>This is a React-based application that generates itineraries for visits to various national parks. Users can select a park and specify the number of days for their visit. The application interacts with the OpenAI API to generate detailed itineraries.</p>
        <p>
          <a href="url_to_deployed_project_4" target="_blank" rel="noopener noreferrer">
            View Project
          </a>{' '}
          |{' '}
          <a href="https://github.com/kwestbrook17/gpt-itin" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
      </div>

      {/* Project 5 */}
      <div>
        <img
          src="public\Screenshot 2023-07-03 182050.png"
          alt="Project 5"
        />
        <h2>Password Generator</h2>
        <p>This app uses javascript, html and css to confine to the users selected input to generate a random password they can use for various accounts</p>
        <p>
          <a href="https://kwestbrook17.github.io/kenspassword/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>{' '}
          |{' '}
          <a href="https://github.com/kwestbrook17/kenspassword" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
      </div>

      {/* Project 6 */}
      <div>
        <img
          src="public\Screenshot 2023-07-24 123204.png"
          alt="Project 6"
        />
        <h2>Work Day Scheduler</h2>
        <p>This app allows for users to schedule their 9-5 workday</p>
        <p>
          <a href="https://kwestbrook17.github.io/kensdayplanner/" target="_blank" rel="noopener noreferrer">
            View Project
          </a>{' '}
          |{' '}
          <a href="https://github.com/kwestbrook17/kensdayplanner" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </p>
      </div>
    </div>
  );
}
