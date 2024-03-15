import React, { useEffect, useState } from "react";
import axios from 'axios';
import RulesPopup from './RulesPopup';

export const Rules = () => {
  const [rulesData, setRulesData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [post, setPost] = useState('');

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get('http://localhost:8000/all-rules');
        setRulesData(response.data);
      } catch (error) {
        console.error('Error fetching rules:', error);
      }
    };

    fetchData();
  }, []);

  const handleInput = (event) => {
    setPost(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:8000/all-rules', {
        RuleData: post
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.warn(response.data);
      if (response.data) {
        alert("Rule added successfully");
        setPost("");
      }
    } catch (error) {
      console.error('Error adding rule:', error);
    }
  }


  return (
    <div className="rules-prompt" id="rules">
      <div className="rules-container">
        <main>
          <div className="rules-title">
            <h3>🌟 Rules 🌟</h3>
          </div>
          <div className="rules-list">
            <p className="rules-subject">Rules members need to follow in the guild:</p>
            <p>Here in Calm Calamity, our goal is to make a community where people can have fun and
              socialize outside of toram. So us staffs have to implement rules!</p>
            <ul>
              {rulesData.map(rule => (
                <div className="final-rules" key={rule._id}>
                  <li>{rule.RuleData}</li>
                </div>
              ))}
            </ul>
            <button onClick={() => setShowPopup(true)}>Add Rule</button>
          </div>
        </main>
        <RulesPopup trigger={showPopup} setTrigger={setShowPopup}>
          <div className="rules-prompt" id="rules">
            <div className="rules-container">
              <div className="rules-title">
                <h3>🌟Rules🌟</h3>
              </div>
              <div className="rules-list">
                <p>Type the Rule that needs to be added:</p>

                <div className="rules" onSubmit={handleSubmit}>
                  <form>
                    <label>Enter Rule: <input name="post" type="text" value={post} onChange={handleInput} />
                    </label>
                    <input className="submit-btn" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </RulesPopup>
      </div>
    </div>

  );
}

export default Rules;