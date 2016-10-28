import React from 'react';

export default React.createClass({
    getPair: function () {
        console.log(this.props);
        return this.props.pair || [];
    },

    render: function () {
        return <div className="voting">
            {this.getPair().map(entry =>
                <button key={entry}>
                    <h1>{entry}</h1>
                </button>
            )}
        </div>
    }
});