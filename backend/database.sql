CREATE TABLE kanji (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  character CHAR(1) NOT NULL,
  on VARCHAR(255) NULL,
  ontwo VARCHAR(255) NULL,
  kun VARCHAR(255) NULL,
  kuntwo VARCHAR(255) NULL,
  stroke VARCHAR(2) NOT NULL,
  key VARCHAR(255) NOT NULL,
  significate VARCHAR(255) NOT NULL,
  jlpt CHAR(1) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO kanji (character, on, ontwo, kun, kuntwo, stroke, key, significate, jlpt) VALUES
('一', 'ICHI', 'ITSU', 'hito', NULL, '1', 'un', 'Un', '5'),
('人', 'JIN', 'NIN', 'hito', 'ri', '2', 'personne', 'Personne', '5'),
('上', 'JÔ', 'SHÔ', 'ue', 'uwa', '3', 'divination', 'Haut', '5'),
('下', 'KA', 'GE', 'shita', 'shimo', '3', 'un', 'Bas', '5'),
('中', 'CHÛ', 'JÛ', 'naka', NULL, '4', 'bâton', 'Centre', '5'),
('森', 'SHIN', NULL, 'mori', NULL, '12', 'arbre', 'Forêt', '4'),
('春', 'SHUN', NULL, 'haru', NULL, '9', 'jour', 'Printemps', '4'),
('楽', 'RAKU', 'GAKU', 'ta', NULL, '13', 'arbre', 'Agréable', '4'),
('笑', 'SHÔ', NULL, 'wara', NULL, '10', 'bambou', 'Rire', '3'),
('富', 'FU', 'FÛ', 'to', 'tomi', '12', 'toit', 'Richesse', '3'),
('精', 'SEI', 'SHÔ', NULL, NULL, '14', 'riz', 'Vitalité', '3'),
('河', 'KA', NULL, 'kawa', NULL, '8', 'eau', 'Rivière', '2'),
('暖', 'DAN', 'NON', 'atata', NULL, '13', 'jour', 'Chaleur', '2'),
('編', 'HEN', NULL, 'a', NULL, '15', 'fil', 'Tricot', '2'),
('勲', 'KUN', NULL, 'isao', NULL, '15', 'feu', 'Mérite', '1'),
('街', 'GAI', 'KAI', 'machi', NULL, '12', 'chemin', 'Quartier', '1'),
('淑', 'SHUKU', NULL, 'shito', NULL, '11', 'eau', 'Gracieux', '1');


CREATE TABLE hiragana (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  character CHAR(1) NOT NULL,
  read VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO hiragana (character, read) VALUES ('あ', 'A'),('い', 'I'),('う', 'U'),('え', 'E'),('お', 'O'),
('か', 'KA'),('き', 'KI'),('く', 'KU'),('け', 'KE'),('こ', 'KO'),
('さ', 'SA'), ('し', 'SHI'), ('す', 'SU'), ('せ', 'SE'), ('そ', 'SO'),
('た', 'TA'), ('ち', 'CHI'), ('つ', 'TSU'), ('て', 'TE'), ('と', 'TO'),
('な', 'NA'), ('に', 'NI'), ('ぬ', 'NU'), ('ね', 'NE'), ('の', 'NO'),
('は', 'HA'), ('ひ', 'HI'), ('ふ', 'FU'), ('へ', 'HE'), ('ほ', 'HO'),
('ま', 'MA'), ('み', 'MI'), ('む', 'MU'), ('め', 'ME'), ('も', 'MO'),
('や', 'YA'), ('ゆ', 'YU'), ('よ', 'YO'),
('ら', 'RA'), ('り', 'RI'), ('る', 'RU'), ('れ', 'RU'), ('ろ', 'RO'),
('わ', 'WA'), ('を', 'WO'), ('ん', 'N');

CREATE TABLE katakana (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  character CHAR(1) NOT NULL,
  read VARCHAR(255) NOT NULL
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO katakana (character, read) VALUES ('ア', 'A'),('イ', 'I'),('ウ', 'U'),('エ', 'E'),('オ', 'O'),
('カ', 'KA'),('キ', 'KI'),('ク', 'KU'),('ケ', 'KE'),('コ', 'KO'),
('サ', 'SA'), ('シ', 'SHI'), ('ス', 'SU'), ('セ', 'SE'), ('ソ', 'SO'),
('タ', 'TA'), ('チ', 'CHI'), ('ツ', 'TSU'), ('テ', 'TE'), ('ト', 'TO'),
('ナ', 'NA'), ('ニ', 'NI'), ('ヌ', 'NU'), ('ネ', 'NE'), ('ノ', 'NO'),
('ハ', 'HA'), ('ヒ', 'HI'), ('フ', 'FU'), ('ヘ', 'HE'), ('ホ', 'HO'),
('マ', 'MA'), ('ミ', 'MI'), ('ム', 'MU'), ('メ', 'ME'), ('モ', 'MO'),
('ヤ', 'YA'), ('ユ', 'YU'), ('ヨ', 'YO'),
('ラ', 'RA'), ('リ', 'RI'), ('ル', 'RU'), ('レ', 'RU'), ('ロ', 'RO'),
('ワ', 'WA'), ('ヲ', 'WO'), ('ン', 'N');

CREATE TABLE users (
  id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE KEY,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  role INT(1) NOT NULL DEFAULT (0)
) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO
    users (
        email,
        password,
        firstname,
        lastname,
        role
    ) VALUES (
      'kanjiten@mail.com',
      'password',
      'Sensei',
      'Hideo',
      1
    );

INSERT INTO
    users (
        email,
        password,
        firstname,
        lastname,
        role
    ) VALUES (
      'kyaku@mail.com',
      'password',
      'Seito',
      'Kyaku',
      0
    );