create table contents (
	id serial primary key not null,
  	name text not null,
  	situation text not null,
  	type text not null
);

create table rating (
	content_id integer not null,
  	buzz integer not null,
  	friends integer not null,
  	attraction integer not null,
  	intelect integer not null,
  	duration integer not null,
  	time integer not null,
  	age integer not null,
  	current_tolerance integer not null,
  	awe integer not null,
  	foreign key (content_id) references contents(id)
);
