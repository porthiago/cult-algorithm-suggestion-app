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


INSERT INTO contents
(name, situation, type)
VALUES

JoJo's Bizarre Adventure: Phantom Blood (2007 Movie)
My Hero Academia: Two Heroes
My Hero Academia: Heroes Rising
Hajime no Ippo
Mononoke
Zetman
The Vision of Escaflowne
Tsubasa: Reservoir Chronicle
Dororo
Cells At Work
Decaance
Kaiji
Major
Boogiepop Wa Warawanai
Gintama
Mushishi
Steins;Gate
Higurashi
Detective Conan
Fairy Tail
The Tatami Galaxy
Tower of God
Cross Game
Naruto
Bleach
Golden Boy
D.Grayan
Higurashi
You're under arrest
Patlabor
Nana
Seirei No Moribito
Kino no Tabi
Shinsekai Yori
Princess Tutu
Chihayafuru
Clanned: After Story
Shiro Baka
Inuyasha
Evangelion
Loveless
Urusei Yatsura
Odd Taxi
One Punch Man Special Episodes and OVA
My Hero Academia OVAs




