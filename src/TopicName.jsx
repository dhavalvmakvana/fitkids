import React from 'react';

const styles = {
    topic: {
        display: 'flex',
        flexDirection: 'row',
        padding: '3px',
        // border: '1px solid black'
    },
    topicNumber: {
        flexGrow: '1'
    },
    topicName: {
        flexGrow: '3',
        flexWrap: 'wrap',
        display: 'flex',
        textAlign: 'left'
    }
}

const TopicName = (props) => {
    return (
        <div style={styles.topic}>
            <div style={styles.topicNumber}>{props.topicNumber}</div>
            <div style={styles.topicName}>{props.topicName}</div>
        </div>
    )
};

export default TopicName;