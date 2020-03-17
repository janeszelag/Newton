DROP TABLE IF EXISTS user_topics CASCADE;

CREATE TABLE user_topics(
  board_id INTEGER REFERENCES boards(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, topic_id)
);
