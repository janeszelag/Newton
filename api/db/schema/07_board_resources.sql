DROP TABLE IF EXISTS board_resources CASCADE;

CREATE TABLE board_resources(
  board_id INTEGER REFERENCES boards(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  PRIMARY KEY (board_id, resource_id)
);
