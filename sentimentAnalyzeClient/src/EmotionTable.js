import './bootstrap.min.css';

import React from 'react';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                Object.entries(this.props.emotions).map(function(mapentry) {
                  return (
                      <tr>
                      <td>{mapentry[0]}</td>
                      <td>{mapentry[1]}</td>
                      </tr>
                  )
                  })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;