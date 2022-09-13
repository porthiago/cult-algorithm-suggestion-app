-- CREATE DATABASE cultural_contents;

CREATE TABLE IF NOT EXISTS contents (
	id SERIAL PRIMARY KEY NOT NULL,
  	name TEXT NOT NULL,
  	situation TEXT NOT NULL,
  	type TEXT NOT NULL,
	author TEXT
	released_date DATE NOT NULL,
	genre TEXT,
	tags TEXT,
	url_reference TEXT,
);

CREATE TABLE IF NOT EXISTS rating (
	content_id INTEGER NOT NULL,
  	buzz INTEGER NOT NULL,
  	friends INTEGER NOT NULL,
  	attraction INTEGER NOT NULL,
  	intelect INTEGER NOT NULL,
  	duration INTEGER NOT NULL,
  	age INTEGER NOT NULL,
  	tolerance_on_going INTEGER NOT NULL,
  	awe INTEGER NOT NULL,
  	FOREIGN KEY (content_id) REFERENCES contents(id)
);










