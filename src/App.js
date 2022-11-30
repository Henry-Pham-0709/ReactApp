import './App.css';
import Header from './Header.js'
import WorkExpCard from './WorkExperienceCard.js'
import EduCard from './EducationCard.js'
import TechSumCard from './TechnologySummaryCard.js'


function App() {
  return (
    <div className="App">
      <Header />
    <main className="container">
        <div className="row mt-3">
            <div className="col-md">
            <WorkExpCard />
            </div>
            <div className="col-md">
            <EduCard />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md mb-5">
            <TechSumCard/>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;
