import React from 'react';
import TopicName from './TopicName';
import escapeRegExp from 'escape-string-regexp';

const styles = {
    chapterCard: {
        height: '180px',
        width: '220px',
        backgroundColor: '#fff',
        overflow: 'scroll',
        margin: '25px',
    }
}

class ChapterCard extends React.Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() });
    }

    clearQuery = () => {
        this.setState({ query: '' });
    }

    render() {

        const { chapterName, topics } = this.props;
        const { query } = this.state;

        let showingTopics
        if (query) {

            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingTopics = Object.entries(topics)
                .filter((topic) => {
                    if(match.test(topic[1])){
                        return topic;
                    }
                })
                .reduce((accum, [k, v]) => {
                    accum[k] = v;
                    return accum;
                }, {});

        } else {
            showingTopics = topics;
        }

        return (
            <div style={styles.chapterCard}>
                <h4>{chapterName}</h4>

                <div>
                    <input
                        name="search topics"
                        placeholde="search"
                        type="text"
                        value={query}
                        onChange={(e) => {this.updateQuery(e.target.value)}}
                    />
                </div>

                <div>
                    {Object.entries(showingTopics).map((topic) => {
                        return (
                            <TopicName
                                topicNumber={topic[0]}
                                topicName={topic[1]}
                                key={topic[0] + topic[1]}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default ChapterCard;