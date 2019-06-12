import React from 'react';
import './App.css';
import data from './data';
import ChapterCard from './ChapterCard';

const styles = {
  navbar: {
    height: '100px',
    width: '100wh',
    backgroundColor: 'yellow',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subjectCard: {
    margin: '15px',
    padding: '25px',
    boxShadow: '0px 5px 5px #ddd',
    borderRadius: '8px',
    height: 'auto',
  }
}

function App() {

  return (
    <div className="App">
      <div style={styles.navbar}>
        <h1>Digital Aristotle</h1>
      </div>
      <div style={styles.container}>
        {data.map((subject) => {
          return (
            <div 
              style={styles.subjectCard}
              key={subject.subject}
            >
              <h3>{subject.subject}</h3>
              <div>
                {subject.chapters.map((chapter, index) => {
                  return (
                    <ChapterCard
                      topics={chapter.topics}
                      chapterName={chapter.name}
                      key={chapter.name+"key"+index}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
