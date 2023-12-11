import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultDetail = ({ objectId, onBack }) => {
  const [resultDetails, setResultDetails] = useState(null);

  useEffect(() => {
    const fetchResultDetails = async () => {
      try {
        const response = await fetch(`http://hn.algolia.com/api/v1/items/${objectId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch result details: ${response.status}`);
        }
        const data = await response.json();
        setResultDetails(data);
      } catch (error) {
        console.error('Error fetching result details:', error);
      }
    };

    fetchResultDetails();
  }, [objectId]);

  return (
    <div className="container mt-3 mb-3 ">
      <div className="row">
        <div className="col-md-8">
          {resultDetails && (
            <div className="card">
              <h2 className="card-header">{resultDetails.title}</h2>
              <div className="card-body">
                <h5 className="card-title">Points: {resultDetails.points}</h5>
                <p className="card-text">
                  <h5>Comments:</h5>
                  <ol>
                    {resultDetails.children.map(comment => (
                      <li key={comment.id}>{comment.text}</li>
                    ))}
                  </ol>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-4 d-flex justify-content-end align-items-end">
          <button className="btn btn-secondary mb-3" onClick={onBack}>
            Back to Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultDetail;
